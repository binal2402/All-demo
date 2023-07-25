import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import Banner from '../../layout/Banner'
import { Link, useHistory } from "react-router-dom";
import EditFormIcon from '../../icons/EditFormIcon';
import ArrowIcon from '../../icons/ArrowIcon';
import UploaderIcon from '../../icons/UploaderIcon';
import service from '../../common/service';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './../../components/Loader'

let sub
function FilmInformation() {
    const apiServe = new service();
    const history = useHistory();
    const User_DATA = useSelector(e => e.User);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        sub = apiServe.getevent().subscribe((response) => {
            switch (response.event) {
                case "paf|project|getProjectInfo":
                    if (!response.error) {
                        dispatch({ type: 'FORM_DATA', payload: response.data })
                        apiServe.sendevent('paf|project|getDetail', {})

                    }
                    break;
                case "paf|project|getDetail":
                    if (!response.error) {
                        dispatch({ type: 'PROJECT_GET_DETAILS', payload: response.data })
                        setIsLoading(false)
                        history.push('/step1')
                    }
                    break;
                default:
                    break;
            }
        })
        return () => {
            sub.unsubscribe()
        }
        // eslint-disable-next-line
    }, [])
    const onPAFClick = () => {
        apiServe.sendevent('paf|project|getProjectInfo', { projectUserId: User_DATA.projectUserId })
        setIsLoading(true)
    }
    return (
        <>
            <div>
                <Header />
                <Banner />
                <div className="sd_container">
                    <div className="sd_auth_content">
                        <div className="sd_information_title">
                            <h2 className="sd_information_title sd_textcenter">My Film or Project Information</h2>
                        </div>
                        <div className="sd_flex sd_flexwrap sd_justcenter sd_aligncenter">
                            <Link onClick={() => onPAFClick()} className="sd_flex sd_aligncenter post_acceptance_link">
                                <EditFormIcon />
                                <p>Post Acceptance Form</p>
                                <span className="arrow_icon">
                                    <ArrowIcon />
                                </span>
                            </Link>
                            <Link to="/film-information" className="sd_flex sd_aligncenter post_acceptance_link">
                                <UploaderIcon />
                                <p>Post Acceptance Form</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

            {isLoading && <Loader />}
        </>
    )
}
export default FilmInformation