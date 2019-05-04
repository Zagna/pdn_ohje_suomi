+++
date = "2015-09-09T18:48:35+03:00"
draft = false
title = "Näytön työkalut"
tooltip = "resurssit/tyokalut/view.png"

[menu.pdn]
    parent = "tikkuna"
    identifier = "naytto"
    weight = 503

+++

Kuvan näyttämiseen on olemassa kaksi työkalua, Suurennuskerroin ja Panoroi. Ne vaikuttavat vain siihen miten kuva näkyy
ikkunassa mutteivät muokkaa kuvaa itsessään.

### Suurennuskerroin {{< tool "zoom.png" >}}

Suurennuskertoimella voit joko kohdistaa (suurentaa) kuvaa, tai loitontaa (pienentää) kuvaa.

Vasemmalla hiiren napilla lähennyt kuvaan ja oikealla hiiren napilla siirryt kauemmaksi.

{{< vihje >}}Hiiren rullan käyttö Ctrl-napin kanssa toistaa suurennuskerroin-työkalun toiminnan.{{< /vihje >}}

Suurennuskerroin-työkalun ollessa käytössä, hiirellä klikkaamalla ja piirtämällä suorakulmion, ikkuna kohdistaa piirrettyyn kohtaan.

{{< vihje >}}Kun Suurennuskerroin-työkalu on käytössä, kuvaa voi panoroida pitämällä hiiren rulla alhaalla ja siirtämällä hiirtä.{{< /vihje >}}

### Panoroi {{< tool "pan.png" >}}

Panoroi-työkalu mahdollistaa kuvan siirtämisen. Hyöty on suurin kun kuva on suurempi kuin pääikkuna (erityisesti kun kuva on suurennettu).

Klikkaa ja vedä hiirellä siirtääksesi kuvaa.

{{< vihje >}}Panoroi-työkalun toiminta on saatavilla muiden työkalujen kanssa. Paina vain Välilyönti alas ja siirrä kuvaa klikkaamalla ja vedä.{{< /vihje >}}

{{< vihje >}}Kuvaa voi siirtää pystysuuntaisesti hiiren rullalla. Pitämällä Shift-näppäin alhaalla rulla siirtää vaakasuuntaisesti.{{< /vihje >}}

### Ylivieritys

Versiosta 4.0.10 eteenpäin on ollut mahdollista vierittää kuvaa ikkunan reunan yli.

{{< vihje >}}Tämä asetus on mahdollistaa pistää pois päältä {{< tool "tools.png" >}}[Asetuksista]({{< relref "asetukset.md" >}}).{{< /vihje >}}

Ylivierityksen määrä riippuu kuvan koosta. Pienet kuvat voi siirtää kunnes puolet kuvasta on ikkunan ulkopuolella.

<figure>
    <video width="640" height="360" autoplay loop>
        <source type="video/mp4" src="/vid/view1.mp4">
    </video>
    <figcaption>Kuvan panorointi käyttäen vasenta hiiren nappia ja välilyöntiä</figcaption>
</figure>

Isompana näkyvät kuvat siirtyvät kunnes kuvan reuna osuu ikkunan keskikohtaan.

<figure>
    <video width="640" height="360" autoplay loop>
        <source type="video/mp4" src="/vid/view2.mp4">
    </video>
    <figcaption>Kuvan panorointi käyttäen vasenta hiiren nappia ja välilyöntiä</figcaption>
</figure>

Kuvia voi siirtää myös ↑ ← ↓ → nuolinäppäimillä kun Välilyönti-näppäin on pidetty alhaalla.

Kuvan vierityksen määrä nuolinäppäimillä riippuu siitä kuinka suuri Suurennuskerroin on.

Kuvat joita esitetään yli 1000% suurennoksella liikkuvat pikselin murto-osia kerrallaan. Pienemmällä suurennoksella kuvat
siirtyvät useamman pikselin kerrallaan.

Jos Ctrl ja Välilyönti -näppäimet ovat alhaalla yhtä aikaa, kuvan siirtyminen on kerrattu kymmenellä.

### Kuvan keskittäminen

Kuvan keskittäminen on helpointa painamalla Ctrl+B kahdesti. Ensimmäinen painallus kohdistaa kuvan ikkunan kokoon ja toinen
painallus palauttaa edellisen suurennuskertoimen.
