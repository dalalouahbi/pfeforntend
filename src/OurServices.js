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
				<i class="fa fa-truck service-icon"></i>
				<div class="service-title">delivery</div>
				<div class="service-description">Free dellivery within 24 hours, cash on delivery.</div>
			</div>
		</div>

	</div>










    </div>
  )
}
export default OurServices;