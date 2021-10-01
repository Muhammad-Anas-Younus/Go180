import React, {useState, useRef, useEffect} from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import "./WeAre180.css"

const WeAre180 = () => {
	
	const img = useRef()
	const h2 = useRef()
	const p = useRef()
	const container = useRef()

	const slider = useRef()

	const coaches = [
	{
		img: "https://go180.nl/app/uploads/2021/02/slide-3-760x990.jpg",
		name: "Hielke van der Leic",
		occupation: "Owner and founder, coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/slide-6-760x990.jpg",
		name: "Martijn Kromkamp",
		occupation: "Head Coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/header-koen-760x990.jpg",
		name: "Koen Manson",
		occupation: "Coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/03/Go180-Leeuwarden-128web-760x990.jpeg",
		name: "Bas Shops",
		occupation: "Clubmanager, coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/Go180-Leeuwarden-50web-760x990.jpg",
		name: "Janine kooistra",
		occupation: "Coach"		
	},
	{
		img: "https://go180.nl/app/uploads/2021/02/slide-2-760x990.jpg",
		name: "Jereon Dijkstra",
		occupation: "Owner and founder, coach"		
	}
	]

	const nutrition = () => {
		img.current.src = "https://go180.nl/app/uploads/2021/06/GO180-receptenboek-HR45.jpg"
		h2.current.innerHTML = "Nutrition"
		p.current.innerHTML = "Teaching a healthy and balanced diet is extremely important. We help you with that within your program. We determine your health goals together and adjust your diet accordingly. We put together a nutrition plan for you with which you work towards your desired result."
	}	

	const mindset = () => {
		
		img.current.src = "https://go180.nl/app/uploads/2021/05/GO180-Groningen_20-790x860.jpg"
		h2.current.innerHTML = "Mindset"
		p.current.innerHTML = "Behavior can get in the way of achieving your goals. It is not without reason that coaching is the basis of all our programs. A strong and positive mindset is the basis for a healthy and vital life. Improving this is central to our approach. <br/> Our coaching is aimed at making you aware of old habits and changing them step by step. That is not always easy, but certainly not impossible. We help you apply new habits in everyday life. You will see: this makes your goals much faster within reach."
	}	

	const coaching = () => {
		img.current.src = "https://go180.nl/app/uploads/2021/02/Go180-Leeuwarden-74web-790x860.jpg"
		h2.current.innerHTML = "Personal Training"
		p.current.innerHTML = "We provide a personal training program, based on the data we collect during the intake. This program is completely based on the most effective methods, scientifically substantiated and based on our many years of experience. Our training sessions are always designed around you, your starting point and your goal."
	}	

	const recovery = () => {
		img.current.src = "https://go180.nl/app/uploads/2021/03/GO180-Groningen-LR-98-790x860.jpg"
		h2.current.innerHTML = "recovery"
		p.current.innerHTML = "Whatever your personal goal, your progress and results depend on your recovery. With the right recovery you get more value from the training you have done and you prevent injuries. Progress in your health, performance and vitality depends on the balance between load and recovery. We plan training in advance, but we also always take into account all factors that promote recovery. Think of nutrition, sleep, lifestyle and stress."
	}	


	return (
		<div className="we180">
			<div className="hero">
				<div className="overlay">
					<h1>We Are 180</h1>
					<p>We help you build a healthy lifestyle.</p>	
					<div className="svg">
						<svg className="arrow" width="8" height="29" viewBox="0 0 8 29" fill="none" xmlns="http://www.w3.org/2000/svg" style={{transform: "translate3d(0px, 0%, 0px)" ,opacity: 1, transformOrigin: "0% 0%"}}><path d="M3.64645 28.3536C3.84171 28.5488 4.15829 28.5488 4.35355 28.3536L7.53553 25.1716C7.7308 24.9763 7.7308 24.6597 7.53553 24.4645C7.34027 24.2692 7.02369 24.2692 6.82843 24.4645L4 27.2929L1.17157 24.4645C0.97631 24.2692 0.659727 24.2692 0.464465 24.4645C0.269203 24.6597 0.269203 24.9763 0.464465 25.1716L3.64645 28.3536ZM3.5 -2.18557e-08L3.5 28L4.5 28L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="white"></path></svg>
						<svg className="circle" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="39.5" transform="matrix(0,1,-1,0,80,0)" stroke="white" data-svg-origin="0.5 0.5" style={{strokeDashoffset: 124.593, strokeDasharray: "249.186px, 259.186px", transformOrigin: "0px 0px"}}></circle></svg>
						<svg className="circle2" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="39.5" transform="matrix(0,1,-1,0,80,0)" stroke="#E9E9E9" data-svg-origin="0.5 0.5" style={{strokeDashoffset: 124.593, strokeDasharray: "249.186px, 259.186px", transformOrigin: "0px 0px"}}></circle></svg>
					</div>
				</div>
			</div>
			<div className="secPage">
				<div className="left">
					<img className="first" src="https://go180.nl/app/uploads/2021/05/GO180-Groningen_36.jpg" alt=""/>
					<img className="second" src="https://go180.nl/app/uploads/2021/05/GO180-Groningen_39.jpg" alt=""/>
				</div>
				<div className="right">
					<p>Our personal coaches are happy to help you build your future. From our high-quality clubs in Groningen and Leeuwarden, we offer you the personal guidance you need to achieve your goal. With the right diet, exercise and lifestyle advice, more is possible than you can imagine. Start working towards your goal today. Build your tomorrow!</p>
				</div>
			</div>
			<div className="pageThree">
				<div className="left">
					<h1>Our mission and vision</h1>
					<p>We want to help you get the most out of life. We do this by working with great attention and according to proven techniques, by listening carefully and by continuously improving ourselves. The dedication you give us, you get back from us. We will work with you to achieve your personal goals and desired results. In this way we help you to live life with more energy and self-confidenc</p>
				</div>
				<ul className="right">
					<li>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="2" fill="#E1E1E1"></circle><path d="M21 11C21 5.47715 16.5228 1 11 1" stroke="#E1E1E1"></path><path d="M1 11C1 16.5228 5.47715 21 11 21" stroke="#E1E1E1"></path></svg>
						<p>Specialized trainers and coaches</p>
					</li>
					<li>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="2" fill="#E1E1E1"></circle><path d="M21 11C21 5.47715 16.5228 1 11 1" stroke="#E1E1E1"></path><path d="M1 11C1 16.5228 5.47715 21 11 21" stroke="#E1E1E1"></path></svg>
						<p>Lots of personal attention</p>
					</li>
					<li>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="2" fill="#E1E1E1"></circle><path d="M21 11C21 5.47715 16.5228 1 11 1" stroke="#E1E1E1"></path><path d="M1 11C1 16.5228 5.47715 21 11 21" stroke="#E1E1E1"></path></svg>
						<p>Training tailored to your level and goal</p>
					</li>
					<li>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="2" fill="#E1E1E1"></circle><path d="M21 11C21 5.47715 16.5228 1 11 1" stroke="#E1E1E1"></path><path d="M1 11C1 16.5228 5.47715 21 11 21" stroke="#E1E1E1"></path></svg>
						<p>Healthy and Balanced Nutrition Programs</p>
					</li>
					<li>
						<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="2" fill="#E1E1E1"></circle><path d="M21 11C21 5.47715 16.5228 1 11 1" stroke="#E1E1E1"></path><path d="M1 11C1 16.5228 5.47715 21 11 21" stroke="#E1E1E1"></path></svg>
						<p>Coaching on mindset and behavior</p>
					</li>
				</ul>
			</div>
			<div className="pageFour">
				<h1>GO180 philosophy</h1>
				<div className="fourButtons">
					<div onClick={() => mindset()} className="btn active"></div>
					<div onClick={() => nutrition()} className="btn"></div>
					<div onClick={() => coaching()} className="btn"></div>
					<div onClick={() => recovery()} className="btn"></div>
				</div>
				<span></span>
				<div ref={container} className="content">
					<div className="left">
						<img ref={img} src="https://go180.nl/app/uploads/2021/05/GO180-Groningen_20-790x860.jpg" alt=""/>
					</div>
					<div className="right">
						<h2 ref={h2}>Mindset</h2>
						<p ref={p}>Behavior can get in the way of achieving your goals. It is not without reason that coaching is the basis of all our programs. A strong and positive mindset is the basis for a healthy and vital life. Improving this is central to our approach. 
						<br/>
						Our coaching is aimed at making you aware of old habits and changing them step by step. That is not always easy, but certainly not impossible. We help you apply new habits in everyday life. You will see: this makes your goals much faster within reach. 
						</p>	
					</div>
				</div>
			</div>
			<div className="pageFive">
				<h1>Coaches</h1>
				<ScrollContainer ref={slider} className="coaches" ref={slider}>
					{coaches.map(coach => (
						<div className="item">
							<div style={{backgroundImage: `url(${coach.img})`}} className="img"></div>
							<div className="info">
								<h2>{coach.name}</h2>
								<p>{coach.occupation}</p>
							</div>
						</div>
					))}
				</ScrollContainer>
			</div>
			<div className="pageSix">
				<div className="img_container">
				<div className="overlay">
					<h3>Next</h3>
					<h1>Programs</h1>
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

export default WeAre180