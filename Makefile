build:
		npm run build -- --progress --colors

npm-fix:
		rm -rf node_modules && npm cache clear && npm install
