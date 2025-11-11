# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Assignment-07

1. Question: What is JSX, and why is it used?
   Answer:
   JSX or JavaScript XML is a syntax extension for JavaScript primarily used with React to describe the structure of user interfaces. It allows developers to write HTML-like code directly within their JavaScript files.

2. Question: What is JSX, and why is it used?
   Answer:
   props are read-only data passed from a parent component to a child component, while state is an internal, mutable data structure managed by a component itself.

3. Question: What is the useState hook, and how does it work?
   Answer:
   The useState hook is a built-in React function that lets you add state to functional components, allowing them to remember and manage data across renders.

4. Question: How can you share state between components in React?
   Answer:
   I share state between components in React by lifting the state up to a common parent component and passing it down as props.

5. Question: How is event handling done in React?
   Answer:
   Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

   a. React events are named using camelCase, rather than lowercase.
   b. With JSX you pass a function as the event handler, rather than a string.
