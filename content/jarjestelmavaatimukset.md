+++
date = "2015-09-09T18:49:19+03:00"
draft = false
title = "Järjestelmävaatimukset"

[menu.pdn]
    parent = "muuta"
    identifier = "jarjestelma"
    weight = 602

+++

### Klassinen paint.net

* Windows 7 SP1 -käyttöympäristöpäivityksellä
* tai Windows 8.1
* tai Windows 10 versio 1607
* .NET Framework 4.7.1
* 1GHz prosessori
* 1Gt RAM-muistia
* 1024 x 768 näytön resoluutio
* 200+ Mt kiintolevytilaa

### Microsoft storen paint.net

* Windows 10 versio 1703 tai uudempi
* DirectX versio 10
* .NET Framework 4.7.1, tämä asennetaan automaatitsesti
* 1GHz 64-bittinen prosessori SSE tuella
* 1Gt RAM-muistia (2Gt suositeltu)
* 1024 x 768 näytön resoluutio
* 200+ Mt kiintolevytilaa

Huomaa että paint.net käyttää kiintolevyä väliaikaistiedostojen tallentamiseen jotka liittyvät kumoamiseen ja toistamiseen. Tämän takia,
kiintolevyvaatimukset riippuvat siitä mitä tehtäviä suoritat kuvalle ja kuvan koosta. Nämä väliaikaistiedostot pakataan jos käytät NTFS
tiedostojärjestelmää. Tämä johtaa paljon vähemmän levytilan käyttöön ja parempaan tehokkuuteen vähemmän kovalevyn käytön takia.

### Laitteistopohjainen kiihdytys

Laitteistopohjainen kiihdytys (GPU) Direct2D:n avulla on tuettu. Tämä parantaa suorituskykyä joillain järjestelmillä.

Jos näet virheitä kuvien näytössä, on suositeltavaa poistaa se käytöstä ({{< tool "tools" >}}[Asetukset &rarr; Käyttöliittymä]({{% relref "asetukset" %}})).
