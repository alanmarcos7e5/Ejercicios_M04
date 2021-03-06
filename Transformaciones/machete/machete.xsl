<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes"/> <!--solo para identar la salida si es xml-->
    <xsl:template match="/">
        
        <xsl:variable name="prediccion" select="root/prediccion"></xsl:variable>
        
        <xsl:value-of select="@fecha"></xsl:value-of>
        
        <xsl:for-each select="$prediccion/dia">
        </xsl:for-each> 
        
        <xsl:choose>
            <xsl:when test="$estadoCielo = 'Nuboso'">
            </xsl:when>           
            <xsl:otherwise>
            </xsl:otherwise>        
        </xsl:choose>
        style="background-color:lightblue"
        <xsl:if test="cualquier condicion">
        </xsl:if>    
        <!-- ejemplo de concat-->
        <img src="{concat('../',$recetaId/informacio_general/foto)}"></img>
       
        <img>
            <xsl:attribute name="src">images/tormenta.png</xsl:attribute>
        </img> 
         <!-- ejemplo de attribute-->
        <img>
            <xsl:attribute name="src"> <xsl:value-of select="$recetaId/informacio_general/foto"></xsl:value-of> </xsl:attribute>
        </img> 

    </xsl:template>
</xsl:stylesheet>