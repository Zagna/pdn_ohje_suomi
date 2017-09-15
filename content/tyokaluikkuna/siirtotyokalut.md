+++
date = "2015-09-09T18:46:56+03:00"
draft = false
title = "Siirtotyökalut"

[menu.pdn]
	parent = "tikkuna"
	identifier = "siirto"
	weight = 372

+++

Seuraavat työkalut käsitellään tässä osassa:

{{< figure src="/kuvat/movetools.png" alt="Siirtotyökalut" >}}

*	### Siirrä valintaa

	Tällä voit liikuttaa, pyörittää ja skaalata pikseleitä jotka ovat valinnan sisällä. Kun tämä työkalu on käytössä, valintaa korostavaa sinistä ei piirretä jotta näkisit värit tarkemmin.
	
*	### Muokkaa valintaa
	
	Tällä voit liikuttaa, pyörittää ja skaalata valintaa, mutta *ei* pikseleitä jotka ovat valinnassa. Tämä on hyödyllistä valinnan tarkentamisessa. Kun tämä työkalu on käytössä, 
	valintaan lisätään sininen korostus jotta voisit nähdä valinnan tarkemmin.
	
Ensimmäiseksi sinun tulee olla varma ennen kuin valitset yhden näistä työkaluista että sinulla on aktiivinen valinta. Katso [Valintatyökaluista]({{< ref "valintatyokalut.md" >}}) miten 
luot ja muokkaat niitä. Jokainen siirto, koon muutto ja pyöritys mitä teet valintaan lisätään [Historiaikkunaan]({{< ref "historiaikkuna.md" >}}).

Kun valitset siirtotyökalun, useita kahvoja, tai nuppeja, ilmestyy valinnan reunoihin ja nurkkiin, esimerkkinä:

{{< figure src="/resurssit/movenubs.jpg" alt="Siirtonupit" >}}

Kun jompi kumpi näistä työkaluista on valittu, voit suorittaa minkä tahansa näistä kolmesta työstä saadaksesi halutun tuloksen. Voit suorittaa jokaisen työn monta kertaa, voit 
sekoittaa niitä saadaksesi oikea tuloksen. Huomaa että jokaisessa esimerkissä, kun käytetään Muokkaa valintaa-työkalua, pikselit jotka oli valittu ei vaikuteta.

{{< huom "Kun siirrät pikseleitä ympäriinsä taustakuvatasolla, shakkilautamalli joka jää jälkeen, ilmoittaa että alue on läpinäkyvä. Malli ei ole osa itse kuvaa." >}}

<div id="tabs">
	<ul>
		<li><a href="#Siirra">Siirrä</a></li>
		<li><a href="#Muuta">Muuta kokoa</a></li>
		<li><a href="#Pyorita">Pyöritä</a></li>
	</ul>
	<div id="Siirra">
		<p>Siirrä vasemmalla hiiren napilla missä muualla <em>paitsi</em> nupissa siirtääksesi valintaa.</p>
		<figure class="bunder">
			<img src="/resurssit/movenubs_movedpixels.jpg" alt="">
			<figcaption>
				<h4>Siirrä valintaa</h4>
			</figcaption>
		</figure>
		<figure class="bunder">
			<img src="/resurssit/movenubs_movedselection.jpg" alt="">
			<figcaption>
				<h4>Muokkaa valintaa</h4>
			</figcaption>
		</figure>
	</div>
	<div id="Muuta">
		<p>Siirrä hiiri nupin päälle ja kursori muuttuu kädeksi. Paina ja siirrä muuttaaksesi valinnan kokoa.</p>
		{{< vihje "Jos siirrät yhtä nurkkanuppia, voit Shift-nappia pohjassa pitämällä pakottaa kuvan säilyttämään kuvasuhteen (valinnan koon mukaan)." >}}
		<figure class="bunder">
			<img src="/resurssit/movenubs_resizedpixels.jpg" alt="">
			<figcaption>
				<h4>Siirrä valintaa</h4>
			</figcaption>
		</figure>
		<figure class="bunder">
			<img src="/resurssit/movenubs_resizedselection.jpg" alt="">
			<figcaption>
				<h4>Muokkaa valintaa</h4>
			</figcaption>
		</figure>
	</div>
	<div id="Pyorita">
		<p>Oikea hiiren nappi pohjassa siirrä hiirtä missä vain pyörittääksesi valintaa. Kun pyörität valintaa, ilmaisin ilmestyy valinnan keskelle näyttääkseen pyörimisen keskipisteen ja nykyisen kulman. Se näyttää pieneltä ympyrältä jonka keskeltä kulkee viiva läpi. Huomaa että pyörimiskulma näkyy myös <a href="/Tilapalkki/">Tilapalkissa</a>.</p>
		{{< vihje "Kun pyörität, voit pakottaa pyörimiskulman 15 asteen kulmiin pitämällä Shift-nappia alhaalla." >}}
		<figure class="bunder">
			<img src="/resurssit/movenubs_rotatedpixels.jpg" alt="">
			<figcaption>
				<h4>Siirrä valintaa</h4>
			</figcaption>
		</figure>
		<figure class="bunder">
			<img src="/resurssit/movenubs_rotatedselection.jpg" alt="">
			<figcaption>
				<h4>Muokkaa valintaa</h4>
			</figcaption>
		</figure>
	</div>
</div>

{{< tabs >}}
