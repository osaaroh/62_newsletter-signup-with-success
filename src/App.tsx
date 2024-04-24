import { useState } from 'react'
import './App.css'
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="left">
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>

      <form action="">
        <label htmlFor="email_field">Email address</label>
        <input type="text" id='email_field' placeholder='email@company.com'/>
        <input type="button" value="Subscribe to monthly newsletter" />
      </form>
    </div>
    <div className="right">
      <img src={illustrationDesktop} alt="illustration" />
    </div>
     {/* Sign-up form start */}
     


{/* <!-- Success message start -->

Thanks for subscribing!

A confirmation email has been sent to ash@loremcompany.com. 
Please open it and click the button inside to confirm your subscription.

Dismiss message

<!-- Success message end --> */}
    </>
  )
}

export default App
