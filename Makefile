lint:
	npx eslint .
install:
	npm ci
test:
	npm test
test_coverage:
	npm test -s -- --coverage --coverageProvider=v8