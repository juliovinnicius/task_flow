📌 Funcionalidades da API de Gerenciamento de Tarefas

1️⃣ Autenticação e Usuários

- [ ] Cadastro de usuários (nome, e-mail, senha)

- [ ] Login com e-mail e senha (autenticação JWT)

- [ ] Proteção de rotas (somente usuários autenticados podem acessar)

2️⃣ Gerenciamento de Tarefas

- [ ] Criar uma nova tarefa (título, descrição, status, data de vencimento)

- [ ] Listar todas as tarefas do usuário logado

- [ ] Buscar uma tarefa específica

- [ ] Atualizar uma tarefa (editar título, descrição, status)

- [ ] Deletar uma tarefa

3️⃣ Organização e Filtros

- [ ] Filtrar tarefas por status (pendente, em andamento, concluída)

- [ ] Ordenar tarefas por data de vencimento

4️⃣ Segurança

- [ ] Hash de senha (bcrypt)

- [ ] Token JWT com expiração

- [ ] Middleware de autenticação para proteger as rotas

5️⃣ Documentação

- [ ] Criar documentação da API com Swagger

📦 Tecnologias

- Node.js + Express.js (para criar a API)

- MongoDB + Mongoose ou PostgreSQL + Sequelize/Prisma (para armazenar os dados)

- JWT + Bcrypt (para autenticação segura)

- Swagger (para documentar a API)

⚙️ Arquitetura Utilizada (Layered Architecture)

```bash
/task_flow
│── /src
│   ├── /config        # ⚙️ Configurações do projeto
│   ├── /controllers   # 🎭 Controladores (camada de apresentação)
│   ├── /services      # 📌 Serviços (regras de negócio)
│   ├── /repositories  # 🗄️ Repositórios (acesso ao banco de dados)
│   ├── /routes        # 🛤️ Definição de rotas
│   ├── /models        # 🏗️ Modelos de dados (caso use ORM)
│   ├── /middlewares   # 🛡️ Middlewares globais
│   ├── app.js         # 🚀 Configuração do servidor Express
│   ├── server.js      # 🔥 Inicialização do servidor
│── .env               # 🔑 Variáveis de ambiente
│── package.json       # 📦 Gerenciamento de dependências
│── README.md          # 📖 Documentação do projeto
```
