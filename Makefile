install:
	npm install

test:
	npm test -s

lint:
	npx eslint .

start-backend:
	npx nodemon --exec npx babel-node server/bin/server.js

start-frontend:
	npx webpack serve 
