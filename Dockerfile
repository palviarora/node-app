FROM node:alpine
# alpine means strip up version of the package you're looking for
# meaning unnecessary packages are taken out
WORKDIR /usr/nodeapp

COPY ./package.json ./
# current local drec. to container local direc.

RUN npm install
COPY ./ ./
CMD [ "npm", "start" ]
# set default command
# docker run -p parora/nodeapp 

# p means port my machine's port:container machine's port
# 8000:8000