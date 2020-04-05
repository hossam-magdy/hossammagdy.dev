# [hossammagdy.dev](https://hossammagdy.dev)

This is my personal website. It is currently quite poor in content and UI. However, the technologies used are:

- NextJs
- Typescript
- eslint with ts-parser and prettier
- CI/CD via TravisCI
- Firebase hosting

#### TODOs

- Create PR to update NextJs [example with firebase hosting](https://github.com/zeit/next.js/tree/canary/examples/with-firebase-hosting)
- Remove `engines` field from package.json (possibly write a script to adds it before deploy and removes it afterwards)
- Do not deploy if `src`, `public` and `firebaseFunctions.js` are not changed
- Add husky and list-staged and maybe stylelint
- Check why prod build size is same even after removing devDep
- Add tests through ts-jest, `test` script, and testing stage in travis.yml
