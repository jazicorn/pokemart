# TODO: Customize Docker file to my project; Currently not set up properly

# pull official base image
FROM node:16.15.0

# set working directory
# WORKDIR /packages/server

# Install dependencies early so that if some files in our app
# change, Docker won't have to download the dependencies again,
# and instead will start from the next step ("COPY . .").
COPY ./package.json .
COPY ./yarn.lock .

# Copy all files of our app (except files specified in the .gitignore)
COPY . .

# Port
EXPOSE 8080

# Serve
CMD [ "yarn", "start:dev" ]
