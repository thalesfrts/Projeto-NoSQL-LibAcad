SELECT
    la.id_livro,
    a.id_autor,
    a.nome
FROM Livro_Autor la
INNER JOIN Autor a
ON la.id_autor = a.id_autor;