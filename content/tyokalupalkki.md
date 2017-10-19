+++
date = "2015-09-09T18:46:35+03:00"
draft = false
title = "Työkalupalkki"

[menu.pdn]
	parent = "kliittyma"
	identifier = "tpalkki"
	weight = 360

+++

Työkalupalkki sisältää napit kaikille yleisille komennoille, asetukset miten kuva näytetään ja asetukset monien työkalujen lopputulokseen.

{{< figure src="/kuvat/toolbar.png" alt="Työkalupalkki" >}}

*	### Yleiset
	
	{{< figure src="/kuvat/toolbar_commonactions.png" alt="Yleiset työkalut" >}}

	Näitä nappeja käytetään tekemään yleisiä komentoja. Vasemmalta oikealle, niiden avulla voi luoda uuden kuvan, avata olemassa olevan, 
	tallentaa, tulostaa, leikata, kopioida, liittää,rajata, poistaa valinnan, kumota ja tehdä uudelleen
	
*	### Näyn hallinta
	
	Seuraavat kaksi nappia ovat näyttävät ja piilottavat ristikon tai viivaimen.
	
*	#### Ristikko
	
	Ristikko näkyy kuvan päällä missä jokainen solu on yhden pikselin kokoinen. Ristikko on hyödyllinen suurennetun kuvan kanssa kun yksittäisten pikselin muokkausta vaaditaan.
	
	{{% huom %}}Ristikko ei näy alle 200% suurennoksella.{{% /huom %}}
	
*	#### Viivaimet
	
	Viivaimet näkyvät pohjan yläreunassa ja oikealla.
	
	Viivaimet auttavat kun pitää järjestellä kuvia tarkasti. Viivaimen yksiköt on se mitä on asetettu Näytä valikossa tai tilapalkissa.
	
	Kun valinta on käytössä, sen ääriviivat on korostettu viivaimessa joka helpottaa kohteen mittaamista. Kursorin sijainti näkyy myös viivaimessa.
	
*	### Työkalun valinta

	{{< figure src="/kuvat/toolbar_toolchoicebutton.png" alt="Työkalun valinta" >}}
	
	Työkalujen asetukset voi vaihtaa [Asetukset-valikossa]({{< relref "asetukset.md" >}}).
	
*	### Oletustyökalu
	
	Työkalu joka on valittuna kun paint.net käynnistyy.
	
*	### Muodot, sivellin, tyyli ja täyttö
	
	{{< figure src="/kuvat/toolbar_shapesbrushesfill.png" alt="Muodot, sivellin, tyyli ja täyttö" >}}
	
	[Muototyökalut]({{< relref "muodot.md" >}}) käyttävät näitä asetuksia. Voit valita piirretäänkö muoto ääriviivalla, täytettynä, vai kummatkin, siveltimen koko sekä piirtotyylin. 
	
	[Viiva/Käyrä -työkalu]({{< relref "viiva_kayra.md" >}}) antaa sinun asettaa tyylin, viivan päiden tyylit sekä joko viiva tai piste muodon.
	
*	### Valintatyökalut
	
	{{< figure src="/kuvat/toolbar_selectionmode.png" alt="Valintatyökalut" >}}
	
	"Valintatila" osa työkalupalkista antaa sinun valita tilan jota valintatyökalut käyttävät. Kun valitse valintatyökalulla se joko korvaa olemassa olevan valinnan, 
	lisää siihen, vähentää siitä tai kääntää aluen jonka yli se tulee.
	
	Seuraava osa työkalupalkista antaa sinun valita joko normaalin (vapaa), kiinteän koon ja kiinteän suhteen välillä kun käytät suorakulmaista valintatyökalua. Jälkimmäiset kaksi 
	tilaa ovat hyödyllisiä kun haluat esimerkiksi valita 4" x 3" kokoisen alueen tai haluat valita alueen jonka suhde on 16 x 10 (tietenkin, voit käyttää mitä tahansa 
	kokoja, lisää vain haluamasi luvut).	
	
*	### Teksti
	
	{{< figure src="/kuvat/toolbar_text.png" alt="Tekstityökalu" >}}
	
	Täta osaa työkalupalkista käyttää vain [Teksti]({{< relref "tekstityokalu.md" >}}), ja se antaa sinun asettaa fontin, koon, pehmeyden sekä tyylin.
	
	On saatavilla kolme eri tapaa näyttää teksti, "Pehmeä", "Terävä (Modern)" ja "Terävä (Klassinen)". Pehmeä sopii parhaiten keskikokoiseen ja isoon tekstiin. 
	Pienillä koilla se saattaa näyttää epäselvältä tai sekavalta, paitsi tämä riippuu paljolti mikä fontti on käytössä. Terävä sopii hyvin pienen kokoiseen tekstiin; suurena se ei 
	näytä kovin pehmeältä. Jos reunan pehmennys on pois päältä (rasteroinnin kautta), se ei vaikuta onko Pehmeä tai Terävä valittu.
	
*	### Väriliukuma
	
	{{< figure src="/kuvat/toolbar_gradient.png" alt="Väriliukuma" >}}
	
	[Väriliukumalla]({{< relref "variliukuma.md" >}}) on 7 erilaista liukumaa jota se voi käyttää, sekä se voi toimia joko väritilassa tai erikoisessa läpinäkyvyystilassa. 
	
	Lisäksi on mahdollista peilata tai kiertää.
	
*	### Taikasauva, täyttö ja uudelleen väritys
	
	{{< figure src="/kuvat/toolbar_magicwandpaintbucket.png" alt="Taikasauva, täyttö ja uudelleen väritys" >}}
	
	Toleranssi vaikuttaa miten [Taikasauva]({{< relref "taikasauva.md" >}}), [Täyttö]({{< relref "taytto.md" >}}) sekä [Uudelleen väritys]({{< relref "uudelleen_varitys.md" >}}) toimivat. 
	Se määrää miten samanväriset värit lasketaan mukaan kun työkalua käytetään. Jos se on asetettu 0%, vain tarkalleen tiettyä väriä käytetään. Jos se on 100%, kaikki värit 
	lasketaan mukaan. Oletusarvo on 50%. 
	
	Näytteistys voi valita tason tai koko kuvan.
	
*	### Väripoimija
	
	{{< figure src="/kuvat/toolbar_colorpicker.png" alt="Väripoimija" >}}
	
	[Väripoimijan]({{< relref "pikselityokalut.md" >}}) voi asettaa vaihtamaan [Kynään]({{< relref "pikselityokalut.md" >}}) tai edelliseen työkaluun värin poimimisen jälkeen. 
	
	Näytteistyksen voi asettaa pysymään tasolla tai koskemaan koko kuvaa sekä näytepisteiden määrää voi muuttaa.
	
*	### Siirrä valittuja pikseleitä
	
	{{< figure src="/kuvat/toolbar_moveselectedpixels.png" alt="Siirrä valittuja pikseleitä" >}}
	
	[Siirrä valintaa]({{< relref "siirtotyokalut.md" >}}) -työkalun voi asettaa käyttämään joko "pehmeää" (bilinear) tai "pikseloitua" (lähin naapuri) näytteistystä. 
	Pehmeä laatu on yleensä suositeltua ellei sinulla ole tarkkaa tarvetta käyttää pikseloitua laatua.
	
*	### Rasterisaatio
	
	{{< figure src="/kuvat/toolbar_rasterization.png" alt="Rasterisaatio" >}}
	
	Moneen työkaluun vaikuttaa yksi tai kummatkin näistä valinnoista jotka vaikuttavat siihen miten piirtäminen toimii. Voit käyttää näitä joko painamalla itse nappia vaihtaaksesi 
	asetusta, tai painamalla nuolta saadaksesi valikon vaihtoehdoista.
	
	Ensimmäinen nappi asettaa onko [reunan pehmennys](http://en.wikipedia.org/wiki/Antialiasing) käytössä. Ympyrä vasemmalla on piirretty reunan pehmennys päällä kun 
	oikealla oleva ympyrä on piirretty ilman reunan pehmennystä. Se on selkeästi "rösöisempi":
	
	{{< figure src="/resurssit/aavsnoaa.png" alt="Pehmennys päällä ja pois" >}}
	
	Seuraava nappi asettaa [sekoitustilan](http://en.wikipedia.org/wiki/Alpha_compositing). Tästä voi lukea lisää [sekoitustiloista]({{< relref "sekoitustilat.md" >}}).

