import "./signin.css";
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  function handleFocus(e) {
    if(e.target.id=='email') {
      document.querySelector('.mailDiv').classList.add('outline')
    }
    else {
      document.querySelector('.passDiv').classList.add('outline')
    }
  }

  function handleBlur(e) {
    if(e.target.id=='email') {
      document.querySelector('.mailDiv').classList.remove('outline')
    }
    else {
      document.querySelector('.passDiv').classList.remove('outline')
    }
  }
  return (
    <section className="signinSec">
      {/* <p className="loginTitle"><ChevronLeft className="chevron"/> Sign In</p> */}
      <img className="loginIllus" src='/illustration.png' />
      <p className="loginHead">Unleash the<br />Power of Crypto</p>
      <form className="signInForm">
        <label htmlFor="email" className="loginLabel">
          Mail Address
        </label>
        <div onBlur={handleBlur} onFocus={handleFocus} className="mailDiv">
          <Mail className="mailIcon loginIcon" color="#fff"/>
          <input type="email" name="email" id="email" placeholder="johndoe@mail.com"/>
        </div>
        <label htmlFor="password" className="loginLabel">
          Password
        </label>
        <div onBlur={handleBlur} onFocus={handleFocus} className="passDiv">
          <Lock className="loginIcon lockIcon" color="#fff" size={28}/>
          <input type="password" name="password" id="password" placeholder="Enter your password"/>
          <Eye className="eyeIcon" color="#fff" size={28}/>
        </div>
      </form>
      <button onClick={()=>{navigate('/marketplace')}} className="loginBtn px-24 py-4 rounded-xl text-lg font-medium text-black bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 hover:opacity-90 transition-opacity">
        Sign In
      </button>
    </section>
  );
}

export default Signin;
