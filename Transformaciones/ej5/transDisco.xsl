<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <lista>
            <xsl:for-each select="discos/disco">
                <disco>
                    <xsl:value-of select="title"></xsl:value-of>
                    es interpretado por:
                    <xsl:value-of select="interpreter/@id"></xsl:value-of>
                </disco>

            </xsl:for-each>

        </lista>

    </xsl:template>
</xsl:stylesheet>