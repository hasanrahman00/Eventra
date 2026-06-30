// Tiny classNames helper: flattens, drops falsey values, joins with spaces.
export function cn(...args) {
  return args
    .flat(Infinity)
    .filter(Boolean)
    .join(' ')
}

export default cn
