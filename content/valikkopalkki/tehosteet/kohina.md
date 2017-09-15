+++
date = "2015-09-09T18:45:42+03:00"
draft = false
title = "Kohina"

[menu.pdn]
	parent = "tehosteet"
	identifier = "kohina"
	weight = 342

+++

Tämä alavalikko sisältää tehosteita jotka ovat hyödyllisiä kohinan lisäämisessä tai poistamisessa.

{{< figure src="/kuvat/effectsnoisemenu.png" alt="Kohina efektit" >}}

<div id="tabs">
	<ul>
		<li><a href="#AddNoise">Lisää kohinaa</a></li>
		<li><a href="#Median">Mediaani</a></li>
		<li><a href="#ReduceNoise">Vähennä kohinaa</a></li>
	</ul>
	<div id="AddNoise">
		<p>Tämä lisää kohinaa kuvaan.</p>
		<figure class="bunder border">
			<img src="/resurssit/porsche_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/porsche_addnoise.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="Median">
		<p>Tämä tehoste on hyödyllinen kohinan poistamiseen alhaisella säteellä. Suurella säteellä, se tuottaa sumentavan tehosteen.</p>
		<figure class="bunder border">
			<img src="/resurssit/porsche_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/porsche_median.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="ReduceNoise">
		<p>Tämä tehoste on hyödyllinen kohinan poistamiseen, etenkin valokuvista ilman yksityiskohtien tai kontrastin häviämistä.</p>
		<figure class="bunder border">
			<img src="/resurssit/kid_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/kid_reducenoise.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
</div>

{{< tabs >}}
