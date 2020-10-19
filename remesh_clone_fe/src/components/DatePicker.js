import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker'

function DatePickerComponent (props) {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className='App'>
            <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            name={props.name}
            />
        </div>
    )
}

export default DatePickerComponent