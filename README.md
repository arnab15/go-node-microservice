# go-node-microservice

### how to run
 - clone the repo
 - run ```docker-compose up --build```
 
 
 ##how to query node service?
 
 run this curl request 
 ```bash
 curl --location --request POST 'http://localhost:5000/user' \
--header 'Content-Type: application/json' \
--header 'Cookie: _sesId=s%3AZLu2Ucbm7PbNp6Ii1dO61RSWnFIR0e2x.qhqNloJRe%2FStkhjP%2FA%2FCPYIXrLGLnx%2FLtueks45Klz8' \
--data-raw '{
    "name":"Arnabff&name=2&&****"
}' 
```

or send send ```POST``` request to ```http://localhost:5000/user``` with request body as 
``` 
{
    "name":"Arnabff&name=2&&****"
}
```
it will response back ```Welcome: Arnabff&name=2&&****``` via golang service
