FROM node:15

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install -g yarn
RUN yarn

COPY . .

CMD ["npm", "start"]