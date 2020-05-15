
/*
		DECLARE @IDCONTA INT = 84
		DECLARE @DATAINICIO DATETIME = '2020-04-07 00:00:00'
		DECLARE @DATAFIM DATETIME = '2020-05-07 23:59:59'
		DECLARE @IDGRUPO VARCHAR(MAX) = '23'
		DECLARE @ATENDENTE VARCHAR(MAX) = '142,264,253,274,273,278,279,175,143,277,280,281,249,261,257,282,251,283,284,255,176,285,286,265,245,260,266,256,287,288,250,177,276,259,262,263,254,248,289,258,290'
	
		DECLARE @QTD_PAGINA INT = 100
		DECLARE @PAGINA INT = 0

		EXEC PROC_CHAT_GRUPO_MES @IDCONTA,@DATAINICIO,@DATAFIM,@IDGRUPO,@ATENDENTE,@QTD_PAGINA,@PAGINA
*/

ALTER PROC PROC_CHAT_GRUPO_MES 
(	
	 @IDCONTA  INT 
	,@DATAINICIO DATETIME
	,@DATAFIM DATETIME
	,@IDGRUPO VARCHAR(MAX)
	,@ATENDENTE VARCHAR(MAX)
	,@QTD_PAGINA INT 
	,@PAGINA INT 
)

AS 
	BEGIN	
			SET @ATENDENTE =  '0,' + @ATENDENTE
			DECLARE @TIMEZONE VARCHAR(MAX)
			SELECT @TIMEZONE = T.UTCOFFSET FROM CONTA (NOLOCK) JOIN TIMEZONES T (NOLOCK) ON T.TIMEZONEID = CONTA.IDTIMEZONE WHERE CONTA.Id = @IDCONTA

			DECLARE @HOUR INT =  SUBSTRING(@TIMEZONE, 1, 3)

			DECLARE @TABLE TABLE (IDGRUPO INT,ANO INT,MES_NUMERO INT, MES VARCHAR(MAX),ENTRANTES INT,RECEBIDOS INT,ABONDONADOS INT,TEMPO_MEDIO_ABONDONO INT,OFFILINE INT,TEMPO_MEDIO_ESPERA INT,TEMPO_MEDIO_ATENDIMENTO INT,ATENDIMENTO_ATE_30_SEG INT)
			DECLARE @TABLE1 TABLE (IDGRUPO INT,ANO INT,MES_NUMERO INT, MES VARCHAR(MAX),ENTRANTES INT,RECEBIDOS INT,ABONDONADOS INT,TEMPO_MEDIO_ABONDONO INT,OFFILINE INT,TEMPO_MEDIO_ESPERA INT,TEMPO_MEDIO_ATENDIMENTO INT,ATENDIMENTO_ATE_30_SEG INT)

			INSERT INTO @TABLE
			EXEC GETALLDAYSBETWEENTWOMONTH @DATAINICIO,@DATAFIM,@IDGRUPO,@TIMEZONE
					
			INSERT INTO @TABLE1
			SELECT
				C.IdGrupoChat IDGRUPO,
				YEAR(DATEADD(HOUR,@HOUR,C.DATACRIACAO)) ANO,
				MONTH(DATEADD(HOUR,@HOUR,C.DATACRIACAO)) MES_NUMERO,
				FORMAT(DATEADD(HOUR,@HOUR,C.DATACRIACAO), 'MMMM', 'pt-br') MES,
				SUM(1) ENTRANTES,
				SUM((CASE WHEN ISNULL(C.IDPROPRIETARIO,0) <> 0 THEN 1 ELSE 0 END)) RECEBIDOS,
				SUM((CASE WHEN ISNULL(C.IDPROPRIETARIO,0) = 0 THEN 1 ELSE 0 END)) ABONDONADOS,	
								(SELECT 
					AVG( DATEDIFF(SECOND,DATEADD(HOUR,@HOUR,CC.DATACRIACAO),ISNULL(DATEADD(HOUR,@HOUR,CC.DATACONCLUSAO),DATEADD(HOUR,@HOUR,CC.DATACRIACAO)))) TEMPO_MEDIO_ABONDONO 
					FROM CHAT CC(NOLOCK)
					WHERE 
					CC.IDCONTA = @IDCONTA 
					AND CC.DATACRIACAO BETWEEN @DATAINICIO AND @DATAFIM 
					AND CC.IDGRUPOCHAT = C.IDGRUPOCHAT 
					AND ISNULL(CC.IDPROPRIETARIO,0) = 0
				GROUP BY IDGRUPOCHAT) TEMPO_MEDIO_ABONDONO,
				SUM((CASE WHEN C.IDSTATUS = 6 THEN 1 ELSE 0 END)) OFFILINE,
				AVG(DATEDIFF(SECOND,DATEADD(HOUR,@HOUR,C.DATACRIACAO),COALESCE(DATEADD(HOUR,@HOUR,C.DATAINICIO), DATEADD(HOUR,@HOUR,C.DATACONCLUSAO), DATEADD(HOUR,@HOUR,C.DATAALTERACAO)))) TEMPO_MEDIO_ESPERA,
				(SELECT 
					AVG(DATEDIFF(SECOND,DATEADD(HOUR,@HOUR,CC.DATAINICIO),ISNULL(DATEADD(HOUR,@HOUR,CC.DATACONCLUSAO),DATEADD(HOUR,@HOUR,CC.DATAALTERACAO)))) TEMPO_MEDIO_ATENDIMENTO 
					FROM CHAT CC(NOLOCK)
					WHERE 
					CC.IDCONTA = @IDCONTA 
					AND CC.DATACRIACAO BETWEEN @DATAINICIO AND @DATAFIM 
					AND CC.IDGRUPOCHAT = C.IDGRUPOCHAT 
					AND ISNULL(CC.IDPROPRIETARIO,0) <> 0
				GROUP BY IDGRUPOCHAT) TEMPO_MEDIO_ATENDIMENTO,
				SUM((CASE WHEN ISNULL(C.IDPROPRIETARIO,0) <> 0 AND DATEDIFF(SECOND,C.DATACRIACAO,ISNULL(DATEADD(HOUR,@HOUR,C.DATAINICIO),DATEADD(HOUR,@HOUR,C.DATACRIACAO))) <= 30 THEN 1 ELSE 0 END)) ATENDIMENTO_ATE_30_SEG
			FROM CHAT C(NOLOCK)
			WHERE 
				C.IDCONTA = @IDCONTA 
				AND C.DATACRIACAO  BETWEEN @DATAINICIO AND @DATAFIM
				AND C.IDGRUPOCHAT IN(SELECT INTVALUE FROM [DBO].[CSVTOINT](@IDGRUPO)) 
				AND ISNULL(C.IDPROPRIETARIO,0)  IN(SELECT INTVALUE FROM [DBO].[CSVTOINT](@ATENDENTE)) 					
			GROUP BY C.IdGrupoChat, YEAR(DATEADD(HOUR,@HOUR,C.DATACRIACAO)),MONTH(DATEADD(HOUR,@HOUR,C.DATACRIACAO)),FORMAT(DATEADD(HOUR,@HOUR,C.DATACRIACAO), 'MMMM', 'pt-br') 

			UPDATE
			    A
			SET
				A.ENTRANTES = B.ENTRANTES,
				A.ATENDIMENTO_ATE_30_SEG  = B.ATENDIMENTO_ATE_30_SEG,
				A.RECEBIDOS = B.RECEBIDOS,
				A.ABONDONADOS = B.ABONDONADOS,
				A.TEMPO_MEDIO_ABONDONO = B.TEMPO_MEDIO_ABONDONO,
				A.OFFILINE = B.OFFILINE,
				A.TEMPO_MEDIO_ESPERA = B.TEMPO_MEDIO_ESPERA,
				A.TEMPO_MEDIO_ATENDIMENTO = B.TEMPO_MEDIO_ATENDIMENTO
			FROM @TABLE AS A INNER JOIN @TABLE1 AS B ON A.IDGRUPO = B.IDGRUPO AND A.ANO = B.ANO AND A.MES = B.MES
		
		  ;WITH CHAT_TEMP AS (SELECT *,ROW_NUMBER() OVER(ORDER BY ANO DESC, MES_NUMERO DESC) AS ROWNUMBER
				FROM (	
						SELECT * FROM @TABLE 
					 ) AS TEMPO)

			SELECT TOP (@QTD_PAGINA) 
				Grupo = (SELECT GG.NOME FROM GRUPOCHAT GG (NOLOCK) WHERE GG.ID = IDGRUPO),
				ANO,
				MES,
				ENTRANTES [Quantidades de chats recebidos],
				RECEBIDOS [Quantidade de chat atendidos],
				CAST(ROUND(CAST(((CAST(RECEBIDOS AS DECIMAL)/CAST((CASE WHEN ENTRANTES = 0 THEN 1 ELSE ENTRANTES END) AS DECIMAL)) * 100) AS DECIMAL),2) AS VARCHAR) + '%' [%de chat recebidos x atendidos],
				ABONDONADOS [Chat perdidos],
				CAST(ROUND(CAST(((CAST(ABONDONADOS AS DECIMAL)/CAST((CASE WHEN ENTRANTES = 0 THEN 1 ELSE ENTRANTES END) AS DECIMAL)) * 100) AS decimal),2) AS VARCHAR) + '%'[%Taxa de perdido],
				CONVERT(VARCHAR, DATEADD(MS, ISNULL(TEMPO_MEDIO_ABONDONO,0) * 1000, 0), 108)[Tempo m�dio de perdido],
				OFFILINE [chat fora do hor�rio de atendimento],
				CONVERT(VARCHAR, DATEADD(MS, ISNULL(TEMPO_MEDIO_ESPERA,0) * 1000, 0), 108) [Tempo M�dio de espera para ser atendido],
				CONVERT(VARCHAR, DATEADD(MS, ISNULL(TEMPO_MEDIO_ATENDIMENTO,0) * 1000, 0), 108) [Tempo M�dio de Atendimento],
				CAST(CAST((CAST(ATENDIMENTO_ATE_30_SEG AS DECIMAL)/CAST((CASE WHEN RECEBIDOS = 0 THEN 1 ELSE RECEBIDOS END) AS DECIMAL) * 100) AS DECIMAL) AS VARCHAR) + '%'[%N�vel de servi�o]
				--Total =(SELECT COUNT(1)FROM CHAT_TEMP)
			FROM CHAT_TEMP
			WHERE ROWNUMBER > (@PAGINA * @QTD_PAGINA)
			ORDER BY Grupo,ANO DESC,MES_NUMERO ASC
			
		END
	
	