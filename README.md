1. Установить

```bash
npm install
```

2. Запустить websocket сервер

```bash
npm run server
```

3. Запустить приложение

```bash
npm run dev
```

4. Ключ передается каждые 5 секунд, в консоли выводится ответ сервера

## Задание

Сделайте приложение на Nextjs, которое показывает свою главную страницу только, если пользователь открыл его через АПИ. Никакой верстки не надо. Все максимально просто и топорно. Данное задание отражает примерно суть основной работы у нас на данной позиции.

Допустим, что приложение работает на http://localhost:3000. Значит что, если открыть эту страницу в браузере, то получим 404 ошибку.

Пусть теперь у NextJS будет АПИ с одним endpoint, который называется /secret (http://localhost:3000/secret). Этот endpoint требует параметр key, который может быть любым текстом. По сути key это пароль. Пример http://localhost:3000/secret?key=mypassword. Зайдя по такому адресу пользователя должно редиректнуть на основную страницу http://localhost:3000. При этом у пользователя должно открываться Websocket соединение с приложением. В это соединение Nextjs должен просто слать сообщение со значением key каждые 5 секунд.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
