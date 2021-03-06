FROM hayd/alpine-deno:1.8.0

# EXPOSE $PORT (default 8080)
WORKDIR /app
ADD . .
RUN deno bundle -c=tsconfig_client.json --import-map=import_map.json src/client.tsx public/assets/app.js
RUN deno cache --import-map=import_map.json src/server.tsx

# USER deno
# ENTRYPOINT [ "/bin/sh -c deno" ]
# VOLUME ["/var/www /var/log/apache2 /etc/apache2"]

# CMD executable form (recommended): CMD ["/bin/deno", "run", "…"] (also "/bin/deno" can be "deno")
# CMD shell form: CMD deno run … (can use env vars $VAR here, as the command runs inside a shell)
# @see: https://docs.docker.com/engine/reference/builder/#cmd
CMD ["/bin/deno", "run", "--config=tsconfig_server.json", "--import-map=import_map.json", "--unstable", "--allow-env", "--allow-net", "--allow-read", "--no-check", "src/server.tsx"]
