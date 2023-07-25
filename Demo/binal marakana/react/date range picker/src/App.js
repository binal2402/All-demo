import React from 'react';
import './App.css';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, setOptions } from '@mobiscroll/react';
import DateRangeFilter from './react date picker'

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});
function App() {

    const now = new Date();
    const [myValue, setValue] = React.useState(null);
    
    const setToday = () => {
        setValue([now, now]);
    };

    const onChange = ranges => {
        // ranges ...
        // alert("changed check the console log");
        console.log(ranges);
      };

    return (<>
    
    {/* <mobiscroll.Button onClick={setToday}>Today</mobiscroll.Button>      */}
        <Datepicker
          controls={['calendar']}
          select="range"
          display="inline"
          touchUi={true}
          calendarType="month"
          pages={1}
          showWeekNumbers={false}
          calendarScroll="horizontal"
          showOuterDays={true}
        />
          
          <DateRangeFilter onChange={onChange}/>
    </>
    );

}


export default App;