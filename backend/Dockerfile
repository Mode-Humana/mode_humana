FROM node:12

# create app directory
RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# install dependencies
COPY package*.json /home/node/app/
RUN npm install
# RUN npm ci --only=production

# bundle app source
COPY . /home/node/app/

# backend port
EXPOSE 8080

# run app
CMD ["node", "server.js"]


