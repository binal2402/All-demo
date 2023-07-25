import React, { useState,useRef, useEffect  } from 'react';
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import FormHeader from "../../PAF/Components/FormHeader";
import FormFooter from "../../PAF/Components/FormFooter";
import TextField from "../../components/TextField";
import Dropdown from "../../components/Dropdown";
import TextArea from '../../components/TextArea';
import SimpleReactValidator from 'simple-react-validator';

import service from '../../common/service';
import { useDispatch, useSelector } from 'react-redux';

let sub
 const Step3=()=> {
    
    const apiServe = new service();
    const dispatch = useDispatch();
    const ProjectInfo = useSelector(e => e.ProjectInfo);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
     const [formThree, setformThree] = useState({
        aspectRatio: ProjectInfo.projectInfo.aspectRatio,
        captionAudioInDCP: ProjectInfo.projectInfo.captionAudioInDCP,
        color: ProjectInfo.projectInfo.color,
        finalRunTime: ProjectInfo.projectInfo.finalRunTime,
        inPersonFormat: ProjectInfo.projectInfo.inPersonFormat,
        includeStroboscopicImg: ProjectInfo.projectInfo.includeStroboscopicImg,
        language: ProjectInfo.projectInfo.language,
        onlineFormat: ProjectInfo.projectInfo.onlineFormat,
        premiereStatus: ProjectInfo.projectInfo.premiereStatus,
        soundFormat: ProjectInfo.projectInfo.soundFormat,
        timecodeOccursInProject: ProjectInfo.projectInfo.timecodeOccursInProject,
        yearFinished:ProjectInfo.projectInfo.yearFinished,
        runTime:ProjectInfo.projectInfo.runTime,
        subtitles:ProjectInfo.projectInfo.subtitles

     })
     const [digitalMedia, setDigitalMedia] = useState({
        facebook: ProjectInfo.digitalMedia.facebook,
        hastag: ProjectInfo.digitalMedia.hastag,
        instagram: ProjectInfo.digitalMedia.instagram,
        officialWebsite: ProjectInfo.digitalMedia.officialWebsite,
        twitter: ProjectInfo.digitalMedia.twitter,
        youtubeOrVimeoTrailer: ProjectInfo.digitalMedia.youtubeOrVimeoTrailer
     })
    const [state] = useState({
        PremiereStatus:[' ','World Premiere','International Premiere','North American Premiere','U.S. Premiere','None'],
        InpersonFormat:[' ','DCP 24fps','DCP 25fps','DCP 30fps','Other'],
        OnlineFormat:[' ','H264 24fps','H264 25fps /stereo','H264 30fps','Apple Pro Res LT 24fps','Apple Pro Res LT 25fps','Apple Pro Res LT 30fps'],
        AspectRatio:[' ','Flat - 2.0',' Flat - 1.85','Flat - 1.78','Flat - 1.66','Flat - 1.37','Scope - 2.35','Other',"Don'tKnow"],
        SoundFormat:[' ','7.1', '5.1', '3', '2','Mono',' Other',"Don't Know"],
        Color:[' ','Color','b&w','color & b&w'],
        Subtitles:[' ','Yes','No'],
        FinalRunTime:[' ','Yes','No'],
        captions:[' ','Yes','No'],
        stroboscopic:[' ','Yes','No'],

    })
    useEffect(() => {
        sub = apiServe.getevent().subscribe((response) => {
            switch (response.event) {
                case "paf|project|allUpdate":
                    if (!response.error) {
                        dispatch({ type: 'FORM_DATA', payload: response.data })
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
    
    const handleChange=(e)=>{
        const { name, value } = e.target
        setformThree({ ...formThree, [name]: value })
        forceUpdate()
        console.log(`formThree`, formThree)
    }
  const handleLink=(e)=>{
    const { name, value } = e.target
    setDigitalMedia({ ...digitalMedia, [name]: value })
    console.log(`DigitalMedia`, digitalMedia)
  }
 
  const  getYears = () => {
        var years = ["select from bellow"];
        var startYear = 1900;
         // const year = new Date().getFullYear();
         const year = 2021;

        for (var start = startYear; start <= year; start++) {
          years.push(start.toString());
        }

        return years;
    };
    const year = getYears(); 
    const Validator = useRef(new SimpleReactValidator({
        autoForceUpdate: this,
        validators: {
            premiereStatus: {  // name the rule
                message: 'Premiere Status is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
            },
            yearFinished: {  // name the rule
                message: 'Year Finished is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
            },
            inPersonFormat: {  // name the rule
                message: 'In person Format is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
              
                required: true  // optional
            },
            onlineFormat: {  // name the rule
                message: 'Online Formation is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
              
            },
            aspectRatio: {  // name the rule
                message: 'Aspect Ratio is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
                
            },
            soundFormat: {  // name the rule
                message: 'This field is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
                
            },
            color: {  // name the rule
                message: 'Color is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
                
            },
            runTime: {  // name the rule
                message: 'Run Time is required. ',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
                
            },
            finalRunTime: {  // name the rule
                message: 'Final Run Time is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
                
            },
            language: {  // name the rule
                message: 'Language is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
                
            },
            subtitles: {  // name the rule
                message: 'Subtitles is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
                
            },
            includeStroboscopicImg: {  // name the rule
                message: 'This field is required.',
                rule: (val, params, validator) => {
                    return validator.helpers.testRegex(val, /^[\s\t\r\n]*\S+/ig) && params.indexOf(val) === -1
                },
                required: true  // optional
                
            },
        }
    }))
    const checkValidate = () => {
        if (Validator.current.allValid()) {
            return true
        } else {
            Validator.current.showMessages()
            forceUpdate()
            return false
        }
    }
    const onFormSave = () => {
        if(formThree.yearFinished === 'select from bellow'){
            setformThree({ ...formThree, yearFinished: '' })
        }
        if (Validator.current.allValid()) {
            const data = {
                projectInfo:formThree,
                digitalMedia:digitalMedia,
                projectId:ProjectInfo._id,
                savePageNo:'3'
            }
            apiServe.sendevent('paf|project|allUpdate', data)
        } else {
            Validator.current.showMessages()
            forceUpdate()

        }
    }
    
    
    return (
        <div>
            <Header />
            <FormHeader />
            <div className="container form_inner step_common">
                <div className="project_info_form">
                    <div className="form_inner_title">
                        <h3 className="sd_flex sd_aligncenter">Project Info</h3>
                    </div>
                    <div className="project_info_form_inner sd_container_990 ">
                        <div className="project_info_form_inner_top border_bottom_gray">
                            <div className="sd_flex top_2_field">
                                <Dropdown name="premiereStatus" value={formThree.premiereStatus} onChange={handleChange} label="Premiere Status" uppercase={true} fpgerror={Validator.current.message('premiereStatus', formThree.premiereStatus , 'premiereStatus|required')}  options={state.PremiereStatus} toolTip="Premiere Status" />
                                <Dropdown name="yearFinished" value={formThree.yearFinished} onChange={handleChange}label="Year Finished"  uppercase={true}  fpgerror={Validator.current.message('yearFinished', formThree.yearFinished , 'yearFinished|required')} options={year} toolTip="Premiere Status" />
                                
                 
                            </div>
                            <div className="sd_flex sd_justbetween">
                                <Dropdown name="inPersonFormat" value={formThree.inPersonFormat} onChange={handleChange} label="In-Person Format" uppercase={true} fpgerror={Validator.current.message('inPersonFormat', formThree.inPersonFormat,'inPersonFormat|required')} options={state.InpersonFormat} />
                              
                                <Dropdown name="onlineFormat" value={formThree.onlineFormat} onChange={handleChange} label="Online Format" uppercase={true} fpgerror={Validator.current.message('inPersonFormat', formThree.onlineFormat,'onlineFormat|required')} options={state.OnlineFormat}/>
                                <Dropdown name="aspectRatio" value={formThree.aspectRatio} onChange={handleChange} label="Aspect Ratio" uppercase={true} fpgerror={Validator.current.message('aspectRatio', formThree.aspectRatio,'aspectRatio|required')} options={state.AspectRatio}/>
                            </div>
                            <div className="sd_flex sd_aligncenter sd_justbetween">
                                <Dropdown name="soundFormat" value={formThree.soundFormat} onChange={handleChange}  label="Sound Format" uppercase={true} fpgerror={Validator.current.message('soundFormat', formThree.soundFormat,'soundFormat|required')} options={state.SoundFormat}/>
                                <Dropdown name="color" value={formThree.color} onChange={handleChange} label="color" uppercase={true} fpgerror={Validator.current.message('color', formThree.color,'color|required')} options={state.Color} />
                                <TextField type="text"  name="runTime" value={formThree.runTime} onChange={handleChange} uppercase={true} fpgerror={Validator.current.message('runTime', formThree.runTime,'runTime|required')} label="Run Time (mins)" required="false"  handleChange={handleChange}/>
                                
                            </div>
                            <div className="sd_flex sd_aligncenter sd_justbetween">
                              <TextField type="text"  name="language" value={formThree.language} onChange={handleChange}  uppercase={true} fpgerror={Validator.current.message('language', formThree.language,'language|required')} label="language"required="false" handleChange={handleChange} />
                              <Dropdown  name="subtitles" label="Subtitles" value={formThree.subtitles}  onChange={handleChange} uppercase={true} fpgerror={Validator.current.message('subtitles', formThree.subtitles,'subtitles|required')} options={state.Subtitles} />
                                <Dropdown name="finalRunTime" value={formThree.finalRunTime}  onChange={handleChange} label="Final Run Time "  uppercase={true} fpgerror={Validator.current.message('finalRunTime', formThree.finalRunTime,'finalRunTime|required')} options={state.FinalRunTime} />
           
                            </div>
                        </div>
                        <div className="project_info_form_inner_bottom">
                            <div className="sd_flex">
                                <div className="left_content">
                                    <p>Do you plan to include closed captions or audio description in your DCP before the shipping deadline?</p>
                                </div>
                                <div className="right_content">
                                    <Dropdown name="captionAudioInDCP"value={formThree.captionAudioInDCP}  onChange={handleChange} options={state.captions}/>
                                </div>
                            </div>
                            <div className="sd_flex">
                                <div className="left_content">
                                    <p>Does your project include stroboscopic images or extensive light flijering that lasts longer than 5 seconds?</p>
                                    <span className="sd_textuppercase">(We use this information to alert viewers who are sensitive)</span>
                                </div>
                                <div className="right_content">
                                    <Dropdown name="includeStroboscopicImg" value={formThree.includeStroboscopicImg} fpgerror={Validator.current.message('includeStroboscopicImg', formThree.includeStroboscopicImg,'includeStroboscopicImg|required')} onChange={handleChange} options={state.stroboscopic} />
                                </div>
                            </div>
                            <div className="sd_flex sd_aligncenter">
                                <div className="left_content">
                                    <p>If yes, provide timecode where it occurs in project:</p>
                                </div>
                                <div className="right_content">
                                    <TextArea name="timecodeOccursInProject" value={formThree.timecodeOccursInProject}  handleChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="digital_media_form">
                    <div className="form_inner_title">
                        <h3 className="sd_flex sd_aligncenter">Digital Media <span className="sd_textuppercase">*Please do not include personal or company pages/accounts</span></h3>
                        <p>When you provie this information, the Sundance Film Festival will consider it public and may tag our posts with this information</p>
                    </div>
                    <div className="digital_media_form_inner">
                        <TextField type="url"   name="officialWebsite" value={digitalMedia.officialWebsite}  handleChange={handleLink} placeholder="http://www.my.movie.com" uppercase={true} label="Official Website" required="false" />
                        <TextField type="url"   name="youtubeOrVimeoTrailer" value={digitalMedia.youtubeOrVimeoTrailer}  handleChange={handleLink}  placeholder="http://www.youtube.com/..." uppercase={true} label="Youtube or Vimeo Trailer" required="false" />
                        <TextField type="text"  name="instagram" value={digitalMedia.instagram}  handleChange={handleLink}  placeholder="mymovie"uppercase={true} label="INstagram" required="false" />
                        <TextField type="url"   name="facebook" value={digitalMedia.facebook}  handleChange={handleLink}  placeholder="http://www.facebook.com/mymovie" uppercase={true} label="Facebook" required="false" />
                        <TextField type="text"  name="twitter" value={digitalMedia.twitter}  handleChange={handleLink}  placeholder="mymovie" uppercase={true} label="TWITTER" required="false" />
                        <TextField type="text"  name="hastag" value={digitalMedia.hastag}  handleChange={handleLink}  placeholder="#mymovie"uppercase={true} label="HASTAG" required="false" />

                    </div>
                </div>
                <FormFooter step={3} onFormSave={onFormSave} checkValidate={checkValidate} />
            </div>
            <Footer />
        </div>
    )
}

export default  Step3;                          