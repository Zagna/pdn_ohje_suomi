+++
draft = false
title = "Tasojen selitys"

[menu.pdn]
    parent = "koti"
    identifier = "taso_seli"
    weight = 106

+++

Tätä aihetta varten seuraavia kahta kuvaa käytetään taustakuvaksi sekä ensimmäiseksi tasoksi taustakuvan yläpuolella:

{{< level >}}
    {{< figure src="img/kemijoki.webp" title="Taustakuva - Kuva Rovaniemestä (1972)" alt="Pohja" >}}("Pohja taso"){{< /figure >}}
    {{< figure src="img/ruisleipa.webp" title="Taso 1 - Kuva ruisleivästä" alt="Päällinen" >}}("Päällinen taso"){{< /figure >}}
{{< /level >}}

Voit ajatella "tasoja" kasana läpinäkyviä sivuja jotka, kun asetettu päällekkäin muodostavat kokonaisen kuvan. paint.net näyttää tämän kasan kuin
katsoisit sitä ylhäältä ilman perspektiiviä (tasot eivät "pienene" kun ne ovat kasan pohjalla, mikä sijoittaisi ne "kauemmaksi"). Nähdäksesi miten
tasot toimivat paremmin, voi olla helpompaa nähdä tasot vierestä kuin ylhäältä:

{{< level >}}
    {{< figure src="img/3d_ruisleipa_100.webp" alt="Tasot päällekkäin" >}}{{< /figure >}}
{{< /level >}}

### Pikselit ja läpinäkyvyys

Jokainen taso paint.netissä koostuvat [pikseleistä](https://fi.wikipedia.org/wiki/Pikseli) jotka on tallennettu [RGBA](https://en.wikipedia.org/wiki/RGBA_color_space)
muodossa. RGB tarkoittaa red-green-blue (punainen-vihreä-sininen), ja sillä tallennetaan värien voimakkuus. "A" tarkoittaa alfaa ja se tallentaa
pikselin läpinäkyvyyden. Alfa-arvo voi olla 0:sta (täysin läpinäkyvä) 255:een (täysin peittävä). Jos pikseli on läpinäkyvä, pikselit alla olevista
tasoita näkyvät läpi. paint.net käyttää tekniikkaa nimeltä [alfakanava](https://fi.wikipedia.org/wiki/Alfakanava), jonka avulla tasoilla varustettu
kuvan voi näyttää normaalilla tietokoneen näytöllä.

Kuitenkin, läpinäkyviä pikseleitä ei voi näyttää tietokoneen näytöllä. Tämän simuloinniksi, paint.net käyttää shakkilautamallia joka näyttää tältä:

{{< level >}}
    {{< figure src="png/transparentcheckerboard.webp" alt="Shakkilauta" >}}{{< /figure >}}
{{< /level >}}

Jos näet tämän, se tarkoittaa että osa kuvastasi on läpinäkyvä -- shakkilautamalli ei ole osa kuvaa. Voit ajatella että shakkilautamalli virtuaalinen
taustakuva, tai "taso 0", joka on aina [Tasoikkunassa]({{% relref "tasoikkuna" %}}) olevien tasojen alla. Kuitenkin, kuten aiemmin mainitsimme,
se ei ole osa kuvaa. Jos tallennat kuvan ja katsot sitä tai avaat sen toisella ohjelmalla on shakkilautamalli poissa (paitsi jos tämä toinen ohjelma
myös käyttää shakkilautamallia läpinäkyvyyden esittämiseen).

### Tasot ja peittävyys

Kun jokaisella pikselillä on tietty läpinäkyvyys, jokaisella tasolla on myös oma peittävyysarvo. Termit ovat samanlaisia ja niitä voi katsoa
samaksi. Voit ajatella että tason peittävyys on kuin himmennin tason jokaiselle pikselille.

Esimerkkinä, jos asetamme päällisen tason päittävyyden 255:sta askelin 0:aan, saamme seuraavat kuvat jotka esitetään konseptina sekä miten ne näkyvät näytöllä:

{{< level >}}
    {{< figure src="img/3d_ruisleipa_100.webp" title="Taso 1 peittävyys 255 (100%)" alt="Ei näy" >}}Täysin peittävä: Rovaniemeä ei näe.{{< /figure >}}
{{< /level >}}

{{< level >}}
    {{< figure src="img/3d_ruisleipa_50.webp" title="Taso 1 peittävyys 128 (noin 50%)" alt="Osittain näkyy" >}}Osittain läpinäkyvä: Rovaniemi on osittain näkyvä.{{< /figure >}}
{{< /level >}}

{{< level >}}
    {{< figure src="img/3d_ruisleipa_0.webp" title="Taso 1 peittävyys 0 (0%)" alt="Ei näe" >}}Täysin läpinäkyvä: Ruisleipä ei enää näy.{{< /figure >}}
{{< /level >}}
