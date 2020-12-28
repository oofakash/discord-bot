
![Discord](https://img.shields.io/discord/679355127731191809?color=dark-green&label=oldmonk&logo=discord&logoColor=white&style=flat-square)

## Dummy-porkchop, a discord bot template for oldmonk server members.

### Some pre-configurations and requirements.
* Make sure you have `Node.js` installed, you can check it in your terminal by using `node -v`. If you don't have node installed, you can do it from [here](https://nodejs.org/en/).
* Make sure you clone the project and then follow the steps below.
* You need to authenticate in order to clone this dummy-project
* After you've successfully cloned the project - you should create 2 files in the `/config` folder with the names `config.json` and `cache.json` or just rename the cloned `config-example.json` & `cache-example.json` to the latter. I suggest creating new files as those files are already ignored - and it won't leak your token and config. Beware on renaming the files - you might have issues while pulling from this repo again when its updated (but it won't matter if you're just cloning for 1st time and you won't be pulling the future changes of this repository.)
---
### Using yarn package manager.
You can use **[Yarn](https://yarnpkg.com/)** instead of **NPM** but if you are using yarn like me then while initialising & installing dependencies use the commands below or else its fine if you're using `node package manager (npm)`
```
yarn init
```
What this does is initialises your project.
Fill in all the details as per your choice (or default them by pressing enter key) just when it asks for `entry-point` type in `source/index` and then hit enter and then you can skip rest to default.

Then you can install the discord js package which will be use to interact with the discord's API.
```
yarn add discord.js
```

This is how you'll install/remove packages using yarn.
```
yarn add/remove <dependency name>
```
If you do not have yarn package manager installed then you can click [here](https://yarnpkg.com/) to install it & run the following:

---
### Using a Linter
I suggest using a linter to avoid some common errors.
Visit [ESLint](https://eslint.org/docs/user-guide/getting-started) to get started, this is completely optional but recomended.
```
npm install eslint --save-dev

# or

yarn add eslint --dev
```
You can make your own custom rules while configuring your linter.

## Make sure..

You install these dependencies.

### 1. Required Packages
Install these packages.
```
yarn add moment
# or 
npm install moment
```
```
yarn add diff
# or 
npm install diff
```
```
yarn add glob
# or 
npm install glob
```
```
yarn add ms
# or 
npm install ms
```
```
yarn add node-fetch
# or 
npm install node-fetch
```
You can skip `mongoose` if you are not planning to use any database.
```
yarn add mongoose
# or 
npm install mongoose
```
### 2. Optional Dependencies (recommended)



```
npm install colors.json
# or
yarn add colors.json
```

You can consider using this for changing the embed colors. Add this line if you want to change the embed colors if you're using this package.
```js
const colors = require('colors.json');
```

##### Common-tags (recommended)
```
npm install common-tags
# or 
yarn add common-tags
```
You can use this package if you want to make a steam profile search, you can read more [here](https://discordjs.guide/miscellaneous/useful-packages.html#common-tags) for more explanation and uses.

##### Date Format
```
npm install dateformat
# or 
yarn add dateformat
```
## Wrapping up..
So you're good to go - you have a basic bot template with few commands - you can add more commands and make your bot better.

### Links & Resources.

[Discord JS Library](https://discord.js.org/) Discord.js Documentation

[Discord JS Guide](https://discordjs.guide/) Discord.js Guide [used v12 for this bot.]

Install [node.js](https://nodejs.org/en/) for executing `.js` code outside browsers.

Install [Yarn](https://yarnpkg.com/) package manager if not using npm.

Read more about [ESLint](https://eslint.org/docs/user-guide/getting-started) and refer to get started.