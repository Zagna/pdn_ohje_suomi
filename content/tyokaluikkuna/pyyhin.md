+++
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

{{< huom >}}MS Paintin pyyhin toimii muuttamalla alueen valkoiseksi. Jos haluat tämän tuloksen, suosittelemme käyttämään [Sivellin-työkalua]({{% relref "sivellin" %}}) ja valitse valkoinen väriksi [Väri-ikkunassa]({{% relref "/vari-ikkuna" %}}).{{< /huom >}}

Tämä työkalu on myös hyödyllinen kun teet töitä useiden tasojen kanssa. Jos sinulla on osia tasossa jotka haluat näkyvän läpi alempaan
tasoon, voit käyttää pyyhintä näihin ylempiin tasoihin.

Seuraavassa esimerkissä, otettiin kuva kissasta ja kaikki paitsi kissa pyyhittiin pois. Sininen tausta sijoitettiin kissan alapuolelle
luomalla uusi taso, täyttämällä se sinisellä käyttäen Täyttö-työkalua ja sen jälkeen siirtäen taso alas painamalla Siirrä Tasoa Alas -nappia
siirtääksesi tason kissan taakse.

{{< level >}}
    {{< figure src="img/eraser_part1.webp" title="Alkuperäinen kuva" alt="Pyyhin osa 1" >}}{{< /figure >}}
    {{< figure src="img/eraser_part2.webp" title="Pyyhkimen käyttö" alt="Pyyhin osa 2" >}}Pyyhkimellä on poistettu kaikki muu kuin kissa.  
    Shakkilautamalli esittää läpinäkyvää osaa kuvasta.{{< /figure >}}
    {{< figure src="img/eraser_part3.webp" title="Sininen taso alapuolelle" alt="Pyyhin osa 3" >}}Uusi taso kissan alapuolelle ja sinisellä täyttö.{{< /figure >}}
{{< /level >}}
