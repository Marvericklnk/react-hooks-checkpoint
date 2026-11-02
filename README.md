# React Hooks Checkpoint — Movie App

A movie collection built with React and Vite for the GoMyCode React Hooks checkpoint.

## Features

- Show movies using `MovieCard` and `MovieList`.
- Search by title without worrying about capital letters.
- Filter by minimum rating from 0 to 10. Both filters work together.
- Add a movie with a title, description, poster URL and rating.
- Validate the form and show a message when no movies match.
- Show a fallback if a poster cannot load.

## Run the app

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. Use Node.js 22.12+ or a supported newer LTS version.

```bash
npm test
npm run build
```

## How it works

`App.jsx` uses `useState` to store the movies and filter values. It filters the array and passes the results to `MovieList`. `MovieList` displays one `MovieCard` for each result. `Filter` sends changes back to App through callback props.

`AddMovie` stores the form values in state. When the form is valid, it passes the new movie to App. App adds it to the array without changing the old array. Adding a movie also clears the filters so the new movie is visible.

The required movie fields are `title`, `description`, `posterURL` and `rating`. Each movie also has an `id` for its React key.

New movies are kept in memory, so reloading restores the starter collection. This app does not need an API key or backend. Starter ratings are examples, and the included SVG covers are custom typographic artwork, not official film posters.

## Checks

Automated interaction tests cover combined filters, adding a movie, invalid form values and broken poster fallback. The production build is checked with Vite.
