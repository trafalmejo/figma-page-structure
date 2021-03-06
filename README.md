Below are the steps to get your plugin running. You can also find instructions at:

https://www.figma.com/plugin-docs/setup/

This plugin template uses Typescript and NPM, two standard tools in creating JavaScript applications.

First, download Node.js which comes with NPM. This will allow you to install TypeScript and other
libraries. You can find the download link here:

https://nodejs.org/en/download/

Next, install TypeScript using the command:

npm install -g typescript

Finally, in the directory of your plugin, get the latest type definitions for the plugin API by running:

npm install --save-dev @figma/plugin-typings
npm install webpack
npm install webpack-cli
npm install ts-loader

If you are familiar with JavaScript, TypeScript will look very familiar. In fact, valid JavaScript code
is already valid Typescript code.

In order to convert Typescript into Javascript (code.ts ---> code.js), you could run the watch script provided in the packaje.json

npm run watch

Based on: https://www.youtube.com/watch?v=3rT4tHsbC1k&t=602s&ab_channel=JordanGeizer
Be aware that if you run the plugin multiple times you will create an infinite number of pages.
