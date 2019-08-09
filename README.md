# Fastify REST API Boilerplate
The aim of this project is to have a simple and adaptable REST API Boilerplate.

## Overview
This is a straightforward boilerplate application for building REST APIs in Node.js using Fastify with Code Coverage. Helps you stay productive by following best practices.

### Features / Tech Stack

- [Fastify](https://github.com/fastify/fastify/): Fastify is a web framework highly focused on providing the best developer experience with the least overhead and a powerful plugin architecture. It is inspired by Hapi and Express and as far as we know, it is one of the fastest web frameworks in town.
- [Winston](https://github.com/winstonjs/winston): as a logger for the API.
- [Newman](https://github.com/postmanlabs/newman): as a manager for the postman collections. It allows you to effortlessly run and test a Postman collection directly from the command-line.
- [Sequelize](https://github.com/sequelize/sequelize): Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
- [Jest](https://jestjs.io/docs/en/getting-started) + [supertest](https://github.com/visionmedia/supertest): Powerfull combination to testing node.js HTTP servers.
- [ESLint](http://eslint.org): JavaScript code linting is done using [ESLint](http://eslint.org) a pluggable linter tool for identifying and reporting on patterns in JavaScript. Uses ESLint with [eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), which tries to follow the Airbnb JavaScript style guide.                                                                                                |
- [npm](https://www.npmjs.com/): Uses npm as package manager.
- [http-status](https://www.npmjs.com/package/http-status): to set http status code. It is recommended to use `httpStatus.INTERNAL_SERVER_ERROR` instead of directly using `500` when setting status code.

## Prerequisites
- Install [npm](https://www.npmjs.com/get-npm).

## Getting Started
Clone the repo:
```sh
git clone git@github.com:vinistevam/fastify-rest-api.git
cd fastify-rest-api
```

Install dependencies:
```sh
npm install
```

Start server:
```sh
# Start server
node app.js
```
Open your browser at http://localhost:3000

### Tests:
```sh
# Run tests
npm test

# Run test along with code coverage
npm run coverage

```
`npm run coverage` also generates HTML code coverage report in `coverage/` directory. Open `lcov-report/index.html` to view it.

### Newman testing Postman Collections:
```sh
# Run newman as a Node.js module (server needs to be running)
npm run newman
```
Current newman is configured to run through local collections but It supports run straight from URL.
```sh
/postman
├── collections                  # collections exported  
│   ├── boilerplateRestAPI.json  # collection
│   └── ...                      # Other collections
├── environment                  # local environment variable exported 
│   ├── local.json               # env
│   └── ...                      # Other env variable

```


```
newman

Boilerplate Rest API

❏ Healthcheck
↳ Healthcheck
  GET http://127.0.0.1:3000/api/healthcheck [200 OK, 195B, 44ms]

→ root
  GET http://127.0.0.1:3000/ [200 OK, 164B, 3ms]

┌─────────────────────────┬──────────────────┬──────────────────┐
│                         │         executed │           failed │
├─────────────────────────┼──────────────────┼──────────────────┤
│              iterations │                1 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│                requests │                2 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│            test-scripts │                2 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│      prerequest-scripts │                2 │                0 │
├─────────────────────────┼──────────────────┼──────────────────┤
│              assertions │                0 │                0 │
├─────────────────────────┴──────────────────┴──────────────────┤
│ total run duration: 100ms                                     │
├───────────────────────────────────────────────────────────────┤
│ total data received: 65B (approx)                             │
├───────────────────────────────────────────────────────────────┤
│ average response time: 23ms [min: 3ms, max: 44ms, s.d.: 20ms] │
└───────────────────────────────────────────────────────────────┘
```

## Docker

#### Using Docker Compose for Development
```sh
# service restarts on file change
bash bin/development.sh
```

#### Building and running without Docker Compose
```bash
# Build docker 
docker build -t fastify-rest-api .

# Run docker
docker run -p 3000:3000 fastify-rest-api
```


## Structure Proposed
[Structure of a NodeJs API Project](https://medium.com/codebase/structure-of-a-nodejs-api-project-cdecb46ef3f8)
```sh
.
├── config                  # App configuration files
│   ├── sequelize.json        # Sequelize config
│   ├── serviceOne.js       # ServiceOne config
│   └── ...                 # Other configurations
├── routes                  
│   ├── controllers         # Request managers
│   ├── middlewares         # Request middlewares
│   └── routes.js           # Define routes and middlewares here
├── services                # External services implementation   
│   ├── serviceOne
│   └── serviceTwo
│   └── ...                 # Other services
├── db                      # Data access stuff  (Sequelize mostly)
│   ├── models              # Models
│   ├── migrations          # Migrations
│   ├── seeds               # Seeds
│   └── index.js            # Sequelize instantiation
├── core                    # Business logic implementation
│   ├── accounts.js         
│   ├── sales.js            
│   ├── comments.js              
│   └── ...                 # Other business logic implementations
├── utils                   # Util libs (formats, validation, etc)
├── tests                   # Testing
├── scripts                 # Standalone scripts for dev uses
├── package.json           
├── README.md         
├── index.js                # Start script including `listen()`
└── app.js                  # App starting point
```
## A Boilerplate-only Option

If you would prefer not to use any of our tooling, delete the following files from the project: `package.json` and  `.eslintrc`. You can now safely use the boilerplate with an alternative build-system or no build-system at all if you choose.

## Disclaimer

### Contributing

Contributions, questions and comments are all welcome and encouraged. For code contributions submit a pull request with appropriate test coverage.
