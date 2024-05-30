### Dependências

O projeto possui um setup pronto no qual há a necessidade de possuir o nodejs instalado na versão 14 ou superior.

Para instalar as dependências é preciso executar o comando: `npm install` na raíz do projeto e em seguida `npm start`.
Após isso, abra outro terminal e execute os seguientes comandos: `cd cadastra`, `npm install` e `npm run dev`

Uma vez que os comandos são executados eles irão levantar 2 servidores, sendo eles:
 - um para acessar o front-end que roda na porta 5173. No qual pode ser acessado pela url: http://localhost:5173
 - um para o json-server que irá exporta uma api com a lista de produtos que roda na porta 5000. Para acessar os produtos é na url: http://localhost:5000/products
