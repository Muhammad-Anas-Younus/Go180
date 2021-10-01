import React, {useRef} from 'react'
import {Link} from "react-router-dom"
import Logo from "./assets/logo.svg"

export default function Header() {

	const menuIcon = useRef()
	const mobMenu = useRef()

	return (
		<div className="header">
			<div className="left">
				<Link to="/">
					<img src={Logo} alt=""/>	
				</Link>
				
			</div>
			<div className="right">
				<ul>
					<li>
						<Link to="/we-are-180">We are GO180</Link>
					</li>
					<li>
						<Link to="/programs">Programs</Link>
					</li>
					<li>
						<Link to="/coaches">Coaches</Link>
					</li>
					<li>
						<Link to="/clubs">Clubs</Link>
					</li>
{/*					<li>
						<a href="#">Stories</a>
					</li>*/}
					<li>
						<Link to="/pricing">Pricing</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					<li>
						<button>
							<Link to="/join">Join now</Link>
						</button>
					</li>
				</ul>
				<div onClick={() => {
					menuIcon.current.classList.toggle("-menu-open")
					mobMenu.current.classList.toggle("open")
				}} ref={menuIcon} class="button">
				  <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
    				<g>
      					<line x1="0" y1="17" x2="48" y2="17" stroke-width="1" />
      					<line x1="0" y1="31" x2="48" y2="31" stroke-width="1" />
    				</g>
    
  					<g>
      					<line x1="0" y1="24" x2="48" y2="24" stroke-width="1" />
      					<line x1="0" y1="24" x2="48" y2="24" stroke-width="1" />
    				</g>
  					</svg>
				</div>
				<div ref={mobMenu} className="mobMenu">
					<ul>
						<li>
						<Link to="/we-are-180">We are GO180</Link>
					</li>
					<li>
						<Link to="/programs">Programs</Link>
					</li>
					<li>
						<Link to="/coaches">Coaches</Link>
					</li>
					<li>
						<Link to="/clubs">Clubs</Link>
					</li>
{/*					<li>
						<a href="#">Stories</a>
					</li>*/}
					<li>
						<Link to="/pricing">Pricing</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
					</ul>
				</div>
			</div>
		</div>
	)
}