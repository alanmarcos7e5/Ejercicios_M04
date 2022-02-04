<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.aemet.es/xml/municipios/localidad_08019.xml" version="1.0">
<xsl:output method="xml" indent="yes"/>
<xsl:template match="/">
</xsl:template>
</xsl:stylesheet>
<html>
<body>

    <xsl:for-each select="root/prediccion/dia">
        <xsl:value-of select="@fecha">
        <xsl:value-of select="temperatura/maxima"/>
        <xsl:value-of select="temperatura/minima"/>
        <xsl:value-of select="estado_cielo/@descripcion"/>
        <xsl:sort select="temperatura/maxima"/>
    </xsl:for-each>

</body>
</html>
