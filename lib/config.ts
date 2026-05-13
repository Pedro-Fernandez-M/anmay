// ─────────────────────────────────────────────
// ⚠️  CONFIGURACIÓN RÁPIDA — edita estos valores
// ─────────────────────────────────────────────

// Número WhatsApp con código de país (sin + ni espacios)
// Ejemplo Chile: 56912345678
export const WHATSAPP_NUMBER = "56994988784";

export const WHATSAPP_MESSAGE =
  "Hola Anmay, quiero consultar por un tratamiento 😊";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const INSTAGRAM_URL = "https://www.instagram.com/anmay_vald/";

export const LOCATION = "Valdivia, Chile";

export const BUSINESS_NAME = "ANMAY Salón & Boutique";

export const OWNER_NAME = "Anjela R. Calderón Parra";

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─────────────────────────────────────────────
// Galería de Instagram — agrega los shortcodes de tus posts
// El shortcode es la parte de la URL después de /p/
// Ejemplo: https://www.instagram.com/p/ABC123xyz/ → "ABC123xyz"
// ─────────────────────────────────────────────
export const INSTAGRAM_POSTS: string[] = [
  "C6XaKa-Nttq",
  "CTeywFQL9MF",
  "DYDTQ2mukT0",
  "DYCulYAjm_U",
  "DXMpTSxDth0",
  "DXJ677ijkfe",
  "DXE3IOljq-c",
  "DWzNNSIFa9B",
  "DWgrUd6jll8",
  "DVhWL0Mjifo",
  "DU6AU60jvfc",
  "DUb3Wgkjl8G",
  "DTy1vuqDq5j",
  "DTwDNp-joOV",
  "DTiZoPXjkcP",
  "DTgFfFHju8S",
  "DTA_TCvjl78",
  "DSgKPOfjo9Q",
  "DSQZtLZD345",
  "DSCtk3vDgWf",
  "DR4YdskDubB",
  "DRz2CSPDlr4",
  "DRxXYbdjjwN",
  "DRNiweoEsLz",
  "DRJ_zpeDjbp",
  "DQ4RDoJDid2",
  "DJmcw-uty0C",
  "DGTGiNxRJY6",
];
