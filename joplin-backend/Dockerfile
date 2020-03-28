
FROM node:13-buster


RUN npm config set user root  && npm config set unsafe-perm true
RUN npm install -g joplin 


WORKDIR /home/node
USER node
ENTRYPOINT [ "joplin" ]
