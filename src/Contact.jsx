import React, {useState, useRef} from 'react'
import "./Contact.css"

const Contact = () => {
	const [location, setLocation] = useState("leeuwarden")
	const leeuwarden = useRef()
	const groningen = useRef()

	const forLeeuwarden = () => {
		setLocation("leeuwarden")
		groningen.current.classList.remove("active")
		leeuwarden.current.classList.add("active")
	}

	const forGroningen = () => {
		setLocation("groningen")
		groningen.current.classList.add("active")
		leeuwarden.current.classList.remove("active")	
	}

	return (
		<div className="contact_page">
			<div className="left">
				<div className="locations">
					<h1 onClick={() => forLeeuwarden()} ref={leeuwarden} className="leeuwarden active">
						Leeuwarden
					</h1>
					<h1 onClick={() => forGroningen()} ref={groningen} className="groningen">
						Groningen
					</h1>
				</div>	
				<div className="details">
					<p className="address">
					{location==="leeuwarden" ? "Hobbemastraat 19 8932 Kz Leeuwarden"
					: "Winschoterdiep 50 9723 AB Groningen"
					}
					</p>
					<p className="email">{location==="leeuwarden"? "leewarden@go180.nl" : "groningen@go180.nl"}</p>
					<p className="phone">{location==="leeuwarden" ? "058 203 8080" : "050 211 0600"}</p>
				</div>
				<ul className="timings">
					<li>Monday: 07.00 - 21.00</li>
					<li>Tuesday: 07.00 - 21.00</li>
					<li>Wednesday: 07.00 - 21.00</li>
					<li>Thursday: 07.00 - 21.00</li>
					<li>Friday: 07.00 - 21.00</li>
					<li>Saturday: 07.00 - 21.00</li>
					<li>Sunday: Closed</li>
				</ul>
			</div>
			<form className="right"> 
				<input type="text" placeholder="Name"/>
				<input type="text" placeholder="Surname"/>
				<input type="email" placeholder="Email"/>
				<input type="text" placeholder="Phone number"/>
				<div className="topic_and_location">
					<div className="topic">
						<label htmlFor="topic">Select Topic *</label>
						<select id="topic">
							<option value="personalIntake">Personal Intake</option>
							<option value="directContact">Direct contact with a coach</option>
							<option value="moreInfo">More information</option>
						</select>
					</div>
					<div className="location">
						<label htmlFor="location">Location *</label>
						<select id="location">
							<option value="leeuwarden">Leeuwarden</option>
							<option value="groningen">Groningen</option>
						</select>
					</div>
				</div>
				<div className="message">
					<label htmlFor="message">What can GO180 help you with?</label>
					<textarea name="message" id="message" cols="30" rows="20"></textarea>
				</div>
				<button>Send</button>
			</form>
		</div>
	)
}

export default Contact