# استفاده از mirror برای node
FROM docker.mirrors.sjtug.sjtu.edu.cn/library/node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# استفاده از mirror برای nginx
FROM docker.mirrors.sjtug.sjtu.edu.cn/library/nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
