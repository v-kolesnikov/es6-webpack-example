build:
		webpack --progress --colors

build-report:
		webpack --profile --json > tmp/webpack_build.json

npm-fix:
		rm -rf node_modules && npm cache clear && npm install
