From node:14 AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


FROM nginx:1.16.0-alpine

COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d



#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]
