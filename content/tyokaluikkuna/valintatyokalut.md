+++
date = "2015-09-09T18:46:49+03:00"
draft = false
title = "Valintatyökalut"

[menu.pdn]
	parent = "tikkuna"
	identifier = "valinta"
	weight = 371

+++

Neljä valintatyökalua on saatavilla. Katsomme niistä kolmea jotka ovat listattu alhaalla:

{{< figure src="/kuvat/selectiontools.png" alt="Valintatyökalut" >}}	

*	Suorakulmainen valinta
*	Lassovalinta
*	Ellipsi valinta
*	[Taikasauva]({{< ref "taikasauva.md" >}})

Nämä työkalut ovat päätavat alueiden valitsemiseen muokkausta, poistamista, kopiointia tai rajausta varten. Työkalujen käyttö on helppoa ja siinä käytetään samoja tapoja kuin
muotojen piirtämisessä Muototyökaluilla.

Yksinkertaisesti piirrä valinta vasemmalla hiiren napilla ja siirrä hiirtä kunnes muoto on sopiva. Poistaaksesi valinnan voit joko klikata missä tahansa kun valintatyökalu 
on valittu tai voit käyttää [Muokkaa **&rarr;** Poista valinta]({{< ref "muokkaa.md" >}}) (myös [Työkalupalkissa]({{< ref "asetukset.md#valintatyokalut" >}})).</p>

Kun valinta on aktiivinen kuvassa, katkoviivainen piirretään näyttämään missä valinta on. Jos valintatyökalu on valittu, valinnassa on myös sininen korostus helpottamaan 
alueen näkemistä. Jos valitset muun työkalun, sininen korostus poistetaan jotta voit erottaa värit helpommin.

Myös, kaikki piirtäminen on rajoitettu valintaan jonka valitset. Tähän sisältyy myös [Tehosteet]({{< ref "tehosteet.md" >}}) ja [Säädöt]({{< ref "saadot.md" >}}). 
Tämä voi olla erittäin hyödyllistä jos haluat rajoittaa piirtämisen tiettyyn alueeseen kuvasta.

Nämä työkalut myös antavat mahdollisuuden neljään eri yhdistämistapaan: lisäys, erotus, leikkaus ja käänteinen. Ensimmäiset kolme tilaa tunnetaan myös yhdistävä, vähentävä, 
ja poissulkeva. Nopea ohje näihin komentoihin, katso [Näppäimistön ja hiiren komennot]({{< ref "nappaimisto_ja_hiiri.md" >}}). Lisäksi, valintoja voi siirtää, muuttaa kokoa 
ja pyörittää, lisätietoja: katso [Siirtotyökalut]({{< ref "siirtotyokalut.md" >}}).

Luodaksesi uuden valinnan, tai korvataksesi olemassa olevan, piirrä vain vasemmalla hiiren napilla. Toiminta on samanlainen kuin Muototyökaluilla.

{{< vihje "Voit pitää Shift-nappia pohjassa kun käytät Suorakulmaista valintaa tai Ellipsi valintaa pakottaaksesi muodon olemaan joko neliö tai ympyrä, mainitussa järjestyksessä." >}}

Jos haluat muokata valintaa, voit joko käyttää joko työkalupalkkia tai näppäimistön komentoja jotka esitellään seuraavissa kappaleissa. (Täydellinen lista näppäimistön komennoista 
on myös saatavilla [täällä]({{< ref "nappaimisto_ja_hiiri.md" >}}).)

On olemassa viisi erilaista valintatilaa:

{{< figure src="/kuvat/selectionmode.png" alt="Valintatila" >}}	

<div id="tabs">
	<ul>
		<li><a href="#Korvaa">Korvaa</a></li>
		<li><a href="#Lisaa">Lisää</a></li>
		<li><a href="#Vahenna">Vähennä</a></li>
		<li><a href="#Leikkaus">Leikkaus</a></li>
		<li><a href="#Kaanteinen">Käänteinen</a></li>
	</ul>
	<div id="Korvaa">
		<p>Tämä on oletusvalinta. Uusi valinta korvaa edellisen valinnan. Seuraava ympyrä tehtiin Ellipsi valinta-työkalulla:</p>
		<p><img src="/resurssit/circleselection.png" alt="Korvaa" class=""></p>
	</div>
	<div id="Lisaa">
		<p>Tämä antaa sinun helposti valita kaksi kuvan aluetta jotka eivät liity toisiinsa tai jatkaa nykyistä valintaa. Seuraava valinta tehtiin piirtämällä ympyrä Ellipsi valinta-työkalulla, 
			lisäksi piirtämällä Neliö Suorakulmaisella valinnalla pitäen Ctrl-nappia pohjassa:</p>
		<p><img src="/resurssit/circlesquareselection.png" alt="Lisää" class=""></p>
		{{< vihje "Lisätäksesi olemassa olevaan valintaan, pidä Ctrl-nappi pohjassa kun piirrät valinnan." >}}
	</div>
	<div id="Vahenna">
		<p>Tämä antaa sinun poistaa osia valinnasta joita et halua mukaan. Tämä antaa sinun tehdä seuraavan kaltaisia valintoja, joka tehtiin ensin piirtämällä ympyrä Ellipsi valinta-työkalulla 
			ja sen jälkeen piirtäen toinen ympyrä sisälle käyttäen oikeaa hiiren nappia:</p>
		<p><img src="/resurssit/concentriccircleselection.png" alt="Vähennä" class=""></p>
		{{< vihje "Poistaaksesi osia olemassa olevasta valinnasta, pidä Alt-näppäintä alhaalla piirtäessäsi valintaa." >}}
	</div>
	<div id="Leikkaus">
		<p>Tulos on alue jossa kaksi valintaa ovat päällekkäin. Seuraava esimerkki saatiin piirtämällä sama ympyrä ja neliö kuin alhaalla käänteisen tilan kanssa:</p>
		<p><img src="/resurssit/intersectselection.png" alt="Leikkaus" class=""></p>
		{{< vihje "Leikkaus toimii pitämällä Alt-näppäin pohjassa ja piirtäen valinta oikealla hiiren näppäimellä." >}}
	</div>
	<div id="Kaanteinen">
		<p>Tämä luo uusia valintoja ja poistaa vanhoja valintoja. Voit näin tehdä seuraavanlaisia valintoja, käyttäen Ellipsi valintaa ja Suorakulmaista valintaa:</p>
		<p><img src="/resurssit/xorselection.png" alt="Käänteinen" class=""></p>
		{{< vihje "Käänteinen toimii pitämällä Ctrl-näppäin pohjassa ja piirtämällä valinnan oikealla hiiren napilla." >}}
	</div>
</div>

{{< tabs >}}
