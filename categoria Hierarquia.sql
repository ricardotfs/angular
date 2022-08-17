
;WITH  Categorias
AS
(
    SELECT  t1.Id, t1.Nome, IdBaseConhecimentoCategoriaPai,1 AS [Level], 
                 CAST((t1.Nome) AS VARCHAR(MAX)) AS Categoria
    FROM    BaseConhecimentoCategoria t1
	join Propriedade on Propriedade.Id =t1.IdPropriedade
    WHERE   IdBaseConhecimentoCategoriaPai IS NULL

    UNION ALL
    SELECT  t2.id, t2.[Nome], t2.IdBaseConhecimentoCategoriaPai,M.[level] + 1 AS [Level],
                 CAST((M.Categoria + ' -> ' + t2.Nome) AS VARCHAR(MAX)) AS Categoria
    FROM    BaseConhecimentoCategoria AS t2
            JOIN Categorias AS M ON t2.IdBaseConhecimentoCategoriaPai = M.Id   
			join Propriedade on Propriedade.Id =t2.IdPropriedade
)
SELECT Categoria FROM Categorias
where Level >1
order by Categoria