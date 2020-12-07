
     --           SELECT *
     --           FROM GrupoAtributoModulo
	    --            INNER JOIN PropriedadeGrupo ON PropriedadeGrupo.Id = GrupoAtributoModulo.IdGrupoAtributo
     --           WHERE GrupoAtributoModulo.IdModulo = 6
	    --            AND PropriedadeGrupo.IdConta = 84
					--AND PropriedadeGrupo.Nome = 'Notas'


						
                    DECLARE @IdConta  INT  =  84  
					SELECT  
							 [IdModulo],[Descrição do Produto],[PLU],[Marca do Produto Rec],[Data de Compra],[Lote/Série],[Data de Validade],[Data de Fabricação]

                FROM (
					  SELECT U.* FROM ( 
						sELECT Propriedade.Nome AS CustomVal, Resposta AS Resposta, Atributo.IdModulo from Atributo
								INNER JOIN PropriedadeResposta Resposta ON Resposta.IdUser = Atributo.Id
									AND IdPropriedade IN (SELECT Id FROM Propriedade WHERE Propriedade.IdPropriedadeGrupo = 1119)
								INNER JOIN Propriedade ON Propriedade.Id = Resposta.IdPropriedade
								INNER JOIN PropriedadeGrupo ON PropriedadeGrupo.Id = Propriedade.IdPropriedadeGrupo
							WHERE Atributo.IdModulo = 643012
								AND Atributo.IdConta = 84
								AND PropriedadeGrupo.Id = 1119
	                ) AS C
	                PIVOT (MAX(Resposta) FOR C.CustomVal IN (
								[Descrição do Produto],[PLU],[Marca do Produto Rec],[Data de Compra],[Lote/Série],[Data de Validade],[Data de Fabricação]
						)) AS U
	                ) AS P 
	               

				   		
     --        SELECT PropriedadeResposta.IdUser, PropriedadeResposta.Id, Propriedade.Nome, PropriedadeResposta.Resposta,GrupoAtributoModulo.IdGrupoAtributo
     --           FROM Atributo
	    --            INNER JOIN PropriedadeResposta ON PropriedadeResposta.IdUser = Atributo.Id
		   --             AND IdPropriedade IN (SELECT Id FROM Propriedade WHERE Propriedade.IdPropriedadeGrupo = 1119)
	    --            INNER JOIN Propriedade ON Propriedade.Id = PropriedadeResposta.IdPropriedade
	    --            INNER JOIN PropriedadeGrupo ON PropriedadeGrupo.Id = Propriedade.IdPropriedadeGrupo
					--INNER JOIN GrupoAtributoModulo ON PropriedadeGrupo.Id = GrupoAtributoModulo.IdGrupoAtributo

     --           WHERE Atributo.IdModulo = 643012
     --               AND Atributo.IdConta = 84
					--AND PropriedadeGrupo.Id = 1119
     --           ORDER BY PropriedadeResposta.IdUser, Propriedade.Ordem
					
      
            

