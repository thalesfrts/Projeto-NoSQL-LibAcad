# LibAcad - Conversão de Banco de Dados Relacional para NoSQL

## Sobre o Projeto
Este projeto interdisciplinar da 3ª Unidade tem como objetivo realizar a conversão do banco de dados relacional de uma biblioteca acadêmica (LibAcad) para um banco de dados orientado a documentos utilizando MongoDB. O trabalho demonstra as diferenças práticas entre os paradigmas relacional e NoSQL, aplicando estratégias de desnormalização, *Embedding* (documentos embutidos) e *Referencing* (referências).

## Autores
* **Eriomar Kalieudes Morais e Silva** * **Thales de Freitas Filgueira** ## 🛠️ Tecnologias Utilizadas
* **SQL Server:** Repositório do banco de dados relacional original.
* **MongoDB & MONGOSH:** Sistema de gerenciamento do banco de dados NoSQL.
* **MongoDB Compass:** Interface gráfica para modelagem, visualização e exportação dos dados.

## Estrutura do Repositório
* `relatorio_final.pdf`: Documentação completa com a análise, diagrama ER, modelagem NoSQL, scripts e print das operações CRUD.
* `/scripts_sql`: Scripts utilizados para extração dos dados do SQL Server.
* `/scripts_migracao`: Scripts executados no `mongosh` para criação das coleções e inserção em lote (`insertMany`).
* `/exportacao_nosql`: Arquivos `.json` com o banco NoSQL final exportado.

## Como Executar e Importar o Banco
Para rodar este projeto localmente e visualizar os dados no MongoDB:

1. Certifique-se de ter o MongoDB e o MongoDB Compass instalados.
2. Abra o MongoDB Compass e conecte-se ao seu `localhost`.
3. Crie um novo banco de dados chamado `LibAcad_NoSQL`.
4. Crie as três coleções: `usuarios`, `livros` e `emprestimos`.
5. Em cada coleção, clique em **Add Data** -> **Import JSON or CSV file** e selecione os respectivos arquivos `.json` localizados na pasta `/exportacao_nosql` deste repositório.

## Estrutura das Coleções (Modelagem NoSQL)
Para reduzir a necessidade de *JOINs*, foram aplicados os seguintes padrões:
* **Usuários:** Coleção independente (Referencing).
* **Livros:** Embutindo as informações de Categoria e Autores (Embedding).
* **Empréstimos:** Embutindo os itens do empréstimo (*One-to-Many Inside the Parent*).
