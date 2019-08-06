# Fastify REST API Boilerplate
This is a straightforward boilerplate for building REST.

## ToDos

### Acceptance Criteria

- [X] NPM for Package Management
- [X] Fastify
- [X] Jest for Test
    - [X] Supertest help http requests
- [X] WinstonJs for logs
- [] Postman, with newman integration
- [] Readme well documented
    - [] Provide examples of implementation 

### Stretch Goal 

- [X] Lint
- [] Sequelize for the DB integration
- [] Build with minikube
- [] Skaffold


## Structure

```
.
├── config                  # App configuration files
│   ├── sequalize.json        # Sequalize config
│   ├── serviceOne.json       # ServiceOne config
│   └── ...                 # Other configurations
├── routes                  
│   ├── controllers         # Request managers
│   ├── middlewares         # Request middlewares
│   └── routes.js           # Define routes and middlewares here
├── services                # External services implementation   
│   ├── serviceOne
│   └── serviceTwo
│   └── ...                 # Other services
├── db                      # Data access stuff  (Sequalize mostly)
│   ├── models              # Models
│   ├── migrations          # Migrations
│   ├── seeds               # Seeds
│   └── index.js            # Sequalize instantiation
├── core                    # Business logic implementation
│   ├── accounts.js         
│   ├── sales.js            
│   ├── comments.js              
│   └── ...                 # Other business logic implementations
├── utils                   # Util libs (formats, validation, etc)
├── tests                   # Testing
├── scripts                 # Standalone scripts for dev uses
├── pm2.js                  # pm2 init
├── shipitfile.js           # deployment automation file
├── package.json           
├── README.md         
└── app.js                  # App starting point
```