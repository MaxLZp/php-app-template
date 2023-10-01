FROM node:18

RUN apt-get update && apt-get install -y \
    npm

# Set working directory
WORKDIR /var/www

ENTRYPOINT [ "" ]