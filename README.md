Special thanks to 99lalo [Github profile](https://github.com/99lalo) for give me the first boilerplate and the dockers file to make it possible

If you want to run the app in development mode, you can run `npm run docker:compose:dev`.

For running on production mode you can run `npm run docker:compose:prod`, but know that you won't have hot reloading.

You also need to create your .env and .dockerignore files.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Git clone:

```bash
git clone https://github.com/DaliGabriel/NextjsPostgresqlDockerCompose.git
```

Access the folder:

```bash
cd NextjsPostgresqlDockerCompose/
```

Install node packages:

```bash
npm i
```

Install node packages:

```bash
npm run docker:compose:dev
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
