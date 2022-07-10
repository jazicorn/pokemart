# TODO: Customize Docker file to my project; Currently not set up properly

# pull official base image
FROM node:16.15.0

# set working directory
WORKDIR /packages/client

# Install dependencies early so that if some files in our app
# change, Docker won't have to download the dependencies again,
# and instead will start from the next step ("COPY . .").
COPY ./package.json .
COPY ./yarn.lock .
COPY ./packages/app/package.json ./packages/client/

# Copy all files of our app (except files specified in the .gitignore)
COPY . .

# Build app
RUN yarn build

# Port
EXPOSE 3001

# Serve
CMD [ "yarn", "start" ]
