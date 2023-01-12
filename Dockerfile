FROM node:16

ENV PORT 8000

EXPOSE 8000

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/"]