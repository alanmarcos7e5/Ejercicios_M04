<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes"/>
    <xsl:template match="/">
        <xsl:variable name="prediccion" select="root/prediccion"></xsl:variable>
        <xsl:variable name="noData" select="'naN'"></xsl:variable>
        <html>
            <body>
                <h1>El tiempo en <xsl:value-of select="root/provincia"/> </h1>
                <table style="border: 1px solid blue">
                    <tr style="background-color:lightgrey">
                        <th>Fecha</th>
                        <th>Máxima</th>
                        <th>Mínima</th>
                        <th>Predicción</th>
                    </tr>
                    <xsl:for-each select="$prediccion/dia">
                        <xsl:variable name="estadoCielo" select="estado_cielo[@periodo='00-24']/@descripcion"></xsl:variable>
                        <tr style="background-color:lightblue">
                            <th><xsl:value-of select="@fecha"></xsl:value-of></th>
                            <th><xsl:value-of select="temperatura/maxima"></xsl:value-of></th>
                            <th><xsl:value-of select="temperatura/minima"></xsl:value-of></th>
                            <th>
                                <xsl:choose>
                                    <xsl:when test="$estadoCielo = 'Poco nuboso'">
                                        <img>
                                            <xsl:attribute name="src">images/tormenta.png</xsl:attribute>
                                        </img>
                                    </xsl:when>
                                    <xsl:when test="$estadoCielo = 'Nuboso'">
                                        <img>
                                            <xsl:attribute name="src">images/nublado.jpg</xsl:attribute>
                                        </img>
                                    </xsl:when>
                                    <xsl:when test="$estadoCielo = 'Despejado'">
                                        <img>
                                            <xsl:attribute name="src">images/despejado.jpg</xsl:attribute>
                                        </img>
                                    </xsl:when>
                                    <xsl:otherwise>
                                        <xsl:value-of select="$noData"></xsl:value-of>
                                    </xsl:otherwise>
                                </xsl:choose>
                            </th>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>