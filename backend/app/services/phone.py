import re


def normalize_panama_phone(value: str) -> str | None:
    digits = re.sub(r"\D", "", value or "")
    if not digits:
        return None

    if digits.startswith("00"):
        digits = re.sub(r"^00+", "", digits)

    while digits.startswith("507") and len(digits) > 8:
        digits = digits[3:]

    if len(digits) == 9 and digits.startswith("0"):
        digits = digits[1:]

    if not re.fullmatch(r"\d{8}", digits):
        return None

    if not re.fullmatch(r"[2-8]\d{7}", digits):
        return None

    return f"+507{digits}"


def snap_phone_digits(e164: str) -> str:
    return re.sub(r"\D", "", e164)
