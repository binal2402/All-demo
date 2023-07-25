import React, { useState, useEffect } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import TextField from '../../components/TextField'
import service from '../../common/service';
import Banner from '../../layout/Banner'
import { useHistory } from "react-router-dom";


let sub;

function ForgotPassword() {

    const apiServe = new service();
    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState('')
    const [User, setUser] = useState({ projectUserId: ''});
    const clear = () => { setUser({...User, projectUserId: ''}) };
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUser({...User, [name]: value})
    };
    const submit = (e) => { 
        e.preventDefault();
        apiServe.sendevent('paf|user|forgotPassword', User) 
    };
    useEffect(() => {
        sub = apiServe.getevent().subscribe((response) => {
            if (!response.error) {
                switch (response.event) {
                    case "paf|user|forgotPassword":
                        history.push('/')
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
                        <h2 className="sd_auth_content_form_title sd_textuppercase sd_textcenter">Forgot Password</h2>
                        <p className="sd_textcenter error_msg sd_textuppercase">{errorMessage}</p>
                    </div>
                    <form>
                        <div className="sd_form_group">
                            <TextField label="PROJECT USER ID" type="text" handleChange={handleChange} name="projectUserId"/>
                        </div>
                        <div className="sd_form_group sd_textcenter auth_button_wrap">
                            <button className="border_btn" onClick={clear}>Back</button>
                            <button type="submit" className="border_btn" onClick={(e) => submit(e)}>Reset Password</button>
                        </div>
                        <div className="message_success">
                            <p className="sd_textuppercase sd_textcenter">IF PROJECT USER ID HAS AN ACCOUNT, A PASSWORD RESET EMAIL WILL BE SENT.</p>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ForgotPassword