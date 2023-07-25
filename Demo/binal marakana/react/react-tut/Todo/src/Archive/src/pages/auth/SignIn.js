import React, { useState, useEffect } from 'react';
// import {useDispatch} from "react-redux";
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import TextField from '../../components/TextField';
import Banner from '../../layout/Banner';
import { Link, useHistory } from "react-router-dom";
import service from '../../common/service';
import Cookies from 'universal-cookie';
import { useDispatch } from 'react-redux';

let sub;
const SignIn = () => {
    const cookies = new Cookies();
    const apiServe = new service();
    const dispatch = useDispatch();
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [User, setUser] = useState({ projectUserId: '', password: '' });
    const clear = () => { setUser({ ...User, projectUserId: '', password: '' }) };
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUser({ ...User, [name]: value })
    };
    const submit = (e) => {
        e.preventDefault();
        apiServe.sendevent('paf|user|login', User)
        setIsLoading(true)
    };

    useEffect(() => {
        sub = apiServe.getevent().subscribe((response) => {
            console.log("============")
            if (!response.error) {
                switch (response.event) {
                    case "paf|user|login":
                        apiServe.sendevent("authentication", { token: response.data.token });
                        break;
                    case "authentication":
                        if (!response.error) {
                            cookies.set("PAFUser", response.data, { domain: process.env.REACT_APP_COOKIE_DOMAIN, path: "/" });
                            let particularUser = cookies.get("PAFUser")
                            if (particularUser) {

                                apiServe.sendevent('user|getProfile', {})
                            }
                        }
                        break;
                    case "user|getProfile":
                        if (!response.error) {
                            dispatch({ type: 'USER', payload: response.data })
                            setIsLoading(false)
                            history.push('/film-information')
                        } else if (response.error) {
                            if (response.code === "401") {
                                history.push("/");
                            }
                        }
                        break;
                    default:
                        break;
                }
            }
            else
                setIsLoading(false)
            setErrorMessage(response.data.error)
        });
        return () => {
            sub.unsubscribe();
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Header />
            <Banner />
            <div className="sd_container_720">
                <div className="sd_auth_content">
                    <div className="sd_auth_content_top">
                        <h2 className="sd_auth_content_form_title sd_textuppercase sd_textcenter">Sign In</h2>
                        <p className="sd_textcenter error_msg sd_textuppercase">{errorMessage}</p>
                    </div>
                    <form onSubmit={(e) => submit(e)}>
                        <div className="sd_form_group">
                            <TextField name='projectUserId' value={User.projectUserId} handleChange={(e) => handleChange(e)} label="PROJECT USER ID" type="text" />
                        </div>
                        <div className="sd_form_group">
                            <TextField name='password' value={User.password} handleChange={(e) => handleChange(e)} label="PASSWORD" type="password" />
                        </div>
                        <div className="sd_form_group sd_textright">
                            <Link to="/forgot-password" className="sd_p_cursor sd_textuppercase"> Forgot Password? </Link>
                        </div>
                        <div className="sd_form_group sd_textcenter auth_button_wrap">
                            <button type='button' className="border_btn" onClick={(e) => clear(e)}>Clear</button>
                            <button type='submit' className="border_btn" onClick={(e) => submit(e)}>Submit {isLoading && <span className="submit_loading"><img src={apiServe.loader} alt='' /></span>}</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default SignIn