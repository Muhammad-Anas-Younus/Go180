import React from 'react'
import "./Pricing.css"

const Pricing = () => {
	return (
		<div className="pricing_page">
			<div className="hero"> 
				<div className="overlay">
					<h1>Pricing</h1>
					<p>Ready to become the best version of yourself? Our programs are tailor-made for you based on your goals and preferences. Do you prefer to train in a group but with a focus on your own goals, or does personal training suit you better? At GO180 we have a tailor-made program for every objective, your preferences and budget.</p>
					<div className="svg">
						<svg className="arrow" width="8" height="29" viewBox="0 0 8 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: "translate3d(0px, 0%, 0px)" ,opacity: 1, transformOrigin: "0% 0%"}}><path d="M3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.97631 24.2692 0.659727 24.2692 0.464465 24.4645C0.269203 24.6597 0.269203 24.9763 0.464465 25.1716L3.64645 28.3536ZM3.5 -2.18557e-08L3.5 28L4.5 28L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="white"></path></svg>
						<svg className="circle" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="39.5" transform="matrix(0,1,-1,0,80,0)" stroke="white" data-svg-origin="0.5 0.5" style={{strokeDashoffset: 124.593, strokeDasharray: "249.186px, 259.186px", transformOrigin: "0px 0px"}}></circle></svg>
						<svg className="circle2" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="39.5" transform="matrix(0,1,-1,0,80,0)" stroke="#E9E9E9" data-svg-origin="0.5 0.5" style={{strokeDashoffset: 124.593, strokeDasharray: "249.186px, 259.186px", transformOrigin: "0px 0px"}}></circle></svg>
					</div>
				</div>
			</div>
			<div className="prices_container go2gether">
				<div className="text">
					<h1>GO2Gether</h1>
					<p>Werk in groepsverband aan jouw persoonlijke doelen. In dit programma train je met 6-8 personen in een groep. Aan het eind van het programma kun je het programma opzeggen, verlengen of doorboeken naar een ander programma.</p>
				</div>
				<div className="prices_prices_container">
					<div className="prices_prices">
						<h3>GO</h3>
						<ul>
							<li>Duration: 3 months</li>
							<li>Training at fixed times and days</li>
							<li>2 workouts a week</li>
							<li>24/7 access to your coach</li>
							<li>Can be canceled monthly after 3 month</li>
						</ul>
						<p>180,- p.m</p>
					</div>
										<div className="prices_prices">
						<h3>FLEX</h3>
						<ul>
							<li>Duration: 3 months</li>
							<li>26 sessions (strip card)</li>
							<li>Ability to flexibly schedule training</li>
							<li>24/7 access to your coach</li>
							<li>2 workouts a week</li>
						</ul>
						<p>195,- p.m</p>
					</div>

					<div className="prices_prices">
						<h3>LOYAL</h3>
						<ul>
							<li>Duration: 6 months</li>
							<li>Training at fixed times and days</li>
							<li>2 workouts a week</li>
							<li>Possible to make up for missed training sessions</li>
							<li>24/7 access to your coach</li>
							<li>Can be canceled monthly after 3 month</li>
						</ul>
						<p>165,- p.m</p>
					</div>
										<div className="prices_prices">
						<h3>LOYAL+</h3>
						<ul>
							<li>Duration: 12 months</li>
							<li>Training at fixed times and days</li>
							<li>2 workouts a week</li>
							<li>Possible to make up for missed training sessions</li>
							<li>24/7 access to your coach</li>
							<li>Can be canceled monthly after 12 month</li>
						</ul>
						<p>155,- p.m</p>
					</div>
				</div>
			</div>
			<div className="prices_container personal_training">
				<div className="text">
					<h1>Personal training</h1>
					<p>In our personal or duo programs you are trained alone or as a duo and your personal coach has full attention for you. At the end of the program you can cancel, extend or transfer the program to another program.</p>
				</div>
				<div className="prices_prices_container">
					<div className="prices_prices">
						<h3>Essentials</h3>
						<ul>
							<li>Duration: 3 months</li>
							<li>Training at fixed times and days</li>
							<li>2 workouts a week</li>
							<li>24/7 access to your coach</li>
							<li>Can be canceled monthly after 3 month</li>
						</ul>
						<p>customization p.m</p>
					</div>
										<div className="prices_prices">
						<h3>Fundamentals</h3>
						<ul>
							<li>Duration: 3 months</li>
							<li>26 sessions (strip card)</li>
							<li>Ability to flexibly schedule training</li>
							<li>24/7 access to your coach</li>
							<li>2 workouts a week</li>
						</ul>
						<p>customization p.m</p>
					</div>
				</div>
			</div>
			<div className="pageSix">
				<div className="img_container">
				<div className="overlay">
					<h3>Next</h3>
					<h1>Contact</h1>
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

export default Pricing