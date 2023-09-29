npm install --save @nestjs/typeorm typeorm pg
npm i bcrypt

# TODO https://docs.docker.com/engine/reference/commandline/ps/

# Check how many images active running in all docker
docker ps

# Check how many images active running in dir
docker-composer ps

# Compile docker-composer services | Build images before starting containers.
docker-composer up --build

# Stop and remove containers, networks..
docker-compose down 

# start or restart all the services defined in a docker-compose.yml
docker-compose doupwn

# Run utilities in backgroud
docker-composer up -d 


# ? More commands

# Stop services only
docker-compose stop

# Down and remove volumes
docker-compose down --volumes 

# Find Host of containers
docker inspect -f '{{.Name}} - {{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(docker ps -aq)


docker-compose exec app bash

docker exec -it 4bcb4510c87f bash