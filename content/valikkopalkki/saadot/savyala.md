+++
draft = false
title = "Sävyala"

[menu.pdn]
    parent = "sehot"
    identifier = "savyalat"
    weight = 403 

+++

Sävyala-säädöllä voit muuttaa kuvan värialuetta (tai "valotusaikaa"), mukaan lukien gamman säätöä, kanavakohtaisesti. Useimmat säädökset mitä
tehdään liittyy kuvan sisääntulon ja ulostulon valkopisteeseen, harmaapisteeseen ja mustapisteeseen. Kuvan valkopiste on kirkkain väri mikä esiintyy
kuvassa ja mustapiste on kaikkein tummin väri mikä esiintyy kuvassa. Harmaapiste esittää värien keskiarvoa koko kuvassa.

{{< level >}}
    {{< figure src="ui/levels1.webp" alt="Käyrät1" >}}{{< /figure >}}
{{< /level >}}

Jokaista väripistettä voi muokata käyttäen Sävyalaa. Yllä olevassa valikossa, on 5 numeerista valintaa ja 5 väriliukua. Kaksi vasemmalla puolella
'Sisääntulo' osassa tarkoittaa sisääntulon valko- ja mustapistettä. Näitä värejä voi muokata käyttäen joko numeerisia valintoja, liukuja tai
kaksoisklikkaamalla värilaatikkoa. Valkopiste tällä puolella on väri mikä tulisi asettaa tulemaan valkopiste oikealle puolelle. Kun säädös on
ajettu, värit jotka ovat kuvassa yhtä kirkkaita tai kirkkaampia kuin tämä väri säädetään olemaan sama kuin ulostulon valkopiste (yllä olevassa
kuvassa, ulostulon valkopiste on jätetty oletusarvolle, valkoiseen.) Vastaavasti, sisääntulon mustapiste on asetettu myös, jolloin kaikkein tummimmat
värit kuvassa säädetään täysin mustaksi. Muuttamalla valkopistettä hieman tummemmaksi, teemme samasta tummasta väristä täysin valkoista ulostulossa,
ja muuttamalla mustapistettä hieman kirkkaammaksi, teemme kaikista niistä tummista väreistä täysin tummia. Myös, valikossa ylhäällä, harmaapiste on
siirretty hieman kirkkaammaksi. Vaikka tämä ei vaikuta kuvan valkoiseen tai mustaan, se nostaa kuvan värejä yleisesti kirkkaammiksi.

{{< level >}}
    {{< figure src="img/lewistonsunset_small.webp" alt="Käyrät2" >}}{{< /figure >}}
    {{< figure src="img/lewistonsunset_small_levels1.webp" alt="Käyrät3" >}}{{< /figure >}}
{{< /level >}}

Säädöt venyvät koko kuvan alaan, näyttäen helposti histogrammeista mitkä ovat kummallakin puolella. Histogrammi vasemmalla näyttää kuvan
värialan ennen mitään muokkausta, tämä histogrammi näyttää kuin paljon kuvasta on tiettyä väriä. Yllä olevassa kuvassa, histogrammi näyttää
suuren osan olevan melkein mustaa ja toinen kumpu noin 40% kirkkauden kohdalla. Myös, pieni piikki täysin histogrammin yläreunassa tarkoittaa
että pieni osa kuvasta on täysin valkoista.

Sävyalan oletusasetuksilla, ulostulon histogrammi on sama kuin sisääntulon histogrammi. Kaikki säädöt mitä kuvaan tehdään, näkyvät ulostulon
histogrammissa miltä tulos näyttäisi. Jos ulostulon histogrammi on ohut ja jakaantunut johtaa suureen kontrastiin. Jos ulostulo on keskitetty
yhteen piikkiin, johtaa vähäiseen kontrastiin. Kaikki mahdolliset vaihtoehdot näiden kahden äärimmäisen esimerkin välillä on mahdollista. Yllä
olevassa kuvankaappauksessa, suuri osa kuvasta on tummennettu josta tuloksena on iso piikki pohjassa. Sama käy myös yläreunaan, missä suuri
osa on kirkastettu. Suurimmaksi osaksi, histogrammi on erittäin ohut, johtaen suuren kontrastiin kuvassa.

Tähän asti, kaikki säädöt on tehty kaikille kanavilla, punainen, vihreä ja sininen. Käyttäen valintoja R, G ja B (kuvassa alla), yksittäiset
kanavat voi säätää erillään (enintään kaksi kerrallaan). Alla olevassa kuvassa, gamma on säädetty vihreän ja sinisen kanavan kohdalla samaan
aikaan, johtaen syaanin määrän tippumiseen kuvassa. Tämä korostaa punaista kuvassa, kuten voi nähdä alla olevassa kuvassa.

{{< level >}}
    {{< figure src="ui/levels2.webp" alt="Käyrät4" >}}{{< /figure >}}
{{< /level >}}

{{< level >}}
    {{< figure src="img/lewistonsunset_small.webp" alt="Käyrät5" >}}{{< /figure >}}
    {{< figure src="img/lewistonsunset_small_levels2.webp" alt="Käyrät6" >}}{{< /figure >}}
{{< /level >}}
