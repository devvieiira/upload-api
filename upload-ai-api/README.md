# upload-ai

Projeto feito nos períodos de programação no IFRS - Campus Feliz.

Desenvolvedores:
 - Kauã
 - Leonardo


 ### como executar:

 Você precisa adicionar um arquivo **.env** na raiz do seu backend, para configurar sua variáveis de desenvolvimento. Da seguinte maneira:

 ```
 FRONTEND_URL="http://localhost:5173"
DATABASE_URL="postgresql://talks:backend@localhost:5432/mydb?schema=talksalot-db"
OPENAI_API_KEY="SUA_CHAVE_AQUI"
 ```

 Vale lembrar que para usar a chave **OPENAI_API_KEY** você precisa criar uma conta no site: https://openai.com/

 Obs: contas novas cadastradas ganham 5 doláres para teste.

  Crie uma pasta **tmp** na raiz do backend para os aúdios serem salvos.

 Já no frontend você também precisa criar uma **.env** identificando a rota do seu backend:

 ```
 FRONTEND_URL="http://localhost:4000"
 ```

Agora para executar os códigos basta utilizar um dos seguintes comando no frontend e no backend.

```
npm dev
pnpm dev

```