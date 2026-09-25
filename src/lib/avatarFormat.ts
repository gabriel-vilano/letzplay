export type AvatarFormat = {
  mimeType: "image/jpeg" | "image/png" | "image/webp";
  extension: "jpg" | "png" | "webp";
};

// Assinaturas ("magic bytes") do início de cada formato. O `File.type` e o nome
// vêm de quem envia o form e podem mentir; os bytes são o próprio arquivo.
const JPEG_SIGNATURE = [0xff, 0xd8, 0xff];
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const RIFF_SIGNATURE = [0x52, 0x49, 0x46, 0x46]; // "RIFF"
const WEBP_SIGNATURE = [0x57, 0x45, 0x42, 0x50]; // "WEBP", nos bytes 8–11

/** Quantos bytes do início do arquivo `detectAvatarFormat` precisa ler. */
export const AVATAR_HEADER_LENGTH = 12;

function startsWith(header: Uint8Array, signature: number[], offset = 0): boolean {
  return signature.every((byte, index) => header[offset + index] === byte);
}

/**
 * Identifica o formato real da imagem pelos primeiros bytes. `null` quando não é JPG, PNG nem WebP.
 * Ex: `detectAvatarFormat(new Uint8Array(await file.slice(0, AVATAR_HEADER_LENGTH).arrayBuffer()))`
 */
export function detectAvatarFormat(header: Uint8Array): AvatarFormat | null {
  if (startsWith(header, JPEG_SIGNATURE)) {
    return { mimeType: "image/jpeg", extension: "jpg" };
  }
  if (startsWith(header, PNG_SIGNATURE)) {
    return { mimeType: "image/png", extension: "png" };
  }
  if (startsWith(header, RIFF_SIGNATURE) && startsWith(header, WEBP_SIGNATURE, 8)) {
    return { mimeType: "image/webp", extension: "webp" };
  }
  return null;
}
