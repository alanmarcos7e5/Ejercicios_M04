<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		
		<html>
			<head>
				<title>Mundo</title>
			</head>
			<body>
				<h1>Continentes</h1>

				<xsl:apply-templates select="mundo" />

			</body>
		</html>
	</xsl:template>

	<!-- Substituye XXXXXX por el apth que corresponda y 
	empieza a codificar el template.-->
	<xsl:template match="mundo">
		<xsl:for-each select="continente">
			<h2> <xsl:value-of select="nombre"></xsl:value-of> </h2>
			
			<table style="{concat('border: 2px solid ',nombre/@color)}">

				<tr>
					<th style="{concat('border: 2px solid ',nombre/@color)}">Bandera</th>
					<th style="{concat('border: 2px solid ',nombre/@color)}">País</th>
					<th style="{concat('border: 2px solid ',nombre/@color)}">Gobierno</th>
					<th style="{concat('border: 2px solid ',nombre/@color)}">Capital</th>
				</tr>

				<xsl:for-each select="paises/pais">
					<xsl:sort select="nombre"/>
					<xsl:variable name="contColor" select="../../nombre/@color"></xsl:variable>
					<tr>
						<th style="{concat('border: 2px solid ',$contColor)}">
							<img src="{concat('img/',foto)}" 
							alt="banderita"/>
						</th>
						<th style="{concat('border: 2px solid ',$contColor)}">
							<xsl:value-of select="nombre"></xsl:value-of>
						</th>
						<th style="{concat('border: 2px solid ',$contColor)}">
							
							<xsl:choose>
								<xsl:when test="nombre/@gobierno = 'monarquia'">
									<xsl:attribute name="style">background-color:yellow</xsl:attribute>
								</xsl:when>
								<xsl:when test="nombre/@gobierno = 'dictadura'">
									<xsl:attribute name="style">background-color:red</xsl:attribute>
								</xsl:when>              
								<xsl:otherwise>
								</xsl:otherwise>        
							</xsl:choose>
						
							<xsl:value-of select="nombre/@gobierno"></xsl:value-of>
						</th>

						<th style="{concat('border: 2px solid ',$contColor)}">
							<xsl:value-of select="capital"></xsl:value-of>
						</th>
					</tr>
				</xsl:for-each>

        	</table>


        </xsl:for-each> 

	</xsl:template>


</xsl:stylesheet>
