import React from 'react';
import Navigation from './Navigation';
import './Appointment.css';
function Appointment(props) {
    return (
        <div >
            <div className='Body'>
         <Navigation/>  
<div className='appointment'>
<div class="container">
    <h1>Book Appointment</h1>
<div className='formflex'>
  <form>
       <div className='formgroup'>
      <label>*FirstName</label><br/>
      <input type="text"   value="*FistName" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*LastName</label><br/>
      <input type="text"   value="*LastName" name="fname"  />
      </div>
      <div className='formgroup'>
      <label>*Email</label><br/>
      <input type="email"   value="*Email" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*PhoneNumber</label><br/>
      <input type="number"   value="*PhoneNumber" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Date</label><br/>
      <input type="date"   value="*Date" name="fname" />
      </div>
      <div className='formgroup'>
      <label>*Time</label><br/>
      <input type="time"   value="*Time" name="fname" />
       </div>
       <div className='formgroup'>
      <label>*Reason for Appointment</label><br/>
      <input type="text"   value="*Reason" name="reason" />
       </div>
       <div className='formgroup'>
      <label>*Condition</label><br/>
      <select>
          <option>Hypertension</option>
          <option>Diabetes</option>
          <option>Arthritis</option>
          <option>PainManagement</option>
      
      </select> 
       </div>
       <input type="submit" value="Book Appointment"/>
  </form>
  </div>
  </div>
</div>
</div>
        </div>
    );
}

export default Appointment;