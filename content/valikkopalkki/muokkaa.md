+++
date = "2015-09-09T18:43:13+03:00"
draft = false
title = "Muokkaa"

[menu.pdn]
    parent = "vpalkki"
    identifier = "muokkaa"
    weight = 312

+++

Muokkaa-komennot mahdollistavat kuvan historian, kuvan valitun alueen, valitun alueen itse sekä leikepöydän muokkauksen.

Tärkeä asia mikä tulisi huomata on että valituissa alueissa suoritetut piirrot jäävät valintojen sisälle. Esimerkiksi jos valitset
[Ellipsi valinta]({{< relref "valintatyokalut.md" >}}) työkalulla tietyn pyöreän alueen keskellä kuvaa, et pysty piirtämään mitään sen ympyrän
ulkopuolelle niin kauan kuin valinta on aktiivinen. [Tehosteet]({{< relref "tehosteet.md" >}}) ja [Säädöt]({{< relref "saadot.md" >}}) vaikuttavat
myös vain valittuun alueeseen.

{{< figure src="/kuvat/editmenu.png" alt="Muokkaa valikko" >}}

* ### Kumoa

    Tämä kumoaa viimeisimmän suoritetun työn jonka olet tehnyt. Tämän voi tehdä myös [Historiaikkunan]({{< relref "historiaikkuna.md" >}}) kautta.

* ### Uudelleen

    Tämä toistaa viimeisimmän suoritetun työn jonka sinä olet kumonnut. Tämän voi tehdä [Historiaikkunan]({{< relref "historiaikkuna.md" >}}) kautta.

* ### Leikkaa

    Tämän avulla, voit siirtää valitun alueen aktiivisesta tasosta leikepöydälle. Voit valita alueen tasosta käyttämällä
    [Suorakulmainen valinta, Lassovalinta, Ellipsi valinta]({{< relref "valintatyokalut.md" >}}), tai
    <img style="vertical-align: middle;" src="/resurssit/tyokalut/magicwand.png" alt="Työkalut" />[Taikasauva]({{< relref "taikasauva.md" >}}) työkaluilla.
    Kun olet tehnyt Leikkaa operaation, valittu alue tasosta siirretään leikepöydälle ja korvataan läpinäkyvillä pikseleillä. Nykyinen valittu alue myös poistetaan.

* ### Kopioi

    Tämä on samanlainen kuin Leikkaa, mutta valittu alue jää aktiiviselle tasolle eikä valittua aluetta poisteta.

* ### Kopioi yhdistettynä

    Tämä on sama kuin Kopioi mutta kopioi valitun alueen yhdistettynä jokaiselta tasolta.

* ### Liitä

    Jos leikepöydällä on kuva, tämä komento liittää sen valitulle tasolle. Liitetyt pikselit tullaan valituksi ja
    <img style="vertical-align: middle;" src="/resurssit/tyokalut/moveselection.png" alt="Työkalut" />[Siirrä valintaa]({{< relref "siirtotyokalut.md" >}})
    työkalu tulee automaattisesti valituksi. Tämän jälkeen voit joko siirtää, skaalata tai pyörittää pikseleitä haluttuun paikkaan ja muotoon. Jos
    liitettävä kuva on joko liian leveä tai korkea nykyiselle pohjan koolle, sinulta kysytään haluatko muuttaa pohjan kokoa. Kyseessä on oikotie
    [Kuva **&rarr;** Pohjan koko]({{< relref "kuva.md" >}}) komentoon joka varmistaa että liitettävä kuva mahtuu.

    {{< figure src="/kuvat/pastequestion.png" alt="Liitä kysymys" >}}

* ### Liitä uuteen tasoon

    Tämä on samanlainen kuin Liitä, mutta se luo uuden tason, valitsee sen ja sen jälkeen liittää kuvaan.

* ### Liitä uuteen kuvaan

    Tämä on samanlainen kun Liitä, mutta se ensin luo uuden kuvan, valitsee sen ja sen jälkeen liittää leikepöydän sisällön. Uusi kuva on saman
    kokoienen kuin liitettävä kuva.

* ### Poista valittu alue

    Tämä komento poistaa valitun alueen valitusta tasosta. Kaikki pikselit valitussa alueessa korvataan läpinäkyvyydellä. Tämä on samanlainen kuin
    Leikkaa komento, mutta valittua aluetta ei kopioida leikepöydälle.

* ### Täytä valinta

    Jos on olemassa valittu alue, tämä täyttää alueen edustavärillä.

* ### Käännä valinta

    Jos on olemassa valittu alue, tämän avulla alue joka on valittu, valinta poistuu, ja alue jota ei ole valittu ollenkaan tulee valituksi.

* ### Valitse kaikki

    Tämän avulla, koko pohja valitaan.

* ### Poista valinta

    Tämän avulla, kaikki valinnat poistetaan.
