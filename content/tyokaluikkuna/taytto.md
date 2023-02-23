+++
draft = false
title = "Täyttö"
tooltip = "paintbucket"

[menu.pdn]
    parent = "tikkuna"
    identifier = "taytto"
    weight = 510

+++

Tätä työkalua käytetään täyttämään alue tietyllä värillä. Voit asettaa kursorin alueen päälle jonka haluat täyttää värillä ja sen
jälkeen painaa vasenta hiiren nappia täyttääksesi edustavärillä, tai oikeaa hiiren nappia täyttääksesi taustavärillä.

Alue joka täyttyy määräytyy ympäröivän alueen värin perusteella.
[Toleranssi asetus]({{< relref "tyokalupalkki#taikasauva-täyttö-ja-uudelleen-väritys" >}}) työkaluikkunassa
määrittää ympäröivän värin laajuuden.

Täyttö myös käyttää sitä piirtotyyliä minkä valitset [Työkalupalkissa]({{< relref "tyokalupalkki#muodot-sivellin-tyyli-ja-täyttö" >}}).

Alla olevassa esimerkissä piirrettiin kaksi ympyrää. Toleranssi asetettiin 75% varmistaakseen että pehmennetyt ympyrän reunat
täytetään myös. Täyttöä käytettiin kolme kertaa: kerran kummankin ympyrän sisälle ja kerran ympyröiden väliin jääneeseen
alueeseen.

{{< level >}}
    {{< figure src="ui/paintbucket_beforefill.webp" title="Ennen"  alt="Täyttö ennen" >}}{{< /figure >}}
    {{< figure src="ui/paintbucket_afterfill.webp" title="Jälkeen" alt="Täyttö jälkeen" >}}{{< /figure >}}
{{< /level >}}
