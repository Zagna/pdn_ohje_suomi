+++
date = "2015-09-09T18:42:00+03:00"
draft = false
title = "Sekoitustilat"

[menu.pdn]
    parent = "koti"
    identifier = "sek_tilat"
    weight = 105

+++

Tason sekoitustila määrää miten se sekoitetaan alla oleviin tasoihin. Vaihtaaksesi tason sekoitustilan valitse taso ja avaa sen
ominaisuudet (Tasovalikon tai Ominaisuudet napin kautta, tai kaksoisklikkaamalla tasoa). Saat seuraavan valikon:

{{< figure oclass="mx-auto d-block" class="mx-auto d-block" src="/kuvat/layerproperties.png" alt="Tason ominaisuudet" >}}

Tätä aihetta varten seuraavia kahta kuvaa käytetään taustakuvaksi sekä ensimmäiseksi tasoksi taustakuvan yläpuolella:

<div class="d-flex justify-content-center">

{{< figure src="/resurssit/kemijoki.jpg" title="Taustakuva - Kuva Rovaniemestä (1972)" caption="(\"Pohja taso\")" >}}
{{< figure src="/resurssit/ruisleipa.jpg" title="Taso 1 - Kuva ruisleivästä" caption="(\"Päällinen taso\")" >}}

</div>

Kaikki sekoitustilat eivät ole helppoja ymmärtää, ja tämän takia suosittelemme että kokeilette ja käytätte [foorumia](http://www.getpaint.net/redirect/forum.html) kysymysten ja vinkkien
muodossa. Jokainen sekoitustila selostetaan kuvan kanssa edellä mainittujen kuvien kanssa, sekoitustila valittuna ja peittävyys asetettuna täyteen.

Alla olevissa aiheissa, käytämme termiä *kokoonpano*. Tämä viittaa lopputulokseen kaikkien nykyisen tason alla olevien sekoitukseen.
"Lopullinen" kokoonpano on mitä näet näytöllä kun työstät kuvaa. Kuitenkin, tässä aiheessa meidän pitää viitata kokoonpanoon kun sitä
koostaan, taso tasolta.

Sekoitustilan oletus on Normaali. Jokainen pikseli sekoitetaan kokoonpanoon sen alfa-arvon mukaan. Normaalin lisäksi on myös olemassa
alla olevat sekoitustilat.

{{% tabit "sekoitus" %}}

### Työkalujen sekoitustilat

Tasojen lisäksi työkalut
{{< tool "paintbucket.png" >}}[Täyttö]({{< relref "taytto.md" >}}),
{{< tool "paintbrush.png" >}}[Sivellin]({{< relref "sivellin.md" >}}),
{{< tool "pencil.png" >}}[Kynä]({{< relref "pikselityokalut.md" >}}),
{{< tool "clonestamp.png" >}}[Kloonaus]({{< relref "kloonaus.md" >}}),
{{< tool "shapes.png" >}}[Muodot]({{< relref "muodot.md" >}}),
{{< tool "gradient.png" >}}[Väriliukuma]({{< relref "variliukuma.md" >}}) sekä
{{< tool "linecurve.png" >}}[Viiva/Käyrä]({{< relref "viiva_kayra.md" >}})
voivat käyttää sekoitustiloja.

Työkalujen kanssa aiemmin mainittujen tilojen lisäksi on saatavilla myös Korvaava tila.

#### Korvaava

Normaali sekoitus toimii siten että jokainen piirrettävä pikseli sekoitetaan tasolla jo olemassa oleviin pikseleihin. Korvaava sekoitus
toimii siten että jokainen piirrettävä pikseli korvaa jo olemassa olevat pikselit. Alla olevassa kuvassa, viiva piirrettiin kahdesti
alfa-arvolla 128, joka tarkoittaa noin 50% läpinäkyvyyttä. Viiva vasemmalla on piirretty Normaalin sekoituksen kanssa ja täten sekoittuu
kuvaan autosta. Kummatkin leipä sekä viiva näkyvät. Toinen viiva oikealla, on piirretty Korvaavan kanssa. Leipä ei ole enää näkyvä missä
viiva piirrettiin ja ruudukko mikä näkyy tarkoittaa että se osa kuvasta on läpinäkyvä.

{{< figure oclass="mx-auto d-block" class="mx-auto d-block" src="/resurssit/ruisleipa_alpha.jpg" alt="Sekoitustila" >}}
