+++
draft = false
title = "Työkalupalkki"

[menu.pdn]
    parent = "kliittyma"
    identifier = "tpalkki"
    weight = 204

+++

Työkalupalkki sisältää napit kaikille yleisille komennoille, asetukset miten kuva näytetään ja asetukset monien työkalujen lopputulokseen.

{{< figure src="ui/toolbar.webp" alt="Työkalupalkki" >}}{{< /figure >}}

* ### Yleiset

    {{< figure src="ui/toolbar_commonactions.webp" alt="Yleiset työkalut" >}}{{< /figure >}}

    Näitä nappeja käytetään tekemään yleisiä komentoja. Vasemmalta oikealle, niiden avulla voi luoda uuden kuvan, avata olemassa olevan,
    tallentaa, tulostaa, leikata, kopioida, liittää,rajata, poistaa valinnan, kumota ja tehdä uudelleen

* ### Näyn hallinta

    Seuraavat kaksi nappia ovat näyttävät ja piilottavat ristikon tai viivaimen.

* #### Ristikko

    Ristikko näkyy kuvan päällä missä jokainen solu on yhden pikselin kokoinen. Ristikko on hyödyllinen suurennetun kuvan kanssa kun yksittäisten
    pikselin muokkausta vaaditaan.

    {{< huom >}}Ristikko ei näy alle 200% suurennoksella.{{< /huom >}}

* #### Viivaimet

    Viivaimet näkyvät pohjan yläreunassa ja oikealla.

    Viivaimet auttavat kun pitää järjestellä kuvia tarkasti. Viivaimen yksiköt on se mitä on asetettu Näytä valikossa tai tilapalkissa.

    Kun valinta on käytössä, sen ääriviivat on korostettu viivaimessa joka helpottaa kohteen mittaamista. Kursorin sijainti näkyy myös viivaimessa.

* ### Työkalun valinta

    {{< figure src="ui/toolbar_toolchoicebutton.webp" alt="Työkalun valinta" >}}{{< /figure >}}

    Työkalujen asetukset voi vaihtaa {{< tool "tools" >}}[Asetukset-valikossa]({{% relref "asetukset" %}}).

* ### Oletustyökalu

    Työkalu joka on valittuna kun paint.net käynnistyy.

* ### Muodot, sivellin, tyyli ja täyttö

    {{< figure src="ui/toolbar_shapesbrushesfill.webp" alt="Muodot, sivellin, tyyli ja täyttö" >}}{{< /figure >}}

    {{< tool "shapes" >}}[Muototyökalut]({{% relref "muodot" %}}) käyttävät
    näitä asetuksia. Voit valita piirretäänkö muoto ääriviivalla, täytettynä, vai kummatkin, siveltimen koko sekä piirtotyylin.

    {{< tool "linecurve" >}}[Viiva/Käyrä -työkalulla]({{% relref "viiva-kayra" %}}) voit asettaa tyylin, viivan päiden tyylit
    sekä joko viiva tai piste muodon.

* ### Valintatyökalut

    {{< figure src="ui/toolbar_selectionmode.webp" alt="Valintatyökalut" >}}{{< /figure >}}

    "Valintatila" osalla työkalupalkista voit valita tilan jota valintatyökalut käyttävät. Kun valitse valintatyökalulla se joko korvaa
    olemassa olevan valinnan, lisää siihen, vähentää siitä tai kääntää aluen jonka yli se tulee.

    Seuraavalla osalla työkalupalkista voit valita joko normaalin (vapaa), kiinteän koon ja kiinteän suhteen välillä kun käytät suorakulmaista
    valintatyökalua. Jälkimmäiset kaksi tilaa ovat hyödyllisiä kun haluat esimerkiksi valita 4" x 3" kokoisen alueen tai haluat valita alueen
    jonka suhde on 16 x 10 (tietenkin, voit käyttää mitä tahansa kokoja, lisää vain haluamasi luvut).

* ### Teksti

    {{< figure src="ui/toolbar_text.webp" alt="Tekstityökalu" >}}{{< /figure >}}

    Täta osaa työkalupalkista käyttää vain {{< tool "text" >}}
    [Teksti]({{% relref "tekstityokalu" %}}), ja sillä voit asettaa fontin, koon, pehmeyden sekä tyylin.

    On saatavilla kolme eri tapaa näyttää teksti, "Pehmeä", "Terävä (Modern)" ja "Terävä (Klassinen)". Pehmeä sopii parhaiten keskikokoiseen ja
    isoon tekstiin. Pienillä koilla se saattaa näyttää epäselvältä tai sekavalta, paitsi tämä riippuu paljolti mikä fontti on käytössä. Terävä
    sopii hyvin pienen kokoiseen tekstiin; suurena se ei näytä kovin pehmeältä. Jos reunan pehmennys on pois päältä (rasteroinnin kautta), se
    ei vaikuta onko Pehmeä tai Terävä valittu.

* ### Väriliukuma

    {{< figure src="ui/toolbar_gradient.webp" alt="Väriliukuma" >}}{{< /figure >}}

    {{< tool "gradient" >}}[Väriliukumalla]({{% relref "variliukuma" %}})
    on 7 erilaista liukumaa jota se voi käyttää, sekä se voi toimia joko väritilassa tai erikoisessa läpinäkyvyystilassa.

    Lisäksi on mahdollista peilata tai kiertää.

* ### Taikasauva, täyttö ja uudelleen väritys

    {{< figure src="ui/toolbar_magicwandpaintbucket.webp" alt="Taikasauva, täyttö ja uudelleen väritys" >}}{{< /figure >}}

    Toleranssi vaikuttaa miten {{< tool "magicwand" >}}
    [Taikasauva]({{% relref "taikasauva" %}}), [Täyttö]({{% relref "taytto" %}}) sekä {{< tool "recolor" >}}[Uudelleen väritys]({{% relref "uudelleen-varitys" %}}) toimivat. Se määrää miten samanväriset värit lasketaan mukaan
    kun työkalua käytetään. Jos se on asetettu 0%, vain tarkalleen tiettyä väriä käytetään. Jos se on 100%, kaikki värit lasketaan mukaan. Oletusarvo on 50%.

    Näytteistys voi valita tason tai koko kuvan.

* ### Väripoimija

    {{< figure src="ui/toolbar_colorpicker.webp" alt="Väripoimija" >}}{{< /figure >}}

    {{< tool "colorpicker" >}}[Väripoimijan]({{% relref "pikselityokalut" %}})
    voi asettaa vaihtamaan {{< tool "pencil" >}}[Kynään]({{% relref "pikselityokalut" %}})
    tai edelliseen työkaluun värin poimimisen jälkeen.

    Näytteistyksen voi asettaa pysymään tasolla tai koskemaan koko kuvaa sekä näytepisteiden määrää voi muuttaa.

* ### Siirrä valittuja pikseleitä

    {{< figure src="ui/toolbar_moveselectedpixels.webp" alt="Siirrä valittuja pikseleitä" >}}{{< /figure >}}

    {{< tool "moveselectedpixels" >}}[Siirrä valintaa]({{% relref "siirtotyokalut" %}})
    -työkalun voi asettaa käyttämään joko "pehmeää" (bilinear) tai "pikseloitua" (lähin naapuri) näytteistystä. Pehmeä laatu on yleensä suositeltua ellei
    sinulla ole tarkkaa tarvetta käyttää pikseloitua laatua.

* ### Rasterisaatio

    {{< figure src="ui/toolbar_rasterization.webp" alt="Rasterisaatio" >}}{{< /figure >}}

    Moneen työkaluun vaikuttaa yksi tai kummatkin näistä valinnoista jotka vaikuttavat siihen miten piirtäminen toimii. Voit käyttää näitä joko painamalla
    itse nappia vaihtaaksesi asetusta, tai painamalla nuolta saadaksesi valikon vaihtoehdoista.

    Ensimmäinen nappi asettaa onko [reunan pehmennys](https://en.wikipedia.org/wiki/Antialiasing) käytössä. Ympyrä vasemmalla on piirretty reunan pehmennys
    päällä kun oikealla oleva ympyrä on piirretty ilman reunan pehmennystä. Se on selkeästi "rösöisempi":

    {{< figure src="png/aavsnoaa.webp" alt="Pehmennys päällä ja pois" >}}{{< /figure >}}

    Seuraava nappi asettaa [sekoitustilan](https://en.wikipedia.org/wiki/Alpha_compositing). Tästä voi lukea lisää [sekoitustiloista]({{% relref "sekoitustilat" %}}).
