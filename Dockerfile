FROM node:19-alpine as builder

WORKDIR app
COPY . .
RUN npm install
RUN npm run build

FROM node:19-alpine as deploy

WORKDIR app
COPY --from=builder /app/package.json .
COPY --from=builder /app/build .
CMD ["node", "."]

