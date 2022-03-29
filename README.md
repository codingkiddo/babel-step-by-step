# babel-step-by-step


npm install --save-dev @babel/core @babel/cli

./node_modules/.bin/babel --plugins @babel/plugin-proposal-private-property-in-object src/index.js --out-dir lib
./node_modules/.bin/babel --presets @babel/preset-env src/index.js --out-dir lib





./node_modules/.bin/tsc src/index-ts.ts -t es6 -outDir lib