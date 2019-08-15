FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies, include lockfile
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
ENV PORT 3000

CMD [ "npm", "start" ]
