# IA Comparada (iacomparada.com)

Web de afiliados sobre herramientas de IA en español. Sitio estático hecho con Astro y alojado gratis en GitHub Pages.

## Dónde está cada cosa

- `src/site.config.ts`: nombre, dominio, email y etiqueta de Amazon (opcional).
- `src/data/afiliados.ts`: **los enlaces de afiliado**. Los artículos enlazan a `/ir/<herramienta>/`, y esta tabla decide a dónde redirige. Cuando un programa te apruebe, pega aquí tu enlace y todos los artículos quedan actualizados.
- `src/content/blog/*.md`: los artículos. Un artículo con fecha futura se publica solo ese día (la web se reconstruye a diario).
- `src/pages/aviso-legal.astro`: rellena nombre, NIF y dirección del titular (obligatorio por la LSSI).

## Puesta en marcha (lo que tiene que hacer el titular)

1. **Dominio:** comprar `iacomparada.com` (o el que se elija) en Cloudflare, Namecheap o similar, unos 10 €/año.
2. **GitHub:** crear un repositorio y subir esta carpeta. En Settings → Pages → Source, elegir "GitHub Actions". En Settings → Pages → Custom domain, poner el dominio.
3. **DNS:** en el registrador, apuntar el dominio a GitHub Pages (registros A a 185.199.108.153, .109.153, .110.153 y .111.153, y CNAME `www` a `<usuario>.github.io`).
4. **Afiliados:** darse de alta cuando la web esté publicada (muchos programas revisan la web antes de aprobar):
   - ElevenLabs (PartnerStack): 22 % durante 12 meses.
   - Make: 35 % durante 12 meses, cobro por Wise. Se activa desde el perfil de la cuenta de Make.
   - HeyGen: 35 % durante 3 meses, cobro por PayPal (mínimo 30 $).
   - Synthesia: 25 % durante 12 meses.
   - Gamma (PartnerStack): revisión en 5 a 10 días laborables.
   - Murf (20 % durante 24 meses), Fliki (30 % de por vida), Descript (25 $ por cliente), InVideo (50 % del primer pago), Surfer SEO (pago por venta).
5. **Google Search Console:** dar de alta el dominio y enviar `https://iacomparada.com/sitemap-index.xml`.

## Comandos

```
npm install
npm run dev     # vista previa en http://localhost:4321
npm run build   # genera dist/
```
