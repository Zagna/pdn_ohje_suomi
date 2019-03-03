+++
date = "2015-09-09T18:49:11+03:15"
draft = false
title = "Lisäosien asennus"

[menu.pdn]
    parent = "koti"
    identifier = "lisaosat"
    weight = 103

+++

paint.net mahdollistaa lisäosien asennuksen jotka tuovat lisää ominaisuuksia ja tiedostotyyppejä. Monta lisäosaa on saatavilla, esimerkkeinä
objektien varjot, väritysapuja ja valokuvien kehittäminen.

Lisäosat kehittää kolmannen osapuolen henkilöt ja ne julkaistaan [paint.net keskustelualueella](https://forums.getpaint.net/index.php?/forum/7-plugins-publishing-only/).

Englanninkielinen lista lisäosista löytyy [keskustelualueelta](https://forums.getpaint.net/forum/37-plugin-index/).

Lisäosat tarjoaa keskustelualeen käyttäjät. paint.netin kehittäjätiimi ei tarjoa tukea niiden käytössä. Jos haluat apua lisäosan kanssa, on
parasta että kysyt lisäosan kehittäjältä.

On olemassa kahdenlaista lisäosaa:

* Tiedostotyyppi: tuo tuen uusienkuvaformaattien avaamiseen ja tallentamiseen.
* Tehosteet: tuo lisää toiminnollisuuksia tehosteiden ja säätöjen muodossa.

{{% varoitus %}}Lataa vain lisäosia jotka on julkaistu paint.netin keskustelualueella. Älä *koskaan* lataa lisäosia muualta koska virusten mahdollisuus on korkea muualla. Suosittelemme virustorjunnan käyttöä lisäosien kanssa.{{% /varoitus %}}

Lisäosien tiedostopääte on ".DLL". Eräät lisäosien kehittäjät pakkaavat tiedostot .ZIP tai .RAR muotoon. Pakatut tiedostot tulee purkaa ennen
.DLL muotoon ennen asennusta.

Paikallista kansio jonne paint.net on asennettu. Yleensä se on "C:\\Program Files\\paint.net\\".

Jos olet ladannut **Tiedostotyyppi** lisäosan, siirrä purettu .DLL tiedosto **Filetypes** kansioon.

Jos olet ladannut **Tehoste** lisäosan, siirrä purettu .DLL tiedosto **Effects** kansioon.

Käynnistä paint.net lisäosan asennuksen jälkeen uudestaan jos paint.net oli jo päällä.

{{% huom %}}paint.net tarkistaa uudet lisäosat vain käynnistyksen aikana. Ohjelma pitää käynnistää uudestaan uusia lisäosia varten.{{% /huom %}}

Uudet Tehoste-lisäosat löytyvät Tehosteet valikosta. Jos lisäosaa ei löydy mistään, tarkista Asetukset valikko mahdollisia virheitä varten.

Uudet tiedostotyypit näkyvät vain tiedostoja avatessa ja tallentaessa. Jos tiedostotyyppiä ei näy, tarkista Asetukset valikko mahdollisia virheitä varten.
