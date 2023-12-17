+++
draft = false
title = "Järjestelmävaatimukset"

[menu.pdn]
    parent = "muuta"
    identifier = "jarjestelma"
    weight = 602

+++

* Windows 11
* tai Windows 10 versiosta 1809 eteenpäin

Huomaa että paint.net käyttää kiintolevyä väliaikaistiedostojen tallentamiseen jotka liittyvät kumoamiseen ja toistamiseen. Tämän takia,
kiintolevyvaatimukset riippuvat siitä mitä tehtäviä suoritat kuvalle ja kuvan koosta. Väliaikaistiedostot pakataan jos käytät NTFS
tiedostojärjestelmää. Tämä johtaa paljon vähemmän levytilan käyttöön ja parempaan tehokkuuteen vähemmän kovalevyn käytön takia.

### Tuki ARM64:lle

ARM64 on tuettu natiivisti versiosta 4.3 alkaen.

### Laitteistopohjainen kiihdytys

Laitteistopohjainen kiihdytys (GPU) Direct2D:n avulla on tuettu. Tämä parantaa suorituskykyä joillain järjestelmillä.

Jos näet virheitä kuvien näytössä, on suositeltavaa poistaa se käytöstä ({{< tool "tools" >}}[Asetukset &rarr; Grafiikka]({{% relref "asetukset" %}})).
