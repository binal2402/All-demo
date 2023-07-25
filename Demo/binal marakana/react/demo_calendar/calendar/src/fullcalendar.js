import React, { Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
// import axios from 'axios';
export default class Schedule extends Component {
    calendarComponentRef = React.createRef();
    constructor (props) {
      super(props)
      this.state = {
        modal: false,
        calendarWeekends: true,
        startDate: new Date(),
        EndDate:new Date(),
        input: "",
        list: []
       
      };

 
      this.handleChangeStart = this.handleChangeStart.bind(this);
      this.handleChangeEnd = this.handleChangeEnd.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }
   
   

// componentDidMount() {
//     axios.get('/events')
//       .then(response => {
//         this.setState({event: response.data})
//         console.log({calendarEvents: response.data})
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
  };
   handleDateClick = (event) => { // bind with an arrow function
    this.toggle();
    this.setState({ event });
  }
  handleChangeStart(date) {
    this.setState({
      startDate: date
     })
  }
  handleChangeEnd(date) {
    this.setState({
      EndDate:date
    })
  }
  handleSubmit = () => {
    debugger
    let list = this.state.list;
    list.push(this.state.input);
    this.setState({
      list
    });
  };

  handleChange = (e) => {
    this.setState({
      input : e.target.value
 
    })
 
  }
  listItems() {

    let list = this.state.list;
    return (
      <ul>
        {
          list.map((val, index) => {
            return (
              <li key={index}>
                { val }
              </li>
            );
          })
        }
      </ul>
    );
  }
  render() {
    return(

    <div className="cal-container">
        <div style={{marginTop: 30}}>
            <FullCalendar 
                    defaultView="dayGridMonth" 
                    plugins={[dayGridPlugin, interactionPlugin]}
                    editable={true}
                    headerToolbar={{left:'prev,next,today',
                    center:'title',
                    right:'dayGridMonth,dayGridWeek,dayGridDay'}}
                    events={this.state.event}
                    eventDrop={this.handleEventDrop}
                    eventClick={this.handleEventClick}
                    dateClick={this.handleDateClick}
                   nowIndicator='true'
                    // events={[
                    //     { title: 'event 1', date: '2021-10-01' },
                    //     { title: 'event 2', date: '2021-10-02' }
                    //   ]}
                    // events={this.formatEvents()}
                />
            <li>
              { this.listItems() }
            </li>
   
              <Modal
                  isOpen={this.state.modal}
                  toggle={this.toggle}
                  className="model"
              >
                <div>
                
            </div>
            <form>
                  <ModalHeader toggle={this.toggle}>
                      {/* EVENT TITLE SHOULD GO HERE: {this.state.event.title} */}
                          
                  </ModalHeader>
                  <ModalBody>
                      
                      {/* EVENT INFO SHOULD GO HERE: {this.state.event.start} */}
                      <div class="row">
                              <div class="col-xs-12">
                                  <label class="col-xs-4 pr-5" for="starts-at">Title</label>
                                  <input type="text" value={this.state.value} name="starts_at" id="starts-at" onChange={this.handleChange} />
                              </div>
                          </div>
                      <div class="row">
                              <div class="col-xs-12">
                                  <label class="col-xs-4" for="starts-at">Starts at</label>
                                  <DatePicker
                                      selected={ this.state.startDate }
                                      onChange={ this.handleChangeStart }
                                      name="startDate"
                                      dateFormat="MM/dd/yyyy"
                                  /> 
                              </div>
                      </div>
                      <div class="row">
                              <div class="col-xs-12">
                                  <label class="col-xs-4" for="ends-at">Ends at</label>
                                  {/* <input type="text" name="ends_at" id="ends-at" /> */}
                                  <DatePicker
                                      selected={ this.state.EndDate}
                                      onChange={ this.handleChangeEnd }
                                      name="EndDate"
                                      dateFormat="MM/dd/yyyy"
                                  />
                              </div>
                          </div>
                  </ModalBody>
                  <ModalFooter>
                      
                  {/* <input type="submit" value="Submit" /> */}
                  <Button variant="primary" type="submit"  onClick={() => this.handleSubmit()}>
                      Submit
                  </Button>
                      <Button color="secondary" onClick={this.toggle}>
                      Cancel
                      </Button>
                  </ModalFooter>
            </form>
              </Modal>
        </div>
    </div>
    )
  }
}