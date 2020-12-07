#### CONFIG
HOST: Ip localg que rodará o serviço

PORT: Porta do serviço

API_RECIPE: O endereço da API do Recipe Puppy

API_GLIPHY: O endereço da API do GIPHY

API_KEY_GLIPHY: A chave gerado para a aplicação no GLIPHY


#### A Estrutura

A API possui apenas um endpoint, que deve respeitar a seguinte chamada:

`http://{HOST}:{PORT}/recipes/?i={ingredient_1},{ingredient_2}`

Exemplo:

`http://127.0.0.1:5678/recipes/?i=onion,tomato`


A resposta dessa requisição deve seguir a seguinte estrutura:

```
{
	"keywords": ["onion", "tomato"],
	"recipes": [{
		"title": "Greek Omelet with Feta",
		"ingredients": ["eggs", "feta cheese", "garlic", "red onions", "spinach", "tomato", "water"],
		"link": "http://www.kraftfoods.com/kf/recipes/greek-omelet-feta-104508.aspx",
		"gif": "https://media.giphy.com/media/xBRhcST67lI2c/giphy.gif"
	   },{
		"title": "Guacamole Dip Recipe",
		"ingredients": ["avocado", "onions", "tomato"],
		"link":"http://cookeatshare.com/recipes/guacamole-dip-2783",
		"gif":"https://media.giphy.com/media/I3eVhMpz8hns4/giphy.gif"
	   }
	]
}

### Instalação

Docker-Compose

- docker-compose up --build 

NPM

- npm run start

TESTES

- npm run test

ESLINT

- npm run lint
