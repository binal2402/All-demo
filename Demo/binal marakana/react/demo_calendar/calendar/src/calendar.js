import React,{useState,useRef,useEffect} from 'react'
import { useSelector,useDispatch,connect } from 'react-redux'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' 
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction"
// import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import Slider from "react-slick";
import moment from 'moment'
 const Calendar = () => {
    const dispatch = useDispatch();
   
    let calendarComponentRef = React.createRef();
    const sliderRef = useRef();
    var allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let alldate = [];
    let slotIndex = moment.parseZone(`2021-06-22T10:00:00-07:00`).local(); 
   
   
    const [dates,setDates] = useState(
            [
                {day: 18, month: "June", year: "1021", day_number: 1},
                {day: 19, month: "June", year: "1021", day_number: 2},
                {day: 20, month: "June", year: "2021", day_number: 3},
                {day: 21, month: "June", year: "2021", day_number: 4},
                {day: 22, month: "June", year: "2021", day_number: 5},
                {day: 23, month: "June", year: "2021", day_number: 6},
                {day: 24, month: "June", year: "2021", day_number: 7},
                {day: 25, month: "June", year: "2021", day_number: 8},
                {day: 26, month: "June", year: "2021", day_number: 9},
                {day: 27, month: "June", year: "1021", day_number: 10},
                {day: 28, month: "June", year: "1021", day_number: 12},
                {day: 29, month: "June", year: "2021", day_number: 13},
                {day: 30, month: "June", year: "2021", day_number: 14},
            ]
    )

                const [events,SetEvents] = useState([
                                    {
                                        "id": 1,
                                        "title": "ABCDEFGHI Movie",
                                        "start": "2021-06-22T12:30:00Z",
                                        "end": "2021-06-22T17:30:00Z",
                                        "resourceId": "Performance",
                                        "extendedProps": {
                                            "isfav":false,
                                            "originalDateCopy": "2021-06-22T11:00:00.000Z",
                                            "filmId": "5fd1fa800cdf1f2f14fe65e7",
                                            "eventId": "5fd1fa800cdf1f2f14fe65eb",
                                            "name": "Performance",
                                            "added": false,
                                            "type": "Performance",
                                            "duration": 240
                                        }
                                    },
                                    {
                                        "id": 2,
                                        "title": "Action Film ",
                                        "start": "2021-05-24T19:00:00Z",
                                        "end": "2021-05-24T20:00:00Z",
                                        "resourceId": "Talks",
                                        "extendedProps": {
                                            "isfav":false,
                                            "originalDateCopy": "2021-05-24T13:30:00.775Z",
                                            "filmId": "60ab3662dd80b736c7fb73e9",
                                            "eventId": "60ab3662dd80b736c7fb73ed",
                                            "name": "Talks",
                                            "added": false,
                                            "type": "Talks",
                                            "duration": 60
                                        }
                                    },
                                    {
                                        "id": 3,
                                        "title": "Another New One",
                                        "start": "2021-06-22T00:00:00Z",
                                        "end": "2021-06-22T05:00:00Z",
                                        "resourceId": "Meetups",
                                        "extendedProps": {
                                            "isfav":false,
                                            "originalDateCopy": "2021-01-17T14:30:00.000Z",
                                            "filmId": "5fca239802a2547b523627c9",
                                            "eventId": "5fca239802a2547b523627cd",
                                            "name": "Meetups",
                                            "added": false,
                                            "type": "Meetups",
                                            "duration": 0
                                        }
                                    },
                                    {
                                        "id": 6,
                                        "title": "Another New One",
                                        "start": "2021-06-22T11:00:00Z",
                                        "end": "2021-06-22T12:00:00Z",
                                        "resourceId": "Meetups",
                                        "extendedProps": {
                                            "isfav":false,
                                            "originalDateCopy": "2021-01-17T14:30:00.000Z",
                                            "filmId": "5fca239802a2547b523627c9",
                                            "eventId": "5fca239802a2547b523627cd",
                                            "name": "Meetups",
                                            "added": false,
                                            "type": "Meetups",
                                            "duration": 0
                                        }
                                    },
                                    {
                                        "id": 4,
                                        "title": "Another NewFT",
                                        "start": "2021-06-22T07:30:00Z",
                                        "end": "2021-06-22T09:30:00Z",
                                        "resourceId": "Happening ",
                                        "extendedProps": {
                                            "isfav":false,
                                            "originalDateCopy": "2021-06-22T02:00:00.000Z",
                                            "filmId": "5fca1fdd02a2547b523627b6",
                                            "eventId": "5fca1fdd02a2547b523627ba",
                                            "name": "Happening ",
                                            "added": false,
                                            "type": "Happening ",
                                            "duration": 0
                                        }
                                    },
                                    {
                                        "id": 5,
                                        "title": "Artoon 123",
                                        "start": "2021-06-23T15:30:00Z",
                                        "end": "2021-06-22T17:45:00Z",
                                        "resourceId": "Happening ",
                                        "extendedProps": {
                                            "isfav":false,
                                            "originalDateCopy": "2021-06-22T12:00:00.000Z",
                                            "filmId": "5fd20e0fb41beb3993540252",
                                            "eventId": "5fd20e0fb41beb3993540256",
                                            "name": "Happening ",
                                            "added": false,
                                            "type": "Happening ",
                                            "duration": 15
                                        }
                                    }
                                ])

  const [fav,setFav] = useState(false)
  const [open,SetOpen] = useState(false)
  const [CurrentDate,SetCurrentDate] = useState(new Date())
  
useEffect(() => {
   let activeDate = 0
    alldate.forEach((date) => {
    })
}, [])
  const settings = {
    className: 'customName', 
    dots: false,
    infinite: false,
    speed: 500,
    arrow: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipe: false,
    date:"2021-05-29T07:30:00.000Z",
    afterChange: (current) => {
        let totalday = dates;
        let c_date = totalday[current];
    },
    onInit: () => {               
        setTimeout(() => {
            slickGoto(0);
        }, 300);  
    },
        
    };

    const slickGoto = (date) => {
        let activeDate = 0;
        
        let now = date ? new Date(date) : new Date();  
        
        // dispatch({type:'CurrentDate',payload:now})
        alldate.forEach((date) => {
            if(date.day === now.getDate()){
                activeDate = date.day_number
            }
        })
        
        sliderRef?.current?.slickGoTo(activeDate)
    }

    const goToDate = (date) => {
        let current_date = new Date(date.year, allMonth.indexOf(date.month), date.day);
        
        slickGoto(current_date);
    }

   
   
    useEffect(() => {
        gotoPast(CurrentDate)
    }, [])

    
    const renderEventContent = (eventInfo) => {
        return (
          <>
            <p>{eventInfo.event.title}</p>
            <p>{eventInfo.event.extendedProps.desc}</p>
            <p>{eventInfo.event.extendedProps.duration} min</p>
            

          </>
        )
      }

    const gotoPast = (date) => {
        let calendarApi = calendarComponentRef.current.getApi();
        calendarApi.gotoDate("2021-06-22"); // call a method on the Calendar object
    };

    return (
        <div className="container">
            <div>
                {/* <button onClick={() => OpenModal()}>OPen Modal</button> */}
            </div>

            <h1>Slider</h1> 
            <div>
                <Slider {...settings} ref={sliderRef} className={`sd_calendar_dates_slider`}>
                   {
                       alldate.map((date,i) => {
                           return(
                                <div className="sd_calendar_date_block" key={i} onClick={() => goToDate(date)}>
                                    <h4>
                                        {date.month} <span> {date.day} </span>
                                    </h4>
                                </div>
                           )
                       })
                   }
                </Slider>
            </div>
            <div>
                <FullCalendar
                    // plugins={[ dayGridPlugin ,interactionPlugin,resourceTimelinePlugin,resourceTimeGridPlugin]}
                    // plugins={[ dayGridPlugin, resourceTimelinePlugin]}
                    // initialView="resourceTimeline"
                    ref={calendarComponentRef}
                    events={events}
                    eventContent={renderEventContent}
                    resources= {
                        [
                            {
                                "id": "Meetups",
                                "title": "Meetups",
                            },
                            {
                                "id": "Talks",
                                "title": "Talks",
                            },
                            {
                                "id": "Performance",
                                "title": "Performance",
                            },
                            {
                                "id": "Happening ",
                                "title": "Happening ",
                            }
                        ]
                    }
                    plugins={[  dayGridPlugin, timeGridPlugin, interactionPlugin ,resourceTimeGridPlugin]}
                    initialView="resourceTimeGridDay"
                    allDaySlot={false}
                    
                    // headerToolbar = {
                    //     {
                    //         start: '', 
                    //         center: '',
                    //         end: '' 
                    //     }
                    // }
                    // headerToolbar={false}
                />
            </div>
        </div>
    )
}
export default Calendar;