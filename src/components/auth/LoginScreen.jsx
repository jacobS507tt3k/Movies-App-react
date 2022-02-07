
export const LoginScreen = () => {

  const fLogo = "../assets/facebook.png";
  const gLogo = "../assets/google.png";
  return (
    <div  className="auth_main">
      <div className="container w-75 bg-primary mt-5 rounded shadow" >
        <div className="row align-items-stretch">
          <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">
              
          </div>
          <div className="col bg-white p-5 rounded-end">

            <div className="text-end">
              <img src="" alt="" />
            </div>

            <h2 className="fw-bold text-center py-5">Bienvenido</h2>
              {/* Login */}

              <form action="">
                <div className="mb-4">
                  <label from="email" classname="form-label">Correo electrónico</label>
                  <input type="email" className="form-control" name="email"/>
                
                </div>
                <div className="mb-4">
                <label from="password" classname="form-label">Contraseña</label>
                  <input type="password" className="form-control" name="email"/>
                
                </div>
                <div className="mb-4">
                  <input type="checkbox" className="connected" className="form-check-input"/>
                  <label for="coneccted" className="form-check-label">Mantenerme conectado</label>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Iniciar sesión</button>
                </div>
                  <div className="my-3">
                    <span>
                      no tienes cuenta? <a href="">Registrate</a>
                    </span>
                    <br />
                    <hr />
                    <span>
                      <a href=""> Recuperar password</a>
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
