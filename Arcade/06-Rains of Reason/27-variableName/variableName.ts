function solution(name: string): boolean {
  const firstCharRegex = /[A-Za-z_]/
  const variableRegex = /[^a-zA-Z0-9_]/

  if (!name[0].match(firstCharRegex)) return false
  return !name.match(variableRegex)
}
