This is a boilerplate I made for my projects using Nextjs, Prisma, Docker and Postgres. I had a hard time working out Dockerizing Nextjs and Prisma, so I made this to make it easier for me to start new projects. Hope that it helps you too!

Special thanks to Eli Front's [blog post](https://medium.com/@elifront/best-next-js-docker-compose-hot-reload-production-ready-docker-setup-28a9125ba1dc) for helping me figure out how to enable hot reloding, well his post and the github issue that i left commented.

It is also very important sharp needs to be lock to 0.32.6, or else it will give you a crazy amount of warning if you're using Nextjs optimized images.

To make things simpler I left two commands in the package.json, one for development and one for production. The development command will run the app in development mode, and the production command will build the app and run it in production mode.

If you want to run the app in development mode, you can run `npm run docker:compose:dev`.

For running on production mode you can run `npm run docker:compose:prod`, but know that you won't have hot reloading.

You also need to create your .env and .dockerignore files.

Good luck coding

------------------------------------------------------------------------------------------------------------------------------------------------------------------
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```
## Docker nextjs prisma init

Init the migrations previously defined on Prisma/schema.prisma:

```bash
npx prisma migrate dev --name init
```

Run the seeders(optional):

```bash
npx prisma db seed
```

Run prisma studio(optional):

```bash
npx prisma studio
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# NextjsPostgresqlDockerCompose
# NextjsPostgresqlDockerCompose
