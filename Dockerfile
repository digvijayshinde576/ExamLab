FROM node 
WORKDIR /src
COPY . .
EXPOSE 4444
CMD node server.js
