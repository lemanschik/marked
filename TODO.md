# Refactoring
2020+

- all token types should be a of class so that they can get verifyed via typeof Class
- Typescript Src should get incremental deleted and typechecks replaced.
- deprecate umd and cjs builds they make zero sense 
  - umd assigns to globalThis can cause a lot of trouble
  - cjs is not needed anymore there is a npm esm shim for old runtimes that do not support esm
  - esm loading even via require is supported now in as of 2024 even in nodejs all other runtimes do support that out of the box.
  - we should only ship dist/marked.esm.js and dist/* man/* bin/*
  

