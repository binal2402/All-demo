import React from 'react';
import './App.css';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson } from '@mobiscroll/react';

function App() {

    // const [myEvents, setEvents] = React.useState([]);

    const view = React.useMemo(() => {
        return {
            timeline: {
                type: 'day',
                startTime: '12:00',
                endTime: '24:00',
                
            }
        };
    }, []);
    
    const myResources = React.useMemo(() => {
        return [{
            id: 1,
            name: 'Flatiron Room',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year.',
            color: '#fdf500'
        }, {
            id: 2,
            name: 'The Capital City',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year.',
            color: '#ff0101'
        }, {
            id: 3,
            name: 'Heroes Square',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year.',
            color: '#01adff'
        }, {
            id: 4,
            name: 'Thunderdome',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year.',
            color: '#239a21'
        }, {
            id: 5,
            name: 'King’s Landing',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year.',
            color: '#ff4600'
        }, {
            id: 6,
            name: 'Gathering Field',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year.',
            color: '#8f1ed6'
        }, {
            id: 7,
            name: 'Gathering Field',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year. ',
            color: '#8f1ed6'
        }
        , {
            id: 8,
            name: 'Gathering Field',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year. ',
            color: '#8f1ed6'
        }
        , {
            id: 9,
            name: 'Gathering Field',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year. ',
            color: '#8f1ed6'
        }
        , {
            id: 10,
            name: 'Gathering Field',
            seats: 'A showcase of world premieres of some of the most highly anticipated fiction and nonfiction films of the coming year. ',
            color: '#8f1ed6'
        }]
    }, []);

    const myEvents = React.useMemo(() => {
        return [{
            start: '2022-09-22T09:30',
            end: '2022-09-22T13:00',
            title: 'Tire change',
            color: '#7a5886',
            taskType: 'material-repeat',
            resource: 1
        }, {
            start: '2022-09-22T07:00',
            end: '2022-09-22T10:00',
            title: 'Brake maintenance',
            color: '#9da721',
            taskType: 'cogs',
            resource: 2
        }, {
            start: '2022-09-22T13:30',
            end: '2022-09-22T16:30',
            title: 'Fluid maintenance',
            color: '#cd6957',
            taskType: 'cogs',
            resource: [1,2]
        }, {
            start: '2022-09-22T11:00',
            end: '2022-09-22T14:00',
            title: 'Oil change',
            color: '#637e57',
            taskType: 'material-repeat',
            resource: [1,2,4,3]
        }, {
            start: '2022-09-22T08:00',
            end: '2022-09-22T12:00',
            title: 'Engine inspection',
            color: '#6c5d45',
            taskType: 'material-search',
            resource: [1,2,4,3]
        }, {
            start: '2022-09-22T14:00',
            end: '2022-09-22T19:00',
            title: 'Car painting',
            color: '#50789d',
            taskType: 'material-format-paint',
            resource: [1,2,4,3]
        }, {
            start: '2022-09-22T14:00',
            end: '2022-09-22T19:00',
            title: 'Car painting',
            color: '#50789d',
            taskType: 'material-format-paint',
            resource: [1,2,4,3]
        }, {
            start: '2022-09-22T14:00',
            end: '2022-09-22T19:00',
            title: 'Car painting',
            color: '#50789d',
            taskType: 'material-format-paint',
            resource: [1,2,4,3]
        }, {
            start: '2022-09-22T14:00',
            end: '2022-09-22T19:00',
            title: 'Car painting',
            color: '#50789d',
            taskType: 'material-format-paint',
            resource: [1,2,4,3]
        }, {
            start: '2022-09-22T14:00',
            end: '2022-09-22T19:00',
            title: 'Car painting',
            color: '#50789d',
            taskType: 'material-format-paint',
            resource: [1,2,4,3]
        },{
            start: '2022-09-22T2:00',
            end: '2022-09-22T19:00',
            title: 'Car painting',
            color: '#50789d',
            taskType: 'material-format-paint',
            resource: [1,2,4,3]
        },{
            start: '2022-09-22T1:00',
            end: '2022-09-22T19:00',
            title: 'Car painting',
            color: '#50789d',
            taskType: 'material-format-paint',
            resource: [5,7]
        },{
            start: '2022-09-22T23:30',
            end: '2022-09-23T5:00',
            title: 'Car painting',
            color: '#50789d',
            taskType: 'material-format-paint',
            resource: [5,8,9]
        }];
    }, []);
    
    // React.useEffect(() => {
    //     getJson('https://trial.mobiscroll.com/daily-weekly-events/', (events) => {
    //         setEvents(events);
    //     }, 'jsonp');
    // }, []);

    const renderCustomResource = (resource) => {
        return   <ng-template let-data>
        <div className="md-resource-header-template-cont">
            <div className='md-timeline-template-event-cont'>
                <div className="md-resource-header-template-name">{resource.name}</div>
                <div className="md-resource-header-template-seats">{resource.seats}</div>
            </div>
        </div>
        </ng-template>
      
    }

    const renderCustomHeader = () => {
        return <div className="md-resource-header-template-title">
            <div className="md-resource-header-template-name">Room</div>
            <div className="md-resource-header-template-seats">Capacity</div>
        </div>;
    }

    return (
        <Eventcalendar
            theme="ios" 
            themeVariant="light"
            view={view}
            data={myEvents}
            height='850px'
            width='1500px'
            resources={myResources}
            renderResource={renderCustomResource}
            // renderResourceHeader={renderCustomHeader}
            cssClass="md-resource-header-template"
       />
    ); 
}


export default App;