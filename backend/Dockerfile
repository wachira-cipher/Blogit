FROM node:20-bullseye

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install --legacy-peer-deps --no-audit --no-fund

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]