# babel-plugin-babel-strip-test-code

####Testing your private functions made safe and easy

###What does it do?
strips `exports __test__ = ...` code from your codebase


###How do I do it?

Add an ES2015 export to your js file and call it ```__test__``` which will allow you to
expose your private functions in test mode but when you run babel on your code for
production, it will strip the exports from the production code.


## Example

**In**

```js
let foo;

function funkyFunc(str) {
    console.log(str);
}

function testFunc() {
    funkyFunc('over here');
}

export const __test__ = {
    test1: funkyFunc,
    test2: testFunc
};

export default funkyFunc;

```

**Out**

```js
let foo;

function funkyFunc(str) {
    console.log(str);
}

function testFunc() {
    funkyFunc('over here');
}

export default funkyFunc;

```

## Installation

```sh
$ npm install babel-plugin-babel-strip-test-code
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-strip-test-code"]
}
```

### Via CLI

```sh
$ babel --plugins babel-strip-test-code script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-strip-test-code"]
});
```
