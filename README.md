# vite-mern-template

> Simple opinionated template for MERN stack with Vite and Redux Toolkit.
> This includes React+TypeScript with familiar configuration for vite.config.ts.

This has been created with the official [Vite](https://vitejs.dev/) template (`npm create vite@latest`) and some extended setup. There are two separate folders called `server` and `client`. The entry point for the backend is `server/src/index.js`.

> Thanks to [awesome-vite](https://github.com/vitejs/awesome-vite) for publishing this project.

## Tools

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [Express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)

## Demo

![vite-mern-template-gh-demo](https://user-images.githubusercontent.com/78271602/234833309-fe8df564-2895-4727-be1e-c807fe142333.gif)

## Installation

```bash
npx degit apicgg/vite-mern-template my-app
```

## Install dependencies

```bash
cd my-app
cd client
npm install
cd ..
npm install
```

## Start the development server

```bash
npm run watch
npm run dev
```

- Run the above two commands on different terminal sessions.

- Remove the .git folder and initialize your own git repository.
- In this case `npm run watch` needs to be executed before starting the development server with `npm run dev` as the TypeScript files need to be compiled to JavaScript before staring the dev server with node. `ts-node` can be used this to avoid this.

## TODO

- Create a npm CLI library for scaffolding projects.

## License

MIT License.

Please review the [License](https://github.com/apicgg/vite-mern-template/blob/main/LICENSE).

## Contributors ✨

Contributions of any kind welcome! Kindly have a look into [Contributing Guidelines](CONTRIBUTING.md)
