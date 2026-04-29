import type { Category } from '@/src/types/feed';

const genderLabel: Record<Category['gender'], string> = {
  M: 'Masculina',
  F: 'Feminina',
  mixed: 'Mista',
};

const modalityLabel: Record<Category['modality'], string> = {
  singles: 'Simples',
  doubles: 'Duplas',
};

const TIMEZONE = "America/Sao_Paulo";

const dateFormatter = new Intl.DateTimeFormat("pt-BR", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  timeZone: TIMEZONE,
});

const weekdayFormatter = new Intl.DateTimeFormat("pt-BR", {
  weekday: "long",
  timeZone: TIMEZONE,
});

const timeFormatter = new Intl.DateTimeFormat("pt-BR", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: TIMEZONE,
});

export function formatMatchDateTime(iso: string): string {
  const d = new Date(iso);
  const date = dateFormatter.format(d);
  const weekdayRaw = weekdayFormatter.format(d).split("-")[0];
  const weekday = weekdayRaw.charAt(0).toUpperCase() + weekdayRaw.slice(1);
  const time = timeFormatter.format(d);
  return `${date}, ${weekday} às ${time}`;
}

export function formatCategoryLabel(category: Category): string {
  const { gender, modality, level_min, level_max, age_group } = category;

  let detail: string | null = null;
  if (age_group) {
    detail = age_group;
  } else if (level_min && level_max && level_min !== level_max) {
    detail = `${level_min}/${level_max}`;
  } else if (level_min) {
    detail = level_min;
  }

  const genderWithDetail = detail
    ? `${genderLabel[gender]} ${detail}`
    : genderLabel[gender];

  return `${genderWithDetail} · ${modalityLabel[modality]}`;
}
