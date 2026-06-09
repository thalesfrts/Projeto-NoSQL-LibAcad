// Conectar no banco da biblioteca
use LibAcad_NoSQL;

// 1. Inserindo os usuários no banco
// Adicionando os usuários que vieram do banco SQL
db.usuarios.insertMany([
  { "_id": 1, "nome": "Eriomar Kalieudes", "email": "eriomar@email.com", "tipo_usuario": "Aluno" },
  { "_id": 2, "nome": "Admin", "email": "admin@email.com", "tipo_usuario": "Administrador" }
]);

// 2. Inserindo os livros (com autores e categorias embutidos como planejamos)
db.livros.insertMany([
  {
    "_id": 1, "titulo": "Java - Como Programar", "ano": 2010, "quantidade_estoque": 5,
    "categoria": { "id_categoria": 2, "nome": "Tecnologia" },
    "autores": [{ "id_autor": 1, "nome": "Paul Deitel" }]
  },
  {
    "_id": 2, "titulo": "Algoritmos - Teoria e Prática", "ano": 2019, "quantidade_estoque": 3,
    "categoria": { "id_categoria": 2, "nome": "Tecnologia" },
    "autores": [{ "id_autor": 2, "nome": "Thomas Cormen" }]
  }
]);

// 3. Inserindo os empréstimos (usando o padrão de itens embutidos)

db.emprestimos.insertMany([
  {
    "_id": 1,
    "id_usuario": 1,
    "data_emprestimo": ISODate("2026-03-19T00:00:00Z"),
    "data_prevista": ISODate("2026-03-26T00:00:00Z"),
    "status": "Ativo",
    "itens": [{ "id_item": 1, "id_livro": 1, "titulo": "Java - Como Programar", "data_devolucao": null, "multa": 0.0 }]
  }
]);

// 4. Criando índices para as consultas do projeto rodarem mais rápido
db.usuarios.createIndex({ "email": 1 });
db.livros.createIndex({ "titulo": 1 });
db.emprestimos.createIndex({ "status": 1 });
db.emprestimos.createIndex({ "id_usuario": 1 });

print("Dados carregados e índices criados com sucesso!");