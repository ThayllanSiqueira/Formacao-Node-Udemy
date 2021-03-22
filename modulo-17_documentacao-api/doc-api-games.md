# API de Games
Uma API de cadastro de games

## Endpoints
### GET /games
Retorna uma lista de games cadastrados
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso ocorra essa resposta voce vai receber a listagem de todos os games.
Exemplo de resposta:
```
[
    {
        "id": 23,
        "title": "Call of duty MW",
        "year": 2019,
        "price": 60
    },
    {
        "id": 2,
        "title": "Minecraft",
        "year": 2012,
        "price": 20
    },
    {
        "id": 65,
        "title": "Sea of Thieves",
        "year": 2018,
        "price": 40
    }
]
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição.
Motivos: TOken inválido, Token expirado.
Exemplo de resposta: 
```
{
    "err": "Token inválido!"
}
```


### POST /auth
Realiza o processo de login
#### Parametros
email: Email do usuário cadastrado no sistema.

password: Senha do usuário cadastrada no sitema, com aquele determinado email

Exemplo:
```
{
    "email": "thayllan@clever.com",
    "password": "123456"
}
```
#### Respostas
##### OK! 200
Caso ocorra essa resposta voce será autenticado e receberá um token de resposta que deve ser utilizado para acesso as rotas.
Exemplo de resposta:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0aGF5bGxhbkBjbGV2ZXIuY29tIiwiaWF0IjoxNjE2NDMwMTcxLCJleHAiOjE2MTY2MDI5NzF9.xsgdrxSDZNJAQ5iOycvFW3t3symi3TOBEveomsCrF4g"
}
```
##### Falha na autenticação! 401
Caso essa resposta aconteça, isso significa que aconteceu alguma falha durante o processo de autenticação da requisição.
Motivos: Email ou senha invalidos.
Exemplo de resposta: 
```
{
    "err": "Credenciais Inválidas"
}
```

