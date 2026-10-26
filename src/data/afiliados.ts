// Enlaces de salida. Los artículos enlazan a /ir/<clave>/ y esta tabla decide el destino.
// Cuando te aprueben en cada programa, sustituye la URL por tu enlace de afiliado: no hace falta tocar los artículos.
export const AFILIADOS: Record<string, { nombre: string; url: string; programa?: string }> = {
  elevenlabs: { nombre: 'ElevenLabs', url: 'https://elevenlabs.io/', programa: 'PartnerStack · 22 % durante 12 meses' },
  murf: { nombre: 'Murf AI', url: 'https://murf.ai/', programa: '20 % recurrente durante 24 meses' },
  fliki: { nombre: 'Fliki', url: 'https://fliki.ai/', programa: '30 % de por vida' },
  descript: { nombre: 'Descript', url: 'https://www.descript.com/', programa: '25 $ por cliente' },
  synthesia: { nombre: 'Synthesia', url: 'https://www.synthesia.io/', programa: '25 % durante 12 meses' },
  heygen: { nombre: 'HeyGen', url: 'https://www.heygen.com/', programa: '35 % durante 3 meses' },
  invideo: { nombre: 'InVideo', url: 'https://invideo.io/', programa: '50 % del primer mes' },
  make: { nombre: 'Make', url: 'https://www.make.com/', programa: '35 % durante 12 meses' },
  zapier: { nombre: 'Zapier', url: 'https://zapier.com/' },
  n8n: { nombre: 'n8n', url: 'https://n8n.io/' },
  gamma: { nombre: 'Gamma', url: 'https://gamma.app/', programa: 'PartnerStack' },
  chatgpt: { nombre: 'ChatGPT', url: 'https://chatgpt.com/' },
  claude: { nombre: 'Claude', url: 'https://claude.ai/' },
  gemini: { nombre: 'Gemini', url: 'https://gemini.google.com/' },
  turboscribe: { nombre: 'TurboScribe', url: 'https://turboscribe.ai/' },
  happyscribe: { nombre: 'Happy Scribe', url: 'https://www.happyscribe.com/', programa: 'Impact · hasta 30 % recurrente' },
  notta: { nombre: 'Notta', url: 'https://www.notta.ai/' },
  surfer: { nombre: 'Surfer SEO', url: 'https://surferseo.com/', programa: 'Pago único por venta' },
};
