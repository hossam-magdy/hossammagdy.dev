FROM hayd/alpine-deno:1.6.1

WORKDIR /app
ADD . .
# ENV ALEPH "deno run -A https://deno.land/x/aleph@v0.2.27/cli.ts"
ENV ALEPH "https://deno.land/x/aleph@v0.2.27/cli.ts"

RUN deno install -A -f -n aleph ${ALEPH}

RUN aleph build

# The only known way to actually cache the dynamic deps of `aleph start`
RUN timeout 20s aleph start || echo "Cached deps of 'aleph start'"

# EXPOSE $PORT (default 8080)
ENV PORT 8080

# USER deno
ENTRYPOINT [ "/bin/sh", "-c" ]
# VOLUME ["/var/www", "/var/log/apache2", "/etc/apache2"]
CMD [ "aleph start -p ${PORT}" ]
