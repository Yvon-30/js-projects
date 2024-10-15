# use nginx official image
FROM nginx

# copy all files from current dir to nginx html
COPY . /usr/share/nginx/html

# expose port
EXPOSE 80