import React, { Component } from "react";
import { Link } from "react-router-dom";



class NotFound extends Component {
	render() {
		return (
			<div className="notfound">
				<div className="sd_header_section sd_relative">
					<div class="sd_not_found_header">
						<div class="sd_inner_container">
							<h1 class="uppercase">404</h1>
							<div class="sd_not_found_header_desc">
								<p>We couldn’t find this page!</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sundance_container sd_inner_container">
					<div className="nofound_content">
						<p>You can <Link to="/"> CLICK HERE </Link> to go to the registration home page.</p>
					</div>
				</div>       

				
			</div>
		);
	}
}

export default NotFound;