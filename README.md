
```shell
curl 'http://localhost:4000/graphql' \
-H 'content-type: application/json' \
--data-raw '{"operationName":null,"variables":{},"query":"{\n  list(name: \"\") {\n    _id\n    name\n    age\n    company\n  }\n}\n"}'
```
