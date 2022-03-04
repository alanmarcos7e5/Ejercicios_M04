<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="xml" indent="yes"/>
    <xsl:template match="/">
        <xsl:variable name="interpretado" select="' es interpretado por '"></xsl:variable>
        <lista>
            <xsl:for-each select="discos/disco">
                <disco>
                    <xsl:value-of select="title"></xsl:value-of>
                    <xsl:value-of select="$interpretado"></xsl:value-of>
                    <xsl:variable name="groupId" select="interpreter/@id"></xsl:variable>
                    <xsl:value-of select="../group[@id=$groupId]/name"></xsl:value-of>
                </disco>
            </xsl:for-each>
        </lista>
    </xsl:template>
</xsl:stylesheet>