import React from 'react';
import Navigation from './Navigation';
import './Service.css';
import athritis from '../assets/images/arthritis.png';
import diabetes from '../assets/images/diabetes.png';
import hypertension from '../assets/images/hypertension.png';
import drugoutsource from '../assets/images/drugoutsource.png';
import { Carousel } from 'react-responsive-carousel';
import aboutus from '../assets/images/aboutus.png';
function Services() {
    return (
        <div>
            <div>
            <Navigation/>
            </div>
            <div className='service'>
            <div className='serviceheader'><h1>Medication Therapy Management</h1></div><br/>
                <div className='serviceflex'>
                    
                <div className='servicecard'>
                <h3>Arthritis Management (Rheumatoid and Osteoarthritis)</h3>
                 <div className='servicecardimgdiv'>
                     <div className='servicecardimg'>
                         <img src={athritis}/>
                     </div>
                 </div>
                   <div className='servicecardtext'>
                   <p> <ul>
                    <li>Identifying uncontrolled hypertension. </li>
                    <li>Educating clients about hypertension and its medication therapies</li>
                    <li>Advising clients on medication adherence and rational use of their drugs.</li>
                    <li>Identifying and advising clients on adverse drug effects and prescribing issues. </li>
                    <li>Advising patients on lifestyle modifications to improve their health outcomes</li>
    </ul>
    </p>
    </div>
                </div>
                <div className='servicecard'>
                <h3>Hypertension management.</h3>   
                
                <div className='servicecardimgdiv'>
                     <div className='servicecardimg'>
                         <img src={hypertension}/>
                     </div>
                 </div>
                 <div className='servicecardtext'>
                     <p>
                   <ul>
                  
                   <li>Identifying uncontrolled blood sugars.</li>
                   <li>Educating clients about diabetes and the various therapy used for each diabetes type</li>
                   <li>Advising clients on medication adherence and rational use of their drugs.</li>
                   <li>Identifying and advising clients on adverse drug effects and prescribing issues. </li>
                   <li>Advising patients on lifestyle modifications to improve their health outcomes</li>
</ul>
</p>
</div>
                </div>
                <div className='servicecard'>
                    <h3>Diabetes management</h3>
                    
                    <div className='servicecardimgdiv'>
                     <div className='servicecardimg'>
                         <img src={diabetes}/>
                     </div>
                 </div>
                 <div className='servicecardtext'>
                   <p><ul><li>	Educating clients about arthritis and the various therapy used for each form of arthritis</li>
                   <li>	Advising clients on medication adherence and rational use of their drugs.</li>
                   <li>	Advising patients on pain management in arthritis</li>
                   <li>	Identifying and advising clients on adverse drug effects and prescribing issues.</li>
                   <li>	Advising patients on lifestyle modifications to improve their health outcomes</li></ul>
                   </p>
                   </div>
                </div>
                <div className='servicecard'>
                    <h3>Antibiotic use in chronic conditions</h3>
               

                </div>
                <div className='servicecard'>
                    <h3>Pain management in chronic conditions</h3>
             

                </div>
                </div>
                <div className='serviceheader'><h1>Drug Outsourcing</h1></div><br/>
                <div className='serviceflex'>
                    
                <div className='servicecard'>
                 
                    
                    <div className='servicecardimgdiv'>
                     <div className='servicecardimg'>
                         <img src={drugoutsource}/>
                     </div>
                 </div>
                 <div className='servicecardtext'>
                 <p><ul>We outsource drugs for our clients with the aim of enhancing the affordability and availability of their drugs. We are keen on the specifications of the drugs used by our clients in terms of the exact drug component, the dose strength, the dosage form, and their brand of preference.</ul></p>
                   </div>
                </div>
            
                </div>
            </div>
        </div>
    );
}

export default Services;