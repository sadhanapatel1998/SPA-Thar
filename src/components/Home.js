import React from 'react'

function Home() {
  return (
    <>
    <section id="vehicles">
	<h1 className="veh">SUV VEHICLES</h1>
	<div className="thar">
		<div className="tharSUV">
			<img src="images/thar1.webp"/>
			<h1>Intense Chrome-Hard Top</h1>
			<p>Here is where the impossible begins</p>
			<a href="#">Read More...</a>
		</div>
		<div className="tharSUV">
			<img src="images/thar2.webp"/>
			<h1>Dark Lord-Convertible Top</h1>
			<p>Here is where the impossible begins</p>
			<a href="#">Read More...</a>

		</div>
		<div className="tharSUV">
			<img src="images/thar3.webp"/>
			<h1>Dark Lord-Hard Top</h1>
			<p>Here is where the impossible begins</p>
			<a href="#">Read More...</a>
		</div>
	</div>
  </section>

    </>
  )
}

export default Home