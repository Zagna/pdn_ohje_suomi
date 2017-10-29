+++
date = "2015-09-09T18:48:14+03:00"
draft = false
title = "Täyttö"
tooltip = "resurssit/tyokalut/paintbucket.png"

[menu.pdn]
	parent = "tikkuna"
	identifier = "taytto"
	weight = 381

+++

Tätä työkalua käytetään täyttämään alue tietyllä värillä. Voit asettaa kursorin alueen päälle jonka haluat täyttää värillä ja sen jälkeen painaa vasenta hiiren nappia täyttääksesi 
edustavärillä, tai oikeaa hiiren nappia täyttääksesi taustavärillä.

Alue joka täyttyy määriytyy ympäröivän alueen värin perusteella. [Toleranssi asetus]({{< relref "tyokalupalkki.md#taikasauva-täyttö-ja-uudelleen-väritys" >}}) työkaluikkunassa määrittää ympäröivän värin laajuuden.

Täyttö myös käyttää sitä piirtotyyliä minkä valitset [Työkalupalkissa]({{< relref "tyokalupalkki.md#muodot-sivellin-tyyli-ja-täyttö" >}}).

Alla olevassa esimerkissä piirrettiin kaksi ympyrää. Toleranssi asetettiin 75% varmistaakseen että pehmennetyt ympyrän reunat täytetään myös. Täyttöä käytettiin kolme kertaa: 
kerran kummankin ympyrän sisälle ja kerran ympyröiden väliin jääneeseen alueeseen.

**Ennen:**

{{< figure src="/kuvat/paintbucket_beforefill.png" alt="Täyttö ennen" >}}

**Jälkeen:**

{{< figure src="/kuvat/paintbucket_afterfill.png" alt="Täyttö jälkeen" >}}
