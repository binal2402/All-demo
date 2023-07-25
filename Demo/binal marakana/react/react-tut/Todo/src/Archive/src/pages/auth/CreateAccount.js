import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import TextField from '../../components/TextField';
import Banner from '../../layout/Banner';
import { Link } from "react-router-dom";
import service from '../../common/service';
import Cookies from 'universal-cookie';

let sub;
const CreateAccount = () => {
    const cookies = new Cookies();
    const apiServe = new service();
    const dispatch = useDispatch();
    const history = useHistory();
    const { projectId } = useParams();
    const [conPassword, setConPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const [User, setUser] = useState({ projectUserId: '', password: '', referralCode: '' });
    const clear = () => { setUser({ ...User, password: '', conPassword: '' }) };
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        if (name === 'conPassword') setConPassword(value)
        else setUser({ ...User, [name]: value })
    };
    const submit = (e) => {
        e.preventDefault();
        apiServe.sendevent('paf|user|register', User)

    };
    useEffect(() => {
        apiServe.sendevent("user|checkReferral", { referralCode: projectId });
        sub = apiServe.getevent().subscribe((response) => {
            console.log("============")
            if (!response.error) {
                switch (response.event) {
                    case "paf|user|register":
                        if (!response.error)
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
                    case "user|checkReferral":
                        if (!response.data.isExpired)
                            setUser({ ...User, projectUserId: response.data.projectUserId, referralCode: projectId })
                        else
                            setErrorMessage('Code is expired.')
                        break;
                    case "user|getProfile":
                        if (!response.error) {
                            dispatch({ type: 'USER', payload: response.data })
                            history.push('/film-information')
                        }
                        else if (response.error) {
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
                        <h2 className="sd_auth_content_form_title sd_textuppercase sd_textcenter">Create Your Account</h2>
                        <p className="sd_textcenter error_msg sd_textuppercase">{errorMessage}</p>
                    </div>
                    <form onSubmit={(e) => submit(e)}>
                        <div className="sd_form_group">
                            <TextField disabled={true} name='projectUserId' value={User.projectUserId} label="PROJECT USER ID" type="text" />
                        </div>
                        <div className="sd_form_group">
                            <TextField name='password' value={User.password} label="CREATE PASSWORD" handleChange={handleChange} type="password" />
                        </div>
                        <div className="sd_form_group">
                            <TextField name='conPassword' value={conPassword} label="CONFIRM PASSWORD" handleChange={handleChange} type="password" />
                        </div>
                        <div className="sd_form_group sd_textright">
                            <Link className="sd_p_cursor sd_textuppercase" to="/forgot-password"> Forgot Password? </Link>
                        </div>
                        <div className="sd_form_group sd_textcenter auth_button_wrap">
                            <button className="border_btn" onClick={clear}>Clear</button>
                            <button type='submit' className="border_btn" onClick={(e) => submit(e)}>Submit</button>
                            {/* <img src={SERVICE.loader} /> */}
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default CreateAccount