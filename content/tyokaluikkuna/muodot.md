+++
date = "2015-09-09T18:47:31+03:00"
draft = false
title = "Muodot"
tooltip = "resurssit/tyokalut/shapes.png"

[menu.pdn]
	parent = "tikkuna"
	identifier = "muodot"
	weight = 378

+++

Seuraavat työkalut ovat samankaltaisia ja niistä puhumme tällä kertaa:

{{< figure src="/kuvat/shapetools.png" alt="Muodot" >}}

*	#### Perus
	
	*	Suorakulmio, Pyöristetty suorakulmio, Ellipsi, Timantti, Puolisuunnikas, Suunnikas, Kolmio, Suorakulmainen kolmio
		
*	#### Monikulmiot ja tähdet
		
	*	Viisikulmio, Kuusikulmio, Kolmen kärjen tähti, Neljän kärjen tähti, Viiden kärjen tähti, Kuuden kärjen tähti
		
*	#### Nuolet
	
	*	Nuoli, Lovettu nuoli, Osoitin, Polviorsi
		
*	#### Kuplat
		
	*	Suorakulmainen kupla, Pyöristetty suorakulmainen kupla, Elliptinen kupla, Pilvi-kupla
		
*	#### Symbolit
		
	*	Salama, Ruksi, Kerro, Ratas, Sydän

{{% vihje %}}Painamalla A voit käydä muotojen läpi kun työkalu on käytössä ( Shift + A vaihtaa takaisin ).{{% /vihje %}}

Jokaiselle näistä työkaluista voi asettaa [asetuksia Työkalupalkissa]({{< ref "tyokalupalkki.md" >}}). Piirtääksesi muodon, klikkaa ja siirrä
käyttäen vasempaa hiiren nappia. Edustaväriä käytetään ulkoreunaan (jos valittu) ja taustaväriä käytetään sisustan värittämiseen (jos valittu).
Jos piirrät oikealla hiiren napilla, edusta- ja taustavärin roolit ovat käänteiset.

{{% vihje %}}Kun luot muodon, Shift nappi pohjassa muoto käyttää alkuperäistä koon suhdetta.{{% /vihje %}}

### Muodon siirtäminen

Ennen kuin Muoto on viimeistelty pohjalle, sitä voi siirtää kuvan alueella. Klikkaa ja vedä neljän nuolen ikonia hiirellä <img src="/resurssit/movecursor.png" />.

Muotoa voi siirtää myös käyttämällä keskellä olevaa osoitinta. Se muuttuu neljäksi nuoleksi. Klikkaa ja vedä siirtääksesi Muotoa.

Näppäimistön nuolinäppäimiä ↑ ← ↓ → voi käyttää muodon siirtämiseen. Yksi näppäimen painaus siirtää kohdetta yhdellä pikselillä nuolen suuntaan.
Nuolinäppäimien käyttö Ctrl nappi pohjassa siirtää kohdetta 10 pikseliä kerrallaan.

### Muodon pyörittäminen

Ennen kuin Muoto on viimeistelty pohjalle, sitä voi pyörittää.

Pyörityksen Piste määrittää mistä kohtaa kohdetta pyöritetään. Se näyttää ympyrältä jonka sisällä on risti &oplus; ja on alustavasti kohteen keskellä.
Voit siirtää pistettä klikkaamalla sitä (sen voi sijoittaa kohteen sisälle tai jopa pohjan ulkopuolelle).

Pyöritä Muotoa Pisteen mukaan klikkaamalla oikealla hiiren näppäimellä ja vetämällä. Toinen vaihtoehto on sijoittaa kursori juuri Muodon reunalle kunnes siitä tulee
käyrä kahden nuolen ikoni. Tämä tarkoittaa että Muotoa voi pyörittää keskuksen kohdalta klikkaamalla ja vetämällä vasemmalla hiiren näppäimellä.

{{< figure src="/resurssit/rotatecursor.png" alt="" >}}

Jos Shift-näppäin on alhaalla, pyörityksen kulma on rajoitettu 15 asteen kertoimiin.

Nuolinäppäimiä ↑ ← ↓ → voi myös käyttää Muodon pyörittämiseen kun oikea hiiren näppäin on alhaalla.

### Muodon viimeistely

Muodon voi viimeistellä aktiiviselle tasolle seuraavilla tavoilla…

1.	Enter näppäin.
1.	Klikkaa Muodon reunan ulkona.
1.	Paina Viimeistele työkalupalkissa.
1.	Piirrä uusi Muoto.

{{% vihje %}}Muodon voi pakottaa olemaan samankokoinen pystyyn ja vaakaan pitämällä Shift nappi pohjassa kun laajennat muotoa.{{% /vihje %}}

### Nurkan koko (vain Pyöristetty suorakulmio)

Versiosta 4.0.11 alkaen Pyöristetyllä suorakulmiolla on uusi asetus työkalupalkissa: Nurkan koko.

Nurkan koko on säde jota käytetään muodon nurkissa. Pienet arvot tuottavat teräviä kulmia ja isot arvot pyöriä kulmia.

{{% vihje %}}Kun Nurkan koko on valittuna työkalupalkissa, nuolinäppäimet ylös ↑ ja alas ↓ muuttavat sitä.<br/>Muuttuvat luvut tulevat suoraan alas vedettävästä valikosta. Arvot saattavat muuttua kerralla enemmän kuin 1 riippuen kuinka suuri nurkan koko on sillä hetkellä.{{% /vihje %}}

### Piirtotila

Muodot voi piirtää kolmella erillä tavalla. Muodon ääriviiva, Täytetty muoto ja Täytetty muoto ääriviivalla. Kaksi ensimmäistä vaihtoehto käyttävät edustaväriä jos 
jos vasenta hiiren näppäintä käytetään ja taustavärillä jos oikea hiiren näppäintä käytetään. Täytetty muoto ääriviivalla käyttää edustaväriä ulkoreunaan ja taustaväriä
täytön väriksi. Oikea hiiren näppäin vaihtaa käytetyt värit.

Seuraavat kuvat näyttävät miltä muodot näyttävät kun eriä muotopiirto asetuksia on valittu työkalupalkissa:

### Vain ulkoreuna:

{{< figure src="/kuvat/shapetype_outline.png" alt="Vain ulkoreuna" >}}

{{< figure src="/resurssit/shapes_outline.png" alt="Vain ulkoreuna" >}}

### Vain sisusta:

{{< figure src="/kuvat/shapetype_interior.png" alt="Vain sisusta" >}}

{{< figure src="/resurssit/shapes_interior.png" alt="Vain sisusta" >}}

### Ulkoreuna ja sisusta:

{{< figure src="/kuvat/shapetype_interiorandoutline.png" alt="Ulkoreuna ja sisusta" >}}

{{< figure src="/resurssit/shapes_outlineandinterior.png" alt="Ulkoreuna ja sisusta" >}}
