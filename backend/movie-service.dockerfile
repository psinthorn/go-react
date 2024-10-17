# Multi stage docker image builder 
# 1. Create docker container image from base image as builder
# 2. Create tiny docker container from base image 

# 1.1 Build from base image as builder 
FROM golang:1.23-alpine as builder

RUN mkdir /app

WORKDIR /app 

COPY . /app

RUN CGO_ENABLED=0 go build -o movieApi ./cmd/api


# optional 
RUN chmod +x /app/movieApi


# 2.1 Build tiny docker image from builder 
FROM alpine:latest 

RUN mkdir /app

COPY --from=builder /app/movieApi /app 

CMD ["/app/movieApi"]