FROM node:21-alpine as builder

WORKDIR app
COPY . .
RUN npm ci
RUN npm run build

FROM node:21-alpine as deploy

WORKDIR app
COPY --from=builder /app/package.json .
COPY --from=builder /app/build .
USER node:node
CMD ["node","build/index.js"]

