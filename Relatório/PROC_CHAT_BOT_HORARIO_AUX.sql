/*
		DECLARE @IDCONTA INT = 84
		DECLARE @DATAINICIO DATETIME = '2020-05-20 00:59:12'
		DECLARE @DATAFIM DATETIME = '2020-05-20 14:59:12'
		DECLARE @IDGRUPO VARCHAR(MAX) = '1,2,3,4,5,6,7,8,9,10,11,12,13,14'	
		DECLARE @TIMEZONE VARCHAR(MAX)
		SELECT @TIMEZONE = T.UTCOFFSET FROM CONTA (NOLOCK) JOIN TIMEZONES T (NOLOCK) ON T.TIMEZONEID = CONTA.IDTIMEZONE WHERE CONTA.Id = @IDCONTA

		EXEC PROC_CHAT_BOT_HORARIO_AUX @IDCONTA,@DATAINICIO,@DATAFIM,@IDGRUPO,'23',23,@TIMEZONE
*/

ALTER PROC PROC_CHAT_BOT_HORARIO_AUX 
(	
	 @IDCONTA  INT 
	,@DATAINICIO DATETIME
	,@DATAFIM DATETIME
	,@IDGRUPO VARCHAR(MAX)
	,@HORAMASK VARCHAR(MAX) 
	,@HORA INT 
	,@TIMEZONE VARCHAR(MAX)
)
AS 

	BEGIN		
				DECLARE @HOUR INT =  REPLACE(SUBSTRING(@TIMEZONE, 1, 3),':','')
			
				DECLARE @TEMP TABLE(
									ID INT,
									IDCONTATO INT,
									IDPROPRIETARIO INT,
									DATACRIACAO DATETIME,
									CANAL VARCHAR(MAX),
									INTENCAO VARCHAR(MAX),
									SATISFATORIO INT,
									INSATISFATORIO INT,
									FILA VARCHAR(MAX),
									QUANTIDADECLIENTEUNICO INT,
									STATUSCHAT INT,
									DATAINICIO DATETIME,
									DATACONCLUSAO DATETIME,
									DATAALTERACAO DATETIME
							  )  
				DECLARE @TEMP1 TABLE(
									ID INT,
									IDCONTATO INT,
									IDPROPRIETARIO INT,
									DATACRIACAO DATETIME,
									CANAL VARCHAR(MAX),
									INTENCAO VARCHAR(MAX),
									SATISFATORIO INT,
									INSATISFATORIO INT,
									FILA VARCHAR(MAX),
									QUANTIDADECLIENTEUNICO INT,
									STATUSCHAT INT,
									DATAINICIO DATETIME,
									DATACONCLUSAO DATETIME,
									DATAALTERACAO DATETIME
							  ) 
			DECLARE @TABLE TABLE(HORAMASK VARCHAR(MAX),HORA VARCHAR(MAX),MINUTO INT,CANAL VARCHAR(MAX),INTENCAO VARCHAR(MAX), SATISFATORIO INT,INSATISFATORIO INT,
			[Sem Avalia��o] INT,[Qtd transbordo Humano] INT,FILA VARCHAR(MAX),[Qtd Cliente �nico] INT,[Tempo m�dio (dentro do BOT)] VARCHAR(MAX), Total INT)
			
			DECLARE @TABLE1 TABLE(HORAMASK VARCHAR(MAX),HORA VARCHAR(MAX),MINUTO INT,CANAL VARCHAR(MAX),INTENCAO VARCHAR(MAX), SATISFATORIO INT,INSATISFATORIO INT,
			[Sem Avalia��o] INT,[Qtd transbordo Humano] INT,FILA VARCHAR(MAX),[Qtd Cliente �nico] INT,[Tempo m�dio (dentro do BOT)] VARCHAR(MAX), Total INT)							  

			INSERT INTO @TEMP
			SELECT 
				C.Id,
				C.IDCONTATO,
				C.IdProprietario,
				C.DATACRIACAO,
				CANAL = (SELECT TOP 1 CH.RESPOSTA FROM PROPRIEDADERESPOSTA CH (NOLOCK) WHERE  CH.IDUSER = C.ID AND CH.IdPropriedade IN (SELECT TOP 1 Id FROM Propriedade 
																									WHERE IdConta = @IdConta 
																											AND Nome = 'Chat' 
																											AND IdPropriedadeGrupo IN (SELECT Id FROM PropriedadeGrupo WHERE IdConta = @IdConta AND IdTipoCadastro = 10))),
	
				I.RESPOSTA INTENCAO,
				(CASE WHEN PR.RESPOSTA = 'TRUE' THEN 1 ELSE 0 END)  SATISFATORIO,
				(CASE WHEN PR.RESPOSTA <> 'TRUE' THEN 1 ELSE 0 END)  INSATISFATORIO,
			    ISNULL(F.NOME,'') Fila,
				(SELECT COUNT(1) FROM CHATINTENTS INTE JOIN CONTATO (NOLOCK) ON C.IDCONTATO = CONTATO.ID WHERE  INTE.Intent = I.RESPOSTA AND INTE.IDCHAT = C.ID) QUANTIDADECLIENTEUNICO,
				C.IDSTATUS STATUSCHAT,
				c.DATAINICIO,
				C.DATACONCLUSAO,
				C.DATAALTERACAO
			FROM CHAT C(NOLOCK)
			 JOIN GRUPOCHATSETTINGS GS (NOLOCK)ON C.IDGRUPOCHAT = GS.IDGRUPOCHAT 
			 JOIN TICKET T (NOLOCK) ON T.IDMODULO = C.ID AND T.MODULO = 'CHAT'
			 JOIN PROPRIEDADERESPOSTA I (NOLOCK) ON  I.IDUSER = T.ID AND I.IDPROPRIEDADE = (SELECT ID FROM PROPRIEDADE P (NOLOCK)WHERE P.IDCONTA = @IDCONTA AND P.NOME = 'INTENTION')
			 JOIN PROPRIEDADERESPOSTA PR (NOLOCK) ON PR.IDUSER = T.ID AND PR.IDPROPRIEDADE = (SELECT P.ID FROM PROPRIEDADE P(NOLOCK) WHERE P.IDCONTA = @IDCONTA AND P.NOME = 'CONCLUIDO')
			 LEFT JOIN FILA F (NOLOCK) ON F.ID = C.IDFILA
			WHERE 
				C.IDCONTA = @IDCONTA 
				AND C.DATACRIACAO BETWEEN @DATAINICIO  AND @DATAFIM 
				AND C.IDGRUPOCHAT IN(SELECT INTVALUE FROM [DBO].[CSVTOINT](@IDGRUPO)) 
				AND GS.USABOT = 1    
				AND DATEPART(HH,DATEADD(HOUR,@HOUR,C.DATACRIACAO)) = @HORA  AND (DATEPART(MI,DATEADD(HOUR,@HOUR,C.DATACRIACAO)) >= 0 AND DATEPART(MI,DATEADD(HOUR,@HOUR,C.DATACRIACAO)) <= 29) 

		INSERT INTO @TEMP1
			SELECT 
				C.Id,
				C.IDCONTATO,
				C.IdProprietario,
				C.DATACRIACAO,
				CANAL = (SELECT TOP 1 CH.RESPOSTA FROM PROPRIEDADERESPOSTA CH (NOLOCK) WHERE  CH.IDUSER = C.ID AND CH.IdPropriedade IN (SELECT TOP 1 Id FROM Propriedade 
																									WHERE IdConta = @IdConta 
																											AND Nome = 'Chat' 
																											AND IdPropriedadeGrupo IN (SELECT Id FROM PropriedadeGrupo WHERE IdConta = @IdConta AND IdTipoCadastro = 10))),
				I.RESPOSTA INTENCAO,
				(CASE WHEN PR.RESPOSTA = 'TRUE' THEN 1 ELSE 0 END)  SATISFATORIO,
				(CASE WHEN PR.RESPOSTA <> 'TRUE' THEN 1 ELSE 0 END)  INSATISFATORIO,
			    ISNULL(F.NOME,'') Fila,
				(SELECT COUNT(1) FROM CHATINTENTS INTE JOIN CONTATO (NOLOCK) ON C.IDCONTATO = CONTATO.ID WHERE  INTE.Intent = I.RESPOSTA AND INTE.IDCHAT = C.ID) QUANTIDADECLIENTEUNICO,
				C.IDSTATUS STATUSCHAT,
				c.DATAINICIO,
				C.DATACONCLUSAO,
				C.DATAALTERACAO
			FROM CHAT C(NOLOCK)
			 JOIN GRUPOCHATSETTINGS GS (NOLOCK)ON C.IDGRUPOCHAT = GS.IDGRUPOCHAT 
			 JOIN TICKET T (NOLOCK) ON T.IDMODULO = C.ID AND T.MODULO = 'CHAT'
			 JOIN PROPRIEDADERESPOSTA I (NOLOCK) ON  I.IDUSER = T.ID AND I.IDPROPRIEDADE = (SELECT ID FROM PROPRIEDADE P (NOLOCK)WHERE P.IDCONTA = @IDCONTA AND P.NOME = 'INTENTION')
			 JOIN PROPRIEDADERESPOSTA PR (NOLOCK) ON PR.IDUSER = T.ID AND PR.IDPROPRIEDADE = (SELECT P.ID FROM PROPRIEDADE P(NOLOCK) WHERE P.IDCONTA = @IDCONTA AND P.NOME = 'CONCLUIDO')
			 LEFT JOIN FILA F (NOLOCK) ON F.ID = C.IDFILA
			WHERE 
				C.IDCONTA = @IDCONTA 
				AND C.DATACRIACAO BETWEEN @DATAINICIO  AND @DATAFIM 
				AND C.IDGRUPOCHAT IN(SELECT INTVALUE FROM [DBO].[CSVTOINT](@IDGRUPO)) 
				AND GS.USABOT = 1    
				AND DATEPART(HH,DATEADD(HOUR,@HOUR,C.DATACRIACAO)) = @HORA  AND (DATEPART(MI,DATEADD(HOUR,@HOUR,C.DATACRIACAO)) >= 30 AND DATEPART(MI,DATEADD(HOUR,@HOUR,C.DATACRIACAO)) <= 59) 

	
		INSERT INTO @TABLE
		SELECT
			@HORAMASK + ':00hs - ' + @HORAMASK + ':29hs' AS HORAMASK, 
			@HORA AS HORA, 
			29 AS MINUTO, 
			CANAL [Canal],
			INTENCAO [Inten��o],
			SUM(SATISFATORIO) [Satisfat�rio],
			SUM(INSATISFATORIO) [Insatisfat�rio],
			SUM(CASE WHEN STATUSCHAT = 2 OR STATUSCHAT = 5 THEN 1 ELSE 0 END) [Sem Avalia��o],
			SUM(CASE WHEN IDPROPRIETARIO = 1 THEN 0 ELSE 1 END) [Qtd transbordo Humano],
			FILA,
			QUANTIDADECLIENTEUNICO [Qtd Cliente �nico],
			CONVERT(VARCHAR, DATEADD(SECOND, ISNULL(AVG(DATEDIFF(SECOND,DATEADD(HOUR,@HOUR,DATACRIACAO),ISNULL(DATEADD(HOUR,@HOUR,DATAINICIO),DATEADD(HOUR,@HOUR,DATACRIACAO)))),0), 0), 108)[Tempo m�dio (dentro do BOT)],
			SUM(SATISFATORIO) + SUM(INSATISFATORIO)  + SUM(CASE WHEN STATUSCHAT = 2 OR STATUSCHAT = 5 THEN 1 ELSE 0 END) Total
		FROM @TEMP
		GROUP BY CANAL,INTENCAO,SATISFATORIO,FILA,QUANTIDADECLIENTEUNICO,DATACRIACAO

		INSERT INTO @TABLE1
		SELECT
			@HORAMASK + ':30hs - ' + @HORAMASK + ':59hs' AS HORAMASK, 
			@HORA AS HORA, 
			59 AS MINUTO, 
			CANAL [Canal],
			INTENCAO [Inten��o],
			SUM(SATISFATORIO) [Satisfat�rio],
			SUM(INSATISFATORIO) [Insatisfat�rio],
			SUM(CASE WHEN STATUSCHAT = 2 OR STATUSCHAT = 5 THEN 1 ELSE 0 END) [Sem Avalia��o],
			SUM(CASE WHEN IDPROPRIETARIO = 1 THEN 0 ELSE 1 END) [Qtd transbordo Humano],
			FILA,
			QUANTIDADECLIENTEUNICO [Qtd Cliente �nico],
			CONVERT(VARCHAR, DATEADD(SECOND, ISNULL(AVG(DATEDIFF(SECOND,DATEADD(HOUR,@HOUR,DATACRIACAO),ISNULL(DATEADD(HOUR,@HOUR,DATAINICIO),DATEADD(HOUR,@HOUR,DATACRIACAO)))),0), 0), 108)[Tempo m�dio (dentro do BOT)],
			SUM(SATISFATORIO) + SUM(INSATISFATORIO)  + SUM(CASE WHEN STATUSCHAT = 2 OR STATUSCHAT = 5 THEN 1 ELSE 0 END) Total
		FROM @TEMP1
		GROUP BY CANAL,INTENCAO,SATISFATORIO,FILA,QUANTIDADECLIENTEUNICO,DATACRIACAO


		IF((SELECT COUNT(1) FROM @TABLE) = 0)
			BEGIN
				INSERT INTO @TABLE VALUES(@HORAMASK + ':00hs - ' + @HORAMASK + ':29hs',@HORA,29,'','',0,0,0,0,'',0,'',0)
			END

		IF((SELECT COUNT(1) FROM @TABLE1) = 0)
			BEGIN
				INSERT INTO @TABLE1 VALUES(@HORAMASK + ':30hs - ' + @HORAMASK + ':59hs',@HORA,59,'','',0,0,0,0,'',0,'',0)
			END
		
		SELECT * FROM @TABLE
		UNION
		SELECT * FROM @TABLE1

	END
