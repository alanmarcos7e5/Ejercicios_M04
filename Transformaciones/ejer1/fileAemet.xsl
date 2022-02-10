<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/root/prediccion">
    <html>
    <body>
        <h1>el tiempo</h1>
        <table style="border: 1px solid blue">
            <tr style="background-color:lightblue">
                <th style="text-align:left">fecha</th>
                <th style="text-align:left">t.max</th>
                <th style="text-align:left">t.min</th>
                <th style="text-align:left">estado</th>
            </tr>
            <xsl:for-each select="dia">
            <tr>
                <th><xsl:value-of select="@fecha"></xsl:value-of></th>
                <th><xsl:value-of select="temperatura/maxima"></xsl:value-of></th>
                <th><xsl:value-of select="temperatura/minima"></xsl:value-of></th>
                <th><xsl:value-of select="estado_cielo[1]"></xsl:value-of></th>
            </tr>
            </xsl:for-each>
        </table>
    </body>
    </html>
    </xsl:template>
</xsl:stylesheet>

