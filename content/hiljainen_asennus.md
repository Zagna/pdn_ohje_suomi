+++
date = "2015-09-09T18:49:11+03:00"
draft = false
title = "Hiljainen asennus"

[menu.pdn]
    parent = "muuta"
    identifier = "hiljainen"
    weight = 401

+++

paint.net tukee [hiljaista asennusta](http://en.wikipedia.org/wiki/Unattended_installation) minkä avulla voit asentaa paint.netin ilman
käyttäjän ohjeita. Saatavilla on kaksi vaihtoehtoa hiljaiselle asennukselle. Ensimmäinen on MSI pohjainen julkaisu, suunniteltu käytettäväksi
[Active Directoryn](http://fi.wikipedia.org/wiki/Active_Directory) sekä [Group Policyn](http://en.wikipedia.org/wiki/Group_policy) kanssa
asentamaan paint.net monelle käyttäjälle hallitussa verkostossa. Toinen on automaattinen asennus, sopiva yleiselle automaatiolle henkilökohtaiseen
käyttöön.

Edelliset paint.net versiot jaettiin MSI tiedostoina joiden asetuksia pystyi asettamaan käyttämällä tavallisia
[Windows Installer](http://en.wikipedia.org/wiki/Microsoft_Installer) asetuksia. Uudet versiot, kuitenkin on jaettu EXE tiedostoina monimutkaisempien
vaatimusten takia asetusten, käännösten ja päivitysten muodossa. Voit silti tehdä asennuksen MSIn avulla jos käytät /createMSI parametriä
asennusohjelmaa käynnistäessä.

### MSI pohjainen julkaisu

Käyttämällä /createMSI komentorivi parametriä, voit luoda MSI paketteja jotka ovat hyödyllisiä AD/GPO ympäristöissä.

Kaksi MSI pakettia luodaan kun käytät tätä komentoa, yksi kummallekkin prosessoriarkkitehtuurille (x86 ja x64). x86 MSI on tarkoitettu 32-bittisille
Intel/AMD järjestelmille ja on yleisin käytetty paketti. x64 MSI on Intel/AMD järjestelmille joilla on kummatkin, 64-bittinen prosessori sekä
64-bittinen &ldquo;x64&rdquo; versio Windowsista.

{{% varoitus %}}Huomaa että x86 MSI (PaintDotNet.x86.msi) ei toimi ollenkaan 64-bittisille järjestelmillä, joten muista suunnitella julkaisut asiallisesti.{{% /varoitus %}}

Myös, MSI ominaisuudet toista seuraavassa taulukossa voi käyttää muuttamaan asetuksia komentorivillä kun käytät komentoa /createMsi. Nämä
MSI ominaisuudet lisätään automaattisesti luotavaan MSI'hin jolloin tulevia muutoksia ei tarvitse tehdä.

### Automaattinen asennus

Haluaksesi tehdä automaattisen asennuksen, käytä /auto tai /skipConfig komentoriviparametrejä josta kerromme alempana.

### Komentorivin komennot

Asennuspaketti käyttää seuraavia komentorivin komentoja, missä paint.net.4.0.17.install.exe on asennusohjelma jonka latasit
[kotisivulta](http://www.getpaint.net):

{{% esimerkki %}}paint.net.4.0.17.install.exe [/skipConfig | /auto | /createMsi] [PROPERTY=VALUE]{{% /esimerkki %}}

Komentojen kuvaus:

<table class="unattend" id="table0">
    <tr>
        <td class="fixed unattend2">
            <p>/skipConfig</p>
        </td>
        <td>
            <p>Ohittaa asetukset ja asennuskansion. Käyttää MSI ominaisuuksia seuraavassa järjestyksessä:</p>
            <ol>
                <li>komentorivin asetukset</li>
                <li>rekisteri HKLM\Software\paint.net</li>
                <li>oletusasetukset</li>
            </ol>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>/auto</p>
        </td>
        <td>
            <p>Sama kuin /skipConfig, mutta ei näytä viimeistä velhon sivua joka kertoo asennuksen loppuneen. Tämä mahdollistaa täysin automaattisen
            asennuksen joka ei tarvitse käyttäjän ohjeita ollenkaan.</p>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>/createMsi</p>
        </td>
        <td>
            <p>Tämä luo kaksi MSI pakettia työpöydälle kansioon PaintDotNetMsi. Nämä MSIt on tarkoitettu tietylle OS/CPU yhdistelmälle (x86 tai x64).
            Näitä voi käyttää julkistamiseen käyttäen AD/GPO järjestelmiä ja sisältävät jo asettamasi asetukset käyttäen PROPERTY=VALUE komentorivin
            komentoja (jos asetat).</p>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>PROPERTY=VALUE</p>
        </td>
        <td>
            <p>Asettaa MSI ominaisuuden nimeltä PROPERTY arvolla VALUE. Voit määrittää useita arvoja. Alhaalla on lista mahdollista arvoista.</p>

{{% huom %}}Jos VALUE sisältää välilyönnin, pitää koko PROPERTY=VALUE teksti sulkea sitaatteihin. Esimerkiksi kuvitteellinen TEST ominaisuus arvolla &ldquo;1 2 3&rdquo;, pitää käyttää &ldquo;TEST=1 2 3&rdquo; komentorivillä, mukaan lukien sitaatit.{{% /huom %}}

        </td>
    </tr>
</table>

Oletusasennus tarvitsee vain että käytät /auto komentoa. Voit asettaa lisää ominaisuuksia vaihtamalla MSI ominaisuuksi, missä &ldquo;1&rdquo;
asettaa sen ja &ldquo;0&rdquo; poistaa sen:

<table class="unattend" id="table1">
    <tr>
        <th class="unattend2">MSI ominaisuuden nimi</th>
        <th>Oletusarvo</th>
        <th>&nbsp;</th>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>TARGETDIR</p>
        </td>
        <td style="text-align: center;" class="fixed">
            <p style="padding: 0 1em;">%PROGRAMFILES%\paint.net</p>
        </td>
        <td>
            <p>Aseta kansio minne asennat paint.netin. %PROGRAMFILES% tarkoittaa yleensä C:\Program Files.</p>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>CHECKFORUPDATES</p>
        </td>
        <td style="text-align: center;" class="fixed">
            <p style="padding: 0 1em;">1<br>(0 kun /createMsi on asetettu)</p>
        </td>
        <td>
            <p>Pistää päälle (1) tai pois päältä (0) automaattiset päivitykset. Huomaa että päivitysten tarkistus on päällä ja sallitty vain
            käyttäjille jotka ovat Järjestelmänvalvojien ryhmässä. Ei ole mahdollista päivittää käyttäjillä jotka eivät ole Järjestelmänvalvojien
            ryhmässä.</p>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>CHECKFORBETAS</p>
        </td>
        <td style="text-align: center;" class="fixed">
            <p>0
        </td>
        <td>
            <p>Kun päivityksiä tarkisteaan, tarkista myös &ldquo;beta&rdquo; versio.</p>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>JPGPNGBMPEDITOR</p>
        </td>
        <td style="text-align: center;" class="fixed">
            <p>1</p>
        </td>
        <td>
            <p>Asettaa oletusmuokkaajan JPG, PNG ja BMP kuville. Huomaa että tämä asettaa paint.netin &ldquo;Muokkaa&rdquo; komennolle muttei
            vaikuta normaaliin kaksoisklikkauksen toimintaan Windowsissa.</p>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>TGAEDITOR</p>
        </td>
        <td style="text-align: center;" class="fixed">
            <p>1</p>
        </td>
        <td>
            <p>Asettaa oletusmuokkaajan TGA kuville.Huomaa että tämä asettaa paint.netin &ldquo;Muokkaa&rdquo; komennolle muttei vaikuta
            normaaliin kaksoisklikkauksen toimintaan Windowsissa.</p>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>DESKTOPSHORTCUT</p>
        </td>
        <td style="text-align: center;" class="fixed">
            <p>1
        </td>
        <td>
            <p>Luo työpöydälle paint.net pikakuvakkeen.</p>
        </td>
    </tr>
    <tr>
        <td class="fixed unattend2">
            <p>PROGRAMSGROUP</p>
        </td>
        <td style="text-align: center;" class="fixed">
            <p>(tyhjä)</p>
        </td>
        <td>
            <p>Tämä asettaa mihinkä kansioon Käynnistä-valikon Ohjelmat ryhmään paint.netin pikakuvake luodaan. Oletuksena tämä on tyhjä jolloin pikakuvake
            luodaan juureen muiden pikakuvakkeiden kuten Media Player ja Internet Explorer kanssa.</p>
            <p>Tätä yleensä käytetään siirtämään paint.netin pikakuvake ryhmiin kuten &ldquo;Grafiikkaohjelmat&rdquo;. Jos haluat sijoittaa pikakuvakkeen
            ryhmän sisällä olevaan ryhmään, käytä samanlaista komentoa kuin tiedostonimen kanssa. Esimerkkinä jos haluat pikakuvakkeen Grafiikka ryhmään
            Ohjelmat ryhmässä (esim. &ldquo;Käynnistä &rarr; Kaikki ohjelmat &rarr; Ohjelmat &rarr; Grafiikka&rdquo;) aseta
            &ldquo;PROGRAMSGROUP=Ohjelmat\Grafiikka&rdquo;.</p>
        </td>
    </tr>
</table>

### Esimerkkejä

Asentaaksesi paint.netin oletusasetuksilla, oletuskansioon ilman käyttäjän ohjeita:

{{% esimerkki %}}paint.net.4.0.17.install.exe /auto{{% /esimerkki %}}

Asentaaksesi paint.netin kansioon D:\PDN ja ilman työpöydän pikakuvaketta:

{{% esimerkki %}}paint.net.4.0.17.install.exe /auto TARGETDIR=D:\PDN DESKTOPSHORTCUT=0{{% /esimerkki %}}

Asentaaksesi paint.netin kansioon E:\Image Apps\paint.net, ja tarkistamaan betaversioita päivityksen yhteydessä.

{{% huom %}}Koko TARGETDIR arvo pitää olla sitaateissa jos kansionimessä on yksi tai enemmän välilyöntejä!{{% /huom %}}

{{% esimerkki %}}paint.net.4.0.17.install.exe /auto &ldquo;TARGETDIR=E:\Image Apps\paint.net&rdquo; CHECKFORBETAS=1{{% /esimerkki %}}
