FROM hayd/alpine-deno

# EXPOSE $PORT
USER deno
WORKDIR /app
COPY deps.ts .
RUN deno cache deps.ts
ADD . .
RUN deno cache src/index.tsx

# ENTRYPOINT [ "/bin/sh", "-c", "deno" ]
# VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
CMD [ "run", "--allow-env", "--allow-net", "src/index.tsx" ]
