# Express TypeScript Starter

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-6.x-3178c6.svg)
![Express](https://img.shields.io/badge/Express-5.x-000000.svg)

A minimal, opinionated starter template for building REST APIs with [Express 5](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/). It ships with a class-based, modular routing architecture so you can focus on writing business logic instead of wiring up boilerplate.

## Why use this starter?

- **Modern stack** — Express 5, TypeScript with strict compiler settings, and native `nodenext` ESM/CJS interop.
- **Modular routing** — Routes are organized as composable classes (`AppRoutes`, `ApiRoutes`, `AccountRoutes`, `JournalRoutes`) that nest under a common `/api` prefix, making it easy to add new resources.
- **Fast feedback loop** — `nodemon` + `ts-node` watch and restart the server automatically on file changes, no build step required during development.
- **Consistent HTTP responses** — Uses [`http-status-codes`](https://www.npmjs.com/package/http-status-codes) instead of magic numbers for response statuses.
- **Ready-to-use request examples** — A `.http` file is included so you can try the API immediately from your editor.

## Project structure

```
.
├── src/
│   ├── http-requests/
│   │   └── http-requests.http   # Sample HTTP requests for manual testing
│   ├── routes/
│   │   ├── account-routes.ts    # /api/accounts routes
│   │   ├── api-routes.ts        # Aggregates feature routers under /api
│   │   ├── app-routes.ts        # Mounts a router onto the Express app at a base path
│   │   └── journal-routes.ts    # /api/journals routes
│   ├── config.ts                # Application-wide middleware setup (e.g. express.json())
│   └── main.ts                  # Application entry point
├── package.json
└── tsconfig.json
```

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node.js)

### Installation

```bash
git clone <repository-url>
cd express-ts-starter
npm install
```

### Running the server

Start the development server with hot-reload:

```bash
npm run dev
```

The server listens on **http://localhost:3000**.

### Trying it out

With the server running, call one of the sample endpoints:

```bash
curl http://localhost:3000/api/accounts
curl http://localhost:3000/api/journals
```

Alternatively, open [src/http-requests/http-requests.http](src/http-requests/http-requests.http) in VS Code with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension and run the requests directly from the editor.

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Runs `src/main.ts` with `nodemon` and `ts-node`, restarting on file changes. |
| `npm test` | Placeholder script — no test suite is configured yet. |

## API endpoints

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/api/accounts` | Returns a sample message from `AccountRoutes`. |
| `GET` | `/api/journals` | Returns a sample message from `JournalRoutes`. |

These handlers are intentionally minimal scaffolding — replace them with your own logic as you build out the application.

## Adding a new route

1. Create a new `*-routes.ts` file in [src/routes/](src/routes) following the pattern in [src/routes/account-routes.ts](src/routes/account-routes.ts).
2. Call `init()` to build the router and register your endpoints.
3. Register the new router in [src/main.ts](src/main.ts) via `apiRoutes.addRoute('/your-path', yourRoutes.router)`.

## Getting help

- Check the existing source files in [src/routes/](src/routes) for usage patterns before adding new features.

## License

This project is licensed under the MIT License, as specified in [package.json](package.json).
