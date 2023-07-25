import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import Cookies from "universal-cookie";

const cookies = new Cookies();
function Header(props) {
	const dispatch = useDispatch();
	const history = useHistory();
	const user = useSelector((state) => state.User);
	const logout = (e) => {
		dispatch({type: 'USER', payload: {}})
		cookies.remove("PAFUser");
		history.push("/");
	};

	return (
		<div className="sd_header_section header_slider_section sd_relative">
			<header>
				<div className="sd_large_container">
					<div className="sd_header_sec_wpr">
						<div className="sd_header_wpr sd_flex">
						{/* Logo */}
						<div className="sd_header_logo">
							<Link to="/" className="sd_desktop_logo">
								<img src="/images/logo.svg" alt="logo" />
							</Link>

							<Link to="/" className="sd_mobile_logo sd_hidden">
								<img
								src="/images/header_mobile-logo.svg"
								alt="Sundance Film Festival 2021"
								title="Sundance Film Festival 2021"
								/>
							</Link>
						</div>
						{
							user && Object.keys(user).length > 0 && 
							<div className="sd_user_profile_user sd_flex sd_aligncenter">
								<Link className="sd_user_profile sd_flex sd_aligncenter" >
									<div className="sd_user_profile_image">
										<img src="/images/user.svg" alt="User name" title="User name" />
									</div>
									<p title="kevin Italiya"> Hi, {user?.fname} </p>
								</Link>
								<div className="sd_user_profile_menus sd_user_profile_m_menu sd_hidden">
									<ul>
										<li><Link onClick={() => logout()}>Sign out</Link></li>
									</ul>
								</div>
							</div>
						}
					</div>
					</div>
				</div>
        	</header>
		</div>
	)
}

export default Header