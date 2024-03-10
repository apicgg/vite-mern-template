# vite-mern-template

[![Depfu](https://badges.depfu.com/badges/1b70410a7764005553d576dd171dce8d/status.svg)](https://depfu.com)
[![Depfu](https://badges.depfu.com/badges/1b70410a7764005553d576dd171dce8d/count.svg)](https://depfu.com/github/apicgg/vite-mern-template?project_id=38988)

> Simple opinionated boilerplate for MERN stack with Vite and Redux Toolkit.
> This includes React+TypeScript with familiar configuration for vite.config.ts for front-end and Express+TypeScript for back-end.

Feel free to add or tweak the setup as needed.

This has been created with the official [Vite](https://vitejs.dev/) template (`npm create vite@latest`) and some extended setup. There are two separate folders called `backend` and `frontend`. The entry point for the backend is `backend/src/index.js`.

Any package manager can be used with this project (e.g. npm or yarn or pnpm).

> Thanks to [awesome-vite](https://github.com/vitejs/awesome-vite) for publishing this project.

## Tools

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vitest](https://vitest.dev/)
- [Express](https://expressjs.com/)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)
- [mongoose](https://mongoosejs.com/)
- [argon2](https://www.npmjs.com/package/argon2)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

#### The dependency versions are managed by [depfu](https://depfu.com/).

## Requirements

- [Node.js](https://nodejs.org/en/) 18+

## Demo

![vite-mern-template-gh-demo](https://user-images.githubusercontent.com/78271602/234833309-fe8df564-2895-4727-be1e-c807fe142333.gif)

## Installation

```bash
npx degit apicgg/vite-mern-template my-app
```

or

```bash
git clone https://github.com/apicgg/vite-mern-template.git
```

## Install dependencies (npm or yarn or pnpm)

- Backend

```bash
npm install
```

- Frontend

```bash
cd frontend
npm install
```

## Start the development server

- Backend

```bash
npm run dev:backend
```

- Frontend

```bash
npm run dev:frontend
```

- Remove the .git and .github folder and initialize your own git repository.

## TODO

- [x] Include eslint and prettier.
- [x] Add testing framework.
- [ ] Create a npm CLI library for scaffolding projects.

## License

MIT License.

Please review the [License](https://github.com/apicgg/vite-mern-template/blob/main/LICENSE).

## Contributors ✨

Contributions of any kind welcome! Kindly have a look into [Contributing Guidelines](CONTRIBUTING.md)
