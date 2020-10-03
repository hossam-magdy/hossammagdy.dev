FROM hayd/alpine-deno:1.4.3

# EXPOSE $PORT (default 8080)
WORKDIR /app
ADD . .
RUN deno bundle -c tsconfig_client.json src/client.tsx public/assets/app.js
RUN deno cache src/server.tsx

# USER deno
# ENTRYPOINT [ "/bin/sh", "-c", "deno" ]
# VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
CMD [ "run", "-c", "tsconfig_server.json", "--allow-env", "--allow-net", "--allow-read", "src/server.tsx" ]
