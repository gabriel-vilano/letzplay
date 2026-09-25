import { describe, expect, it } from "vitest";
import { detectAvatarFormat } from "./avatarFormat";

function bytes(...values: number[]): Uint8Array {
  return new Uint8Array(values);
}

function ascii(text: string): number[] {
  return [...text].map((char) => char.charCodeAt(0));
}

describe("detectAvatarFormat", () => {
  it("reconhece JPEG", () => {
    expect(detectAvatarFormat(bytes(0xff, 0xd8, 0xff, 0xe0))).toEqual({
      mimeType: "image/jpeg",
      extension: "jpg",
    });
  });

  it("reconhece PNG", () => {
    expect(detectAvatarFormat(bytes(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a))).toEqual({
      mimeType: "image/png",
      extension: "png",
    });
  });

  it("reconhece WebP (RIFF + WEBP no byte 8)", () => {
    expect(detectAvatarFormat(bytes(...ascii("RIFF"), 0, 0, 0, 0, ...ascii("WEBP")))).toEqual({
      mimeType: "image/webp",
      extension: "webp",
    });
  });

  it("rejeita RIFF que não é WebP (ex: WAV)", () => {
    expect(detectAvatarFormat(bytes(...ascii("RIFF"), 0, 0, 0, 0, ...ascii("WAVE")))).toBeNull();
  });

  it("rejeita GIF, HTML e arquivo vazio", () => {
    expect(detectAvatarFormat(bytes(...ascii("GIF89a")))).toBeNull();
    expect(detectAvatarFormat(bytes(...ascii("<html>")))).toBeNull();
    expect(detectAvatarFormat(bytes())).toBeNull();
  });
});
