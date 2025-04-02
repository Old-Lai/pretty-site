# Build Stage
FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
RUN mkdir /app
COPY package.json /app
COPY pnpm-lock.yaml /app
WORKDIR /app
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

#production stage
FROM nginx:stable-alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]