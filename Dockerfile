# Multi-stage production build for the landing page
# Uses stable Vite (no rolldown/native bindings) for predictable builds

FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --ignore-scripts

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Ensure production-ready build; Vite outputs static assets to dist/
RUN npm run build

FROM nginx:stable-alpine AS runner
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist ./
# Provide minimal health info and cache headers via default nginx.conf
# (can be extended if needed)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

