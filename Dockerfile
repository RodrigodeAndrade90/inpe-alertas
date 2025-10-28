# Imagem base leve do Node
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copia package.json e instala deps
COPY package.json package-lock.json* ./
RUN npm install --omit=dev || npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
