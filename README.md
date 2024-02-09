# Get Started With Qwik

Tutorial Qwik project for demonstrating the essential concepts of the super-fast JavaScript framework.

🍿 YouTube: https://youtu.be/uXVaeKzN44Y

## Create and Start Your First Qwik Project

To set-up a new [Qwik](https://qwik.builder.io/) project, simply run the following command on your machine (requires Node):

```shell
npm create qwik@latest
```

To start the app, run:

```shell
npm start
```

## Tailwind

In the project, we use [Tailwind](https://tailwindcss.com) for the styling. To install Tailwind, run:

```shell
npm install -D tailwindcss postcss autoprefixer
```

And to initialize it (i.e. create dedicated config files), run:

```shell
npx tailwindcss init -p
```

## JSON Server

We use a backend mock for fetching data. Install [json-server](https://www.npmjs.com/package/json-server):

```shell
npm install json-server@v0 -g
```

Run it via:

```shell
json-server --watch db.json
```