import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {useForm} from "../hooks/useForm";
import validator from "validator";

import { startLoginEmailPassword, startGoogleLogin, startFacebookLogin } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";

export const RegisterScreen = () => {

  const fLogo = "../assets/facebook.png";
  const gLogo = "../assets/google.png";

  const dispatch =useDispatch();
  const {msgError} = useSelector(state=>state.ui);
  console.log(msgError);
  const [values, handleInputChange] =useForm({
      name:"",
      email: "",
      password: "",
      password2: "",
  })

  const {name, email, password, password2} = values;
  
  const handleRegister =(e)=> {
      e.preventDefault();

      if(isFormValid()){
          dispatch(startLoginEmailPassword(email,password,name));
          console.log("Formulario correcto");
      }
      
  }

  const isFormValid = ()=>{

      if(name.trim().length === 0){
          dispatch(setError("name is requiered"));
          return false;
      }else if( !validator.isEmail(email) ){
          dispatch(setError("not valid"));
          return false;
      }else if(password !== password2 || password.length <5){
          dispatch(setError("password should be at least 6 characters and match each other"));
          
          return false;
      }

      dispatch(removeError());
      return true;
  }


  return (
    <div  className="auth_main">
      <div className="container w-75 bg-primary mt-5 rounded shadow" >
        <div className="row align-items-stretch">
          <div className="col bg_login d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
              
          </div>
          <div className="col bg-white p-5 rounded-end">

            <div className="text-end">
              <img src="" alt="" />
            </div>

            <h2 className="fw-bold text-center py-5">Crea tu cuenta</h2>
              {/* Login */}

              <form onSubmit={handleRegister}>
                    {
                        msgError && (
                            <div className="auth__alert-error">
                                {msgError}
                            </div>
                        )
                    }

              <div className="mb-4">
                  <label from="text" classname="form-label">Nombre</label>
                  <input type="text" className="form-control" name="name" value={name} onChange={handleInputChange} />
                </div>
                <div className="mb-4">
                  <label from="email" classname="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" name="email" value={email} onChange={handleInputChange} />
                
                </div>
                <div className="mb-4">
                <label from="password" classname="form-label">Contraseña</label>
                  <input type="password" className="form-control" name="password" value={password} onChange={handleInputChange} />
                
                </div>

                <div className="mb-4">
                <label from="password" classname="form-label">Confirmación</label>
                  <input type="password" className="form-control" name="password2" value={password2} onChange={handleInputChange} />
                
                </div>

                <div className="form-group">
                            <input 
                                type="submit" 
                                className="btnSubmit" 
                                value="Crear cuenta" />
                        </div>
                        <br />
                    <hr />
                  <div className="my-3">
                    <span>
                      ¿Ya estas registrado? <Link  className="navbar-brand" to="/auth/login">
                                Inicia Sesión
                      </Link>
                    </span>
                  </div>
              </form>
                    {/*login con redes sociales */}
                    <div className="container w-100 my-5">
                      <div className="row text-center">
                        <div className="col-12">
                          Iniciar sesión
                        </div>
                        <div className="row">
                            <div className="col">
                              <button className="btn btn-outline-primary w-100 my-1">
                                <div className="row align-items-center">
                                    <div className="col-2 d-none d-md-block">
                                      <img src={fLogo} width="32" alt="" />
                                    </div>
                                    <div className="col-10 col-md-10 text-center">
                                      Facebook
                                    </div>

                                </div>
                              </button>
                            </div>
                            <div className="col">
                            <button className="btn btn-outline-danger w-100 my-1">
                                <div className="row align-items-center">
                                    <div className="col-2 d-none d-md-block">
                                      <img src={gLogo} width="32" alt="" />
                                    </div>
                                    <div className="col-12 col-md-10 text-center">
                                      Google
                                    </div>

                                </div>
                              </button>
                            </div>
                        </div>
                      </div>
                    </div>

          </div>
        </div>
      </div>
    </div>
  );
};
