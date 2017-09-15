+++
date = "2015-09-09T18:45:55+03:00"
draft = false
title = "Sumennus"

[menu.pdn]
	parent = "tehosteet"
	identifier = "sumennus"
	weight = 344

+++

Tämä alavalikko sisältää tehosteita jotka ovat hyödyllisiä kuvan sumentamisessa eri tavoilla.

{{< figure src="/kuvat/effectsblursmenu.png" alt="Sumennus efektit" >}}

<div id="tabs" style="width: auto;">
	<ul>
		<li><a href="#Unfocus">Epäkohdistus</a></li>
		<li><a href="#GaussBlur">Gauss-sumennus</a></li>
		<li><a href="#MotionBlur">Liike-epäterävyys</a></li>
		<li><a href="#SurfaceBlur">Pintasumennus</a></li>
		<li><a href="#Fragment">Pirstaloi</a></li>
		<li><a href="#Radial">Säteittäinen sumennus</a></li>
		<li><a href="#Zoom">Zoom-sumennus</a></li>
	</ul>
	<div id="Unfocus">
		<p>Tämä tehoste näyttää samalta kuin Gauss-sumennus aluksi, mutta antaa utuisemman tai "epätarkan" ulkoasun kuvalle. Matiikan termeillä, se määrittää yhtenäisemmän painotuksen pikseleille kyseisen säteen sisällä.</p>
		<figure class="bunder border">
			<img src="/resurssit/cass_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/cass_unfocus.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="GaussBlur">
		<p>Tämä lisää yleisen sumennuksen kuvaan käyttäen Gauss kaavaa.</p>
		<figure class="bunder border">
			<img src="/resurssit/cass_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/cass_gaussianblur.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="MotionBlur">
		<p>Tämä on hyödyllinen suoran liikkeen lisäämiseen kuvaan, kuin kuva olisi otettu pidemmällä valotusajalla.</p>
		<figure class="bunder border">
			<img src="/resurssit/cass_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/cass_motionblur.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="SurfaceBlur">
		<p>Tämä tehoste sumentaa tarkat piirteet tai kohinan kuvasta säilyttäen suureksi osaksi reunat ja kontrastin.</p>
		<figure class="bunder border">
			<img src="/resurssit/cass_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/cass_surfaceblur.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="Fragment">
		<p>Kopioita, tai &ldquo;pirstaleita&rdquo;, kuvasta piirretään tiettyjen etäisyyksien päähän tietyssä kulmassa. Tämä on hyödyllinen jos haluat luoda epäselvän tai &ldquo;humalaisen&rdquo; ulkoasun kuvalle.</p>
		<figure class="bunder border">
			<img src="/resurssit/porsche_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/porsche_fragment.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="Radial">
		<p>Tämä on samankaltainen kuin liike-epäterävyys, mutta liike on levitetty ympyrän muotoon suoran linja sijasta.</p>
		<figure class="bunder border">
			<img src="/resurssit/cass_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/cass_radialblur.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
	<div id="Zoom">
		<p>Tämä tehoste antaa mielikuvan liikkeestä tai sumennuksesta kolmannessa ulottuvuudessa, tullen ulos kuvasta.</p>
		<figure class="bunder border">
			<img src="/resurssit/porsche_original.jpg" alt="">
			<figcaption>
				<h4>Alkuperäinen</h4>
			</figcaption>
		</figure>
		<figure class="bunder border">
			<img src="/resurssit/porsche_zoomblur.jpg" alt="">
			<figcaption>
				<h4>Jälkeen</h4>
			</figcaption>
		</figure>
	</div>
</div>

{{< tabs >}}