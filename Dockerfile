FROM nginx:alpine
COPY index.html style.css main.js data.js manifest.json sw.js /usr/share/nginx/html/
COPY public /usr/share/nginx/html/public
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
