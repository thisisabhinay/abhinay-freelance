---
title: "Easily Setup Test Driven Development with React Testing Library and Jest"
excerpt: "Elevate your React development process with this guide to implementing test-driven development using React Testing Library and Jest. Building on our initial project setup, this second part of our series will equip you with the tools to write robust, maintainable code, paving the way for our next adventure in styling with Tailwind CSS."
publishDate: "2024-07-19"
image: "/assets/images/posts/ts-setup-mini.jpg"
category: "tutorial"
author: "abhinay thakur"
tags: [React testing, Jest setup, React Testing Library, JavaScript testing, React component testing, test configuration, npm test setup, test driven development, tdd]
---
  
<figure class="text-center text-xs -mx-32">
  <img src="/assets/images/posts/ts-setup.jpg" alt="cover image" />
</figure>


<p class="first-letter:text-5xl first-letter:font-medium">
Testing is a crucial part of any software development process, and when it comes to React applications, the React Testing Library and Jest are powerful tools that can help ensure your components work as expected. In this tutorial, we'll walk you through the process of setting up these testing tools in your React project.
</p>

## Introduction
Welcome back to our comprehensive guide on setting up the the codebase for building professional-grade React applications! You're now at the second stop in our four-part journey, where we'll focus on implementing Test Driven Development (TDD) in your React project. Here's a quick reminder of our itinerary:

- <a href="/blog/setting-up-a-react-project-with-typescript-and-webpack-a-step-by-step-guide">Setting Up a React Project with TypeScript and Webpack: A Step-by-Step Guide</a>
- <strong>Easily Setup Test Driven Development with React Testing Library and Jest (You are here)</strong>
- <a href="/blog/how-to-set-up-tailwind-css-with-webpack-a-step-by-step-guide">How to Set Up Tailwind CSS with Webpack: A Step-by-Step Guide</a>
- <a href="/blog/mastering-dynamic-theming-in-tailwind-css-a-step-by-step-guide">Mastering Dynamic Theming in Tailwind CSS: A Step-by-Step Guide</a>

In this crucial second chapter, we're diving into the world of testing. We'll show you how to integrate React Testing Library and Jest into your project. By embracing TDD, you'll not only catch bugs early but also design more modular, maintainable components. Whether you're a testing novice or looking to refine your skills, this guide will equip you with the tools to write confident, bug-resistant code. Let's elevate your React development process to the next level!

## Step 1: Install React Testing Library Dependencies

First, let's install the necessary dependencies for the React Testing Library:

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

This command installs two packages:
- `@testing-library/react`: The core React Testing Library package
- `@testing-library/jest-dom`: A package that provides custom Jest matchers for DOM testing

## Step 2: Install Jest Dependencies

Next, we'll install Jest and its required dependencies:

```bash
npm install --save-dev jest jest-environment-jsdom
```

Here, we're installing:
- `jest`: The Jest testing framework
- `jest-environment-jsdom`: A simulated DOM environment for Jest, which is necessary for testing React components

## Step 3: Configure Jest

Now, let's set up the Jest configuration. Create a file named `jest.config.js` in your project's root directory and add the following content:

```javascript
// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.test.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
};
```
This configuration does several things:

| Option | Purpose |
|:--------|:---------|
| `collectCoverage` | Enables code coverage reporting. |
| `collectCoverageFrom` | Specifies which files to include in the coverage report. |
| `coverageDirectory` | Sets the directory where coverage reports will be saved. |
| `testEnvironment` | Sets the test environment to jsdom, which simulates a DOM environment. |

## Step 4: Create Jest Setup File

Create a file named `jest.setup.js` in your project's root directory and add the following line:

```javascript
import '@testing-library/jest-dom';
```

This imports the custom Jest matchers from `@testing-library/jest-dom`, making them available in all your test files.

## Step 5: Update Jest Configuration

Now, let's update our `jest.config.js` to use the setup file we just created:

```javascript
// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.test.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
```

The `setupFilesAfterEnv` array tells Jest to run the specified files after the test environment is set up but before the tests are run.

## Step 6: Handle Non-JavaScript Files

To prevent errors when importing non-JavaScript files (like images or stylesheets) in your tests, create a file at `/src/mocks/file-mock.js` with the following content:

```javascript
module.exports = "test-file-stub";
```

Then, update your `jest.config.js` to use this mock for non-JavaScript files:

```javascript
module.exports = {
  // ... previous configuration
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/mocks/file-mock.js",
  },
};
```

This configuration tells Jest to use the mock file instead of trying to process these file types.

## Step 7: Install ESLint Plugin for Jest

To ensure ESLint recognizes Jest-specific globals and rules, install the ESLint plugin for Jest:

```bash
npm install --save-dev eslint-plugin-jest
```

## Step 8: Configure ESLint for Jest

Update your `.eslintrc.json` file to include Jest-specific configurations:

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "jest/globals": true
  },
  "extends": [
    "plugin:react/recommended",
    "plugin:jest/recommended",
    "airbnb",
    "prettier"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["react", "jest"],
  "rules": {
    "no-underscore-dangle": 0,
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "always",
        "jsx": "always"
      }
    ]
  }
}
```

This configuration enables Jest globals and recommended rules in your ESLint setup.

## Step 9: Install Babel Presets

To ensure Jest can properly transform your React and TypeScript code, install the necessary Babel presets:

```bash
npm i -D @babel/preset-env @babel/preset-react @babel/preset-typescript
```

## Step 10: Configure Babel

Create a `babel.config.js` file in your project's root directory with the following content:

```javascript
module.exports = {
  presets: [
    '@babel/preset-env', 
    '@babel/preset-react', 
    '@babel/preset-typescript'
  ]
};
```

This configuration tells Babel how to transform your code for Jest to run it.

## Step 11: Add NPM Scripts

Finally, add these scripts to your `package.json`:

```json
"scripts": {
  "test": "jest",
  "coverage": "jest --coverage"
}
```

These scripts allow you to run your tests and generate coverage reports easily.

## Conclusion

You've now equipped your React project with a powerful testing suite using React Testing Library and Jest. This isn't just about catching bugs—it's about building confidence in your code and improving your overall development process. Remember, good tests act as living documentation for your application, helping you and your team understand how components should behave.

As you write more tests, focus on testing behavior rather than implementation details. This approach will make your tests more resilient to refactoring and give you more confidence in your application's functionality. Don't aim for 100% coverage from the start—instead, focus on critical paths and gradually increase your test coverage as you go.

In our <a href="/blog/how-to-set-up-tailwind-css-with-webpack-a-step-by-step-guide">next installment</a>, we'll explore how to enhance your project's styling capabilities by integrating Tailwind CSS with Webpack. Get ready to supercharge your CSS workflow and create beautiful, responsive designs with ease!