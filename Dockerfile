FROM node:latest
WORKDIR /usr/app
COPY ./backend/package.json ./
RUN npm install
COPY ./frontend/package.json ./
RUN npm install
COPY . ./ 
EXPOSE 8080
CMD [ "npm", "run", "start" ]