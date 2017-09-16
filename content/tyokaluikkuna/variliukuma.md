+++
date = "2015-09-09T18:47:08+03:00"
draft = false
title = "Väriliukuma"
tooltip = "resurssit/tyokalut/gradient.png"

[menu.pdn]
	parent = "tikkuna"
	identifier = "vliukuma"
	weight = 374

+++

Väriliukuma antaa sinun piirtää erinäköisiä liukumia. Läpinäkyvyystilalla voit myös joko "häivyttää" tai "sekoittaa" kaksi kuvaa yhteen.

### Liukumatyypit

Jokaisen liukumatyypin voi valita Väriliukuman osasta työkalupalkissa:

{{< figure src="/kuvat/toolbar_gradienttool.png" alt="Väriliukuma" >}}	

Ensimmäinen palkki liukumia näyttää miltä se näyttää väritilassa piirtäessä mustavalkoisena:

Toinen palkki näyttää miten liukuma vaikuttaa läpinäkyvyystilassa seuraavaan kuvaan:

{{% huom %}}Shakkilautamalli tarkoittaa läpinäkyvyyttä.{{% /huom %}}

{{< figure src="/resurssit/camaro_160.jpg" alt="Camaro" >}}	

<div id="tabs">
	<ul>
		<li><a href="#Linear">Lineaari</a></li>
		<li><a href="#Reflected">Lineaari (Peilattu)</a></li>
		<li><a href="#Diamond">Timantti</a></li>
		<li><a href="#Radial">Säteittäinen</a></li>
		<li><a href="#Conical">Kartio</a></li>
		<li><a href="#SpiralM">Spiraali (Myötäpäivään)</a></li>
		<li><a href="#SpiralV">Spiraali (Vastapäivään)</a></li>
	</ul>
	<div id="Linear">
		<p><img src="/resurssit/gradient_linear.png" alt="" class="border">&nbsp;<img src="/resurssit/gradient_alpha_linear.jpg" alt="" class="border"></p>
	</div>
	<div id="Reflected">
		<p><img src="/resurssit/gradient_linearreflected.png" alt="" class="border">&nbsp;<img src="/resurssit/gradient_alpha_linearreflected.jpg" alt="" class="border"></p>
	</div>
	<div id="Diamond">
		<p><img src="/resurssit/gradient_diamond.png" alt="" class="border">&nbsp;<img src="/resurssit/gradient_alpha_diamond.jpg" alt="" class="border"></p>
	</div>
	<div id="Radial">
		<p><img src="/resurssit/gradient_radial.png" alt="" class="border">&nbsp;<img src="/resurssit/gradient_alpha_radial.jpg" alt="" class="border"></p>
	</div>
	<div id="Conical">
		<p><img src="/resurssit/gradient_conical.png" alt="" class="border">&nbsp;<img src="/resurssit/gradient_alpha_conical.jpg" alt="" class="border"></p>
	</div>
	<div id="SpiralM">
		<p><img src="/resurssit/gradient_spiralm.png" alt="" class="border">&nbsp;<img src="/resurssit/gradient_alpha_spiralm.jpg" alt="" class="border"></p>
	</div>
	<div id="SpiralV">
		<p><img src="/resurssit/gradient_spiralv.png" alt="" class="border">&nbsp;<img src="/resurssit/gradient_alpha_spiralv.jpg" alt="" class="border"></p>
	</div>
</div>

### Väriliukuman piirtäminen

Piirtääksesi liukuman, vain paina ja vedä hiirtä pohjalla kuin piirtäisis viivan. Liukuma piirretään kun siirrät hiirtä jolloin pystyt helposti selvittämään minne haluat sen 
piirtää. Kun päästät hiiren napista, voit muokata liukumaa siirtämällä pyöreitä nuppeja. Painamalla nuppia oikealla hiiren napilla vaihdat edusta- ja taustavärit. Jos siirrät 
nuppia kummatkin hiiren napit alhaalla, kummatkin nupit siirtyvät.

### Väritila

Liukuman oletustyyppi on väriliukumä joka vaikuttaa kaikkiin väreihin sekä läpinäkyvyyteen. Liukuma piirretään niin että se siirtyy edustaväristä taustaväriin. Jos käytät 
oikeata hiiren nappia, värien roolit ovat käänteiset.

### Läpinäkyvyystila ("Häivytys" / "Sekoitus")

Läpinäkyvyystilalla voit häivyttää pois osan kuvasta. Tämä voi olla hyödyllinen myös kahden kuvan sekoittamiseen. Asettaaksesi sen paina nappia joka vaihtaa liukumatyypin 
työkalupalkissa ja valitse Läpinäkyvyystila:

{{< figure src="/kuvat/toolbar_gradienttool2.png" alt="Väriliukuma" >}}

Tämän tyyppinen liukuma vaikuttaa vain nykyisen tason läpinäkyvyyteen. Tämä liukuma siirtyy edustavärin alfa-arvosta taustavärin alfa-arvon käänteiseen arvoon. Jos käytät 
oikeaa hiiren nappia liukuma siirtyy taustavärin alfa-arvon käänteisestä arvosta edustavärin alfa-arvoon. Yksinkertaisesti, liukuma siirtyy aina kiinteästä väristä (255 alfa) 
läpinäkyvään väriin (0 alfa).

Tehdäksesi "häivytyksen" tai "sekoituksen", sijoita 2 kuvaa erillisille tasoilla, ja käytä läpinäkyvää liukumaa ylemmäiselle tasolle.

Esimerkkina, käyttäen kahta tasoa jotka löytyvät Tasot ja Sekoitustilat, seuraava ristiin häivytetty kuva voidaan luoda piirtämällä läpinäkyvä liukuma vasemmalta oikealle 
tasolle jossa on kuva Seattlesta:

{{< figure src="/resurssit/gradient_crossfade.jpg" alt="Väriliukuma" >}}

{{< tabs >}}
