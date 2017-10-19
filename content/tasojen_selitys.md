+++
date = "2015-09-09T18:41:52+03:00"
draft = false
title = "Tasojen selitys"

[menu.pdn]
	parent = "konsepti"
	identifier = "taso_seli"
	weight = 201

+++

Tätä aihetta varten seuraavia kahta kuvaa käytetään taustakuvaksi sekä ensimmäiseksi tasoksi taustakuvan yläpuolella:

{{< figure class="border" src="/resurssit/kemijoki.jpg" title="Taustakuva - Kuva Rovaniemestä (1972)" caption="(\"Pohja taso\")" >}}
{{< figure class="border" src="/resurssit/ruisleipa.jpg" title="Taso 1 - Kuva ruisleivästä" caption="(\"Päällinen taso\")" >}}

Voit ajatella "tasoja" kasana läpinäkyviä sivuja jotka, kun asetettu päällekkäin muodostavat kokonaisen kuvan. paint.net näyttää tämän kasan kuin katsoisit sitä ylhäältä
ilman perspektiiviä (tasot eivät "pienene" kun ne ovat kasan pohjalla, mikä sijoittaisi ne "kauemmaksi"). Nähdäksesi miten tasot toimivat paremmin, voi olla
helpompaa nähdä tasot vierestä kuin ylhäältä:

{{< figure src="/resurssit/3d_ruisleipa_100.jpg" alt="Tasot päällekkäin" >}}

### Pikselit ja läpinäkyvyys

Jokainen taso paint.netissä koostuvat [pikseleistä](http://fi.wikipedia.org/wiki/Pikseli) jotka on tallennettu [RGBA](http://en.wikipedia.org/wiki/RGBA_color_space)
muodossa. RGB tarkoittaa red-green-blue (punainen-vihreä-sininen), ja sillä tallennetaan värien voimakkuus. "A" tarkoittaa alfaa ja se tallentaa pikselin läpinäkyvyyden.
Alfa-arvo voi olla 0:sta (täysin läpinäkyvä) 255:een (täysin peittävä). Jos pikseli on läpinäkyvä, pikselit alla olevista tasoita näkyvät läpi. paint.net käyttää tekniikkaa nimeltä
[alfakanava](http://fi.wikipedia.org/wiki/Alfakanava), jonka avulla tasoilla varustettu kuvan voi näyttää normaalilla tietokoneen näytöllä.

Kuitenkin, läpinäkyviä pikseleitä ei voi näyttää tietokoneen näytöllä. Tämän simuloinniksi, paint.net käyttää shakkilautamallia joka näyttää tältä:

{{< figure src="/resurssit/transparentcheckerboard.png" alt="Shakkilauta" >}}

Jos näet tämän, se tarkoittaa että osa kuvastasi on läpinäkyvä -- shakkilautamalli ei ole osa kuvaa. Voit ajatella että shakkilautamalli virtuaalinen taustakuva, tai "taso 0",
joka on aina [Tasoikkunassa]({{< relref "tasoikkuna.md" >}}) olevien tasojen alla. Kuitenkin, kuten aiemmin mainitsimme, se ei ole osa kuvaa. Jos tallennat kuvan ja katsot sitä tai avaat sen toisella
ohjelmalla on shakkilautamalli poissa (paitsi jos tämä toinen ohjelma myös käyttää shakkilautamallia läpinäkyvyyden esittämiseen).

### Tasot ja peittävyys

Kun jokaisella pikselillä on tietty läpinäkyvyys, jokaisella tasolla on myös oma peittävyysarvo. Nämä kaksi termiä ovat samanlaisia ja niitä voi katsoa samaksi. Voit ajatella että
tason peittävyys on kuin himmennin tason jokaiselle pikselille.

Esimerkkinä, jos asetamme päällisen tason päittävyyden 255:sta askelin 0:aan, saamme seuraavat kuvat jotka esitetään konseptina sekä miten ne näkyvät näytöllä:

{{< figure src="/resurssit/3d_ruisleipa_100.jpg" title="Taso 1 peittävyys 255 (100%)" caption="Täysin peittävä: Rovaniemeä ei näe." >}}

{{< figure src="/resurssit/3d_ruisleipa_50.jpg" title="Taso 1 peittävyys 128 (noin 50%)" caption="Osittain läpinäkyvä: Rovaniemi on osittain näkyvä." >}}

{{< figure src="/resurssit/3d_ruisleipa_0.jpg" title="Taso 1 peittävyys 0 (0%)" caption="Täysin läpinäkyvä: Ruisleipä ei enää näy." >}}
