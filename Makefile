build:
		npm run build

npm-fix:
		rm -rf node_modules && npm cache clear && npm install

docker-build-image:
		docker build -t es6-webpack-example .

docker-build: docker-build-image
		docker run -v $(CURDIR):/usr/src/es6_webpack_example es6-webpack-example make build
