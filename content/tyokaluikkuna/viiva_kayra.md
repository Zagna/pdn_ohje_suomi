+++
date = "2015-09-09T18:47:40+03:00"
draft = false
title = "Viiva/Käyrä -työkalu"
tooltip = "resurssit/tyokalut/linecurve.png"

[menu.pdn]
	parent = "tikkuna"
	identifier = "viiva"
	weight = 379

+++

Tätä työkalua käytetään viivojen ja kurvien tekemiseen. Nämä kaksi ominaisuutta on yhdistetty yhdeksi työkaluksi koska on mahdollista väittää että viiva on 
yksinkertaisesti täysin suora käyrä; täten, työkalu piirtää aina käyrä, mutta "viivoihin" ei ole asetettu käyrää.

Viivan piirtäminen on yksinkertaista: vain paina mistä haluat aloittaa, siirrä hiirtä haluamaasi kohtaan ja irrota hiiren nappi.

{{< vihje "Painamalla Shift-nappia ennen kuin irrotat napin, voit pakottaa viivan 15 asteen kulmiin. Tämän jälkeen, näet neljä kahvaa, tai <em>nuppia</em>, viivalla." >}}

Jos haluat vain piirtää viivan, voit painaa nyt Enter-nappia viimeistelläksesi viivan. Voit myös piirtää muualla aloittaaksesi uuden viivan.

Kahvat sykkivät jotta voit huomata ne helposti kuvassa:

{{< figure src="/resurssit/line_step1.png" alt="Viiva osa 1" >}}

Tällä hetkellä, voit *käyristää viivan* siirtämällä nuppeja. Voit valita splini ja Bézier käyrien välillä työkalupalkista löytyvällä 
painikkeella. Splinin kanssa käyrä piirretään jokaisen pisteen läpi, Bézier käyrä menee alla esitetyllä tavalla.

Esimerkki splini käyrä:

{{< figure src="/resurssit/line_spline.png" alt="Splini" >}}

Esimerkki Bézier-käyrä. Huomaa että käyrä ei mene kahden keskimmäisen nupin läpi:

{{< figure src="/resurssit/line_bezier.png" alt="Bezier" >}}

Kun olet valmis käyrän kanssa, voit painaa Enter-nappia viimeistelläksesi käyrän. Tai, voit piirtää muualla aloittaaksesi uuden viivan.

### Tyyli

Työkalupalkista voit asettaa joko alun, viivan sekä lopun tyylin. Alku sekä pää voi olla tasaisia (normaali), kaksi erillaista nuolta tai pyöristetty. Viivan tyyli voi olla 
joko kiinteä tai valikoima viivoja tai pisteitä.

{{< figure src="/kuvat/toolbar_shapesbrushesfill.png" alt="Tyylit" >}}

Näiden avulla, voit piirtää seuraavia viivoja:

{{< figure src="/resurssit/lineexamples.png" alt="Esimerkit" >}}

