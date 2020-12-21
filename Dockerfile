FROM hayd/alpine-deno:1.6.1

# EXPOSE $PORT (default 8080)
WORKDIR /app
ADD . .
# ENV ALEPH "deno run -A https://deno.land/x/aleph@v0.2.27/cli.ts"
ENV ALEPH "https://deno.land/x/aleph@v0.2.27/cli.ts"
RUN deno install -A -f -n aleph ${ALEPH}
RUN aleph build
# RUN aleph start -p -1 || echo "Cached deps of 'aleph start'"
# RUN deno cache "https://deno.land/x/aleph@v0.2.27/server.ts"
# RUN deno cache "https://deno.land/x/aleph@v0.2.27/cli/dev.ts"
# ENV NO_COLOR 1

# USER deno
ENTRYPOINT [ "/bin/sh", "-c" ]
# VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
CMD [ "aleph", "start", "-p", "8080" ]
