---
title: "Setting Up a React Project with TypeScript and Webpack: A Step-by-Step Guide"
excerpt: "Kickstart your modern web development journey with this guide to setting up a React project using TypeScript and Webpack. This first installment in our four-part series lays the foundation for a scalable, type-safe application, setting the stage for our upcoming exploration of test-driven development."
publishDate: "2023-09-23"
image: "/assets/images/posts/ts-setup-mini.jpg"
category: "tutorial"
author: "abhinay thakur"
tags: [React, TypeScript, Webpack, frontend development, JavaScript, web development, npm, Node.js]
---
  
<figure class="text-center text-xs -mx-32">
  <img src="/assets/images/posts/ts-setup.jpg" alt="cover image" />
</figure>


<p class="first-letter:text-5xl first-letter:font-medium">
React, TypeScript, and Webpack form a powerful combination for building modern web applications. This tutorial will guide you through setting up a new React project with TypeScript and Webpack from scratch. We'll cover everything from initializing the project to running your first development server.
</p>

## Introduction
Welcome to the first installment of our four-part series on modern web development with React! This four-part series is your roadmap to setup the codebase for building professional-grade React applications. Here's a preview of our adventure:

- <strong>Setting Up a React Project with TypeScript and Webpack: A Step-by-Step Guide (You are here)</strong>
- <a href="/blog/easily-setup-test-driven-development-with-react-testing-library-and-jest">Easily Setup Test Driven Development with React Testing Library and Jest</a>
- <a href="/blog/how-to-set-up-tailwind-css-with-webpack-a-step-by-step-guide">How to Set Up Tailwind CSS with Webpack: A Step-by-Step Guide</a>
- <a href="/blog/mastering-dynamic-theming-in-tailwind-css-a-step-by-step-guide">Mastering Dynamic Theming in Tailwind CSS: A Step-by-Step Guide</a>

In this inaugural post, we're laying the groundwork for success. We'll walk you through creating a rock-solid foundation for your React project using TypeScript and Webpack. This isn't just about getting a "Hello World" app running—it's about setting up a development environment that will scale with your project, catch errors early, and boost your productivity. By the end of this guide, you'll have a fully configured React project that's ready for the exciting features we'll add in the coming parts. So, roll up your sleeves, fire up your terminal, and let's start building!

## Prerequisites
Before we begin, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download them from the official Node.js website.

## Step 1: Create a New Project Directory

First, let's create a new directory for our project and navigate into it:

```bash
mkdir my-react-project
cd my-react-project
```

This step ensures we have a clean, dedicated space for our new project.

## Step 2: Initialize the Node.js Project

Next, we'll initialize a new Node.js project:

```bash
npm init -y
```

The `-y` flag automatically answers "yes" to all prompts, creating a `package.json` file with default values. This file will keep track of our project dependencies and scripts.

## Step 3: Install Dependencies

Now, let's install the necessary dependencies for our React TypeScript project:

```bash
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev typescript ts-loader
npm install --save-dev @types/react @types/react-dom
npm install --save-dev html-webpack-plugin
npm install --save-dev file-loader
```

Let's break down what each of these packages does:

| Package | Usage |
|:--------|:---------|
| `react` | Core libraries for building React applications. |
| `webpack` | Tools for bundling and serving our application. |
| `typescript` | TypeScript compiler and its loader for Webpack. |
| `@types/react` | TypeScript type definitions for React. |
| `html-webpack-plugin` | Simplifies creation of HTML files to serve your webpack bundles. |
| `file-loader` | Allows importing files as modules in JavaScript. |

## Step 4: Configure TypeScript

Create a `tsconfig.json` file in the project root to configure TypeScript:

```json
{
    "compilerOptions": {
        "target": "ES5",
        "module": "ES6",
        "moduleResolution": "node",
        "jsx": "react",
        "sourceMap": true,
        "strict": true,
        "esModuleInterop": true
    },
    "include": ["src"]
}
```

This configuration tells TypeScript how to compile our code. We're targeting ES5 for broad browser compatibility, using ES6 modules, and enabling strict type checking for better code quality.

## Step 5: Configure Webpack

Create a `webpack.config.js` file in the project root:

```javascript
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3001,
  },
}
```

This Webpack configuration sets up:
- The entry point of our application
- Where to output the bundled files
- How to resolve TypeScript and JavaScript files
- How to process different file types (TypeScript and images)
- The HTML plugin to generate an `index.html` file
- A development server configuration

## Step 6: Create Source Files

Create a `src` directory and add the following files:

```html
<!-- file: /src/index.html -->
<!DOCTYPE html>
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React TypeScript App</title>
  
  <link rel="icon" href="/favicon.ico" />  </head>
<body>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <div id="root"></div>
</body>
</html>
```

```typescript
// file: /src/index.tsx:
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles/main.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  document.getElementById("root")
)
```

```typescript
// file: /src/App.tsx:
import React, { useState } from "react"
import Example from "./components/Example"

const App: React.FC = () => {
  const [message] = useState("Hello world")
  return (
    <div>
      <h1 className="text-3xl font-semibold">{message}</h1>
      <Example />
    </div>
  )
}

export default App
```

These files set up the basic structure of our React application.

## Step 7: Update Package.json Scripts

Update the `scripts` section in your `package.json`:

```json
"scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
}
```

These scripts allow you to easily start the development server and build for production.

## Step 8: Start the Development Server

Now you're ready to start your development server:

```bash
npm start
```

Open your browser and visit http://localhost:3001 to see your React app running.

## Building for Production

When you're ready to build for production, run:

```bash
npm run build
```

This will generate production-ready files in the `dist` directory.

## Conclusion

Congratulations on successfully setting up your React project with TypeScript and Webpack! You've laid a solid foundation for building modern, type-safe web applications. This setup isn't just about getting things running—it's about creating an environment that supports scalability, maintainability, and developer productivity.

As you move forward, remember that this is just the beginning. Explore React's component-based architecture, leverage TypeScript's powerful type system, and take advantage of Webpack's module bundling capabilities. Each of these tools has much more to offer as you dive deeper into their ecosystems.

Don't forget to initialize a git repository and make your first commit. It's a good practice to version control your project from the start. Consider adding a .gitignore file to exclude node_modules and other build artifacts.

In the <a href="/blog/easily-setup-test-driven-development-with-react-testing-library-and-jest">next part</a> of our series, we'll build on this foundation by introducing Test Driven Development (TDD) with React Testing Library and Jest. You'll learn how to write tests that not only verify your code's correctness but also guide your development process. Get ready to take your React development skills to the next level!