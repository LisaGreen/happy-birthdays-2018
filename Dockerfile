FROM node

ADD /service /service

WORKDIR /service

EXPOSE 5000

CMD ["npm", "install"]

CMD ["npm", "start"]
