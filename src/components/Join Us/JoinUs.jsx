import React, {useState } from 'react'
import "./JoinUs.css"
import emailjs from '@emailjs/browser';

const JoinUs = () => {

  const [email,setEmail] = useState('');



const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_utmb9yo';
    const templateId = 'template_88wxoyr';
    const publicKey = 'W4TBR_QsnH3GWtQti';

    const templateParams = {
      user_email : email,
    }

    emailjs.send(serviceId,templateId,templateParams,publicKey).then((response)=>{
      console.log("Sent Successfully!", response);
      setEmail('');
    }).catch((error)=>{
      console.error("Error Sending email", error)
    })

  };

  return (
    <div className="join" id='join'>
        
        <div className="j-left">
        <hr />
            <div>
                <span className='stroke-text'>ready to</span>
                <span>level up</span>
            </div>
            <div>
                <span>your body</span>
                <span className='stroke-text'>with us?</span>
            </div>    
        </div>
        <div className="j-right">
            <form className='container' onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter Your Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button className='btn j-btn'>Contact Us</button>
            </form>
        </div>
    </div>
  )
}

export default JoinUs