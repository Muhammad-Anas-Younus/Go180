import React from 'react'
import "./Join.css"

const Join = () => {
	return (
		<div className="join_page">
			<div className="left">
				<h1>Join Now</h1>
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

export default Join