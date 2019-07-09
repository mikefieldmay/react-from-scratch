# React App From Scratch

React App from scratch is a simple react app built from the ground up in order to practice installation and setup of features that mostly come for free with [Create React App](https://github.com/facebook/create-react-app).

## Installation

```bash
git clone https://github.com/mikefieldmay/react-from-scratch
npm install
npm start
```

## To Do list

The base app will live in the master branch, but I intend to add new features in different branches. The features that will be added are:

- [x] Upgrade to Webpack 4 and add vendor chunking (merged to master to avoid dependency risks)
- [x] Add Typescript
- [ ] Add prettier to run in pre-commit hook
- [ ] Add Jest Testing library
- [ ] Add Todo list with Redux & Redux Sagas
- [ ] Add Storybook to document components
- [ ] Add Cypress to support ui tests
- [ ] Add SSR Rendering for application

## Notes

- 28/6/19 Added [brottli compression](https://opensource.googleblog.com/2015/09/introducing-brotli-new-compression.html) in order to reduce vendor bundle size, but haven't worked out how to serve it with http-server. Will investigate further at a later date.

## Acknowledgements

The basis for this app comes from the excellent Udemy course: [React The Complete Guide](https://www.udemy.com/react-the-complete-guide-incl-redux/).
