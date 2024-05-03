import { useState } from 'react';
import './App.css'
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
      <main className="card">
        <div className="card__inner">
          <div className="left">
          <h1>Stay updated!</h1>
          <p className="card__copy">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="card__copy--list">
            <li><p>Product discovery and building what matters</p></li>
            <li><p>Measuring to ensure updates are a success</p></li>
            <li><p>And much more!</p></li>
          </ul>
          
          <form action="" className="card__form">
            <label htmlFor="email_field">Email address</label>
            <input type="text" id='email_field' placeholder='email@company.com'/>
            <input type="button" value="Subscribe to monthly newsletter" />
          </form>
          </div>
          <div className="right">
            <img src={illustrationDesktop} alt="illustration" />
          </div>
        </div>
    
     {/* Sign-up form start */}
     


{/* <!-- Success message start -->

Thanks for subscribing!

A confirmation email has been sent to ash@loremcompany.com. 
Please open it and click the button inside to confirm your subscription.

Dismiss message

<!-- Success message end --> */}
</main>
  )
}

export default App
