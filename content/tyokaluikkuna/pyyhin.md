+++
date = "2015-09-09T18:47:20+03:00"
draft = false
title = "Pyyhin"
tooltip = "resurssit/tyokalut/eraser.png"

[menu.pdn]
	parent = "tikkuna"
	identifier = "pyyhin"
	weight = 376

+++

Tämä työkalu on hyödyllinen osien poistamiseen kuvasta. Huomaa että se toimii kuitenkin niin että se muuttaa tason alueet läpinäkyviksi. Tämä johtaa shakkilautamallin näkymiseen. 
Tätä mallia käytetään näyttämään että alue on läpinäkyvä -- se ei ole osa kuvaa.

{{% huom %}}MS Paintin pyyhin toimii muuttamalla alueen valkoiseksi. Jos haluat tämän tuloksen, suosittelemme käyttämään [Sivellin-työkalua]({{< relref "sivellin.md" >}}) ja valitse valkoinen väriksi [Väri-ikkunassa]({{< relref "vari-ikkuna.md" >}})." {{% /huom %}}

Tämä työkalu on myös hyödyllinen kun teet töitä useiden tasojen kanssa. Jos sinulla on osia tasossa jotka haluat näkyvän läpi alempaan tasoon, voit käyttää pyyhintä näihin 
ylempiin tasoihin.

Seuraavassa esimerkissä, otettiin kuva kissasta ja kaikki paitsi kissa pyyhittiin pois. Sininen tausta sijoitettiin kissan alapuolelle luomalla uusi taso, täyttämällä se 
sinisellä käyttäen Täyttö-työkalua ja sen jälkeen siirtäen taso alas painamalla Siirrä Tasoa Alas -nappia siirtääksesi tason kissan taakse.

Alkuperäinen kuva:

{{< figure src="/resurssit/eraser_part1.jpg" alt="Pyyhin osa 1" >}}

Kuva kun olet käyttänyt Pyyhin-työkalua poistaaksesi kaiken muun paitsi kissan. Huomaa shakkilautamalli, sitä käytetään osoittamaan milloin alue kuvasta on läpinäkyvä:

{{< figure src="/resurssit/eraser_part2.jpg" alt="Pyyhin osa 2" >}}

Kuva kun olet lisännyt sinisen taustan luomalla uuden tason kissan alapuolelle ja täyttänyt sen sinisellä:

{{< figure src="/resurssit/eraser_part3.jpg" alt="Pyyhin osa 3" >}}
