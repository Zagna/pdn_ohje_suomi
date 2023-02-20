+++
draft = false
title = "Tiedosto"

[menu.pdn]
    parent = "vpalkki"
    identifier = "tiedostov"
    weight = 301

+++

Tiedosto-valikkoa käytetään kuvien avaamiseen, hankkimiseen ja tallentamiseen paint.netissä. Komennot toimivat saman lailla kuin muissa ohjelmissa.

{{< figure src="ui/filemenu.webp" alt="Tiedosto valikko" >}}{{< /figure >}}

* ### Uusi

    Tämän avulla voit luoda uuden, tyhjän kuvan. Oletuskoko on 800 x 600, tai se kuvan koko mikä on kopioitu leikepöydälle. Seuraava valikko
    ilmestyy kun painat tätä valikkoa. Voit käyttää "Säilytä kuvasuhde" valikkoa pakottaaksesi kuvan korkeuden ja leveyden tiettyyn suhteeseen.
    Uuden kuvan koko myös näytetään laatikon yläruudussa; tätä voi käyttää havaitsemaan kuinka paljon muistia kuva käyttää, mutta se ei näytä kuinka
    iso se tulee olemaan kun tallennat sen kovalevylle (yleensä se on pienempi).

    {{< figure src="ui/newdialog.webp" alt="Uusi tiedosto" >}}{{< /figure >}}

* ### Avaa

    Tämän avulla voit avata uuden kuvan, mikä myös sulkee nykyisen kuvan mikä on auki. Se toimii samalla lailla kuin Avaa muissa ohjelmissa.

* ### Avaa viimeisin

    Kuten näet ylhäällä, Avaa viimeisin valikko mahdollistaa nopean tavan avata viimeiset 8 kuvaa mitkä olet avannut paint.netillä. Jokaisen kuvan
    vierestä löytyy pieni näytekuva joka auttaa tietyn kuvan löytämiseen. On olemassa myös "Tyhjennä tämä lista", joka tyhjentää listan.

* ### Hanki

    Tässä alavalikossa on kaksi valintaa: Tuo leikepöydältä, ja Tuo skannerista tai kamerasta. Nämä mahdollistavat uuden kuvan luomisen joka tuo
    kuvan joko leikepöydältä, skannerista tai kamerasta joka tukee Windows Image Acquitision 2.0:aa (WIA).

    {{< figure src="ui/acquiremenu.webp" alt="Hanki" >}}{{< /figure >}}

* ### Sulje

    Tämä sulkee valitun kuvan. Jos olet tehnyt muutoksia joita ei ole tallennettu, sinulta kysytään varmistusta ennen tallentamista:

    {{< figure src="ui/unsavedchanges1.webp" alt="Sulje" >}}{{< /figure >}}

* ### Tallenna

    Tämä komento tallentaa kuvan nykyisellä nimellä. Jos et ole tallentanut kuvaa aiemmin, ja jos tiedostotyppi jona tallennat tarvitsee asetuksia
    (GIF, TGA, JPEG ja PNG), silloin näytetään Tallenna asetukset valikko. Lisäksi, kuva ei ole nimetty (eli, sen nimi on "Nimetön"), pitää sille
    antaa nimi. JPEG-kuvia varten kysytään kuvan laadun tasoa. GIF-kuvia varten, sinä voit asettaa läpinäkyvyyttä sekä rasterointia. Viimeiseksi,
    TGA-kuvia varten voi asettaa tallennetaanko ne 24- vai 32-bittisinä, ja käytetään RLE pakkausta vai ei. PNG-kuvia varten kysytään värisyvyyttä
    ja muita asetuksia. Valikko näyttää katsauksen miltä kuva näyttää kun sen lataa toisessa ohjelmassa (tai paint.netissä) sen jälkeen kun se on
    tallennettu. Kuvan koko näytetään katsauksen yläpuolella. Voit käyttää katsausta saavuttamaan toivotun kuvan laadun.

    {{< figure src="img/saveconfigdialog.webp" alt="Tallenna" >}}{{< /figure >}}

* ### Tallenna nimellä

    Normaalisti kun käytät vain Tallenna-komentoa se käyttää nykyistä tiedostonimeä ja asetuksia mitä käytit viimeksi. Tallenna nimellä
    -komennolla voit määrittää uuden nimen ja jos tarpeellista, uudet asetukset.

* ### Tulosta

    Tämän avulla voit tulostaa kuvan käyttäen Windowsin sisäänrakennettua Tulosta kuvia -toimintoa. Se esittää yksinkertaisen velhopohjaisen käyttöliittymän minkä avulla voit käydä tulostuksen läpi.

    Windows 7:ssä, Tulosta kuvia -käyttöliittymä näyttää tältä:

    {{< figure src="img/printwizard.webp" alt="Tulostamisen avustaja" >}}{{< /figure >}}

* ### Poistu

    Käytä tätä poistuaksesi paint.net:istä. Sinulta kysytään haluatko tallentaa muutokset jos olet muokannut kuvaa. Jos sinulla on useita kuvia joiden muutoksia ei ole tallennettu, sinulta kysytään varmistusta ensin.

    {{< figure src="ui/unsavedchanges2.webp" alt="Tallenna muutokset" >}}{{< /figure >}}