<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/evaluacion">
    <html>
    <body>
        <h1>Evaluaciones</h1>
        <table style="border: 1px solid blue">
            <tr style="background-color:lightblue">
                <th style="text-align:left">Nombre</th>
                <th style="text-align:left">Apellido</th>
                <th style="text-align:left">Telefono</th>
                <th style="text-align:left">Repetidor</th>
                <th style="text-align:left">Nota practica</th>
                <th style="text-align:left">Nota examen</th>
                <th style="text-align:left">Nota total</th>
            </tr>
            <xsl:for-each select="alumno">
            <xsl:sort select="apellidos"/>
            <tr>
                <th><xsl:value-of select="nombre"></xsl:value-of></th>
                <th><xsl:value-of select="apellidos"></xsl:value-of></th>
                <th><xsl:value-of select="telefono"></xsl:value-of></th>
                <th><xsl:value-of select="@repite"></xsl:value-of></th>
                <xsl:apply-templates match="notas"/>
            </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
    </xsl:template>
    <xsl:template match="notas">
        <th><xsl:value-of select="practicas"></xsl:value-of></th>
        <th><xsl:value-of select="examen"></xsl:value-of></th>
        
        <xsl:if test="(practicas + examen) div 2 &gt; 8"> 
        <th style="background-color:lightblue"><xsl:value-of select="(practicas + examen) div 2"></xsl:value-of></th>
        </xsl:if>
        <xsl:if test="(practicas + examen) div 2 &lt; 5"> 
        <th style="background-color:red"><xsl:value-of select="(practicas + examen) div 2"></xsl:value-of></th>
        </xsl:if>
        <xsl:if test="(practicas + examen) div 2 &gt;= 5 and (practicas + examen) div 2 &lt; 8"> 
        <th style="background-color:grey"><xsl:value-of select="(practicas + examen) div 2"></xsl:value-of></th>
        </xsl:if>
       
    </xsl:template>

</xsl:stylesheet>
