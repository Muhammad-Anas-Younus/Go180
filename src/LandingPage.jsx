import React, {useState, useEffect, useRef} from 'react'
import {useIntersectionObserver} from "react-use"
import {Link} from "react-router-dom"
import {gsap} from "gsap"

import { ScrollTrigger } from "gsap/ScrollTrigger"
import source from "./assets/header.mp4"

export default function LandingPage() {
	 gsap.registerPlugin(ScrollTrigger);
	const trigger = useRef()

	return (
		<div className="landingPage">
			<div className="hero">
				<div className="overlay">
					<video autoPlay="autoplay" muted loop="loop">
						<source src={source}></source>
					</video>
					<div className="text">
						<h1>Build your tomorrow</h1>
						<p> GO180 we do everything we can to help you become your best self for the rest of your life.</p>
						<button>
							<Link to="/join">Start Today</Link>
						</button>
					</div>
				</div>
			</div>
			<div ref={trigger} className="secondPage">
				<div className="second_overlay">
					<div className="text">
						<h1>Programs</h1>
						<p>Our programs are specially designed to help you lead a healthy and fit life.</p>
						<button>
							<Link to="/programs">Our Programs</Link>
						</button>
					</div>
				</div>
			</div>
			<div className="thirdPage">
				<div className="third_overlay">
					<div className="text">
						<h1>Coaches</h1>
						<p>Whatever your goal, our experienced coaches not only help you on your way, but are there for you throughout the entire process.</p>
						<button>
							<Link to="/coaches">Coaches</Link>
						</button>
					</div>
				</div>
			</div>
			<div className="fourthPage">
				<div className="fourth_overlay">
					<div className="text">
						<h1>GO180 Clubs</h1>
						<p>In Leeuwarden and Groningen you will find our private clubs, each equipped with all the comforts to inspire and motivate you.</p>
						<button>
							<Link to="/clubs">Our Clubs</Link>
						</button>
					</div>
				</div>
			</div>
{/*			<div className="fifthPage">
				<div className="fifth_overlay">
					<div className="text">
						<h1>Stories</h1>
						<p>Learn the stories of the people who achieved their goals thanks to GO180 and how they did it.</p>
						<button>
							<a href="#">Read the stories</a>
						</button>
					</div>
				</div>
			</div>*/}
			<div className="sixthPage">
				<div className="sixth_overlay">
					<div className="text">
						<h1>GO180?</h1>
						<p>What's it all about for you? Contact us if you want to change your lifestyle in a responsible and active way.</p>
						<button>
							<Link to="/join">Join now</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}