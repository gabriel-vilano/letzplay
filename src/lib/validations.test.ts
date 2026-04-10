import { describe, it, expect } from "vitest";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateOtp,
  validateUsername,
  slugifyName,
  validateAvatar,
} from "./validations";

describe("validateName", () => {
  it("rejeita nome vazio", () => {
    expect(validateName("").valid).toBe(false);
  });

  it("rejeita nome com 1 caractere", () => {
    expect(validateName("A").valid).toBe(false);
  });

  it("aceita nome com 2 caracteres", () => {
    expect(validateName("Jo").valid).toBe(true);
  });

  it("ignora espacos ao redor", () => {
    expect(validateName("  Jo  ").valid).toBe(true);
  });

  it("rejeita nome com apenas espacos", () => {
    expect(validateName("   ").valid).toBe(false);
  });
});

describe("validateEmail", () => {
  it("rejeita email vazio", () => {
    expect(validateEmail("").valid).toBe(false);
  });

  it("rejeita formato invalido", () => {
    expect(validateEmail("abc").valid).toBe(false);
    expect(validateEmail("abc@").valid).toBe(false);
    expect(validateEmail("@gmail.com").valid).toBe(false);
  });

  it("aceita formato valido", () => {
    expect(validateEmail("user@email.com").valid).toBe(true);
    expect(validateEmail("test.user@domain.co").valid).toBe(true);
  });
});

describe("validatePassword", () => {
  it("rejeita senha curta", () => {
    const result = validatePassword("Ab1");
    expect(result.valid).toBe(false);
    expect(result.checks.minLength).toBe(false);
  });

  it("rejeita senha sem letra", () => {
    const result = validatePassword("12345678");
    expect(result.valid).toBe(false);
    expect(result.checks.hasLetter).toBe(false);
  });

  it("rejeita senha sem numero", () => {
    const result = validatePassword("abcdefgh");
    expect(result.valid).toBe(false);
    expect(result.checks.hasNumber).toBe(false);
  });

  it("aceita senha valida", () => {
    const result = validatePassword("Senha123");
    expect(result.valid).toBe(true);
    expect(result.checks.minLength).toBe(true);
    expect(result.checks.hasLetter).toBe(true);
    expect(result.checks.hasNumber).toBe(true);
  });
});

describe("validateOtp", () => {
  it("rejeita codigo com menos de 8 digitos", () => {
    expect(validateOtp("1234567").valid).toBe(false);
  });

  it("rejeita codigo com letras", () => {
    expect(validateOtp("1234567a").valid).toBe(false);
  });

  it("rejeita codigo com mais de 8 digitos", () => {
    expect(validateOtp("123456789").valid).toBe(false);
  });

  it("aceita codigo de 8 digitos", () => {
    expect(validateOtp("12345678").valid).toBe(true);
  });
});

describe("validateUsername", () => {
  it("aceita username vazio (campo opcional)", () => {
    expect(validateUsername("").valid).toBe(true);
  });

  it("rejeita username com menos de 3 caracteres", () => {
    expect(validateUsername("ab").valid).toBe(false);
  });

  it("rejeita username com mais de 20 caracteres", () => {
    expect(validateUsername("a".repeat(21)).valid).toBe(false);
  });

  it("rejeita caracteres especiais", () => {
    expect(validateUsername("user@name").valid).toBe(false);
    expect(validateUsername("user name").valid).toBe(false);
    expect(validateUsername("User").valid).toBe(false);
  });

  it("aceita lowercase, numeros, pontos e underlines", () => {
    expect(validateUsername("gabriel.vilano").valid).toBe(true);
    expect(validateUsername("player_123").valid).toBe(true);
    expect(validateUsername("bt.pro").valid).toBe(true);
  });
});

describe("slugifyName", () => {
  it("converte para lowercase com pontos", () => {
    expect(slugifyName("Gabriel Vilano")).toBe("gabriel.vilano");
  });

  it("remove acentos", () => {
    expect(slugifyName("Jose da Silva")).toBe("jose.da.silva");
    expect(slugifyName("Joao")).toBe("joao");
  });

  it("remove caracteres especiais", () => {
    expect(slugifyName("Ana & Maria")).toBe("ana.maria");
  });

  it("limita a 20 caracteres", () => {
    const result = slugifyName("Nome Muito Grande Que Excede o Limite");
    expect(result.length).toBeLessThanOrEqual(20);
  });

  it("remove pontos duplicados", () => {
    expect(slugifyName("Ana  Maria")).toBe("ana.maria");
  });
});

describe("validateAvatar", () => {
  function createFile(type: string, sizeMB: number): File {
    const buffer = new ArrayBuffer(sizeMB * 1024 * 1024);
    return new File([buffer], "test.jpg", { type });
  }

  it("aceita JPEG", () => {
    expect(validateAvatar(createFile("image/jpeg", 1)).valid).toBe(true);
  });

  it("aceita PNG", () => {
    expect(validateAvatar(createFile("image/png", 1)).valid).toBe(true);
  });

  it("aceita WebP", () => {
    expect(validateAvatar(createFile("image/webp", 1)).valid).toBe(true);
  });

  it("rejeita GIF", () => {
    expect(validateAvatar(createFile("image/gif", 1)).valid).toBe(false);
  });

  it("rejeita arquivo maior que 5MB", () => {
    expect(validateAvatar(createFile("image/jpeg", 6)).valid).toBe(false);
  });
});
