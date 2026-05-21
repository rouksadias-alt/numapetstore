/** Strip to digits and normalize to E.164 (+507XXXXXXXX). */
export function normalizePanamaPhone(value: string): string | null {
  let digits = (value ?? "").replace(/\D/g, "");
  if (!digits) return null;

  // International prefix: 00507…
  if (digits.startsWith("00")) {
    digits = digits.replace(/^00+/, "");
  }

  // Country code repeated or prefixed once
  while (digits.startsWith("507") && digits.length > 8) {
    digits = digits.slice(3);
  }

  // Leading 0 before local number (e.g. 060012345)
  if (digits.length === 9 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  if (!/^\d{8}$/.test(digits)) {
    return null;
  }

  // Panama national numbers start with 2–8 (mobile 6xxx-xxxx, landline 2–4, etc.)
  if (!/^[2-8]\d{7}$/.test(digits)) {
    return null;
  }

  return `+507${digits}`;
}

export function formatPanamaPhoneDisplay(value: string): string {
  const normalized = normalizePanamaPhone(value);
  if (!normalized) {
    const digits = value.replace(/\D/g, "").replace(/^507/, "").slice(0, 8);
    if (digits.length <= 4) return digits;
    return `${digits.slice(0, 4)}-${digits.slice(4)}`;
  }
  const local = normalized.slice(4);
  return `${local.slice(0, 4)}-${local.slice(4)}`;
}

export function createEventId(eventName: string) {
  return `${eventName}_${Date.now()}_${crypto.randomUUID()}`;
}
