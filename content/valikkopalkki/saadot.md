+++
date = "2015-09-09T18:43:44+03:00"
draft = false
title = "Säädot"

[menu.pdn]
	parent = "vpalkki"
	identifier = "saadot"
	weight = 330

+++

Tämän valikon komennot ovat tarkoitettu säätämään kuvaa erinäisillä tavoilla, jotta värit saataisiin näkymään halutulla tavalla.

{{< figure src="/kuvat/adjustmentsmenu.png" alt="Säädöt valikko" >}}

Tätä kuvaa tullaan käyttämään esittämään, mitä eri säädöt tekevät:

{{< figure src="/resurssit/lewistonsunset_small.jpg" alt="Tiedosto valikko" >}}

<div id="tabs">
	<ul>
		<li><a href="#AutoLevel">Automaattinen taso</a></li>
		<li><a href="#InvertColors">Invertoi värit</a></li>
		<li><a href="#BrightnessContrast">Kirkkaus / Kontrasti</a></li>
		<li><a href="#Curves">Käyrät</a></li>
		<li><a href="#BlackAndWhite">Mustavalkoinen</a></li>
		<li><a href="#Posterize">Posterisaatio</a></li>
		<li><a href="#Sepia">Seepia</a></li>
		<li><a href="#HueSaturation">Sävy / Värikylläisyys</a></li>		
		<li><a href="#Levels">Sävyala</a></li>		
	</ul>
	<div id="AutoLevel">
		<p>Tätä voit käyttää värien tasoittamiseen, eli liian tumma tai kirkas kuva tuodaan takaisin normaaliin tasoon. Tämä on sama kuin käyttäisi [Sävyala-säätöä]({{< ref "savyala.md" >}}) ja valitsisi &ldquo;Auto&rdquo;-komennon.</p>
		<p>Tämän säädön käytön jälkeen, jota ei voi muokata, kuva näyttää tältä:</p>
		<p class="indent"><img src="/resurssit/lewistonsunset_small_autolevel.jpg" alt="Automaattinen taso" class="border"></p>
	</div>
	<div id="BrightnessContrast">
		<p>Tätä voit käyttää saadaksesi kuvan värit joko kirkkaammiksi, tummemmiksi, tai saada värit eroamaan muista niiden ympärillä olevista.</p>
		<p>Alkuperäinen kuva kirkkaampana:</p>
		<p class="indent"><img src="/resurssit/lewistonsunset_small_brighter.jpg" alt="Kirkas" class="border"></p>
		<p>Alkuperäinen kuva suuremmalla kontrastilla:</p>
		<p class="indent"><img src="/resurssit/lewistonsunset_small_morecontrast.jpg" alt="Kontrasti" class="border"></p>
		<p>Alkuperäinen kuva kirkkaampana ja suuremmalla kontrastilla:</p>
		<p class="indent"><img src="/resurssit/lewistonsunset_small_brighterandmorecontrast.jpg" alt="Kirkas sekä kontrasti" class="border"></p>
	</div>
	<div id="Curves">
		<p>Tämän säädön avulla voi säätää kuvan käyriä. Lisää tästä [täällä]({{< ref "kayrat.md" >}}).</p>
	</div>
	<div id="BlackAndWhite">
		<p>Tämä säätö poistaa kaikki värit, tehden tasosta mustavalkoisen.</p>
		<p>Alkuperäinen kuva joka on käsitelty:</p>
		<p class="indent"><img src="/resurssit/lewistonsunset_small_desaturate.jpg" alt="Mustavalkoinen" class="border"></p>
	</div>
	<div id="HueSaturation">
		<p>Tätä säätöä voidaan käyttää värien kylläisyyden muuttamiseen, samoin sävyn säätämiseen. Lisäksi se mahdollistaa valoisuuden säätämisen, mikä on samanlainen muttei sama kuin kirkkaus.</p>
		<p>Alkuperäinen kuva sen jälkeen kun Sävy on 88 ja Värikylläisyys on 158:</p>
		<p class="indent"><img src="/resurssit/lewistonsunset_small_huesaturation.jpg" alt="Värikylläs" class="border"></p>
	</div>
	<div id="InvertColors">
		<p>Tämä säätö on erittäin samanlainen kuin valokuvan negatiivi. Säädön toistaminen johtaa alkuperäiseen kuvaan.</p>
		<p>Alkuperäinen kuva joka on invertoitu:</p>
		<p class="indent"><img src="/resurssit/lewistonsunset_small_invert.jpg" alt="Invertoitu" class="border"></p>
	</div>
	<div id="Posterize">
		<p>Tämä säätö antaa sinun vähentää mahdollisia väriarvoja joita pikselit voivat käyttää. Yleensä jokaisella värikanavalla on 256 mahdollista arvoa (0-255), mutta tämän avulla voit rajoittaa sen 2 ja 64 välillä. Tämä antaa kuvalle &ldquo;posteroidun&rdquo; tai retron ulkonäön.</p>
		<p>Alkuperäinen kuva posterisaation jälkeen:</p>
		<p class="indent"><img class="border" alt="Posterisaatio" src="/resurssit/lewistonsunset_small_posterize.png"></p>
	</div>
	<div id="Levels">
		<p>Tätä säätöä käytetään värien alan ja kuvan gamman muokkaamiseen. Paina [tästä]({{< ref "savyala.md" >}}) lukeaksesi lisää.</p>
	</div>
	<div id="Sepia">
		<p>Tämä säädös muuttaa kuvan ensin mustavalkoiseksi ja sen jälkeen lisää seepiasävyn. Tätä voi käyttää lisätäksesi kuvaan nostalgisen tunteen.</p>
		<p>Alkuperäinen kuva Seepia-säädön jälkeen:</p>
		<p class="indent"><img src="/resurssit/lewistonsunset_small_sepia.jpg" alt="Seepia" class="border"></p>
	</div>
</div>

{{< tabs >}}
