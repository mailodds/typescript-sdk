FROM docker.io/library/node:22-slim
WORKDIR /sdk
COPY . .
RUN npm ci && npm run build
CMD ["node", "ci/smoke_test.mjs"]
