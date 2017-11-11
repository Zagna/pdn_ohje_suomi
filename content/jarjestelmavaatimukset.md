+++
date = "2015-09-09T18:49:19+03:00"
draft = false
title = "Järjestelmävaatimukset"

[menu.pdn]
	parent = "muuta"
	identifier = "jarjestelma"
	weight = 402

+++

### Vähimmäisvaatimukset

*	Windows 7 SP1 tai uudempi (8.1, 10)
*	.NET Framework 4.7
*	1GHz prosessori
*	1Gt RAM-muistia
*	1024 x 768 näytön resoluutio
*	200+ Mt kiintolevytilaa

Huomaa että paint.net käyttää kiintolevyä väliaikaistiedostojen tallentamiseen jotka liittyvät kumoamiseen ja toistamiseen. Tämän takia, kiintolevyvaatimukset riippuvat
siitä mitä tehtäviä suoritat kuvalle ja kuvan koosta. Nämä väliaikaistiedostot pakataan jos käytät NTFS tiedostojärjestelmää. Tämä johtaa paljon vähemmän levytilan käyttöön
ja parempaan tehokkuuteen vähemmän kovalevyn käytön takia.

### Laitteistopohjainen kiihdytys

Laitteistopohjainen kiihdytys (GPU) Direct2D:n avulla on tuettu. Tämä parantaa suorituskykyä joillain järjestelmillä.

Jos näet virheitä kuvien näytössä, on suositeltavaa poistaa se käytöstä \(<img style="vertical-align: middle;" src="/resurssit/tyokalut/tools.png" alt="Työkalut" />[Asetukset &rarr; Käyttöliittymä]({{< relref "asetukset.md" >}})\).
