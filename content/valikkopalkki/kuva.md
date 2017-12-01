+++
date = "2015-09-09T18:43:24+03:00"
draft = false
title = "Kuva"

[menu.pdn]
    parent = "vpalkki"
    identifier = "kuva"
    weight = 314

+++

Tämä valikko sisältää komentoja jotka vaikuttavat kaikkiin tasoihin kuvassa. Tämä on vastakohta [Tasovalikolle]({{< relref "tasot.md" >}}) joka
vaikuttaa vain aktiiviseen tasoon.

{{< figure src="/kuvat/imagemenu.png" alt="Kuva valikko" >}}

* ### Rajaa valintaan

    Tämä valikko on saatavilla vain jos valinta on aktiivinen. Kun valitset tämän komennon, kuva vaihtuu vain siihen mikä on valittu. Jos
    valinta ei ole suorakulmainen tai neliö, kuvasta tulee suorakulmainen. Mutta, pikselit joita ei ole valittu, tehdään läpinäkyviä.

    Alkuperäinen kuva:

    {{< figure src="/resurssit/ruisleipa.jpg" alt="Alkuperäinen" class="border" >}}

    Tässä rajattu alue on valittu käyttäen [Lassovalintaa]({{< relref "valintatyokalut.md" >}}):

    {{< figure src="/resurssit/ruisleipa_lasso.jpg" alt="Lassovalinta" class="border" >}}

    Kuva kun olet valinnut Rajaa valintaan komennon. Valinnan rajat päättää kuinka suuri kuvasta tulee joka on suorakulmainen, mutta kaikki
    pikselit jotka ovat valinnan ulkopuolella, on läpinäkyviä. Huomaa että shakkilautamallia käytetään vain ilmoittamaan että tietty alue on
    läpinäkyvä. Se ei ole osa kuvaa.

    {{< figure src="/resurssit/ruisleipa_rajaa.jpg" alt="Rajaa valintaan" class="border" >}}

* ### Muuta kokoa

    Tämä komento antaa muuttaa kuvan kokoa. Tehden sen, kuva joko laajennetaan tai kutistetaan kokoon minkä sinä annat. Voi määrittää tietyn
    suhteellisen prosentuaalisen arvon millä kuvan koko muunnetaan, tai voit määrittää tarkan pikselikoon. Jos "Säilytä kuvasuhde" valinta on
    asetettu, uuden leveyden laitettaessa, korkeus määräytyy kuvan suhteen mukaan, ja toisin päin.

    Jos päätät muuttaa kuvan tulostuskokoa, pikselikoko perustuu kuvan resoluutioon, joka on oletuksella 96 pikseliä per tuuma, joka on sama
    kuin 37.8 pikseliä per senttimetri. Esimerkkinä, jos määrität kuvan leveydeksi yhden tuuman, ja resoluution on 96 pikseliä per tuuma, kuvan
    koko tulee olemaan 96 pikseliä leveä.

    Voit myös vaikuttaa kuvan tulostuskokoon muuttamalla vain kuvan resoluutiota. Huomaa että jos vain muokkaan resoluutiota, pikselikoko pysyy
    samana ja interpolointia ei käytetä.

    On olemassa monta interpolointitapaa. "Interpolointi" on prosessi jossa lasketaan mitä uudet pikselit tulisi olla perustuen siihen mitä
    vanhat pikselit ovat. Jotkin algoritmit tuottavat parempia toivottuja tuloksia, mutta kestävät kauemmin suorittaa. On suositeltavaa että
    käytät oletusarvoa, "Paras Laatu", ellei sinulla ole tietty tarve ja ymmärrät mitä muut vaihtoehdot ovat
    [Bilinear](http://en.wikipedia.org/wiki/Bilinear_interpolation), [Bicubic](http://en.wikipedia.org/wiki/Bicubic_interpolation) ja
    [Lähin naapuri](http://en.wikipedia.org/wiki/Nearest_neighbor_interpolation). Paras Laatu valitsee automaattisesti joko
    [Bicubic](http://en.wikipedia.org/wiki/Bilinear_interpolation) tai [Super Sampling](http://en.wikipedia.org/wiki/Super_sampling)
    riippuen siitä minkä koon määrität uudelle kuvalle.

    {{< figure src="/kuvat/resizedialog.png" alt="Muuta kokoa" >}}

    Alkuperäinen kuva:

    {{< figure src="/resurssit/ruisleipa.jpg" alt="Alkuperäinen" class="border" >}}

    Suurennoksen jälkeen, käyttäen Muuta kokoa -komentoa:

    {{< figure src="/resurssit/ruisleipa_muuta_iso.jpg" alt="Suurennettu" class="border" >}}

    Kutistuksen jälkeen, käyttäen Muuta kokoa -komentoa:

    {{< figure src="/resurssit/ruisleipa_muuta_pieni.jpg" alt="Kutistettu" class="border" >}}

    Riippuen kuvan tyypistä mitä kutistat, voit haluta käyttää Terävöitä-tehostetta arvolla 1 tai 2 koon muuttamisen jälkeen.

* ### Pohjan koko

    Tämä komento antaa sinun joko suurentaa tai kutistaa kuvan kankaan kokoa ilman että muutat kuvan kokoa. Se toimii samallalailla kuin Muuta
    kokoa -valikko, mutta antaa valita Ankkurin paikan. Jos kankaan koko suurennetaan, uusi alue täytetään taustavärillä.

    {{< figure src="/kuvat/canvassize.png" alt="Pohjan koko" >}}

    Alkuperäinen kuva:

    {{< figure src="/resurssit/ruisleipa.jpg" alt="Alkuperäinen" class="border" >}}

    Pohjan suurennoksen jälkeen käyttäen keskellä olevaa ankkuria (taustaväri on valkoinen tässä tapauksessa):

    {{< figure src="/resurssit/ruisleipa_pohja_iso.jpg" alt="Pohjan suurennos" class="border" >}}

    Pohjan kutistuksen jälkeen käyttäen keskellä olevaa ankkuria:

    {{< figure src="/resurssit/ruisleipa_pohja_pieni.jpg" alt="Pohjan kutistus" class="border" >}}

* ### Käännä vaakatasossa, ja Käännä pystytasossa

    Nämä antavat sinun kääntää kuva joko vaaka- tai pystysuorassa.

    Alkuperäinen kuva:

    {{< figure src="/resurssit/ruisleipa.jpg" alt="Alkuperäinen" class="border" >}}

    Kun olet kääntänyt sen vaakasuorassa:

    {{< figure src="/resurssit/ruisleipa_kaanna.jpg" alt="Kääntäminen" class="border" >}}

* ### Pyöritä

    Tämä alavalikko antaa sinulle monta komentoa jolla voit pyörittää kuvaa 90 asteella joko myötäpäivään tai vastapäivään, tai 180 astetta.

    Alkuperäinen kuva:

    {{< figure src="/resurssit/ruisleipa.jpg" alt="Alkuperäinen" class="border" >}}

    Sen jälkeen kun se on pyöritetty 90 astetta myötäpäivään:

    {{< figure src="/resurssit/ruisleipa_oikea_90.jpg" alt="Kuvan pyöritys" class="border" >}}

* ### Yhdistä tasot

    Tämä liittää kuvan kaikki osat yhteen tasoon. Tämä on saatavilla vain jos kuvassa on enempi kuin yksi taso.
