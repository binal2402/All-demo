import React, {useState, useEffect} from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import TextField from '../../components/TextField'
import Banner from '../../layout/Banner'
import service from '../../common/service';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

let sub;

function ResetPassword() {
    const apiServe = new service();
    const selector = useSelector(state => state.User);
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('')
    const [User, setUser] = useState({ projectUserId: selector?.projectUserId, createPassword: '', confirmPassword: ''});
    const clear = () => { setUser({...User, projectUserId: '',createPassword: '', confirmPassword: ''}) };
    
    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setUser({...User, [name]: value})
    };
    const submit = (e) => { 
        e.preventDefault();
        if(User.createPassword === User.confirmPassword){
            apiServe.sendevent('paf|user|resetPassword', {verification: '12345', password: User.confirmPassword}) 
        }
    };
    useEffect(() => {
        sub = apiServe.getevent().subscribe((response) => {
            console.log("not error")
            if (!response.error) {
                switch (response.event) {
                    case "paf|user|resetPassword":
                        history.push('/')
                        break;
                    default:
                        break;
                }
            }
            else {
                console.log('error', response.data.error)
                setErrorMessage(response.data.error)
            }

        });
        return () => {
            sub.unsubscribe();
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <Header />
            <Banner />
            <div className="sd_container_720">
                <div className="sd_auth_content">
                    <div className="sd_auth_content_top">
                        <h2 className="sd_auth_content_form_title sd_textuppercase sd_textcenter">Reset Your password</h2>
                        <p className="sd_textcenter error_msg sd_textuppercase">{errorMessage}</p>
                    </div>
                    <form>
                        <div className="sd_form_group">
                            <TextField label="PROJECT USER ID" name="projectUserId" type="text" value={User.projectUserId} handleChange={handleChange} disabled/>
                        </div>
                        <div className="sd_form_group">
                            <TextField label="CREATE PASSWORD" name="createPassword" type="password" handleChange={handleChange} />
                        </div>
                        <div className="sd_form_group">
                            <TextField label="CONFIRM PASSWORD" name="confirmPassword" type="password" handleChange={handleChange} />
                        </div>

                        <div className="sd_form_group sd_textcenter auth_button_wrap">
                            <button className="border_btn" onClick={clear}>Clear</button>
                            <button type="submit" className="border_btn" onClick={(e) => submit(e)}>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ResetPassword