FRONTEND_BINARY=frontApp
BACKEND_BINARY=backendApi
# AUTH_BINARY=authApp


## up: starts all containers in the background without forcing build
up:
	@echo "Starting Docker images..."
	docker-compose up -d
	@echo "Docker images started!"

## up_build: stops docker-compose (if running), builds all projects and starts docker compose
up_build: build_backend
	@echo "Stopping docker images (if running...)"
	docker-compose down
	@echo "Building (when required) and starting docker images..."
	docker-compose up --build -d
	@echo "Docker images built and started!"

## down: stop docker compose
down:
	@echo "Stopping docker compose..."
	docker-compose down
	@echo "Done!"

## build_broker: builds the broker binary as a linux executable
build_backend:
	@echo "Building backend binary..."
	cd ../backend && env GOOS=linux CGO_ENABLED=0 go build -o ${BACKEND_BINARY} ./cmd/api
	@echo "Done!"

## build_auth: builds the authentication binary as a linux executable
# build_auth:
# 	@echo "Building authentication binary..."
# 	cd ../authentication-service && env GOOS=linux CGO_ENABLED=0 go build -o ${AUTH_BINARY} ./cmd/api
# 	@echo "Done!"

## build_front: builds the frone end binary
build_front:
	@echo "Building frontend binary..."
	cd ../front-end && env CGO_ENABLED=0 go build -o ${FRONTEND_BINARY} ./cmd/web
	@echo "Done!"

## start: starts the front end
start: build_front
	@echo "Starting front end"
	cd ../front-end && ./${FRONTEND_BINARY} &

## stop: stop the front end
stop:
	@echo "Stopping front end..."
	@-pkill -SIGTERM -f "./${FRONTEND_BINARY}"
	@echo "Stopped front end!"