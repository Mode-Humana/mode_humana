FROM node:12

# create app directory
WORKDIR /home/node/app

# install dependencies
COPY package*.json ./
RUN npm install
# RUN npm ci --only=production

# bundle app source
COPY . .

# backend port
EXPOSE 8080

# run app
CMD ["node", "server.js"]


