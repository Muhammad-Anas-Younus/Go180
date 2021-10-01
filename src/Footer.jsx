import React from 'react'
import Logo from "./assets/logo.svg"

function Footer() {
	return (
		<div className="footer">
			<div className="left">
				<img src={Logo} alt=""/>
			</div>
			<ul className="middle">
				<li>
					<a href="#">
						<img width="30rem" src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"/>
					</a>
				</li>
				<li>
					<a href="#">
						<img width="30rem" src="https://img.icons8.com/material-outlined/50/ffffff/instagram-new.png"/>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="https://img.icons8.com/ios-glyphs/24/ffffff/twitter.png"/>
					</a>
				</li>
				<li>
					<a href="#">
						<img src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"/>
					</a>
				</li>
			</ul>
			<div className="right">
				<a href="#">Disclaimer |</a>
				<a href="#">Privacy | </a>
				<a href="#">Contact</a>
			</div>
		</div>
	)
}

export default Footer