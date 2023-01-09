# vite-mern-template

> Simple template for MERN stack with Vite and Redux Toolkit.
> This includes React+TypeScript with familiar configuration for vite.config.ts.

This has been created with the official [Vite](https://vitejs.dev/) template (`npm create vite@latest`) and some extended setup. There are two separate folders for backend and frontend. The entry point for the backend is `server.js`. Thanks to [awesome-vite](https://github.com/vitejs/awesome-vite) for publishing this.

## Tools

- [React](https://reactjs.org/)
- [tailwindcss](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Axios](https://axios-http.com/)
- [React Icons](https://react-icons.github.io/react-icons)
- [React Router DOM](https://reactrouter.com/)
- [React Toastify](https://github.com/fkhadra/react-toastify)
- [Express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/)
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [express-async-handler](https://www.npmjs.com/package/express-async-handler)

## Demo

![vite-mern-demo](https://user-images.githubusercontent.com/78271602/205232126-fdb51abd-d88f-48a9-bf0e-663a23aedb4c.gif)

## Installation

```bash
npx degit apicgg/vite-mern-template my-app
```

```bash
cd my-app
cd client
npm install
cd ../server
npm install
npm run watch
npm run dev
```

- Remove the .git and .github folder and initialize your own git repository.
- In this case `npm run watch` needs to be executed before starting the development server with `npm run dev`. `ts-node` can be used this to avoid this.

## License

MIT

## Contributors ✨

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
