+++
draft = false
title = "paintdotnet: protokolla"

[menu.pdn]
    parent = "koti"
    identifier = "protokolla"
    weight = 104

+++

paintdotnet: protokolla voi käyttää ohjelman käynnistämiseen komentoriviltä. Tätä käynnistystapaa tukee sekä klassinen että kaupan versio.

### Käyttö

Protokollan käyttö onnistuu menemällä Käynnistä &rarr; Suorita (tai {{< badge >}}Windows{{< /badge >}} + {{< badge >}}R{{< /badge >}}) ja kirjoita paintdotnet:"tiedoston sijainti.jpg"
ja paina {{< badge >}}Enteriä{{< /badge >}}. Ohjelma käynnistyy ja kuva aukeaa.

Jos paint.net on jo auki, kuva aukeaa käytössä olevassa ikkunassa.

{{< vihje >}}Jos tiedoston nimessä on välilyöntejä, kääri se lainausmerkkien väliin esim. paintdotnet:"C:\Käyttäjät\Pekka\Kuvat\tiedosto.jpg"{{< /vihje >}}

### paint.netin käyttö komentotiedostosta

Käytä Komentotiedostossa `start paintdotnet:"%1"`. `%1` on sen kuvan polku ja nimi minkä haluat avata.

Avataksesi usean tiedoston, käytä aiempaa komento monta kertaa.

```
@echo off
start paintdotnet:"C:\Users\Fred\Documents\Cool Icons\Rick.png"
start paintdotnet:"C:\Users\Fred\Documents\Cool Icons\Astley.png"
```

### Korjaus

Klassisen paint.netin kanssa voit käynnistää korjaustyökalun suorittamalla komennon paintdotnet:/repair.

Open the Windows Run command using either of the following methods
Option 1: In the Search bar, type Run and press Enter
Option 2: press both Windows Key + R at the same time

Type in paintdotnet:/repair followed by the Enter key (or click OK)

This command will run PdnRepair.exe from your paint.net installation directory. The repair tool will verify the paint.net installation and integrity of the files.

### Lokikansion avaaminen

Avaa Windowsin Suorita komento ja käytä komentoa `paintdotnet:/openCrashLogFolder`

### Pakota päivittämisen tarkistus

Tämä on tarkoitettu vikatilanteen tutkimiseen helpottamaan päivityksen tarkistukseen.
Avaa Windowsin Suorita komento ja käytä komentoa `paintdotnet:/forceUpdateCheck`

### Lisäosat pois päältä

Tämä on tarkoitettu vikatilanteiden tarkistamiseen jos lisäosaja epäillään syylliseksi. Tällä komennolla käynnistetään ilman lisäosia.
Avaa Windowsin Suorita komento ja käytä komentoa `paintdotnet:/disablePlugins`
