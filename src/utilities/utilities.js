export const _truncate = (string, maxLength) =>
  string.length > maxLength ? `${string.slice(0, maxLength)}...` : string;
