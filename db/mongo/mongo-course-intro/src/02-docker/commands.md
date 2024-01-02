# Docker Commands

## Run db

```sh
docker-compose up -d mongodb
```

## Check

```sh
docker-compose ps
```

## Run mongosh

```sh
docker-compose exec mongodb bash
```

```sh
mongosh "mongodb://localhost:27017/?tls=false"
```
