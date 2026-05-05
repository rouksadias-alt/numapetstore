export function normalizePanamaPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  const local = digits.startsWith("507") ? digits.slice(3) : digits;

  if (!/^\d{8}$/.test(local)) {
    return null;
  }

  return `+507${local}`;
}

export function createEventId(eventName: string) {
  return `${eventName}_${Date.now()}_${crypto.randomUUID()}`;
}
