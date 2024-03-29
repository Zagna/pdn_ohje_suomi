+++
draft = false
title = "Viiva/Käyrä -työkalu"
tooltip = "linecurve"

[menu.pdn]
    parent = "tikkuna"
    identifier = "viiva"
    weight = 513

+++

Tätä työkalua käytetään viivojen ja kurvien tekemiseen. Kyseiset ominaisuudet on yhdistetty yhdeksi työkaluksi<!--more--> koska on mahdollista
väittää että viiva on yksinkertaisesti täysin suora käyrä; täten, työkalu piirtää aina käyrä, mutta "viivoihin" ei ole asetettu käyrää.

Viivan piirtäminen on yksinkertaista: vain paina mistä haluat aloittaa, siirrä hiirtä haluamaasi kohtaan ja irrota hiiren nappi.

{{< vihje >}}Painamalla Shift-nappia ennen kuin irrotat napin, voit pakottaa viivan 15 asteen kulmiin. Tämän jälkeen, näet neljä kahvaa, tai *nuppia*, viivalla.{{< /vihje >}}

Jos haluat vain piirtää viivan, voit painaa nyt Enter-nappia viimeistelläksesi viivan. Voit myös piirtää muualla aloittaaksesi uuden viivan.

Kahvat sykkivät jotta voit huomata ne helposti kuvassa:

{{< figure src="png/line_step1.webp" alt="Viiva osa 1" >}}{{< /figure >}}

Tällä hetkellä, voit *käyristää viivan* siirtämällä nuppeja. Voit valita splini ja Bézier käyrien välillä työkalupalkista löytyvällä
painikkeella. Splinin kanssa käyrä piirretään jokaisen pisteen läpi, Bézier käyrä menee alla esitetyllä tavalla.

Esimerkki splini käyrä:

{{< figure src="png/line_spline.webp" alt="Splini" >}}{{< /figure >}}

Esimerkki Bézier-käyrä. Huomaa että käyrä ei mene kahden keskimmäisen nupin läpi:

{{< figure src="png/line_bezier.webp" alt="Bezier" >}}{{< /figure >}}

Kun olet valmis käyrän kanssa, voit painaa Enter-nappia viimeistelläksesi käyrän. Tai, voit piirtää muualla aloittaaksesi uuden viivan.

### Tyyli

Työkalupalkista voit asettaa joko alun, viivan sekä lopun tyylin. Alku sekä pää voi olla tasaisia (normaali), kaksi erilaista nuolta tai
pyöristetty. Viivan tyyli voi olla joko kiinteä tai valikoima viivoja tai pisteitä.

{{< figure src="ui/toolbar_shapesbrushesfill.webp" alt="Tyylit" >}}{{< /figure >}}

Näiden avulla, voit piirtää seuraavia viivoja:

{{< figure src="png/lineexamples.webp" alt="Esimerkit" >}}{{< /figure >}}
