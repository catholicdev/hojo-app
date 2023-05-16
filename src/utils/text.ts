export const splitFullName = (
  fullName: string
): { firstName: string; lastName: string } => {
  const parts = fullName
    .split(' ')
    .map((p) => p.trim())
    .filter((p) => !!p)
  return {
    firstName: parts[parts.length - 1],
    lastName: parts.slice(0, -1).join(' '),
  }
}
