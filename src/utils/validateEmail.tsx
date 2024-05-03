// function isValidEmail(email: string): boolean {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }

const checkEmailInput=(email:string) : boolean=>{
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length === 0 || (emailValidation.test(email))===false || !email) {
        console.log('inValid email, retry: ' + email);
        return  false;
    } 
    else {
        console.log('valid email: ' + email);
        return true
        
    }
}

export const isValidEmail = (emailAddress:string) : boolean=>{
    if(!checkEmailInput(emailAddress)){
        return false
    } else {
        return true
    }
}