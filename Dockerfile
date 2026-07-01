# Image used by CI (docker build .) to deploy the demo app-under-test.
# The e2e test itself runs locally via docker-compose (official cypress/testcafe images).
FROM nginx:alpine
COPY public /usr/share/nginx/html
EXPOSE 80
