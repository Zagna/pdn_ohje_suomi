+++
draft = false
title = "Näytä"

[menu.pdn]
    parent = "vpalkki"
    identifier = "naytav"
    weight = 303

+++

Näytä-valikko sisältää komentoja joita voi käyttää vaihtamaan tapaa miten kuva tai työalue näytetään sinulle.

{{< figure src="ui/viewmenu.webp" alt="Näytä valikko" >}}{{< /figure >}}

* ### Suurenna

    Tämä tuo lähemmäksi kuvaa. Suurennuskerroin nousee seuraavaan kahden potenssin prosenttiarvoon, (esim., 100%, 200%, 400%, 800%, 1600%, 3200%).

* ### Pienennä

    Tämä vie kauemmaksi kuvasta, kerroin vähenee seuraavaan kahden potenssin prosenttiarvoon.

* ### Tarkenna ikkunaan

    Kun valitset tämän, suurennuskerroin asetetaan niin että kuva aina mahtuu paint.netin ikkunaan. Kerrointa ei kuitenkaan aseteta suuremmaksi kuin 100%.

* ### Tarkenna valintaan

    Jos sinulla on valittuna kuvasta alue, tämä valinta näyttää ikkunan kokoisen suorakulmaisen alueen valinnasta.

* ### Oikea koko

    Tämä asettaa kertoimen 100%. Jokainen pikseli näytöllä vastaa yhtä pikseliä kuvassa.

* ### Ristikko

    Tällä valinnalla voit joko piilottaa tai näyttää ristikon, joka on hyödyllinen kun olet suurentanut kuvaan ja tahdot tehdä pikselin
    tarkkaa muokkausta. Ristikko on näkyvä vain kun kerroin on 200% tai enemmän. Tältä kangas näyttää kun ristikko on valittu. Huomaa
    että jokaisen pikselin ympärillä on pisteittäinen suorakulmio:

    {{< figure src="png/grid.webp" alt="Ristikko" >}}{{< /figure >}}

* ### Viivoitin

    Tällä valinna voit joko näyttää tai piilottaa viivoittimet jotka ovat näkyvillä vasemmassa ja yläreunassa. Tämä voi auttaa sinua
    kohdistamaan piirroksia tiettyihin kohtiin kuvaan ilman että pitää katsoa kursorin sijaintia tilapalkissa. Kun valinta on
    aktiivinen, sen sykkivä reuna korostetaan viivoittimissa.

    {{< figure src="img/viivain.webp" alt="Viivoitin" >}}{{< /figure >}}

* ### Pikseliä, Tuumaa, ja Senttimetriä

    Tällä asetuksella voit valita miten kuvien koordinaatit näytetään sinulle erinäisissä paikoissa käyttöliittymää mukaan lukien
    viivoitin ja tilapalkki. Oletusarvo on pikseli. Jos valitset tuumat tai senttimetrit, ylimääräisiä laskuja tarvitaan muuntamaan
    pikselimäärät tuumiin ja senttimetreihin. Laskut riippuvat kuvan resoluutiosta, jonka voit asettaa
    [Kuva **&rarr;** Muuta kokoa]({{% relref "kuva#muuta-kokoa" %}}) komennolla.
