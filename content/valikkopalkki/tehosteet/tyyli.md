+++
date = "2015-09-09T18:46:00+03:00"
draft = false
title = "Tyyli"

[menu.pdn]
	parent = "tehosteet"
	identifier = "tyyli"
	weight = 345

+++

Tämä alavalikko sisältää tehosteita jotka voivat luoda tyyliteltyjä kuvia jotka ovat hyödyllisiä reunojen löytämiseen tai erinäisten tekstuurien luomiseen.

{{< figure src="/kuvat/effectsstylizemenu.png" alt="Tyyli efektit" >}}

<div id="tabs">
	<ul>
		<li><a href="#Emboss">Korkokuva</a></li>	
		<li><a href="#Relief">Reliefi</a></li>
		<li><a href="#EdgeDetect">Reunan tunnistus</a></li>
		<li><a href="#Outline">Ääriviiva</a></li>
	</ul>
	<div id="Emboss">
		<p>Tämä tehoste tuottaa mustavalkoisen kuvan jossa reunoille on annettu kolmiulotteinen korostus jäljittäen korkokuvaa.</p>
		<figure class="bunder border">
			<img src="/resurssit/liquidlime_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/liquidlime_emboss.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="Relief">
		<p>Tämä tehoste on samankaltainen kuin Reunan tunnistus, mutta se sekoittaa lopputuloksen alkuperäiseen kuvaan.</p>
		<figure class="bunder border">
			<img src="/resurssit/liquidlime_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/liquidlime_relief.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="EdgeDetect">
		<p>Tämä tehoste korostaa kuvassa olevia reunoja kuin valo olisi suunnattu siihen jostain kulmasta.</p>
		<figure class="bunder border">
			<img src="/resurssit/liquidlime_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/liquidlime_edgedetect.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="Outline">
		<p>Tämä tehoste etsii reunat kuvasta ja jäljittää ne annetulla paksuudella.</p>
		<figure class="bunder border">
			<img src="/resurssit/liquidlime_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/liquidlime_outline.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
</div>

{{< tabs >}}