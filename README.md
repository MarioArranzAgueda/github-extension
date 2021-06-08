# GitHub Extension

[![CircleCI](https://circleci.com/gh/MarioArranzAgueda/github-extension.svg?style=svg)](https://app.circleci.com/pipelines/github/MarioArranzAgueda/github-extension)


This project allow us to install an extension to open a tab with our Github user, check our activity feed, repositories, followers and our information.

To install this project as extension, we need to execute next command:

```shell 
npm install

npm run build
```

Now, that build folder is generate, we need to go to chrome [extension](chrome://extensions/) enable developer mode and click load unpacked and find build folder to install.

<img src="./readme-image.png">

## Test in local

If you want to test this extension in your local environment, you need to install dependencies:

```shell
npm install
````

and then, start project in your [localhost:3000](http://localhost:3000), executing next command:

```shell
npm start
````