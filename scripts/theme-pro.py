#!/usr/bin/env python3
"""Genera theme-pro.css (aspecte fosc de Numi Pro) a partir de style.css.
Recorre totes les regles amb colors i en fa una còpia sota html[data-v=pro] amb els colors passats a fosc:
fons clars → superfícies fosques, textos foscos → clars; els colors vius (botons, verd, vermell, or) es mantenen.
Tornar-lo a executar cada vegada que canviï style.css:  python3 scripts/theme-pro.py"""
import re, colorsys, os
D = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
css = open(os.path.join(D, 'style.css'), encoding='utf-8').read()
css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)

HEX = re.compile(r'#([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3,4})\b')
RGB = re.compile(r'rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)')
NAMED = re.compile(r'(?<![-\w])(white)(?![-\w])')
BG = {'background', 'background-color', 'background-image'}
LINE = {'border', 'border-color', 'border-top', 'border-bottom', 'border-left', 'border-right', 'border-top-color', 'border-bottom-color', 'outline', 'outline-color', 'box-shadow', 'stroke'}
TEXT = {'color', '-webkit-text-fill-color', 'caret-color', 'fill', 'accent-color', 'text-decoration-color'}

def hsl(r, g, b): h, l, s = colorsys.rgb_to_hls(r / 255, g / 255, b / 255); return h, s, l
def rgb(h, s, l): r, g, b = colorsys.hls_to_rgb(h, max(0, min(1, l)), max(0, min(1, s))); return round(r * 255), round(g * 255), round(b * 255)
BASE_H = 255 / 360

def conv(r, g, b, kind):
    h, s, l = hsl(r, g, b)
    if kind == 'text':
        if l >= .55: return None                      # textos clars (blanc sobre botó): igual
        if s > .35: return rgb(h, min(s, .75), max(.72, 1 - l * .45))   # colors de text amb to: aclarir-los
        return rgb(BASE_H if s < .08 else h, min(s, .18), .92 - l * .45)
    # fons i línies
    vivid = s > .5 and l < .8
    if l <= .55 or vivid: return None                  # colors de marca i vius: igual
    if kind == 'line':
        return rgb(BASE_H if s < .08 else h, min(.3, s * .5 + .12), .21 + (1 - l) * .45)
    if s > .5 or (s > .2 and l < .97):                 # pastel amb to (groc, verd, lila clars): fosc tenyit
        return rgb(h, min(.45, s * .45), .16 + (1 - l) * .35)
    return rgb(BASE_H, .22, .125 + (1 - l) * .5)       # blancs i grisos clars

def sub_colors(v, kind):
    changed = [False]
    def fx(m):
        t = m.group(1)
        if len(t) in (3, 4): t = ''.join(c * 2 for c in t)
        a = t[6:8] if len(t) == 8 else ''
        c = conv(int(t[0:2], 16), int(t[2:4], 16), int(t[4:6], 16), kind)
        if not c: return m.group(0)
        changed[0] = True; return '#%02X%02X%02X' % c + a
    def fr(m):
        r, g, b = (float(m.group(i)) for i in (1, 2, 3)); a = m.group(4)
        c = conv(r, g, b, kind)
        if not c: return m.group(0)
        changed[0] = True; return f'rgba({c[0]},{c[1]},{c[2]},{a})' if a is not None else f'rgb({c[0]},{c[1]},{c[2]})'
    def fn(m):
        c = conv(255, 255, 255, kind)
        if not c: return m.group(0)
        changed[0] = True; return '#%02X%02X%02X' % c
    v = HEX.sub(fx, v); v = RGB.sub(fr, v); v = NAMED.sub(fn, v)
    if kind == 'text' and re.search(r'var\(--(pri|pri-d|ink)\)', v):
        v = re.sub(r'var\(--(pri|pri-d)\)', 'var(--pri-t)', v); changed[0] = True
    return v, changed[0]

def kind_of(p):
    if p.startswith('--'): return 'bg'                # variables locals (--c dels botons…): gairebé sempre són fons
    if p in BG: return 'bg'
    if p in LINE: return 'line'
    if p in TEXT: return 'text'
    return None

out = []
def walk(src, wrap=None):
    i = 0
    while i < len(src):
        j = src.find('{', i)
        if j < 0: break
        sel = src[i:j].strip()
        # bloc amb claus aniuades (@media)
        depth, k = 1, j + 1
        while depth and k < len(src):
            if src[k] == '{': depth += 1
            elif src[k] == '}': depth -= 1
            k += 1
        body = src[j + 1:k - 1]
        if sel.startswith('@media') or sel.startswith('@supports'):
            walk(body, sel)
        elif sel.startswith('@'):
            pass                                        # @keyframes, @font-face: res
        else:
            decls = []
            for d in body.split(';'):
                if ':' not in d: continue
                p, v = d.split(':', 1); p = p.strip().lower(); v = v.strip()
                kd = kind_of(p)
                if not kd: continue
                nv, ch = sub_colors(v, kd)
                # també les que fan servir variables: així es manté l'ordre de la cascada (p. ex. .x.on després de .x)
                decls.append(f'{p}:{nv}')
            if any(d.split(':', 1)[1] != '' for d in decls) and decls and sel != ':root':
                sels = ','.join('html[data-v=pro] ' + s.strip() if not s.strip().startswith(('html', 'body')) else s.strip().replace('html', 'html[data-v=pro]', 1) if s.strip().startswith('html') else 'html[data-v=pro] ' + s.strip() for s in sel.split(','))
                rule = f'{sels}{{{";".join(decls)}}}'
                out.append(f'{wrap}{{{rule}}}' if wrap else rule)
        i = k
walk(css)

VARS = """html[data-v=pro]{color-scheme:dark;--bg:#0F0D18;--card:#1A1726;--ink:#EDE8F6;--mut:#9D95B0;--line:#2B2640;--pri:#7C46B4;--pri-d:#4B2670;--pri-t:#CDAEF2;
  --ok-bg:#12301F;--ko-bg:#3A1B20;--blue:#4DB5EA}
html[data-v=pro] body{background:var(--bg);color:var(--ink)}
"""
open(os.path.join(D, 'theme-pro.css'), 'w', encoding='utf-8').write(
    '/* GENERAT per scripts/theme-pro.py a partir de style.css: no editar a mà (els retocs, a theme-pro-extra.css) */\n' + VARS + '\n'.join(out) + '\n')
print(len(out), 'regles')
