export function toUpper(text) {
  return text.toUpperCase();
}

export function toLower(text) {
  return text.toLowerCase();
}

export function toTitle(text) {
  return text.replace(
    /\w\S*/g,
    (word) =>
      word.charAt(0).toUpperCase() +
      word.slice(1).toLowerCase()
  );
}

export function toSentence(text) {
  return text.replace(
    /(^\s*\w|[.!?]\s*\w)/g,
    (c) => c.toUpperCase()
  );
}

export function toCamel(text) {
  return text
    .toLowerCase()
    .split(/\s+/)
    .map((word, index) =>
      index === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

export function toSnake(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}

export function toKebab(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
}