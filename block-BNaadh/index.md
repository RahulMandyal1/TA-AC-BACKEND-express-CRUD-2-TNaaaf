writeCode

Q. write express generator command with varying options to generate express app with following features:

- using ejs as template engine
```js
express --view=ejs applicationname
```
- no views for express application
```js
express --view= applicationname
```
- express app with gitignore
```js
express  --git application name
```
- express app with sass support for styling.
```js
express   --css=saas application name
```
- ejs as template engine and sass for styling
```js
express --view=ejs --css=saas  application name
```
- pug as template engine and gitignore together
```js
express --view=ejs --git application name
```