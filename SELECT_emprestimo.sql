SELECT
    e.id_emprestimo,
    e.data_emprestimo,
    e.data_prevista,
    e.status,
    u.id_usuario,
    u.nome
FROM Emprestimo e
INNER JOIN Usuario u
ON e.id_usuario = u.id_usuario;