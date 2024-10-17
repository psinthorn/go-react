# How to re-create docker container

docker-compose up --force-recreate is one option, but if you're using it for CI, I would start the build with docker-compose rm -f to stop and remove the containers and volumes (then follow it with pull and up).

This is what I use:

```
docker-compose rm -f
docker-compose pull
docker-compose up --build -d
# Run some tests
./tests
docker-compose stop -t 1

```

The reason containers are recreated is to preserve any data volumes that might be used (and it also happens to make up a lot faster).

If you're doing CI you don't want that, so just removing everything should get you want you want.

Update: use up --build which was added in docker-compose 1.7
