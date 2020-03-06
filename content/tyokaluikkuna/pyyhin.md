+++
date = "2015-09-09T18:47:20+03:00"
draft = false
title = "Pyyhin"
tooltip = "eraser"

[menu.pdn]
    parent = "tikkuna"
    identifier = "pyyhin"
    weight = 505

+++

Tämä työkalu on hyödyllinen osien poistamiseen kuvasta. Huomaa että se toimii kuitenkin niin että se muuttaa tason alueet läpinäkyviksi.
Tämä johtaa shakkilautamallin näkymiseen. Tätä mallia käytetään näyttämään että alue on läpinäkyvä -- se ei ole osa kuvaa.

{{< huom >}}MS Paintin pyyhin toimii muuttamalla alueen valkoiseksi. Jos haluat tämän tuloksen, suosittelemme käyttämään {{< tool "paintbrush" >}}[Sivellin-työkalua]({{< relref "sivellin" >}}) ja valitse valkoinen väriksi [Väri-ikkunassa]({{< relref "/vari-ikkuna" >}}).{{< /huom >}}

Tämä työkalu on myös hyödyllinen kun teet töitä useiden tasojen kanssa. Jos sinulla on osia tasossa jotka haluat näkyvän läpi alempaan
tasoon, voit käyttää pyyhintä näihin ylempiin tasoihin.

Seuraavassa esimerkissä, otettiin kuva kissasta ja kaikki paitsi kissa pyyhittiin pois. Sininen tausta sijoitettiin kissan alapuolelle
luomalla uusi taso, täyttämällä se sinisellä käyttäen Täyttö-työkalua ja sen jälkeen siirtäen taso alas painamalla Siirrä Tasoa Alas -nappia
siirtääksesi tason kissan taakse.

<div class="level">
    <div class="level-item">
        {{< figure oclass="text-center" src="/resurssit/eraser_part1.jpg" title="Alkuperäinen kuva" alt="Pyyhin osa 1" >}}
        {{< figure oclass="text-center" src="/resurssit/eraser_part2.jpg" title="Pyyhkimen käyttö" caption="Pyyhkimellä on poistettu kaikki muu kuin kissa.<br>Shakkilautamalli esittää läpinäkyvää osaa kuvasta." alt="Pyyhin osa 2" >}}
        {{< figure oclass="text-center" src="/resurssit/eraser_part3.jpg" title="Sininen taso alapuolelle" caption="Uusi taso kissan alapuolelle ja sinisellä täyttö." alt="Pyyhin osa 3" >}}
    </div>
</div>
