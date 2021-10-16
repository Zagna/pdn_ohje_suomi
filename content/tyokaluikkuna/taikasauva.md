+++
draft = false
title = "Taikasauva"
tooltip = "magicwand"

[menu.pdn]
    parent = "tikkuna"
    identifier = "taikasauva"
    weight = 508

+++

Taikasauva on työkalu jonka avulla voit valita tietyn värisiä alueita samalla tavalla kuin muut valintatyökalut valitsevat tietyn
muodon. Toisin kuin valintatyökalut, Taikasauva ottaa huomioon kuvassa olevan sisällön ja sen hetkisen
[Toleranssia]({{< relref "/tyokalupalkki#taikasauva-täyttö-ja-uudelleen-väritys" >}}) asetuksen. Monissa tapauksissa, valitaksesi
alueen sitä pitää vain napsauttaa.

Voit ajatella että Taikasauva toimii samalla lailla kuin Täyttö, mutta sen sijaan että se täyttäisi alueen värillä, se valitsee kyseisen alueen.

### Toleranssi

Samalla lailla kuin {{< tool "paintbucket" >}}
[Täyttö]({{% relref "taytto" %}}), Taikasauvan tulosta voi säätää vaihtamalla
[Toleranssia]({{< relref "/tyokalupalkki#taikasauva-täyttö-ja-uudelleen-väritys" >}}). Alla näet esityksen
tästä säädöstä.

{{< level >}}
    {{< figure src="img/magicwand_tol25.webp" title="Taikasauva toleranssiasetuksella 15%." alt="Pieni toleranssi" >}}Valinta ei valitse tarpeeksi kuvasta: toleranssi on liian pieni.{{< /figure >}}
    {{< figure src="img/magicwand_tol50.webp" title="Taikasauva toleranssiasetuksella 45%."  alt="Suuri toleranssi" >}}Valinta valitsee liikaa kuvasta: toleranssi on liian suuri.{{< /figure >}}
{{< /level >}}

{{< level >}}
    {{< figure src="img/magicwand_tol31.webp" title="Taikasauva toleranssiasetuksella 25%." alt="Sopiva toleranssi" >}}Valinta valitsee juuri sopivasti kuvasta.{{< /figure >}}
{{< /level >}}

## Kehittynyt käyttö

### Valinnan rakennus

Joskus ei ole mahdollista valita tietty alue vain yhdellä kerralla. Saadaksesi valinnan joka ei ole yhtä ja samaa väriä. Tehdäksesi
valintoja kuin tämä, se toimii hyvin kun käytät toistuvasti Taikasauvaa alhaisella Toleranssi asetuksella, laajentaen valintaa pikku
hiljaa kunnes olet saanut kaiken.

{{< vihje >}}Voit laajentaa valintaa klikkaamalla samalla kun Ctrl-nappi on alhaalla.{{< /vihje >}}

{{< level >}}
    {{< figure src="img/magicwand_collect.webp;img/magicwand_collect2.webp" title="Taikasauvaa käytettiin monta kertaa." alt="Toistuva taikasauva" >}}Laajentaen valintaa osissa, joka kerta valiten uuden alueen kun Ctrl-nappi on alhaalla.{{< /figure >}}
{{< /level >}}

### Poissulkeva valinta

Se toimii myös hyvin kun teet alustavan valinnan työkalulla kuten lassovalinta, sen jälkeen käytät Taikasauvaa tarkentaaksesi valintaa.
Tämä metodi toimii hyvin kun kohteen ympärillä puuttuu yksityiskohtia.

{{< vihje >}}Voit vähentää valintaa klikkaamalla oikealla hiiren napilla.{{< /vihje >}}

{{< level >}}
    {{< figure src="img/magicwand_exclude.webp;img/magicwand_exclude2.webp" title="Alustava valinta tehtiin lassotyökalulla." alt="Poissulkeva" >}}Sen jälkeen Taikasauvaa käytettiin sulkemaan pois alueet joita ei ole tarkoitettu ottaa mukaan, klikkaamalla poissuljettavia alueita oikealla hiiren napilla.
    {{< /figure >}}
{{< /level >}}

### Globaali valinta

Taikasauva toimii normaalisti rajaamalla valinnan sisältämään vain alueet jotka koskettavat ja ovat samanlaisia kuin valittu väri.
On mahdollista, kuitenkin, tehdä valinta joka riippuu vain väristä, unohtaen kaikki rajat ja vaatimukset jatkuvuuteen. Tämän voi
tehdä painamalla Shift-nappia kun teet minkä tahansa muun Taikasauvan työn (myös valinnan lisäys ja erotus).

{{< level >}}
    {{< figure src="img/magicwand_noncontiguous.webp" title="Tämä valinta tehtiin ensin tekemällä Valitse kaikki (Muokkaa → Valitse kaikki)." alt="Globaali" >}}Sen jälkeen Shift pohjassa sulkien pois kaikki mustat alueet. Huomaa että monista yksittäisistä mustista alueista on valinta poistettu.{{< /figure >}}
{{< /level >}}
