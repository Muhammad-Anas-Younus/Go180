import React from 'react'
import "./Clubs.css"

const Clubs = () => {
	return (
		<div className="clubs_page">
			<div className="text">
				<h1>Clubs</h1>
				<p>Our clubs are private, high-end and everything is there to optimally help you with your goals.</p>
			</div>
			<div className="container groningen">
				<div className="left">
					<h2>Groningen</h2>
					<p>At our club in Groningen you get every opportunity to train and work on your goals together with your coach. But also to relax and recover.</p>
				</div>
				<div className="right">
					<img src="https://go180.nl/app/uploads/2021/03/GO180-Groningen-LR-129-1485x990.jpg" alt=""/>
				</div>
			</div>
			<div className="container leeuwarden">
				<div className="left">
					<h2>Leeuwarden</h2>
					<p>In our club in Leeuwarden you work on your personal goals that you have set up with your coach. Our club is therefore a place for connections, personal growth and development.</p>
				</div>
				<div className="right">
					<img src="https://go180.nl/app/uploads/2021/02/Go180-Leeuwarden-30web-1485x990.jpg" alt=""/>
				</div>
			</div>
			<div className="pageSix">
				<div className="img_container">
				<div className="overlay">
					<h3>Next</h3>
					<h1>Pricing</h1>
					<div className="svg">
						<svg className="arrow" width="8" height="29" viewBox="0 0 8 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: "translate3d(0px, 0%, 0px)" ,opacity: 1, transformOrigin: "0% 0%"}}><path d="M3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.97631 24.2692 0.659727 24.2692 0.464465 24.4645C0.269203 24.6597 0.269203 24.9763 0.464465 25.1716L3.64645 28.3536ZM3.5 -2.18557e-08L3.5 28L4.5 28L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="white"></path></svg>
						<svg className="circle" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="39.5" transform="matrix(0,1,-1,0,80,0)" stroke="white" data-svg-origin="0.5 0.5" style={{strokeDashoffset: 124.593, strokeDasharray: "249.186px, 259.186px", transformOrigin: "0px 0px"}}></circle></svg>
						<svg className="circle2" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="39.5" transform="matrix(0,1,-1,0,80,0)" stroke="#E9E9E9" data-svg-origin="0.5 0.5" style={{strokeDashoffset: 124.593, strokeDasharray: "249.186px, 259.186px", transformOrigin: "0px 0px"}}></circle></svg>
					</div>	
				</div>
				</div>
			</div>
		</div>
	)
}

export default Clubs