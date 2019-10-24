<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        
        <html>              
            <head>
                <title>Arquivos Sonoros Evo</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
            </head>
            
            <body>
                <hr/>
                
                <h1 align="center">
                    <b><font color="#dc3500">Arquivo Sonoro de Ernesto Veiga de Oliveira</font></b>
                </h1>

                
                <hr width="65%"/>
            </body>
        </html>
                
        <xsl:apply-templates mode="individual" />
                
                
    </xsl:template>
    
    
    <xsl:template match="doc" mode="individual">
            <html>
                <body>
                    <h1><xsl:value-of select="tit"/></h1>
                    <table>
                        <xsl:if test="prov">
                             <tr>
                                 <th>Provincia: </th> <td><xsl:value-of select="prov"/></td>
                             </tr>
                        </xsl:if>
                        <xsl:if test="local">
                            <tr>
                                <th>Local: </th> <td><xsl:value-of select="local"/></td>
                            </tr>
                        </xsl:if>
                        <xsl:if test="musico">
                            <tr>
                                <th>Musico: </th> <td><xsl:value-of select="musico"/></td>
                            </tr>
                        </xsl:if>
                        <xsl:if test="file">    
                            <tr>
                                <th>Ficheiro: </th> <td><xsl:value-of select="file"/></td>
                            </tr>
                        </xsl:if>
                        <xsl:if test="duracao">    
                            <tr>
                                <th>Duração: </th> <td><xsl:value-of select="duracao"/></td>
                            </tr>
                        </xsl:if>
                        
                    </table>
                    <hr width="100%"/>
                </body>
            </html>    
    </xsl:template>
    
</xsl:stylesheet>