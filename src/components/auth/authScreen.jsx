import { useDispatch, useSelector} from "react-redux";
import { startLoginEmailPassword, startGoogleLogin, startFacebookLogin } from "../../actions/auth";
import { useForm } from "../hooks/useForm";
import { useState } from "react";
import validator from "validator";
import { removeError, setError } from "../../actions/ui";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from 'mdb-react-ui-kit';


export const AuthScreen = () => {

   //registro 

    const {msgError} = useSelector(state=>state.err);

  //console.log(msgError);  
  const [valuesRegister, handleInputRegister] =useForm({
      namer:"",
      emailr: "",
      passwordr: "",
      passwordr2: "",
  })

  const {namer, emailr, passwordr, passwordr2} = valuesRegister;
  
  const handleRegister =(e)=> {
      e.preventDefault();

       if(isFormValid()){ 
          dispatch(startLoginEmailPassword(emailr,passwordr,namer));
          console.log("Formulario correcto");
      }
       
  }

  const isFormValid = ()=>{

      if(namer.trim().length === 0){
          dispatch(setError("name is requiered"));
          return false;
      }else if( !validator.isEmail(emailr) ){
          dispatch(setError("not valid"));
          return false;
      }else if(passwordr !== passwordr2 || passwordr.length <5){
          dispatch(setError("password should be at least 6 characters and match each other"));
          
          return false;
      }

      dispatch(removeError());
      return true;
  } 


 //inicio sesión

  const dispatch = useDispatch();

  const [valuesLogin, handleInputLogin] = useForm({
    lemail: "",
    lpassword: "",
  });

  const { lemail, lpassword } = valuesLogin;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginEmailPassword(lemail, lpassword));
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin(lemail, lpassword));
  };

  const handleFacebookLogin = () => {
    dispatch(startFacebookLogin(lemail, lpassword));
  };

 

  //Login style methods
  const [loginRegisterActive, setBasicActive] = useState('login');

  const handleLoginRegisterClick = (value) => {
    if (value === loginRegisterActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    
    <div className='d-flex justify-content-center mt-5'>
    <div style={{ width: '26rem' }} >
      <MDBTabs pills justify className='mb-3 '>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleLoginRegisterClick('login')}
            active={loginRegisterActive === 'login'}
          >
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleLoginRegisterClick('register')}
            active={loginRegisterActive === 'register'}
          >
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={loginRegisterActive === 'login'}>
          <form onSubmit={handleLogin}>

            <MDBInput className='mb-4' type='email' id='form7Example1' label='Email address' name="lemail"
                  value={lemail}
                  onChange={handleInputLogin}/>
            <MDBInput className='mb-4' type='password' id='form7Example2' label='Password' name="lpassword"
                  value={lpassword}
                  onChange={handleInputLogin}/>

            <MDBRow className='mb-4'>
              <MDBCol className='d-flex justify-content-center'>
                <MDBCheckbox id='form7Example3' label='Remember me' defaultChecked />
              </MDBCol>
              <MDBCol>
                <a href='#!'>Forgot password?</a>
              </MDBCol>
            </MDBRow>

            <MDBBtn type='submit' className='mb-4' block>
              Sign in
            </MDBBtn>
          </form>
          <p className='text-center'>or:</p>
          <div className='text-center mb-3'>
              <p>Sign up with:</p>

              <MDBBtn floating className='mx-1' onClick={handleFacebookLogin}>
                <MDBIcon fab icon='facebook-f' />
              </MDBBtn>

              <MDBBtn floating className='mx-1'>
                <MDBIcon fab icon='google' onClick={handleGoogleLogin}/>
              </MDBBtn>
            </div>

            <div className='text-center'>
              <p>
                Not a member? <a href='#!'>Register</a>
              </p>
            </div>
        </MDBTabsPane>
        <MDBTabsPane show={loginRegisterActive === 'register'}>
          <form onClick={handleRegister}>
            <div className='text-center mb-3'>
              <p>Sign up</p>
            </div>

            <p className='text-center'></p>

            <MDBInput className='mb-4' id='form8Example1' label='Name' name="namer"
                  value={namer}
                  onChange={handleInputRegister}/>
            <MDBInput className='mb-4' type='email' id='form8Example3' label='Email address' name="emailr"
                  value={emailr}
                  onChange={handleInputRegister}/>
            <MDBInput className='mb-4' type='password' id='form8Example4' label='Password' name="passwordr"
                  value={passwordr}
                  onChange={handleInputRegister}/>
            <MDBInput className='mb-4' type='password' id='form8Example5' label='Repeat password' name="passwordr2"
                  value={passwordr2}
                  onChange={handleInputRegister}/>

            <MDBCheckbox
              wrapperClass='d-flex justify-content-center mb-4'
              id='form8Example6'
              label='I have read and agree to the terms'
              defaultChecked
            />

            <MDBBtn type='submit' className='mb-4' block>
              Sign in
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </div>

    </div>
  )
}
