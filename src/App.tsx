import { useState } from 'react';
import './App.css'
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';
import successIcon from './assets/images/icon-success.svg';
import { isValidEmail } from './utils/validateEmail';

function App() {
  const [validEmail, setValidEmail] = useState<boolean>(true);
  const [email, setEmailAddress] = useState<string>('');
  // const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const [error, setError] = useState<string>("");

  const checkEmailValidity=(email: string) :void=>{
    isValidEmail(email) ? setValidEmail(true): setValidEmail(false)
  }
  const dismissSuccessModal=()=>{
    setValidEmail(false);
    setEmailAddress('');
  }

  if (!validEmail) {
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
          
          <div className="card__form">
            <label htmlFor="email_field">Email address</label>
            <input type="text" 
              id='email_field' 
              placeholder='email@company.com' 
              onChange={(e)=>{setEmailAddress(e.target.value)}}/>
            <input type="button" 
            value="Subscribe to monthly newsletter" 
            onClick={()=>checkEmailValidity(email)}/>
          </div>
          </div>
          <div className="right">
            <picture>
              <source srcSet={illustrationMobile} media="(max-width: 662px)" />
              <img src={illustrationDesktop} alt="illustration" />
            </picture>
            
          </div>
        </div>
    
</main>
  )
  } else {
    return (
      <main className={`card ${validEmail?'card__success':''}`}>
        <div className="card__success--inner">
          <img src={successIcon} alt="Success" />
          <h1>Thanks for subscribing!</h1>
          <p>A confirmation email has been sent to <b>ash@loremcompany.com. </b> 
            Please open it and click the button inside to confirm your subscription.</p>
        </div>

        <div className="card__form">
            <input type="button" value="Dismiss message" onClick={dismissSuccessModal} />
          </div>
      </main>
    )
  }
  
}

export default App
