import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';


const LoginPage = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const loginSuccess = await login(email, password);
            if (!loginSuccess) {
                setError('Đăng nhập thất bại. Vui lòng thử lại.');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Login failed:', error);
            setError('Đăng nhập thất bại. Vui lòng thử lại.');
        }
    };

    return (
        <div>
            <Breadcrumb />
            <section className="section">
                <div className="container margin-bottom-20 card py-20">
                    <div className="wrap_background_aside margin-bottom-40 page_login">
                        <div className="heading-bar text-center">
                            <h1 className="title_page mb-0">Đăng nhập tài khoản</h1>
                            <p className="mb-0">
                                Bạn chưa có tài khoản ?
                                <a
                                    href="/account/register"
                                    className="btn-link-style btn-register"
                                    style={{ textDecoration: "underline" }}
                                >
                                    {" "}
                                    Đăng ký tại đây
                                </a>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-5 offset-md-3 py-3 mx-auto">
                                <div className="page-login ">
                                    <div id="login">
                                        <form
                                            method="post"
                                            action="/account/login"
                                            id="customer_login"
                                            acceptCharset="UTF-8"
                                        >
                                            <input
                                                name="FormType"
                                                type="hidden"
                                                defaultValue="customer_login"
                                            />
                                            <input name="utf8" type="hidden" defaultValue="true" />
                                            <div
                                                className="form-signup margin-bottom-15"
                                                style={{ color: "red" }}
                                            ></div>
                                            <div className="form-signup clearfix">
                                                <fieldset className="form-group">
                                                    <label>
                                                        Account <span className="required">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                        className="form-control "
                                                        defaultValue=""
                                                        name="account"
                                                        id="account"
                                                        placeholder="account"
                                                        required=""
                                                        fdprocessedid="jatzu"
                                                    />
                                                </fieldset>
                                                <fieldset className="form-group">
                                                    <label>
                                                        Mật khẩu <span className="required">*</span>{" "}
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control "
                                                        defaultValue=""
                                                        name="password"
                                                        id="customer_password"
                                                        placeholder="Mật khẩu"
                                                        required=""
                                                        fdprocessedid="85hvd"
                                                    />
                                                    <small className="d-block my-2">
                                                        Quên mật khẩu? Nhấn vào
                                                        <a
                                                            href="#"
                                                            className="btn-link-style text-primary"
                                                            onclick="showRecoverPasswordForm();return false;"
                                                        >
                                                            {" "}
                                                            đây{" "}
                                                        </a>
                                                    </small>
                                                </fieldset>
                                                <div className="pull-xs-left button_bottom a-center  mb-3">
                                                    <button
                                                        className="btn btn-block btn-style  btn-login"
                                                        type="submit"
                                                        value="Đăng nhập"
                                                        fdprocessedid="yvfyo"
                                                    >
                                                        Đăng nhập
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div
                                        id="recover-password"
                                        style={{ display: "none" }}
                                        className="form-signup page-login text-center"
                                    >
                                        <h2>Đặt lại mật khẩu</h2>
                                        <p>
                                            Chúng tôi sẽ gửi cho bạn một email để kích hoạt việc đặt lại mật
                                            khẩu.
                                        </p>
                                        <form
                                            method="post"
                                            action="/account/recover"
                                            id="recover_customer_password"
                                            acceptCharset="UTF-8"
                                        >
                                            <input
                                                name="FormType"
                                                type="hidden"
                                                defaultValue="recover_customer_password"
                                            />
                                            <input name="utf8" type="hidden" defaultValue="true" />
                                            <div className="form-signup" style={{ color: "red" }}></div>
                                            <div className="form-signup clearfix">
                                                <fieldset className="form-group">
                                                    <input
                                                        type="email"
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
                                                        className="form-control form-control-lg"
                                                        defaultValue=""
                                                        name="Email"
                                                        id="recover-email"
                                                        placeholder="Email"
                                                        required=""
                                                    />
                                                </fieldset>
                                            </div>
                                            <div className="action_bottom my-3">
                                                <input
                                                    className="btn btn-style btn-recover btn-block"
                                                    type="submit"
                                                    defaultValue="Lấy lại mật khẩu"
                                                />
                                                <a
                                                    href="#"
                                                    className="btn btn-style link btn-style-active "
                                                    onclick="hideRecoverPasswordForm();return false;"
                                                >
                                                    Quay lại
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="block social-login--facebooks margin-top-20 text-center">
                                    <p className="a-center text-secondary">Hoặc đăng nhập bằng</p>
                                    <a
                                        href="javascript:void(0)"
                                        className="social-login--facebook"
                                        onclick="loginFacebook()"
                                    >
                                        <img
                                            width="129px"
                                            height="37px"
                                            alt="facebook-login-button"
                                            src="//bizweb.dktcdn.net/assets/admin/images/login/fb-btn.svg"
                                        />
                                    </a>
                                    <a
                                        href="javascript:void(0)"
                                        className="social-login--google"
                                        onclick="loginGoogle()"
                                    >
                                        <img
                                            width="129px"
                                            height="37px"
                                            alt="google-login-button"
                                            src="//bizweb.dktcdn.net/assets/admin/images/login/gp-btn.svg"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>

    );
};

export default LoginPage;
