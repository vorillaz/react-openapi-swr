## How to Automatically Consume APIs with React

This repository contains the code for demonstrating how to automatically consume APIs with React. The code is part of the blog post [How to Automatically Consume APIs with React](https://vorillaz.com/consume-apis-react) and a series of talks on the same topic.

## Before you start

The rationale behind this repository is to demonstrate the capabilities of [Swagger](https://swagger.io/) as a tool for automatically generating API clients. In a nutshell, Swagger is a tool that allows you to describe your API in a machine-readable format. This description can then be used to generate API clients for a variety of languages and frameworks. 

Using the OpenAPI specification, Swagger allows you to describe your APIs and export the definitions in a JSON or YAML file. This file can then be used to automatically generate an API client on top of [SWR](https://swr.vercel.app/), a React Hooks library for remote data fetching. Furthermore, we will prodive data mocks using [Mock Service Worker](https://mswjs.io/), a library that allows you to mock API endpoints your tests and development environment.

## The Pizza App 🍕 

The API that we will be using is a simple API for managing a pizza menu. The API allows you to list the pizzas and add a new pizza in the menu. 

## Getting started

In order to get started, you need to have [Node.js](https://nodejs.org/en/)  and [pnpm](https://pnpm.io/) installed on your machine. Once you have installed the dependencies, you can run the following commands:

```bash
# Install the dependencies
pnpm install
# Start the development server
pnpm dev
```

Now you can open [ http://localhost:5173]( http://localhost:5173) with your browser to see the demo application.

## Anatomy of the repository

The repository contains the following files and folders:
```
-- client # The React application
-- server # The backend server, built with Fastify
-- package.json # The project's way of defining dependencies and scripts
```

## How to Build the API Client

Once the server is running in development mode it generates the OpenAPI definitions / schema of the API. You can access the definitions by opening [http://localhost:3001/documentation](http://localhost:3001/documentation) in your browser. The definitions are also available in the `server/opeanapi/data-docs.json` file. As the API changes, the definitions will be updated accordingly. Once done, you can generate the API client by running the following command in the root of the project:

```bash
pnpm run orval
```

This will generate the API client in the `client/src/sdk` folder. The generated API client is based on SWR but you may also using other libraries such as [React Query](https://react-query.tanstack.com/), the Orval CLI supports a variety of libraries. You can find more information about the Orval CLI in the [official documentation](https://orval.dev/) and tweak the configuration in the `orval.config.js` file.

## How to Mock the APIs in Tests and Development:

`orval` also allows you to generate mocks for your APIs, there are a bunch of tests showing how to use the mocks in the `client/src/__tests__` folder. The mocked API client is generated in the `client/src/sdk/api/<tag>/<api>.msw.ts` files and they are symmetrical to the API client. You can find more information about the Mock Service Worker in the [official documentation](https://mswjs.io/). 

## Next Steps

This repository is meant to be a starting point for your own projects. You can use it as a template for your own projects or as a reference for your own projects or as learning material. There are a few next steps that you can take as a learning exercise:

#### 🔧 Reuse the schema validation rules on the frontend
Schema validation for mutations might get a bit verbose, you can reuse the schema validation rules on the frontend by using [zod](https://zod.dev/) then you can use the `zod-to-openapi` package to convert the zod schema to OpenAPI definitions and reuse them on the frontend forms and the backend validation.


#### 🧪 Tweak the `mocks` configuration
Orval allows you to tweak the configuration of the mocks, you can embed your own fake data and try to generate the mocks. Try to tweak the data and extend the [`<Listing/>`](client/src/__tests__/listing.tsx) test to cover more cases. _Tip:_ You can try to validate the pizza names and prices.


#### ✂️ Split the client SDK into multiple files
If you have a large API, you might want to organize your APIs using `tags` and then split the API sdk into multiple files. You can do so by using the `split` flag of the Orval CLI. You can find more information about the flag in the [official documentation](https://orval.dev/).

#### 🌊 Consume a public API
[apis.guru](https://apis.guru/) is a great resource for finding public APIs. You can download a public API definition and generate additional clients for your frontend application.

#### 🛰️ Use a different library for data fetching
You can use a different library for data fetching such as [React Query](https://react-query.tanstack.com/), tweak the configuration in the `orval.config.js` file and generate the API client.

#### 📚 Generate your own documentation
Documentation is a key part of any API, you can use the OpenAPI definitions to generate your own documentation using [Redoc](https://github.com/Redocly/redoc), [Docusaurus](https://docusaurus-openapi.netlify.app/), [ReadMe](https://docs.readme.com/main/docs/openapi), [RapiDoc](https://github.com/rapi-doc/RapiDoc) or any other tool of your choice.

#### 🪛 Use a different backend framework
You can use a different backend framework such as [NestJS](https://nestjs.com/) or [Express](https://expressjs.com/) or totally move away from the Node.js ecosystem and use a totally different language and framework. The OpenAPI specification is language and framework agnostic. There is a exhaustive list of OpenAPI tools, integrations and libraries [available](https://openapi.tools/)

#### 🔄 Use GitHub Actions to automatically generate the API client
You can use GitHub Actions to automatically generate the API client and the mocks on every push to the `main` branch. You can find more information about GitHub Actions in the [official documentation](https://docs.github.com/en/actions). You may also need to move the `server` folder to a separate repository and try to synchronize the changes between the two repositories.



## Technologies Used

- [React](https://reactjs.org/)
- [SWR](https://swr.vercel.app/)
- [Mock Service Worker](https://mswjs.io/)
- [Fastify](https://www.fastify.io/)
- [Fastify Swagger](https://github.com/fastify/fastify-swagger)
- [Swagger](https://swagger.io/)
- [Orval](https://orval.dev/)
- [pnpm](https://pnpm.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [React testing library](https://testing-library.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Turborepo](https://turborepo.com/)

## License
This project is not licensed by any means. Feel free to copy, modify and use it as you see fit.