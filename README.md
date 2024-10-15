# How to Start Application

1. Start docker container for database
2. Start backend sever
3. Start frontend server

!info

- we use postgres as our database for this project
- look at docker-compose.yml for mor information

  1.1 Start database container
  `$: cd /backend`
  `$: docker-compose up`

  2.1 Start backend server
  `$: cd /backend`
  `$: go run .`

  3.1 Start frontend server
  `$: cd /frontend`
  `$: npm run start`
