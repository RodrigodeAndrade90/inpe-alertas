FROM node:18
WORKDIR /app
COPY aulas/projeto-inpe-teste/package*.json ./
RUN npm install
COPY aulas/projeto-inpe-teste .
RUN npm run build || true
EXPOSE 3000
CMD ["npm","start"]
