# babel-step-by-step


npm install --save-dev @babel/core @babel/cli
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions


./node_modules/.bin/babel src --out-dir lib --presets @babel/preset-typescript --extensions ".ts"
./node_modules/.bin/babel --presets @babel/preset-typescript --extensions ".ts" src/index-1.ts --out-dir lib

./node_modules/.bin/babel --presets @babel/preset-typescript --presets @babel/preset-react --extensions ".tsx" src/index-1.tsx --out-dir lib

./node_modules/.bin/babel --presets @babel/preset-env --presets @babel/preset-typescript --presets @babel/preset-react --extensions ".ts" src --out-dir lib
