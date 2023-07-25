import React, { useEffect, useState } from "react";
import Routers from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import history from "./history";
import Idle from 'react-idle'
import Cookies from "universal-cookie";
import service from "./common/service";
import { useDispatch, useSelector } from "react-redux";

const cookies = new Cookies();
let User = cookies.get("PAFUser");
let sub;

const App = () => {
    const [apiServe, setApiServe] = useState()
    const dispatch = useDispatch();
    const User_DATA = useSelector(e => e.User);
    useEffect(() => {
        setApiServe(new service())
    }, [])

    useEffect(() => {
        if (apiServe) {
            apiServe.connect((flag) => {
                if (flag) {
                    console.log('CONNECTED...');
                    let particularUser = cookies.get("PAFUser")
                    if (particularUser) {
                        apiServe.sendevent("authentication", {
                            token: particularUser.token
                        });
                    }
                }
            });
        }
    }, [apiServe])

    useEffect(() => {
        if (apiServe) {
            sub = apiServe.getevent().subscribe((response) => {
                switch (response.event) {
                    case "authentication":
                        if (!response.error) {
                            console.log('AUTHENTICATED...');
                            cookies.set("PAFUser", response.data, { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });
                            let particularUser = cookies.get("PAFUser")
                            if (particularUser) {
                                apiServe.sendevent('user|getProfile', {})
                            }

                        }
                        break;
                    case "user|getProfile":
                        if (!response.error) {
                            console.log('GET PROFILE...');
                            dispatch({ type: 'USER', payload: response.data })
                            apiServe.sendevent('paf|project|getProjectInfo', { projectUserId: User_DATA.projectUserId })
                        } else if (response.error) {
                            if (response.code === "401") {
                                logout()
                                history.push("/");
                            }
                        }
                        break;
                    case "paf|project|getProjectInfo":
                        if (!response.error) {
                            dispatch({ type: 'FORM_DATA', payload: response.data })
                            apiServe.sendevent('paf|project|getDetail', {})

                        }
                        break;
                    case "paf|project|getDetail":
                        if (!response.error) {
                            dispatch({ type: 'PROJECT_GET_DETAILS', payload: response.data })
                            history.push('/step1')
                        }
                        break;
                    default:
                        break;
                }
            })
        }
        return () => {
            if (sub) sub.unsubscribe()
        }
    }, [apiServe])

    const logout = () => {
        if (User && User.token) {
            // eslint-disable-next-line
            document.cookie = "PAFUser" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            cookies.remove("PAFUser", { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });

            // eslint-disable-next-line
            document.cookie = "CartCount" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            cookies.remove("CartCount", { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });
            let Zone = localStorage.getItem('TIMEZONE')
            localStorage.clear();
            if (Zone) localStorage.setItem('TIMEZONE', Zone)
            window.open(process.env.REACT_APP_HOME_URL + 'sign-in', "_self")
        }
    };

    return (
        <Router>
            <Idle timeout={process.env.REACT_APP_IDLE_LOGOUT_TIME} render={({ idle }) => <h1>{idle ? logout() : ""}</h1>} />
            <Routers history={history} />
        </Router>
    );
}

export default App;

