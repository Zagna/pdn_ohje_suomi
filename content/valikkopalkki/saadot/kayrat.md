+++
date = "2015-09-09T18:43:54+03:00"
draft = false
title = "Käyrät"

[menu.pdn]
    parent = "sehot"
    identifier = "kayrat"
    weight = 402

+++

{{< level >}}
    {{< figure src="/kuvat/kayra0.png" alt="Käyrät-Null" >}}
{{< /level >}}

Käyrät-säätöä voi käyttää värien muokkaamiseen suurella määrällä ohjattavuutta. Käyrät antavat sinun hienosäätää jokaisen sävyn
voimakkuutta kuvassa. Tarkemmin, sitä voi myös käyttää tuomaan esiin tai piilottamaan tiettyjä sävyaloja kuvasta, tavoilla joilla
[Sävyala]({{< relref "savyala" >}}) ja [Kirkkaus / Kontrasti]({{< relref "saadot" >}}) eivät voi.

Toisin kuin [Sävyala]({{< relref "savyala" >}}) ja [Kirkkaus / Kontrasti]({{< relref "saadot" >}}), Käyrillä voi vapaasti muokata
kuinka kirkkaita kaikki eri sävyt voivat olla kuvassa. Itseasiassa, kuvan värit voi täysin invertoida käyttäen Käyriä.

### Käyttöliittymä

Käyrät antavat sinun kartoittaa uudeksi kuvan värit käyttäen napukoita kuvaajassa, kuten näytetään oikealla ja esimerkeissä alhaalla Kun
Käyrät-valikko näkyy ensimmäisen kerran, se on oikealla olevan kuvan kaltainen. Tämä kuvaaja on yksinkertainen matemaattinen funktio.
Vaakasuuntaiset arvot ovat kirkkauden sisääntuloa ja pystysuorat arvot ovat kirkkauden ulostulo.

Simppelisti tämä tarkoittaa että oikean puolen muokkaus vaikuttaa kirkkaampaan osaan kuvasta, vasemman puolen muokkaus vaikuttaa tummempaan
osaan kuvasta. Käyrän siirtäminen oletussijainnin yläpuolelle, kirkastaa aluetta, käyrän siirtäminen alapuolelle tummentaa aluetta.

Kontrollipisteitä käytetään käyrän muokkaamiseen. Pisteitä voi lisätä klikkaamalla missä vain missä ei ole jo pistettä. Pisteitä voi poistaa
painamalla sitä hiiren oikealla näppäimellä. Siirtääksesi pistettä, vain klikkaa sitä ja siirrä se haluttuun uuteen sijaintiin. Huomaa että
ei ole mahdollista olla kaksi pistettä samassa vaakatason kohdassa sillä se tarkoittaisi että tiettyä sävyä kirkastettaisiin ja tummennettaisiin
yhtä aikaa (mikä ei ole mahdollista).

Alla on esimerkki miten Käyriä käytetään kuvan muokkaamiseen. Alkuperäinen kuva on vasemmalla ja muokattu kuva on oikealla. Käyrä mikä on
piirretty näyttää että tummemmat sävyt tulisi tummentaa lisää ja valoisat sävyt kirkastaa. Lopputulos on kuva missä on syvemmät tummat ja
vahvemmat kirkkaat, kuitenkin ylläpitäen alkuperäisen kuvan muodon.

{{< level >}}
    {{< figure src="/kuvat/kayra1.png" alt="Käyrät-Luminosity" >}}
{{< /level >}}

{{< level >}}
    {{< figure src="/resurssit/tehoste.jpg" alt="Koira1" >}}
    {{< figure src="/resurssit/tehoste_kayra1.jpg" alt="Koira2" >}}
{{< /level >}}

### Monikanavasäädöt

Oletuksena, Käyrät käyttävät värien kirkkautta voimakkuuksien muokkaamiseen. Vaihtoehtoisesti, tämän voi myös tehdä käyttäen kuvan Punaista,
Vihreää ja Sinistä kanavaa valitsemalla vetolaatikosta "RGB" valikon yläosassa.

Kun tämä tila on valittu, uudet kontrollipisteet vaikuttavat valittuihin värikanaviin jotka voi valita käyttäen valikkoja alaosassa.
Muokataksesi yksittäisiä tai tiettyjä kanavia, valitse ne vain käyttäen valikkoja.

Alla oleva kuva on muokattu Käyrillä vahvistamaan koiran turkin punaisen voimakkuutta.

{{< level >}}
    {{< figure src="/kuvat/kayra2.png" alt="Käyrät-Mix" >}}
{{< /level >}}

{{< level >}}
    {{< figure src="/resurssit/tehoste.jpg" alt="Koira3" >}}
    {{< figure src="/resurssit/tehoste_kayra2.jpg" alt="Koira4" >}}
{{< /level >}}

### Muut mahdollisuudet

Kuten aiemmin mainittiin, voit käyttää Käyriä kuvan invertoimiseen. Esimerkissä alhaalla, ruisleivän kuva muokattiin käyttäen Käyriä tuottaakseen
kuvan mikä ei ole mahdollista muilla säädöillä, kuten [Sävyala]({{< relref "savyala" >}}) tai Sävy / Värikylläisyys:

{{< level >}}
        {{< figure src="/kuvat/kayra3.png" alt="Käyrät-Sin" >}}
{{< /level >}}

{{< level >}}
    {{< figure src="/resurssit/ruisleipa.jpg" alt="Ruisleipä" >}}
    {{< figure src="/resurssit/ruisleipa_kayra3.jpg" alt="Ruisleipä käyrät" >}}
{{< /level >}}
