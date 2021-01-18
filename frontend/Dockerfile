FROM node:12.18.3

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV CI=true

COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@3.4.1 -g

COPY . ./

EXPOSE 3005

CMD ["npm", "start"]