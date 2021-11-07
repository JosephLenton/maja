export function concatClassNames(
  left: string|undefined,
  right: string|undefined,
): string {
  if (!left) {
    return right || ''
  }

  if (!right) {
    return left || ''
  }

  return `${left} ${right}`
}
