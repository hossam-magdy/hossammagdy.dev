FROM denoland/deno:latest

# EXPOSE $PORT (default 8080)
WORKDIR /app
ADD . .
RUN deno bundle -c=tsconfig_client.json --import-map=import_map.json src/client.tsx public/assets/app.js
RUN deno cache --import-map=import_map.json src/server.tsx

# default ENTRYPOINT is "/usr/bin/deno"
# ENTRYPOINT [ "/bin/sh -c deno" ]

# @see: https://docs.docker.com/engine/reference/builder/#volume
# VOLUME ["/var/www /var/log/apache2 /etc/apache2"]

# @see: https://docs.docker.com/engine/reference/builder/#cmd
CMD ["run", "--config=tsconfig_server.json", "--import-map=import_map.json", "--allow-env", "--allow-net", "--allow-read", "--no-check", "src/server.tsx"]
