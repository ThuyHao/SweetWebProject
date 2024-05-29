import React from 'react'
import '../assets/css/login.css'

const LoginPage = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 contents">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="form-block">
                  <div className="mb-4">
                    <h3>
                      Đăng nhập vào hệ thống <strong>SugerNest</strong>
                    </h3>
                    <p className="mb-4">
                      Chào mừng bạn đến với hệ thống quản lý của SugerNest
                    </p>
                  </div>
                  <form action="#" method="post">
                    <div className="form-group first">
                      <input placeholder='Tài khoản' type="text" className="form-control inputlogin" id="username" />
                    </div>
                    <div className="form-group last mb-4">
                      <input type="password" className="form-control inputlogin" placeholder='Mật khẩu' id="password" />
                    </div>
                    <div className="d-flex mb-5 align-items-center">
                      <span className="ml-auto">
                        <a href="#" className="forgot-pass">
                          Quên mật khẩu?
                        </a>
                      </span>
                    </div>
                    <input type="submit" className="btn btn-pill text-white btn-block btn-primary-login" value="Đăng nhập" />
                    <span className="d-block text-center my-4 text-muted">
                      Hoặc đăng nhập bằng
                    </span>
                    <div className="social-login text-center">
                      <a href="#" className="facebook loginwith">
                        <span className="mr-3" >
                          <i className="fa fa-facebook-f"></i>
                        </span>
                      </a>
                      <a href="#" className="google loginwith">
                        <span className="mr-3" >
                          <i className="fa fa-google" />
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage