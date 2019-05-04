+++
date = "2015-09-09T18:48:57+03:00"
draft = false
title = "Väri-ikkuna"

[menu.pdn]
    parent = "kliittyma"
    identifier = "vikkuna"
    weight = 207

+++

Tällä ikkunalla on kaksi tilaa: "Vähemmän" ja "Enemmän". Oletuksena paint.net käynnistyy väri-ikkuna Vähemmän tilassa. Tässä tilassa voit helposti
valita pohjavärin käyttäen joko väripyörää tai palettia. paint.net mahdollistaa kahden värin valitsemisen, edusta- ja taustavärin, ja voit käyttää
alas vetolaatikkoa väri-ikkunan yläreunassa valitsemaan kumpi on valittu ja voi muokata. Eräät työkalut, kuten
{{< tool "paintbrush.png" >}}[Sivellin]({{< relref "sivellin.md" >}}) ja {{< tool "shapes.png" >}}[Muototyökalut]({{< relref "muodot.md" >}}),
käyttävät edusta- tai taustaväriä piirtämisessä, riippuen siitä millä hiiren napilla piirrät.

* ### Väri-ikkuna

    {{< figure src="/kuvat/colorswindowless.png" alt="Värit" >}}

    Tämä tila antaa sinun valita väripyörässä näkyvistä väreistä tai ensimmäisistä 32 väristä nykyisessä paletissa. Jos painat paletissa oikealla
    hiiren napilla, se asettaa taustavärin.

    {{< vihje >}}Voit myös käyttää pikanäppäintä C vaihtaaksesi edusta ja taustavärin välillä nopeasti.{{< /vihje >}}

* ### Avaa &gt; &gt;

    Jos painat "Avaa &gt; &gt;" nappia, ikkuna laajenee näyttämään tarkempia asetuksia. Tässä tilassa voit asettaa tarkan arvon jokaiselle värin
    ominaisuudelle, RGB (Punainen, Vihreä, Sininen) tai HSV (Sävy, Värikylläisyys, Arvo) skaalassa. Värin muokkaaminen hex, eli heksadesimaalin
    avulla on myös mahdollista. Alfaa, tai läpinäkyvyyttä voi myös muokata.

    {{< figure src="/kuvat/colorswindowmore.png" alt="Värit-Lisää" >}}

    "Avaa &gt; &gt;" nappi muuttuu "&lt; &lt; Sulje" napiksi jolla voit palata pienempään ikkunaan.

* ### Väripyörä

    Väripyörän avulla voit valita valitun värin ja värin valitsemiseksi on olemassa kolme aputoimintoa.

    Jos painat väriä valitessa Ctrl-näppäintä, Värit rajoitetaan samalle piirille väripyörässä.

    {{< figure src="/kuvat/colorswindowctrl.png" alt="Värit" title="Väripyörän käyttö Ctrl-näppäimellä" >}}

    Jos painat väriä valitessa Alt-näppäintä, Värit rajoitetaan yhteen säteeseen väripyörässä.

    {{< figure src="/kuvat/colorswindowalt.png" alt="Värit" title="Väripyörän käyttö Alt-näppäimellä" >}}

    Jos painat väriä valitessa Shift-näppäintä, Värit rajoitetaan useaan säteeseen väripyörässä kuin polkupyörän pinnoissa.

    {{< figure src="/kuvat/colorswindowshift.png" alt="Värit" title="Väripyörän käyttö Shift-näppäimellä" >}}

* ### Paletit

    On olemassa kaksi nappia paletin yläpuolella jotka antavat sinun hallita värejä.

    {{< figure src="/resurssit/palettebuttons.png" alt="Paletit" >}}

    Ensimmäinen lisää nykyisen värin palettiin. Paina nappia ja sen jälkeen valitse paletilla paikka minne lisäät värin.

    Toinen avaa vetolaatikon joka tarjoaa komentoja joilla paletteja voi hallita:

    {{< figure src="/kuvat/palettemenu.png" alt="Paletit valikko" >}}

    Ensimmäiset asiat listassa ovat kaikki tekemäsi paletit jotka olet tallentanut. Valitessasi yhden niistä lataat kyseisen paletin. Viimeiset
    kolme valinnan avulla voit tallentaa nykyisen paletin tiedostoon, avata palettikansion Resurssinhallinnassa, ja viimeisenä palauttaa paletin
    takaisin oletusväreihin. Palettitiedostot ovat vain tekstitiedostoja (*.txt) jotka ovat tallennettu omaan alakansioon Tiedostot kansiossa.
