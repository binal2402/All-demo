import React from 'react';
import './App.css';
import {
    Week, Month, TimelineViews, TimelineMonth, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, Inject
} from '@syncfusion/ej2-react-schedule';
import data from './datasource.json';
import { extend } from '@syncfusion/ej2-base';


import "../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
var dataManager = [{
    Id: 1,
    Subject: "Music Class",
    StartTime: new Date("2018/1/15 06:00 AM"),
    EndTime: new Date("2018/1/15 07:00 AM")
}, {
    Id: 2,
    Subject: "School",
    StartTime: new Date("2015/11/7 9:00 AM"),
    EndTime: new Date("2015/11/7 02:30 PM")
}];



class App extends React.Component {
    constructor() {
        super(...arguments);
        // this.data = extend([], dataSource.scheduleData.concat(dataSource.timelineData), null, true);
        this.data = extend([], data.calendarData, null, true);
        this.conferenceData = [
            { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
            { Text: 'Robert', Id: 2, Color: '#357cd2' },
            { Text: 'Margaret', Id: 3, Color: '#7fa900' },
            { Text: 'Laura', Id: 4, Color: '#000' }
        ];
    }
    
    getDoctorName(value) {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] :
            value.resourceName);
    }
    getDoctorLevel(value) {
        let resourceName = this.getDoctorName(value);
        return (resourceName === 'Margaret') ? 'fiction and nonfiction. ' : (resourceName === 'Robert') ? 'Neurologist' : 'Orthopedic Surgeon';
    }
    resourceHeaderTemplate(props) {
        return (
            <>
                <div className="template-wrap">
                    <div className="resource-detail">
                        <div className="resource-name">{this.getDoctorName(props)}</div>
                        <span className="resource-designation">{this.getDoctorLevel(props)}</span>
                    </div>
                </div>
            </>
        );
    }
    componentDidMount(){
        setTimeout(() => {
            console.log("===================");
            // let text = "";
            // text += "clientHeight: " + element.clientHeight + "px<br>";
            // text += "offsetHeight: " + element.offsetHeight + "px<br>";
            
            const element = document.querySelectorAll(".e-resource-cells");
            const element_demo = document.querySelectorAll(".e-appointment-container");
            
            let text = "";
            element.forEach((item) => {
                text += item.clientHeight + "px";
                console.log("=========::1",text,item);

            })
            console.log("=========::",text);
            // element_demo.forEach((item) => {
            //     item.style.minHeight = text + 'px';
            //     console.log("+++++",item.style.minHeight,text);
            // })
        }, 1000);
    }
    render() {
        return (
            <div className='schedule-control-section'>
                <div className='col-lg-9 control-section'>
                    <div className='control-wrapper'>
                        <ScheduleComponent
                            width='100%' 
                            height='700px' 
                            selectedDate={new Date(2018, 0, 15)} 
                            eventSettings={{ dataSource: this.data,
                                fields: {
                                    ConferenceId: 'Id',
                                    Subject: { title: 'Summary', name: 'Subject' },
                                    Location: { title: 'Location', name: 'Location' },
                                    description: { title: 'Comments', name: 'Description' },
                                    StartTime: { title: 'From', name: 'StartTime' },
                                    EndTime: { title: 'To', name: 'EndTime' }
                                }
                            }} 
                            resourceHeaderTemplate={this.resourceHeaderTemplate.bind(this)}
                            rowAutoHeight={true} 
                            group={{enableCompactView: false,resources: ['Conferences'] }}
                            
                            // actionBegin={this.onActionBegin.bind(this)}
                            // group={{ resources: ['Resources'] }}
                            // readOnly={true}
                            // ref={t => this.scheduleObj = t}
                           >
                            <ViewsDirective>
                                <ViewDirective  option='TimelineDay' startHour='04:00' endHour='24:00' timeScale={{ enable: true, slotCount: 1 }}/>
                            </ViewsDirective>
                            <ResourcesDirective>
                                <ResourceDirective field='ConferenceId' title='Conference' name='Conferences'
                                 dataSource={this.conferenceData} textField='Text' idField='Id' colorField='Color'>
                                </ResourceDirective>
                            </ResourcesDirective>
                            <Inject services={[TimelineViews]} />
                        </ScheduleComponent>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default App;