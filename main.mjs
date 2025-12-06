import { registerHooks, createRequire } from 'node:module'

registerHooks({
  resolve(specifier, context, defaultResolve) {
    const resolved = defaultResolve(specifier, context)
    console.log({
      specifier,
      url: resolved.url,
      parent: context.parentURL,
    })
    return resolved
  },
})

await import('./mod.mjs?test')
