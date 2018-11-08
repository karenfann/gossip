# lightweight alpine base image
FROM alpine:3.8

# install nodejs with npm binary
RUN apk update && apk add nodejs-npm

# set our workdir
WORKDIR /app

# copy our package.json and package locks files, and install node modules
COPY package*.json ./
RUN npm install --loglevel=error

# copy everything else and run it
COPY . .

ENTRYPOINT ["npm", "run", "dev"]
