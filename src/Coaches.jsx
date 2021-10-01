import React from 'react'
import "./Coaches.css"

const Coaches = () => {


	const coaches_left = [
	{
		img: "https://go180.nl/app/uploads/2021/03/Go180-Leeuwarden-128web.jpeg",
		name: "Bas Winkels",
		occupation: "Clubmanager, coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/slide-6.jpg",
		name: "Martijn Kromkamp",
		occupation: "Head Coach"		
	}, 
	{
		img: "https://go180.nl/app/uploads/2021/05/GO180-Groningen_2.jpg",
		name: "Darnell Bakker",
		occupation: "Coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/slide-2.jpg",
		name: "Jeroen Dijkstra",
		occupation: "Owner and founder, coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/header-koen.jpg",
		name: "Koen Manson",
		occupation: "Coach"		
	}
	]

	const coaches_right = [
	{
		img: "https://go180.nl/app/uploads/2021/03/GO180-Groningen-LR-12.jpg",
		name: "Wouter Wassing",
		occupation: "Clubmanager, coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/03/GO180-Groningen-LR.jpg",
		name: "Ferry Stollenga",
		occupation: "Coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/Go180-Leeuwarden-50web-760x990.jpg",
		name: "Janine kooistra",
		occupation: "Coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/slide-3.jpg",
		name: "ielke van der Leic",
		occupation: "Owner and founder, coach"		
	}
	]

	const coaches = [...coaches_left, ...coaches_right]

	return (
		<div className="coaches_page">
			<div className="text">
				<h1>Coaches</h1>
				<p>Developing together. Growing together and achieving goals together. Our coaches are ready for you!</p>
			</div>
			<div className="coaches_container">
				<div className="left">
					{coaches_left.map(coach => (
					<div className="coach">
						<div className="img" style={{backgroundImage: `url(${coach.img})`}}></div>	
						<h2>{coach.name}</h2>
						<p>{coach.occupation}</p>
					</div>
					))}
				</div>
				<div className="right">
					{coaches_right.map(coach => (
						<div className="coach">
							<div className="img" style={{backgroundImage: `url(${coach.img})`}}></div>	
							<h2>{coach.name}</h2>
							<p>{coach.occupation}</p>
					</div>
					))}
				</div>
			</div>
			<div className="coaches_container_mob">
				{coaches.map(coach => (
					<div className="coach">
						<div className="img" style={{backgroundImage: `url(${coach.img})`}}></div>	
						<h2>{coach.name}</h2>
						<p>{coach.occupation}</p>
					</div>
				))}
			</div>
			<div className="pageSix">
				<div className="img_container">
				<div className="overlay">
					<h3>Next</h3>
					<h1>Clubs</h1>
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

export default Coaches