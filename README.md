# Bun and Remix Template in Javascript

- [Live Site](https://remix-template.fly.dev)
- [Remix docs](https://remix.run/docs)
- [Bun docs](https://bun.sh/docs)

## Development

Run the dev server:

```shellscript
bun run dev
```

## Deployment

First, build your app for production:

```sh
bun run build
```

Then run the app in production mode:

```sh
bun run start
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.

# Fly.io Deployment and Docker

[Fly.io](https://fly.io/)

This template deploys to fly.io which bases it deployments on Dockerfiles.

The name of your docker project will inherit the name you assign in the package.json.

Note: For windows, the syntax is: %npm_package_name%

```sh
"docker:build": "docker build -t ${npm_package_name} .",
```

# Database

- [DB Browser for SQLite (DB4S)](https://sqlitebrowser.org/)

Bun ships with the fastest SQLite client available in JavaScript

We are going to manage the migrations using the framework agnostic [dbmate](https://github.com/amacneil/dbmate?tab=readme-ov-file#features).

# Opionated Actions and Loaders

Loader and Action Response
```JSON
{
    data: {},
    errors: {
        'error-name': 'error-message'
    }
}
```

```JAVASCRIPT
const { data, errors } = useLoaderData();
const { data, errors } = useActionData();
```

# Getting Started

`cp .env.example .env`

`bun install`

`bun run db:up`

