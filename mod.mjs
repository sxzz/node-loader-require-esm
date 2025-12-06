import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
console.log({ 'import.meta.url': import.meta.url })
require('./esm.mjs')
