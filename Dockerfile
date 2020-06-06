FROM hayd/alpine-deno

# EXPOSE $PORT
USER deno
WORKDIR /app
ADD . .
# COPY deps.ts .
# RUN deno cache deps.ts
RUN deno cache src/index.ts

# ENTRYPOINT [ "/bin/sh", "-c", "deno" ]
# VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
CMD [ "run", "--allow-env", "--allow-net", "src/index.ts" ]
