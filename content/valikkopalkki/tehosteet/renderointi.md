+++
date = "2015-09-09T18:45:49+03:00"
draft = false
title = "Renderointi"

[menu.pdn]
	parent = "tehosteet"
	identifier = "render"
	weight = 343

+++

Tämä alavalikko sisältää tehosteita jotka tuottavat renderointeja jotka korvaavat olemassa olevan kuvan.

{{< figure src="/kuvat/effectsrendermenu.png" alt="Renderointi efektit" >}}

<div id="tabs">
	<ul class="tabs">
		<li><a href="#Julia">Julian joukko</a></li>
		<li><a href="#Mandelbrot">Mandelbrotin joukko</a></li>
		<li><a href="#Cloud">Pilvi</a></li>
	</ul>
	<div class="tabcontents">
		<div id="Julia">
			<p>Tämä tehoste renderoi Julian joukon tasolle.</p>
			<figure class="border">
				<img src="/resurssit/juliafractal.jpg" alt="">
			</figure>
		</div>
		<div id="Mandelbrot">
			<p>Tämä tehoste renderoi Mandelbrotin joukon tasolle.</p>
			<figure class="border">
				<img src="/resurssit/mandelbrotfractal.jpg" alt="">
			</figure>
		</div>
		<div id="Cloud">
			<p>Tämä renderoi satunnaisen "pilven" tasolle. Voit valita miten haluat sekoittaa sen jo tasolle olevaan kuvaan.</p>
			<figure class="border">
				<img src="/resurssit/clouds.jpg" alt="">
			</figure>
		</div>
	</div>
</div>

{{< tabs >}}
