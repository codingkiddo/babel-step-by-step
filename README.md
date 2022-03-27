# babel-step-by-step


npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/plugin-transform-arrow-functions



## @babel/plugin-syntax-jsx

Syntax only
Using this plugin directly only enables Babel to parse this syntax. If you want to transform JSX syntax then use the transform-react-jsx plugin or react preset to both parse and transform this syntax.

npm install --save-dev @babel/plugin-syntax-jsx

./node_modules/.bin/babel babel --plugins @babel/plugin-syntax-jsx src/index.js --out-dir lib



## @babel/plugin-transform-react-jsx

npm install --save-dev @babel/plugin-transform-react-jsx
./node_modules/.bin/babel --plugins @babel/plugin-transform-react-jsx src/index.js --out-dir lib