import { useState } from 'react';
import './App.css'
import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg';
import illustrationMobile from './assets/images/illustration-sign-up-mobile.svg';
import successIcon from './assets/images/icon-success.svg';
import { isValidEmail } from './utils/validateEmail';

function App() {
  const [validEmail, setValidEmail] = useState<boolean>();
  const [email, setEmailAddress] = useState<string>('');
  // const [date, setDate] = useState<{ year: number; month: number; day: number } | null>(null);
  const [isError, setIsError] = useState<boolean>();
  const [isEmptyError, setIsEmptyError] = useState<boolean>();

    //reset error onInputChange
    const resetError=()=>{
      setValidEmail(false);
      setIsError(false);
      setIsEmptyError(false);
    }
  

  const checkEmailValidity=(email: string) :void=>{
    if (email!=='') {
      if(isValidEmail(email)){
        setValidEmail(true)
        setIsError(false)
      }else{
        setValidEmail(false)
        setIsError(true)
      }
    } else{
      //if no email value, reset error and valid email
        resetError();
        setIsEmptyError(true)
    }
  }

  const dismissSuccessModal=()=>{
    setEmailAddress('');
    resetError();
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
            <label htmlFor="email_field"><span className='email_label'>Email address </span><span className='error_label'>{`${email!=''&& validEmail===false && isError===true ? 'Valid email required': '' || email===''&& validEmail===false && isEmptyError===true? 'Field cannot be empty' :'' } `} </span></label>
            <input type="text"
              className={`${email!=''&& validEmail===false && isError===true ? 'error__input': ''}`} 
              id='email_field' 
              placeholder='email@company.com' 
              onChange={(e)=>{
                setEmailAddress(e.target.value);
                resetError();
                }}/>
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
          <p>A confirmation email has been sent to <b>{email?email:'ash@loremcompany.com'}. </b> 
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
