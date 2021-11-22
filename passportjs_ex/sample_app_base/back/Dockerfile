# Define from what image we want to build from
FROM node:14.18.1

# Provides metadata regarding the Dockerfile
LABEL version="1.0"
LABEL description="Docker image for class example "
LABEL maintainer = "cifulton@uic.edu"

# Sets the working directory for application in container
WORKDIR /app

# Which files would we like to copy into the construction of the image
COPY . /app

# Install all depedencies
RUN npm install

EXPOSE 3000

# What commands we would like to run once 
CMD ["npm", "start"]