FROM node:18-alpine AS builder

WORKDIR /app

# ✅ Use explicit file names
COPY package.json package-lock.json ./

# ✅ Guaranteed to use locked secure versions
RUN npm ci

COPY . .

FROM node:18-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /app .

USER appuser

CMD ["node", "index.js"]
