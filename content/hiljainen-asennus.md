+++
draft = false
title = "Hiljainen asennus"
version = "4.2.12"

[menu.pdn]
    parent = "muuta"
    identifier = "hiljainen"
    weight = 601

+++

paint.net tukee hiljaista asennusta minkä avulla voit asentaa paint.netin ilman
käyttäjän ohjeita. Saatavilla on kaksi vaihtoehtoa hiljaiselle asennukselle. Ensimmäinen on MSI pohjainen julkaisu, suunniteltu käytettäväksi
[Active Directoryn](https://fi.wikipedia.org/wiki/Active_Directory) sekä [Group Policyn](https://en.wikipedia.org/wiki/Group_policy) kanssa
asentamaan paint.net monelle käyttäjälle hallitussa verkostossa. Toinen on automaattinen asennus, sopiva yleiselle automaatiolle henkilökohtaiseen
käyttöön.

Edelliset paint.net versiot jaettiin MSI tiedostoina joiden asetuksia pystyi asettamaan käyttämällä tavallisia
[Windows Installer](https://en.wikipedia.org/wiki/Microsoft_Installer) asetuksia. Uudet versiot, kuitenkin on jaettu EXE tiedostoina monimutkaisempien
vaatimusten takia asetusten, käännösten ja päivitysten muodossa. Voit silti tehdä asennuksen MSIn avulla jos käytät /createMSI parametria
asennusohjelmaa käynnistäessä.

### MSI pohjainen julkaisu

Käyttämällä /createMSI komentorivi parametria, voit luoda MSI paketteja jotka ovat hyödyllisiä AD/GPO ympäristöissä.

Kaksi MSI pakettia luodaan kun käytät tätä komentoa, yksi kummallekin prosessoriarkkitehtuurille (x86 ja x64). x86 MSI on tarkoitettu 32-bittisille
Intel/AMD järjestelmille ja on yleisin käytetty paketti. x64 MSI on Intel/AMD järjestelmille joilla on kummatkin, 64-bittinen prosessori sekä
64-bittinen "x64" versio Windowsista.

{{< varoitus >}}Huomaa että x86 MSI (PaintDotNet.x86.msi) ei toimi ollenkaan 64-bittisille järjestelmillä, joten muista suunnitella julkaisut asiallisesti.{{< /varoitus >}}

Myös, MSI ominaisuudet toista seuraavassa taulukossa voi käyttää muuttamaan asetuksia komentorivillä kun käytät komentoa /createMsi. Nämä
MSI ominaisuudet lisätään automaattisesti luotavaan MSI'hin jolloin tulevia muutoksia ei tarvitse tehdä.

### Automaattinen asennus

Halutaksesi tehdä automaattisen asennuksen, käytä /auto tai /skipConfig komentoriviparametreja josta kerromme alempana.

### Komentorivin komennot

Asennuspaketti käyttää seuraavia komentorivin komentoja, missä paint.net.{{< param version >}}.install.exe on asennusohjelma jonka latasit
[kotisivulta](https://www.getpaint.net):

{{< esimerkki >}}paint.net.{{< param version >}}.install.exe [/skipConfig | /auto | /createMsi] [PROPERTY=VALUE]{{< /esimerkki >}}

| Komento | Kuvaus |
|-|-|
| /skipConfig | Ohittaa asetukset ja asennuskansion. Käyttää MSI ominaisuuksia seuraavassa järjestyksessä: {{< list items="komentorivin asetukset;rekisteri HKLM\Software\paint.net;oletusasetukset" >}} |
| /auto | Sama kuin /skipConfig, mutta ei näytä viimeistä velhon sivua joka kertoo asennuksen loppuneen. Tämä mahdollistaa täysin automaattisen asennuksen joka |ei tarvitse käyttäjän ohjeita ollenkaan. |
| /createMsi | Tämä luo kaksi MSI pakettia työpöydälle kansioon PaintDotNetMsi. Nämä MSIt on tarkoitettu valituille OS/CPU yhdistelmille (x86 tai x64). Näitä voi käyttää julkistamiseen käyttäen AD/GPO järjestelmiä ja sisältävät jo asettamasi asetukset käyttäen PROPERTY=VALUE komentorivin komentoja (jos asetat). |
| PROPERTY=VALUE | Asettaa MSI ominaisuuden nimeltä PROPERTY arvolla VALUE. Voit määrittää useita arvoja. Alhaalla on lista mahdollista arvoista.  {{< huom >}}Jos VALUE sisältää välilyönnin, pitää koko PROPERTY=VALUE teksti sulkea sitaatteihin. Esimerkiksi kuvitteellinen TEST ominaisuus arvolla "1 2 3", pitää käyttää "TEST=1 2 3" komentorivillä, mukaan lukien sitaatit.{{< /huom >}} |

Oletusasennus tarvitsee vain että käytät /auto komentoa. Voit asettaa lisää ominaisuuksia vaihtamalla MSI ominaisuuksia, missä "1"
asettaa sen ja "0" poistaa sen:

| MSI ominaisuus | Oletusarvo | Kuvaus |
|-|:-:|-|
| TARGETDIR | %PROGRAMFILES%\paint.net | Aseta kansio minne asennat paint.netin. %PROGRAMFILES% tarkoittaa yleensä C:\Program Files. |
| CHECKFORUPDATES | 1 (0 kun /createMsi on asetettu) | Pistää päälle (1) tai pois päältä (0) automaattiset päivitykset. Huomaa että päivitysten tarkistus on päällä ja sallitty vain käyttäjille jotka ovat Järjestelmänvalvojien ryhmässä. Ei ole mahdollista päivittää käyttäjillä jotka eivät ole Järjestelmänvalvojien ryhmässä. |
| CHECKFORBETAS | 0 | Kun päivityksiä tarkisteaan, tarkista myös "beta" versio. |
| JPGPNGBMPEDITOR |     1     | Asettaa oletusmuokkaajan JPG, PNG ja BMP kuville. Huomaa että tämä asettaa paint.netin "Muokkaa" komennolle muttei vaikuta normaaliin kaksoisklikkauksen toimintaan Windowsissa. |
| TGAEDITOR |     1     | Asettaa oletusmuokkaajan TGA kuville.Huomaa että tämä asettaa paint.netin "Muokkaa" komennolle muttei vaikuta normaaliin kaksoisklikkauksen toimintaan Windowsissa. |
| DESKTOPSHORTCUT |     1     | Luo työpöydälle paint.net pikakuvakkeen. |
| PROGRAMSGROUP | (tyhjä) | Tämä asettaa mihinkä kansioon Käynnistä-valikon Ohjelmat ryhmään paint.netin pikakuvake luodaan. Oletuksena tämä on tyhjä jolloin pikakuvake luodaan juureen muiden pikakuvakkeiden kuten Media Player ja Internet Explorer kanssa. Tätä yleensä käytetään siirtämään paint.netin pikakuvake ryhmiin kuten "Grafiikkaohjelmat". Jos haluat sijoittaa pikakuvakkeen ryhmän sisällä olevaan ryhmään, käytä samanlaista komentoa kuin tiedostonimen kanssa. Esimerkkinä jos haluat pikakuvakkeen Grafiikka ryhmään Ohjelmat ryhmässä (esim. "Käynnistä → Kaikki ohjelmat → Ohjelmat → Grafiikka") aseta "PROGRAMSGROUP=Ohjelmat\Grafiikka". |

### Esimerkkejä

Asentaaksesi paint.netin oletusasetuksilla, oletuskansioon ilman käyttäjän ohjeita:

{{< esimerkki >}}paint.net.{{< param version >}}.install.exe /auto{{< /esimerkki >}}

Asentaaksesi paint.netin kansioon D:\PDN ja ilman työpöydän pikakuvaketta:

{{< esimerkki >}}paint.net.{{< param version >}}.install.exe /auto TARGETDIR=D:\PDN DESKTOPSHORTCUT=0{{< /esimerkki >}}

Asentaaksesi paint.netin kansioon E:\Image Apps\paint.net, ja tarkistamaan betaversioita päivityksen yhteydessä.

{{< huom >}}Koko TARGETDIR arvo pitää olla sitaateissa jos kansionimessä on yksi tai enemmän välilyöntejä!{{< /huom >}}

{{< esimerkki >}}paint.net.{{< param version >}}.install.exe /auto "TARGETDIR=E:\Image Apps\paint.net" CHECKFORBETAS=1{{< /esimerkki >}}
