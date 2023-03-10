# Stage 1 (installation & build) {change the version of node & cli}
FROM node:latest as node
# set the working directory
WORKDIR /app
# add app files
COPY . .
# install app dependencies
#COPY package*.json ./
#RUN npm install -g @angular/cli@14.2.6
RUN npm install --legacy-peer-deps

# build the app
RUN npm run build --prod

#stage 2
FROM nginx:latest
# for routing
COPY default.conf /etc/nginx/conf.d

COPY --from=node /app/dist/hackathon-frontend /usr/share/nginx/html
# Expose port
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]
