import React from 'react';
// Layouts
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// PAF Header
import FormHeader from "../../PAF/Components/FormHeader";
import FormFooter from "../../PAF/Components/FormFooter";
import TextField from "../../components/TextField";
import Dropdown from "../../components/Dropdown";
import FullName from './FullName';
import MainContactForm from './MainContactForm';

export default function Step4() {
    return (
        <div>
            <Header />
            <FormHeader />
            <div className="container form_inner step_common">
                <div className="conatct_form">
                    <div className="form_inner_title">
                        <h3 className="sd_flex sd_aligncenter">Contacts</h3>
                        <h5>Main Contact</h5>
                    </div>
                    <div className="conatct_info_form_inner">
                        <div className="contact_desc">
                            <p>Individual from your film/project team who works with the Artists Relations Dept. regarding the logistics of attending the Festival. </p>
                            <p>One who may:</p>
                            <ul>
                                <li> Receive and respond to frequent emails from us.</li>
                                <li> Share Festival information with your team.</li>
                                <li> Receive event invitations from us and our official partners/sponsors and distribute to appropriate team members.</li>
                                <li> Make decisions regarding your film/project’s benefits; screening tickets and credentials.</li>
                                <li> RSVP for events.</li>
                                <li> Attend Festival, check in for orientation, screening ticket + credential distribution, and act as point person during premiere screening.</li>
                            </ul>
                            <p>Point of Contact information will not be published, it's for internal use and will be shared with our official partners and sponsors.</p>
                        </div>
                        <div className="conatct_info_form_inner_top">
                            <div className="sd_container_990">
                                <MainContactForm />
                            </div>
                        </div>
                        <div className="form_inner_title">
                            <h5 className="mt-35">Main Publicity Contact</h5>
                        </div>
                        <div className="contact_desc">
                            <p>Individual from your publicity team or an external PR agency hired to publicize your film/project at the Festival, who will regularly communicate with the Press Office regarding the publicity of your film/project pre-Festival, at Festival, and post-Festival.  </p>
                            <p>One who may:</p>
                            <ul>
                                <li> Receive and respond to frequent emails from your Festival Publicist, especially during the peak time leading up to the Sundance Film Festival program announcement.</li>
                                <li> Respond to interview requests for your film/project.</li>
                            </ul>
                            <p>Main Publicity Contact information will not be published, is for internal use and will be shared with our official partners and sponsors.</p>
                        </div>
                        <div className="conatct_info_form_inner_top">
                            <div className="sd_container_990">
                                <MainContactForm />
                            </div>
                        </div>
                        <div className="form_inner_title">
                            <h5 className="mt-35">DCP/ Print or Tech Contact</h5>
                            <p>Individual who will ship your DCP/Print or Exhibition. We ask that they be available for regular communication with our Print Shipping Coordinator, provide tracking information for inbound shipment and details for return shipment. </p>
                        </div>
                        <div className="conatct_inner_form_block">
                            <div className="sd_container_990">
                                <FullName />
                                <div className="sd_flex single_field">
                                    <TextField uppercase={true} label="email" required="false" />
                                </div>
                                <div className="sd_flex two_field">
                                    <TextField uppercase={true} label="Phone Number" required="false" />
                                    <Dropdown label="Type" />
                                </div>
                            </div>
                        </div>
                        <div className="form_inner_title">
                            <h5 className="sd_flex">Public Contact <span>PROVIDED INFORMATION WILL BE MADE PUBLIC.</span></h5>
                            <p>This individual is the designated public contact for the film/project. This information will be released to members of the industry and press, and listed on your film/project page on our online program guide.</p>
                        </div>
                        <div className="conatct_inner_form_block">
                            <div className="sd_container_990">
                                <FullName />
                                <div className="sd_flex single_field">
                                    <TextField uppercase={true} label="Company" required="false" />
                                </div>
                                <div className="sd_flex single_field">
                                    <TextField uppercase={true} label="Public Email" required="false" />
                                </div>
                                <div className="sd_flex single_field">
                                    <TextField uppercase={true} label="Website (format: HTTP://www.)" required="false" />
                                </div>
                                <div className="sd_flex two_field">
                                    <TextField uppercase={true} label="Phone Number" required="false" />
                                    <Dropdown label="Type" />
                                </div>
                            </div>
                        </div>
                        <div className="form_inner_title">
                            <h5 className="sd_flex">Post Festival Contact <span>PROVIDED INFORMATION WILL BE MADE PUBLIC.</span></h5>
                            <p>Company or individual who may be reached after the Festival regarding your film/project.</p>
                            <p>The provided information will be PRINTED in our Festival catalog, and after the Festival, will replace the Public Contact on your film/project page on our online program guide.</p>
                        </div>
                        <div className="conatct_inner_form_block">
                            <div className="sd_container_990">
                                <FullName />
                                <div className="sd_flex single_field">
                                    <TextField uppercase={true} label="Company" required="false" />
                                </div>
                                <div className="sd_flex single_field">
                                    <TextField uppercase={true} label="Public Email" required="false" />
                                </div>
                                <div className="sd_flex single_field">
                                    <TextField uppercase={true} label="Website (format: HTTP://www.)" required="false" />
                                </div>
                                <div className="sd_flex two_field">
                                    <TextField uppercase={true} label="Phone Number" required="false" />
                                    <Dropdown label="Type" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <FormFooter  step = {4} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
