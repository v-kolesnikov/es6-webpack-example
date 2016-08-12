build:
		webpack --progress --colors

build-report:
		webpack --profile --json > tmp/webpack_build.json
