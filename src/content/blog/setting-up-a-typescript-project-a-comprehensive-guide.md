---
title: "Setting Up a TypeScript Project: A Comprehensive Guide"
excerpt: "Learn how to set up a TypeScript project from scratch using npm and tsc-watch. This tutorial provides step-by-step instructions to help you get started with TypeScript development."
publishDate: "2023-05-15"
image: "/assets/images/posts/ts-setup-mini.jpg"
category: "tutorial"
author: "abhinay thakur"
tags: [TypeScript setup, TypeScript tutorial, npm init TypeScript, tsconfig.json, TypeScript project configuration, TypeScript development environment, TypeScript best practices, TypeScript for beginners, TypeScript workflow, TypeScript compile options]
---
  
<figure class="text-center text-xs -mx-32">
  <img src="/assets/images/posts/ts-setup.jpg" alt="cover image" />
</figure>


<p class="first-letter:text-5xl first-letter:font-medium">
TypeScript has become an essential tool for many JavaScript developers, offering static typing and other features that enhance code quality and developer productivity. In this tutorial, we'll walk through the process of setting up a TypeScript project from scratch. We'll cover everything from initializing your project to configuring TypeScript and setting up a development environment.
</p>

## 1. Project initialization

Let's start by creating a new directory for our project and initializing it with npm:

```bash
mkdir project
cd project
npm init
```

Follow the prompts to set up your `package.json` file. You can press Enter to accept the defaults for most options if you're unsure.

## 2. Installing TypeScript

Next, we'll install TypeScript as a development dependency:

```bash
npm i typescript --save-dev
```

The `--save-dev` flag adds TypeScript to your `devDependencies` in `package.json`. This indicates that TypeScript is needed for development but not for running the production code.

## 3. Initializing TypeScript

With TypeScript installed, let's initialize our TypeScript configuration:

```bash
npx tsc --init
```

This command creates a `tsconfig.json` file in your project root. This file is crucial as it defines how TypeScript and the TypeScript compiler (`tsc`) should interact with your project.

## 4. Configuring TypeScript

Now, let's replace the default `tsconfig.json` with a more comprehensive configuration:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": false,
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "lib": ["es6", "es7", "dom", "esnext"],
    "module": "commonjs",
    "moduleResolution": "node",
    "noEmit": false,
    "noImplicitAny": false,
    "outDir": "dist",
    "removeComments": true,
    "sourceMap": true,
    "target": "es2017",
    "rootDirs": ["src/", "config/"],
    "typeRoots": ["./node_modules/@types", "./typings"]
  },
  "include": ["src/**/*", "./typings"],
  "exclude": [
    "node_modules",
    "bin",
    "**/__mocks__*",
    "**/*.spec.**",
    "test",
    "assets"
  ]
}
```

Let's break down some key options:

| Option | Purpose |
|:--------|:---------|
| `lib` | Specifies which APIs TypeScript should assume exist in the target runtime environment. |
| `module` | Defines the module system TypeScript should use to compile your code (commonJS, ES2015, etc.). |
| `outDir` | Specifies an output folder for all emitted files. |
| `target` | Sets the JavaScript language version for emitted JavaScript and includes compatible library declarations. |
| `include` | Specifies which folders TypeScript should look in to find your TypeScript files. |

## 5. Installing global dependencies

To enhance our development experience, let's install the TypeScript compiler and Nodemon globally:

```bash
npm i -g typescript
npm i -g nodemon
```

These tools will help us compile TypeScript and automatically restart our application when files change.

## 6. Setting up TypeScript watch mode

For a more streamlined TypeScript watch experience, we'll use `typescript-watch`:

```bash
npm install --save-dev tsc-watch
```

## 7. Configuring NPM scripts

Finally, let's add a script to our `package.json` file for easy project execution:

```json
"scripts": {
  "start": "tsc-watch --onSuccess 'nodemon dist/index.js'"
}
```

This script uses `tsc-watch` to compile our TypeScript files and then runs the compiled JavaScript with Nodemon, which will restart the application whenever changes are detected.

## Conclusion

You now have a fully configured TypeScript project ready for development! To start your project, simply run:

```bash
npm start
```

This setup provides a solid foundation for building TypeScript applications, with automatic compilation and restarting for a smooth development experience. Happy coding!