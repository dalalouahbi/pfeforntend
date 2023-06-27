import React from 'react'
import "./index.css";

function OurServices() {
  return (
    <div>
     <div class="container">
		<h1 className='title'>Our Services</h1>
		<div class="services">
			<div class="service">
				<i class="fas fa-book service-icon"></i>
				<div class="service-title">Books</div>
				<div class="service-description">Browse our extensive collection of books, from classics to the latest bestsellers.</div>
			</div>
			<div class="service">
				<i class="fas fa-file-pdf service-icon"></i>
				<div class="service-title">Pdf books</div>
				<div class="service-description">Download or read from our extended choices of books in the pdf form.</div>
			</div>
			<div class="service">
				<i class="fas fa-microphone-alt service-icon"></i>
				<div class="service-title">Audio Books</div>
				<div class="service-description">Listen to your favorite books on-the-go with our extensive collection of audio books.</div>
			</div>
			<div class="service">
			<i style={{color:"#007CFA",fontSize:"60px",height:"85px"}} class="fa fa-exchange" aria-hidden="true"></i>
<br/>
				<div class="service-title">Trade books</div>
				<div class="service-description">you can exchange books that they have already read or that they no longer need.</div>
			</div>
		</div>

	</div>










    </div>
  )
}
export default OurServices;