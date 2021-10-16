+++
draft = false
title = "Tasoikkuna"

[menu.pdn]
    parent = "kliittyma"
    identifier = "tasoikkuna"
    weight = 208

+++

Tällä ikkunalla voit hallita useita tasoja joita kuva voi sisältää paint.netissä. Yksi taso on aina aktiivinen taso ja kaikki piirtämiset
ja tehosteet vaikuttavat tähän yhteen tasoon. Jokaiselle tasolle voi antaa nimen, sekä voi määrittää sekoitustilan ja peittävyyden. Voit
myös asettaa tason näkyväksi tai piilotetuksi käyttämällä tason vieressä olevaa valintaruutua.

Voit ajatella tasoja kuin läpinäkyvinä kuvina jotka on asetettu päällekkäin. Kuvat jotka ovat alemmilla tasoilla näkyy ylempien tasojen läpi,
mutta vain jos tasot ylhäällä eivät ole tiellä.

{{< vihje >}}Tasoja on helppo järjestellä uudelleen vain klikkaamalla tasoa ja vetämällä sen haluttuun kohtaan listassa.{{< /vihje >}}

{{< figure src="ui/layerswindow.webp" alt="Tasoikkuna" >}}{{< /figure >}}

Tasoikkunan pohjassa on seitsemän nappia. Vasemmalta oikealle ne ovat:

* ### Lisää uusi taso

    Tämä lisää uuden, täysin läpinäkyvän tason kuvaan. Sillä on yleinen nimi joka kertoo sen sijainnista, esim. "Taso 4".

* ### Poista taso

    Tämä poistaa valitun tason kuvasta. Et voi poistaa tasoa jos se on ainoa kuvassa.

* ### Kahdenna taso

    Tämä kahdentaa valitun tason, kopioiden sen sisällön ja asetukset, ja sijoittaen sen alkuperäisen tason ylle.

* ### Yhdistä taso alas

    Tämä ottaa valitun tason ja yhdistää sen alla olevaan tasoon.

* ### Siirrä tasoa ylös

    Tämä siirtää nykyistä tasoa ylemmäksi tasojen järjestyksessä.

* ### Siirrä tasoa alas

    Tämä siirtää nykyistä tasoa alemmaksi tasojen järjestyksessä.

* ### Tason ominaisuudet

    Tämä näyttää valitun tason asetukset. Voit antaa tasolle nimen, asettaa sen näkyvyyden ja sekoitustilan.

    {{< figure src="ui/layerproperties.webp" alt="Tason ominaisuudet" >}}{{< /figure >}}
