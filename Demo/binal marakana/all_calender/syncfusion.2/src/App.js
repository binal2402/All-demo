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

class App extends React.Component {
    constructor() {
        super(...arguments);
        // this.data = extend([], dataSource.scheduleData.concat(dataSource.timelineData), null, true);
        this.data = extend([], data.calendarData, null, true);
        this.ownerData = [
            { Text: 'Margaret', Id: 1, Color: '#1aaa55' },
            { Text: 'Robert', Id: 2, Color: '#357cd2' },
            { Text: 'Margaret', Id: 3, Color: '#7fa900' },
            { Text: 'Laura', Id: 4, Color: '#000' },
           
        ];
    }
    componentDidMount(){
        setTimeout(() => {
            console.log("===================");
            // let text = "";
            // text += "clientHeight: " + element.clientHeight + "px<br>";
            // text += "offsetHeight: " + element.offsetHeight + "px<br>";
            
            let element = document.querySelectorAll(".e-resource-cells");
            let element_demo = document.querySelectorAll(".e-appointment-container");
            
            let text = "";
            element.forEach((item) => {
                text += item.clientHeight + "px";
                console.log("=========::1",text,item);

            })
            element = element_demo
            console.log("=========::",text);
            element_demo.forEach((item) => {
                item.style.minHeight = text + 'px';
                console.log("+++++",item.style.minHeight,text);
            })
        }, 1000);
    }
    render() {
        return (
            <div>
                 <ScheduleComponent width='100%' height='700px' selectedDate={new Date(2018, 0, 15)} rowAutoHeight={true} eventSettings={{
                    dataSource: this.data, ignoreWhitespace: false
                }} group={{ enableCompactView: false, resources: ['MeetingRoom'] }}>
                <ResourcesDirective>
                    <ResourceDirective field='Id' title='Room Type' name='MeetingRoom' allowMultiple={true} dataSource={this.ownerData} textField='Text' idField='Id' colorField='Color'>
                    </ResourceDirective>
                </ResourcesDirective>
                    <ViewsDirective>
                    <ViewDirective option='TimelineDay' startHour='04:00' endHour='24:00' timeScale={{ enable: true, slotCount: 1 }}/>
                    </ViewsDirective>
                    <Inject services={[TimelineViews]}/>
                </ScheduleComponent>
            </div>
        )
    }
}
 
export default App;