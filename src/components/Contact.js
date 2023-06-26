import React from 'react'

function Contact() {
  return (
    <>
    <section className="ct_parent">
	<div>
	<div className="ct_section1">
       <h1>Contact Us</h1>
       <h3>Here is where the impossible begins</h3>
		<p><i>An enduring icon that just keeps on giving,The All-New Thar comes equipped with the iconic design and 
		all new interiors to help you Explore The Impossible</i></p>
		<a href="mailto:SUVMahindra@Ltd.com">
			<i className="fa fa-envelope" style={{fontSize:"24px"}}>
             SUVMahindra@Ltd.com</i>
         </a><br/>
		<a href="tel:+4733378901">
			<i className="fa fa-phone" style={{fontSize:"24px"}}>
              4733378901</i></a>
	</div>
	<div className="ct_section2">

    <form action="" method="">
    <div className="row">	
      <input type="text" id="name" name="name" placeholder="Your name.."/><br/>
      <input type="text" id="email" name="email" placeholder="Your email.."/><br/>
      <textarea id="message" name="message" placeholder="Write something.." style={{height:"100px"}}></textarea>
        <br/>
       <input type="submit" value="Submit" className="button"/>
     </div>    

  </form>

	</div>
 </div>
</section>

    </>
  )
}

export default Contact