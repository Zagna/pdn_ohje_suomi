+++
date = "2015-09-09T18:44:02+03:00"
draft = false
title = "Sävyala"

[menu.pdn]
	parent = "saadot"
	identifier = "savyalat"
	weight = 332

+++

Sävyala-sääto antaa sinun muuttaa kuvan värialuetta (tai "valoitusaikaa"), mukaanlukien gamman säätöä, kanavakohtaisesti. Useimmat säädökset mitä tehdään liityy kuvan 
sisääntulon ja ulostulon valkopisteeseen, harmaapisteeseen ja mustapisteeseen. Kuvan valkopiste on kirkkain väri mikä esiintyy kuvassa ja mustapiste on kaikkein tummin väri mikä 
esiintyy kuvassa. Harmaapiste esittää värien keskiarvoa koko kuvassa.

<p class="centered levels">
	<img src="/kuvat/levels1.png" alt="">
</p>

Jokaista väripistettä voi muokata käyttäen Sävyalaa. Yllä olevassa valikossa, on 5 numerista valintaa ja 5 väriliukua. Kaksi vasemmalla puolella 'Sisääntulo' osassa tarkoittaa
sisääntulon valko- ja mustapistettä. Näitä värejä voi muokata käyttäen joko numeerisia valintoja, likuja tai kaksoisklikkaamalla värilaatikkoa. Valkopiste tällä puolella on väri
mikä tulisi asettaa tulemaan valkopiste oikealle puolelle. Kun säädös on ajettu, värit jotka ovat kuvassa yhtä kirkkaita tai kirkkaampia kuin tämä väri säädetään olemaan sama kuin
ulostulon valkopiste (yllä olevassa kuvassa, ulostulon valkopiste on jätetty oletusarvolle, valkoiseen.) Vastaavasti, sisääntulon mustapiste on asetettu myös, jolloin kaikkein
tummimmat värit kuvassa säädetään täysin mustaksi. Muuttamalla valkopistettä hieman tummemmaksi, teemme samasta tummasta väristä täysin valkoista ulostulossa, ja muuttamalla
mustapistettä hieman kirkkaammaksi, teemme kaikista niistä tummista väreistä täysin tummia. Myös, valikossa ylhäällä, harmaapiste on siirretty hieman kirkkaammaksi. Vaikka tämä ei
vaikuta kuvan valkoiseen tai mustaan, se nostaa kuvan värejä yleisesti kirkkaammiksi.

<p class="centered levels">
	<img src="/resurssit/lewistonsunset_small.jpg" alt="" class="border">&nbsp;<img src="/resurssit/lewistonsunset_small_levels1.jpg" alt="" class="border">
</p>

Nämä säädöt venyvät koko kuvan alaan, nähtäen helposti histogrammeista mitkä ovat kummallakin puolella. Histogrammi vasemmalla näyttää kuvan värialan ennen mitään muokkausta, 
tämä histogrammi näyttää kuin paljon kuvasta on tiettyä väriä. Yllä olevassa kuvassa, histogrammi näyttää suuren osan olevan melkein mustaa ja toinen kumpu noin 40% kirkkauden 
kohdalla. Myös, pieni piikki täysin histogrammin yläreunassa tarkoittaa että pieni osa kuvasta on täysin valkoista.

Sävyalan oletusasetuksilla, ulostulon histogrammi on sama kuin sisääntulon histogrammi. Kaikki säädöt mitä kuvaan tehdään, näkyvät ulostulon histogrammissa miltä tulos näyttäisi. 
Jos ulostulon histogrammi on ohut ja jakaantunut johtaa suureen kontrastiin. Jos ulostulo on keskitetty yhteen piikkiin, johtaa vähäiseen kontrastiin. Kaikki mahdolliset vaihtoehdot 
näiden kahden äärimmäisen esimerkin välillä on mahdollista. Yllä olevassa kuvankaappauksessa, suuri osa kuvasta on tummennettu josta tuloksena on iso piikki pohjassa. Sama käy 
myös yläreunaan, missä suuri osa on kirkastettu. Suurimmaksi osaksi, histogrammi on erittäin ohut, johtaen suuren kontrastiin kuvassa.

Tähän asti, kaikki säädöt on tehty kaikille kanavilla, punainen, vihreä ja sininen. Käyttäen valintoja R, G ja B (kuvassa alla), yksittäiset kanavat voi säätää erillään (enintään 
kaksi kerrallaan). Alla olevassa kuvassa, gamma on säädetty vihreän ja sinisen kanavan kohdalla samaan aikaan, johtaen syaanin määrän tippumiseen kuvassa. Tämä korostaa punaista 
kuvassa, kuten voi nähdä alla olevassa kuvassa.

<p class="centered levels">
	<img src="/kuvat/levels2.png" alt="">
</p>

<p class="centered levels">
	<img src="/resurssit/lewistonsunset_small.jpg" alt="" class="border">&nbsp;<img src="/resurssit/lewistonsunset_small_levels2.jpg" alt="" class="border">
</p>
