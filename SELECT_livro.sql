SELECT
    l.id_livro,
    l.titulo,
    l.ano,
    l.quantidade_estoque,
    c.id_categoria,
    c.nome AS categoria
FROM Livro l
INNER JOIN Categoria c
ON l.id_categoria = c.id_categoria;