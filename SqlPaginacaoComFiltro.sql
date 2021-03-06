WITH PRODUTO AS
  (SELECT *,
          ROW_NUMBER() OVER(
                            ORDER BY NOME ASC , ID DESC) AS ROWNUMBER
   FROM
     (SELECT ID = CP.PASTA_ID,
             CP.NOME
      FROM VIVO_EMAIL_PASTA AS CP (NOLOCK)
      WHERE CP.IDC = '2758' ) AS TEMPO WHERE NOME LIKE '%V%')
	SELECT TOP (10) PRODUTO.*,
		   Total =
	  (SELECT COUNT(1)
	   FROM PRODUTO)
	FROM PRODUTO
	WHERE ROWNUMBER > 0
	ORDER BY NOME ASC,
	ID DESC
	
	
	 WITH COMMENTS AS(SELECT *, ROW_NUMBER() OVER(ORDER BY ID) AS ROWNUMBER FROM( 
     SELECT
         ID Id,
         IDO IdOperador,
         TIPO TipoModulo,
         C.ID_TIPO IdAtividade,
         TEXTO Texto,
         DATA_INCLUSAO DataInclusao
         FROM VIVO_COMENTARIO C
     (NOLOCK) WHERE C.ID_TIPO = 0 AND C.TIPO = 0   AND C.IDC = 2758
 )AS TEMPO)
 
 SELECT TOP(10) COMMENTS.*, Total = (SELECT COUNT(1) FROM COMMENTS)
 FROM COMMENTS WHERE ROWNUMBER > (0*5)ORDER BY ID