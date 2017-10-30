+++
date = "2015-09-09T18:47:01+03:00"
draft = false
title = "Taikasauva"
tooltip = "resurssit/tyokalut/magicwand.png"

[menu.pdn]
	parent = "tikkuna"
	identifier = "taikasauva"
	weight = 373

+++

Taikasauva on työkalu jonka avulla voit valita tietyn värisiä alueita samalla tavalla kuin muut valintatyökalut valitsevat tietyn muodon. Toisin kuin valintatyökalut, Taikasauva 
ottaa huomioon kuvassa olevan sisällön ja sen hetkisen [Toleranssia]({{< relref "tyokalupalkki.md" >}}#taikasauva-t%C3%A4ytt%C3%B6-ja-uudelleen-v%C3%A4ritys) asetuksen. Monissa tapauksissa, valitaksesi alueen sinun pitää vain napsauttaa sitä.

Voit ajatella että Taikasauva toimii samallalailla kuin Täyttö, mutta sen sijaan että se täyttäisi alueen värillä, se valitsee kyseisen alueen.

### Toleranssi

Samallalailla kuin [Täyttö]({{< relref "taytto.md" >}}), Taikasauvan tulosta voi säätää vaihtamalla [Toleranssia]({{< relref "tyokalupalkki.md" >}}#taikasauva-t%C3%A4ytt%C3%B6-ja-uudelleen-v%C3%A4ritys). Alla näet esityksen tästä säädöstä.

{{< figure class="border magic" src="/resurssit/magicwand_tol25.jpg" caption="Taikasauva toleranssiasetuksella 15%. Valinta ei valitse tarpeeksi kuvasta: toleranssi on liian pieni." >}}

{{< figure class="border magic" src="/resurssit/magicwand_tol50.jpg" caption="Taikasauva toleranssiasetuksella 45%. Valinta valitsee liikaa kuvasta: toleranssi on liian suuri." >}}

{{< figure class="border magic2" src="/resurssit/magicwand_tol31.jpg" caption="Taikasauva toleranssiasetuksella 25%. Valinta valitsee juuri sopivasti kuvasta." >}}

## Kehittynyt käyttö

### Valinnan rakennus

Joskus ei ole mahdollista valita tietty alue vain yhdellä kerralla. Saadaksesi valinnan joka ei ole yhtä ja samaa väriä. Tehdäksesi valintoja kuin tämä, se toimii hyvin kun käytät 
toistuvasti Taikasauvaa alhaisella Toleranssi asetuksella, laajentaen valintaa pikku hiljaa kunnes olet saanut kaiken.

{{% vihje %}}Voit laajentaa valintaa klikkaamalla samalla kun Ctrl-nappi on alhaalla.{{% /vihje %}}

{{< figure class="border magic2" src="/resurssit/magicwand_collect.jpg" caption="Taikasauva jota käytettiin monta kertaa, laajentaen valintaa pienin aluein joka kerta valiten uuden alueen kun Ctrl-nappi on alhaalla." >}}

### Poissulkeva valinta

Se toimii myös hyvin kun teet alustavan valinnan työkalulla kuten lassovalinta, sen jälkeen käytät Taikasauvaa tarkentaaksesi valintaa. Tämä metodi toimii hyvin kun kohteen 
ympärillä puuttuu yksityiskohtia.

{{% vihje %}}Voit vähentää valintaa klikkaamalla oikealla hiiren napilla.{{% /vihje %}}

{{< figure class="magic2" src="/resurssit/magicwand_exclude.jpg" caption="Alustava valinta tehtiin lassotyökalulla, ja sen jälkeen Taikasauvaa käytettiinn sulkemaan pois alueet joita ei ole tarkoitettu ottaa mukaan, klikkaamalla poissuljettavaan alueeseen oikealla hiiren napilla." >}}

### Globaali valinta

Taikasauva toimii normaalisti rajaamalla valinnan sisältämään vain alueet jotka koskettavat ja ovat samanlaisia kuin valittu väri. On mahdollista, kuitenkin, tehdä valinta joka riippuu 
vain väristä, unohtaen kaikki rajat ja vaatimukset jatkuvuuteen. Tämän voi tehdä painamalla Shift-nappia kun teet minkä tahansa muun Taikasauvan työn (myös valinnan lisäys ja erotus).

{{< figure class="magic2" src="/resurssit/magicwand_noncontiguous.png" caption="Tämä valinta tehtiin ensin tekemällä Valitse kaikki (Muokkaa → Valitse kaikki), ja sen jälkeen Shift pohjassa sulkien pois kaikki mustat alueet. Huomaa että monista yksittäisistä mustista alueista on valinta poistettu." >}}
