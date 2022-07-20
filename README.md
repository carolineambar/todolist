# To Do List
<img align="right" alt="screenshot of the page" src="https://user-images.githubusercontent.com/91106093/179757940-f32b1dc2-0ad8-4c48-b635-c52482854362.png" width="400px" />

- Descrição do projeto

Nesse projeto criei uma lista de taferas utilizando como referência o design do seguinte projeto no Codepen: https://codepen.io/lerida/pen/MWadRgM.

- Tecnologias usadas:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" />

- Começando 

Para rodar o projeto em sua máquina é necessário utilizar um servidor, como sugestão poderá utilizar o Json Server. Abaixo segue as instruções para instalar e iniciar o Json Server a partir do seu terminal para rodar a aplicação:

Install JSON Server

```
npm install -g json-server
```

Create a db.json file with some data

```
{
  "notes": [
    {
      "value": "Tarefa 1",
      "id": 1
    },
    {
      "value": "Tarefa 2",
      "id": 2
    }
  ]
}
```

Start JSON Server

```
json-server --watch db.json
```

Now if you go to http://localhost:3000/notes, you'll get

```
[
  {
    "value": "Tarefa 1",
    "id": 1
  },
  {
    "value": "Tarefa 2",
    "id": 2
  }
]
```

- Estrutura do projeto

Após os passos anteriores, você irá acessar o seguinte link: https://carolineambar.github.io/todolist/. E através dele terá a aplicação rodando já com os dados que você inseriu diretamente no documento db.json.

A partir dessa aplicação você poderá adicionar ou remover itens da lista de tarefa, bem como marcar ou desmarcar as tarefas caso realizadas e alterar o título da lista conforme sua necessidade.

- Futuras melhorias 

Atualmente para rodar o projeto é necessário rodar um BackEnd em sua máquina, como o JSON Server, porém como futura melhoria irei desenvolver o BackEnd desse projeto.
