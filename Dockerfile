FROM nginx:1.31.10-alpine
WORKDIR /app
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]