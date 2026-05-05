import re


def normalize_panama_phone(value: str) -> str | None:
    digits = re.sub(r"\D", "", value or "")
    local = digits[3:] if digits.startswith("507") else digits
    if not re.fullmatch(r"\d{8}", local):
        return None
    return f"+507{local}"


def snap_phone_digits(e164: str) -> str:
    return re.sub(r"\D", "", e164)
