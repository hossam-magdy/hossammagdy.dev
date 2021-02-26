FROM hayd/alpine-deno:1.7.2

# EXPOSE $PORT (default 8080)
WORKDIR /app
ADD . .
RUN deno bundle -c=tsconfig_client.json --import-map=import_map.json --unstable src/client.tsx public/assets/app.js
RUN deno cache --import-map=import_map.json --unstable src/server.tsx

# USER deno
# ENTRYPOINT [ "/bin/sh", "-c", "deno" ]
# VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
CMD [ "run", "-c", "tsconfig_server.json", "--import-map", "import_map.json", "--unstable", "--allow-env", "--allow-net", "--allow-read", "src/server.tsx" ]
