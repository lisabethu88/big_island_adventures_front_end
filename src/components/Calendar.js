import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, React} from "react";
import './Calendar.css'

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <section className="calendar-container">
        <h3>Choose by date</h3>
        <DatePicker 
            popperPlacement="auto"
            className="calendar" 
            selected={startDate} 
            onChange={(date) => setStartDate(date)}/>
        </section> 
    );
};

export default Calendar;