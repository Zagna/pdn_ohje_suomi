+++
date = "2015-09-09T18:42:00+03:00"
draft = false
title = "Sekoitustilat"

[menu.pdn]
	parent = "konsepti"
	identifier = "sek_tilat"
	weight = 202

+++

Tason sekoitustila määrää miten se sekoitetaan alla oleviin tasoihin. Vaihtaaksesi tason sekoitustilan valitse taso ja avaa sen ominaisuudet (Tasovalikon tai Ominaisuudet napin kautta, 
tai kaksoisklikkaamalla tasoa). Saat seuraavan valikon:

{{< figure src="/kuvat/layerproperties.png" alt="Tason ominaisuudet" >}}

Tätä aihetta varten seuraavia kahta kuvaa käytetään taustakuvaksi sekä ensimmäiseksi tasoksi taustakuvan yläpuolella:

{{< figure class="border" src="/resurssit/blendmodes_layer1.jpg" title="Taustakuva Kuva autosta" caption="(\"Pohja taso\")" >}}
{{< figure class="border" src="/resurssit/blendmodes_layer2.jpg" title="Taso 1 - Kuva Seattlesta" caption="(\"Päällinen taso\")" >}}

Kaikki sekoitustilat eivät ole helppoja ymmärtää, ja tämän takia suosittelemme että kokeilette ja käytätte [foorumia](http://www.getpaint.net/redirect/forum.html) kysymysten ja vinkkien 
muodossa. Jokainen sekoitustila selostetaan kuvan kanssa edellä mainittujen kuvien kanssa, sekoitustila valittuna ja peittävyys asetettuna täyteen.

Alla olevissa aiheissa, käytämme termiä *kokoonpano*. Tämä viittaa lopputulokseen kaikkien nykyisen tason alla olevien sekoitukseen. "Lopullinen" kokoonpano on mitä näet näytöllä 
kun työstät kuvaa. Kuitenkin, tässä aihessa meidän pitää viitata kokoonpanoon kun sitä koostaan, taso tasolta.

Sekoitustilan oletus on Normaali. Jokainen pikseli sekoitetaan kokoonpanoon sen alfa-arvon mukaan. Normaalin lisäksi on myös olemassa alla olevat sekoitustilat.

<div id="tabs">
	<ul class="tabs">
		<li><a href="#Multiply">Kerro</a></li>
		<li><a href="#Additive">Lisäävä</a></li>
		<li><a href="#ColorBurn">Värivarjostus</a></li>
		<li><a href="#ColorDodge">Värilisävalotus</a></li>
		<li><a href="#Reflect">Peilattu</a></li>
		<li><a href="#Glow">Hehku</a></li>
		<li><a href="#Overlay">Sulauttava</a></li>
		<li><a href="#Difference">Erottava</a></li>
		<li><a href="#Negation">Negatiivi</a></li>
		<li><a href="#Lighten">Kevennä</a></li>
		<li><a href="#Darken">Tummenna</a></li>
		<li><a href="#Screen">Näyttö</a></li>
		<li><a href="#Xor">Xor</a></li>
	</ul>
	<div class="tabcontents">
		<div id="Multiply">
			<p>Jokaisen pikselin voimakkuus kerrotaan kokoonpanon pikseliarvoon. Tämän sekoitustilan käyttäminen johtaa pikseleihin jotka ovat tummempia kuin alkuperäiset.</p>
			<p><img src="/resurssit/blendmode_multiply.jpg" alt="Kerro" class="border"></p>
		</div>
		<div id="Additive">
			<p>Jokaisen pikselin värivoimakkuus lisätään kokoonpanon pikselien voimakkuuteen. Tämä aina valaistaa pikseleitä kokoonpanossa, paitsi pikselit jotka ovat täysin mustia tulevat 
			olemaan läpinäkyviä.</p>
			<p><img src="/resurssit/blendmode_additive.jpg" alt="Lisäävä" class="border"></p>
		</div>
		<div id="ColorBurn">
			<p>Tämä sekoitustila tekee tummista pikseleistä tummempia. Kirkkaiden pikselien pitää sekoittua muiden kirkkaiden pikselien kanssa pysyäkseen kirkkaina.</p>
			<p><img src="/resurssit/blendmode_colorburn.jpg" alt="Värivarjostus" class="border"></p>
		</div>
		<div id="ColorDodge">
			<p>Tätä voi ajatella värivarjostuksen vastakohtana. Kirkkaat pikselit pysyvät, kun tummat pikselit pitää sekoittua muiden mustien pikselien kanssa.</p>
			<p><img src="/resurssit/blendmode_colordodge.jpg" alt="Värilisävalotus" class="border"></p>
		</div>
		<div id="Reflect">
			<p>Tätä tilaa voi käyttää kiiltävien esineiden tai alueiden lisäämiseen.</p>
			<p><img src="/resurssit/blendmode_reflect.jpg" alt="Peilattu" class="border"></p>
		</div>
		<div id="Glow">
			<p>Tämä on käänteinen Peilaus: se vaihtaa tasojen järjestyksen ja sen jälkeen käyttää Peilausta.</p>
			<p><img src="/resurssit/blendmode_glow.jpg" alt="Hehku" class="border"></p>
		</div>
		<div id="Overlay">
			<p>Tämä on yhdistelmä Näyttöä ja Kertoa riippuen tason pikselien voimakkuudesta. Tummille väreille se toimii kuten Kerro. Kirkkaille väreille se toimii kuin Näyttö.</p>
			<p><img src="/resurssit/blendmode_overlay.jpg" alt="Sulauttava" class="border"></p>
		</div>
		<div id="Difference">
			<p>Tämä on Lisäävän vastakohta. Jokaisen tason pikselin voimakkuus vähennetään kokoonpanon pikselien voimakkuudesta johtaen tummempiin väreihin. Koska tämä voi johtaa negatiiviseen 
			voimakkuuteen, jota ei voi näyttää, absoluuttista arvoa käytetään. Täten, &ldquo;valkoinen miinus musta&rdquo; sekä &ldquo;musta miinus valkoinen&rdquo; tuottavat kummatkin valkoista. 
			Tämä voi olla hyödyllinen Pilvi-tehosteen kanssa.</p>
			<p><img src="/resurssit/blendmode_difference.jpg" alt="Erottava" class="border"></p>
		</div>
		<div id="Negation">
			<p>Ensi silmäyksellä tämä näyttää samalta kuin Erottava, mutta se tuottaa vastakohtaisen tuloksen. Sen sijaan että värin tummenisivat, niistä tulee kirkkaammat.</p>
			<p><img src="/resurssit/blendmode_negation.jpg" alt="Negatiivi" class="border"></p>
		</div>
		<div id="Lighten">
			<p>Kirkkaampi pikseli jommalta kummalta tasolta tai kokoonpanosta käytetään.</p>
			<p><img src="/resurssit/blendmode_lighten.jpg" alt="Kevennä" class="border"></p>
		</div>
		<div id="Darken">
			<p>Tummempi pikseli jommalta kummalta tasolta tai kokoonpanosta käytetään.</p>
			<p><img src="/resurssit/blendmode_darken.jpg" alt="Tummenna" class="border"></p>
		</div>
		<div id="Screen">
			<p>Tätä voi ajatella Kerro-tilan vastakohtana. Se tekee pikseleistä kirkkaampia, mustan ollessa pitkälti läpinäkyvä.</p>
			<p><img src="/resurssit/blendmode_screen.jpg" alt="Näyttö" class="border"></p>
		</div>
		<div id="Xor">
			<p>Tämä on lyhyesti &ldquo;<a href="http://fi.wikipedia.org/wiki/XOR">poissulkeva tai</a>&rdquo;, joka on kehittynyt sekoitustila jota pääasiallisesti käytetään kuvien analysointiin eikä 
			piirtämiseen tai kuvien muodostamiseen.</p>
			<p><img src="/resurssit/blendmode_xor.jpg" alt="Xor" class="border"></p>
		</div>
	</div>
</div>

{{< tabs >}}

