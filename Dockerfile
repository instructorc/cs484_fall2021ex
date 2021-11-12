FROM node:14
COPY . /app

CMD ["node", "app/docker.js"]