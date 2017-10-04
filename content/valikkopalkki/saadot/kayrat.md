+++
date = "2015-09-09T18:43:54+03:00"
draft = false
title = "Käyrät"

[menu.pdn]
	parent = "saadot"
	identifier = "kayrat"
	weight = 331

+++

{{<figure class="curves" src="/kuvat/curvesnull.png" alt="Käyrät-Null" >}}

Käyrät-säätöä voi käyttää värien muokkaamiseen suurella määrällä ohjattavuutta. Käyrät antavat sinun hienosäätää jokaisen sävyn voimakkuutta kuvassa. Tarkemmin, sitä voi 
myös käyttää tuomaan esiin tai piilottamaan tiettyjä sävyaloja kuvasta, tavoilla joilla [Sävyala]({{< ref "savyala.md" >}}) ja [Kirkkaus / Kontrasti]({{< ref "saadot.md" >}}) eivät voi.

Toisin kuin [Sävyala]({{< ref "savyala.md" >}}) ja [Kirkkaus / Kontrasti]({{< ref "saadot.md" >}}), Käyrillä voi vapaasti muokata kuinka kirkkaita kaikki eri sävyt voivat 
olla kuvassa. Itseasiassa, kuvan värit voi täysin invertoida käyttäen Käyriä.

### Käyttöliittymä

Käyrät antavat sinun kartoittaa uudeksi kuvan värit käyttäen nupikoita kuvaajassa, kuten näytetään oikealla ja esimerkeissä alhaalla Kun Käyrät-valikko näkyy ensimmäisen kerran, se on 
oikealla olevan kuvan kaltainen. Tämä kuvaaja on yksinkertainen matemaattinen funktio. Vaakasuuntaiset arvot ovat kirkkauden sisääntuloa ja pystysuorat arvot ovat kirkkauden ulostulo.

Simppelisti tämä tarkoittaa että oikean puolen muokkas vaikuttaa kirkkaampaan osaan kuvasta, vasemman puolen muokkaus vaikuttaa tummempaan osaan kuvasta. Käyrän siirtäminen 
oletussijainnin yläpuolelle, kirkastaa aluetta, käyrän siirtäminen alapuolelle tummentaa aluetta.

Kontrollipisteitä käytetään käyrän muokkaamiseen. Pisteitä voi lisätä klikkaamalla missä vain missä ei ole jo pistettä. Pisteitä voi poistaa painamalla sitä hiiren oikealla 
näppäimellä. Siirtääksesi pistettä, vain klikkaa sitä ja siirrä se haluttuun uuteen sijaintiin. Huomaa että ei ole mahdollista olla kaksi pistettä samassa vaakatason kohdassa 
sillä se tarkoittaisi että tiettyä sävyä kirkastettaisiin ja tummennnettaisiin yhtäaikaa (mikä ei ole mahdollista).

Alla on esimerkki miten Käyriä käytetään kuvan muokkaamiseen. Alkuperäinen kuva on vasemmalla ja muokattu kuva on oikealla. Käyrä mikä on piirretty näyttää että tummemmat 
sävyt tulisi tummentaa lisää ja valoisat sävyt kirkastaa. Lopputulos on kuva missä on syvemmät tummat ja vahvemmat kirkkaat, kuitenkin ylläpitäen alkuperäisen kuvan muodon.

{{< figure class="clear centered curves2" src="/kuvat/curvesluminosity.png" alt="Käyrät-Luminosity" >}}

{{< figure class="centered curves3 border" src="/resurssit/curvessamplebase.jpg" alt="Koira1" >}}
{{< figure class="centered curves4 border" src="/resurssit/curvessampleluminosity.jpg" alt="Koira2" >}}

<div style="clear: both;"></div>

### Monikanavasäädöt

Oletuksena, Käyrät käyttävät värien kirkkautta voimakkuuksien muokkaamiseen. Vaihtoehtoisesti, tämän voi myös tehdä käyttäen kuvan Punaista, Vihreää ja Sinistä kanavaa valitsemalla 
vetolaatikosta "RGB" valikon yläosassa.

Kun tämä tila on valittu, uudet kontrollipisteet vaikuttavat valittuihin värikanaviin jotka voi valita käyttäen valikkoja alaosassa. Muokkaaksesi yksittäisiä tai tiettjä kanavia, 
valitse ne vain käyttäen valikkoja.

Alla oleva kuva on muokattu Käyrillä nostaakseen kontrastia ja värikylläisyyttä, tarkentaen jo valmiiksi kylläisiin osiin kuten koiran turkki alentaen punaisen kirkkautta. Huomaa 
että kuvassa on vahvemmat värit, syvemmät tummat osat eikä näytä yhtä harmaalta kuin alkuperäinen.

{{< figure class="centered curves2" src="/kuvat/curvesrgb.png" alt="Käyrät-Mix" >}}

{{< figure class="centered curves3 border" src="/resurssit/curvessamplebase.jpg" alt="Koira3" >}}
{{< figure class="centered curves4 border" src="/resurssit/curvessamplergb.jpg" alt="Koira4" >}}

<div style="clear: both;"></div>

### Muut mahdollisuudet

Kuten aiemmin mainittiin, voit käyttää Käyriä kuvan invertoimiseen. Esimerkissä alhaalla, auton kuva muokattiin käyttäen Käyriä tuottaaksen kuvan mikä ei ole mahdollista muilla 
säädöillä, kuten [Sävyala]({{< ref "savyala.md" >}}) tai Sävy / Värikylläisyys:

{{< figure class="centered curves2" src="/kuvat/curvesextreme.png" alt="Käyrä-Sin" >}}

{{< figure class="centered curves3 border" src="/resurssit/curvesbmwbase.jpg" alt="BMW-Perus" >}}
{{< figure class="centered curves4 border" src="/resurssit/curvesbmwextreme.jpg" alt="BMW-Jälkeen" >}}

<div style="clear: both;"></div>
