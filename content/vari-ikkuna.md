+++
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
{{< tool "paintbrush" >}}[Sivellin]({{% relref "sivellin" %}}) ja {{< tool "shapes" >}}[Muototyökalut]({{% relref "muodot" %}}),
käyttävät edusta- tai taustaväriä piirtämisessä, riippuen siitä millä hiiren napilla piirrät.

* ### Väri-ikkuna

    {{< figure src="ui/colorswindowless.webp" alt="Värit" >}}{{< /figure >}}

    Tämä tila antaa sinun valita väripyörässä näkyvistä väreistä tai ensimmäisistä 32 väristä nykyisessä paletissa. Jos painat paletissa oikealla
    hiiren napilla, se asettaa taustavärin.

    {{< vihje >}}Voit myös käyttää pikanäppäintä C vaihtaaksesi edusta ja taustavärin välillä nopeasti.{{< /vihje >}}

* ### Avaa >>

    Jos painat {{< badge >}}Avaa >>{{< /badge >}} nappia, ikkuna laajenee näyttämään tarkempia asetuksia. Tässä tilassa voit asettaa tarkan arvon jokaiselle värin
    ominaisuudelle, RGB (Punainen, Vihreä, Sininen) tai HSV (Sävy, Värikylläisyys, Arvo) skaalassa. Värin muokkaaminen hex, eli heksadesimaalin
    avulla on myös mahdollista. Alfaa, tai läpinäkyvyyttä voi myös muokata.

    {{< figure src="ui/colorswindowmore.webp" alt="Värit-Lisää" >}}{{< /figure >}}

    {{< badge >}}Avaa >>{{< /badge >}} nappi muuttuu {{< badge >}}<< Sulje{{< /badge >}} napiksi jolla voit palata pienempään ikkunaan.

* ### Väripyörä

    Väripyörän avulla voit valita valitun värin ja värin valitsemiseksi on olemassa kolme aputoimintoa.

    Jos painat väriä valitessa Ctrl-näppäintä, Värit rajoitetaan samalle piirille väripyörässä.

    {{< figure src="ui/colorswindowctrl.webp" alt="Värit" title="Väripyörän käyttö Ctrl-näppäimellä" >}}{{< /figure >}}

    Jos painat väriä valitessa Alt-näppäintä, Värit rajoitetaan yhteen säteeseen väripyörässä.

    {{< figure src="ui/colorswindowalt.webp" alt="Värit" title="Väripyörän käyttö Alt-näppäimellä" >}}{{< /figure >}}

    Jos painat väriä valitessa Shift-näppäintä, Värit rajoitetaan useaan säteeseen väripyörässä kuin polkupyörän pinnoissa.

    {{< figure src="ui/colorswindowshift.webp" alt="Värit" title="Väripyörän käyttö Shift-näppäimellä" >}}{{< /figure >}}

* ### Paletit

    On olemassa kaksi nappia paletin yläpuolella jotka antavat sinun hallita värejä.

    {{< figure src="png/palettebuttons.webp" alt="Paletit" >}}{{< /figure >}}

    Ensimmäinen lisää nykyisen värin palettiin. Paina nappia ja sen jälkeen valitse paletilla paikka minne lisäät värin.

    Toinen avaa vetolaatikon joka tarjoaa komentoja joilla paletteja voi hallita:

    {{< figure src="ui/palettemenu.webp" alt="Paletit valikko" >}}{{< /figure >}}

    Ensimmäiset asiat listassa ovat kaikki tekemäsi paletit jotka olet tallentanut. Valitessasi yhden niistä lataat kyseisen paletin. Viimeiset
    kolme valinnan avulla voit tallentaa nykyisen paletin tiedostoon, avata palettikansion Resurssinhallinnassa, ja viimeisenä palauttaa paletin
    takaisin oletusväreihin. Palettitiedostot ovat vain tekstitiedostoja (*.txt) jotka ovat tallennettu omaan alakansioon Tiedostot kansiossa.
