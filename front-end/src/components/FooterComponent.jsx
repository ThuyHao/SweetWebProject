import React, { useEffect, useState } from 'react'
import Swiper from 'swiper';

const FooterComponent = () => {
    useEffect(() => {
        const swiperdanhgia = new Swiper('.chinhsach-ft-slider', {
          autoplay: false,
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
            nextEl: '.chinhsach-ft-slider .swiper-button-next',
            prevEl: '.chinhsach-ft-slider .swiper-button-prev',
          },
          breakpoints: {
            300: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 10
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10
            }
          }
        });
    
        return () => {
          swiperdanhgia.destroy();
        };
      }, []); 

    const imgStyle = {
        maxHeight: '50px',
        width: 'auto'
      };
    const marginBottom10px = {
        marginBottom : '10px'
    }

  return (
    <div>
        <footer className="footer">
        <div className="top-footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-7 col-xl-6">
                        <form id="mc-form" className="newsletter-form" data-toggle="validator">
                            <input aria-label="Địa chỉ Email" type="email" className="form-control"
                                placeholder="Nhập email nhận tin khuyến mãi" name="EMAIL" required autoComplete="off" />
                            <button className="btn btn-default" type="button" aria-label="Đăng ký nhận tin"
                                name="subscribe">ĐĂNG KÝ</button>
                        </form>
                        <div className="mailchimp-alerts ">
                            <div className="mailchimp-submitting"></div>
                            <div className="mailchimp-success"></div>
                            <div className="mailchimp-error"></div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 col-xl-6">
                        <div className="footer-social">
                            <span>Kết nối với chúng tôi:</span>
                            <ul className="social">
                                <li><a href="#" title="Zalo"><img width="32" height="32" title="Zalo" className="lazyload"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                            data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/zalo.png?1710378160597"/></a>
                                </li>
                                <li><a href="#" title="Facebook"><img width="32" height="32" title="Facebook"
                                            className="lazyload"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                            data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/facebook.png?1710378160597"/></a>
                                </li>
                                <li><a href="#" title="Youtube"><img width="32" height="32" title="Youtube"
                                            className="lazyload"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                            data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/youtube.png?1710378160597"/></a>
                                </li>
                                <li><a href="#" title="Google"><img width="32" height="32" title="Google"
                                            className="lazyload"
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                            data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/google.png?1710378160597"/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="top-footer2">
            <div className="container">
                <div className="block-background">
                    <div className="row  align-items-center">
                        <div className="col-lg-5 col-xl-6 col-12">
                            <div className="chinhsach-ft-slider swiper-container p-5">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img width="54" height="54" className="lazyload"
                                            src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/lazy.png?1710378160597"
                                            data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/chinhsach_footer_1.png?1710378160597"
                                            alt="Thanh toán<br>khi nhận hàng"/>
                                        <span>Thanh toán<br></br>khi nhận hàng</span>
                                    </div>

                                    <div className="swiper-slide">
                                        <img width="54" height="54" className="lazyload"
                                            src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/lazy.png?1710378160597"
                                            data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/chinhsach_footer_2.png?1710378160597"
                                            alt="Cam kết uy tính<br>hàng chính hãng"/>
                                        <span>Cam kết uy tính<br></br>hàng chính hãng</span>
                                    </div>

                                    <div className="swiper-slide">
                                        <img width="54" height="54" className="lazyload"
                                            src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/lazy.png?1710378160597"
                                            data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/chinhsach_footer_3.png?1710378160597"
                                            alt="Giao hàng<br>miễn phí 2h"/>
                                        <span>Giao hàng<br></br>miễn phí 2h</span>
                                    </div>



                                    <div className="swiper-slide">
                                        <img width="54" height="54" className="lazyload"
                                            src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/lazy.png?1710378160597"
                                            data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/chinhsach_footer_4.png?1710378160597"
                                            alt="14 ngày đổi trả<br>miễn phí"/>
                                        <span>14 ngày đổi trả<br></br>miễn phí</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-xl-6 col-12">
                            <ul className="hotline">

                                <li>
                                    <div className="title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="bi bi-question-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14" />
                                        </svg>
                                        KHIẾU NẠI, GÓP Ý
                                    </div>
                                    <a href="tel:19006750" title="19006750">19006750</a>
                                </li>
                                <li>
                                    <div className="title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                        TƯ VẤN
                                    </div>
                                    <a href="tel:19006750" title="19006750">19006750</a>
                                </li>
                                <li>
                                    <div className="title">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                        </svg>
                                        TÌM CHI NHÁNH
                                    </div>
                                    <a href="/he-thong-cua-hang" title="Hệ thống Dola">Hệ thống Dola</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mid-footer">
            <div className="container">
                <div className="row row-fix">


                    <div className="col-6 col-md-6 col-lg-3 col-xl-3 link-list col-footer footer-click col-fix">
                        <h4 className="title-menu title-menu2">
                            Chính sách

                        </h4>
                        <ul className="list-menu hidden-mobile">

                            <li><a href="/chinh-sach-thanh-vien" title="Chính sách thành viên">Chính sách thành viên</a>
                            </li>

                            <li><a href="/chinh-sach-thanh-toan" title="Chính sách thanh toán">Chính sách thanh toán</a>
                            </li>

                            <li><a href="/chinh-sach-bao-hanh-va-bao-tri" title="Chính sách bảo hành và bảo trì">Chính
                                    sách bảo hành và bảo trì</a></li>

                            <li><a href="/chinh-sach-van-chuyen-vao-giao-nhan"
                                    title="Chính sách vận chuyển vào giao nhận">Chính sách vận chuyển vào giao nhận</a>
                            </li>

                            <li><a href="/bao-mat-thong-tin-ca-nhan" title="Bảo mật thông tin cá nhân">Bảo mật thông tin
                                    cá nhân</a></li>

                        </ul>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3 col-xl-3 link-list col-footer footer-click col-fix">
                        <h4 className="title-menu title-menu2">
                            Hỗ trợ

                        </h4>
                        <ul className="list-menu hidden-mobile">

                            <li><a href="/huong-dan-mua-hang" title="Hướng dẫn mua hàng">Hướng dẫn mua hàng</a></li>

                            <li><a href="/huong-dan-thanh-toan" title="Hướng dẫn thanh toán">Hướng dẫn thanh toán</a>
                            </li>

                            <li><a href="/huong-dan-giao-nhan" title="Hướng dẫn giao nhận">Hướng dẫn giao nhận</a></li>

                            <li><a href="/dieu-khoan-dich-vu" title="Điều khoản dịch vụ">Điều khoản dịch vụ</a></li>

                            <li><a href="/cau-hoi-thuong-gap" title="Câu hỏi thường gặp">Câu hỏi thường gặp</a></li>

                        </ul>

                    </div>
                    <div className="col-6 col-md-6 col-lg-3 col-xl-3 link-list col-footer footer-click col-fix">
                        <h4 className="title-menu title-menu2">
                            Hỗ trợ

                        </h4>
                        <ul className="list-menu hidden-mobile">

                            <li><a href="/san-pham-yeu-thich" title="Sản phẩm yêu thích">Sản phẩm yêu thích</a></li>

                            <li><a href="/so-sanh-san-pham" title="So sánh sản phẩm">So sánh sản phẩm</a></li>

                            <li><a href="/he-thong-cua-hang" title="Hệ thống cửa hàng">Hệ thống cửa hàng</a></li>

                            <li><a href="/tra-cuu-bao-hanh" title="Tra cứu bảo hành">Tra cứu bảo hành</a></li>

                            <li><a href="/account/login" title="Đăng nhập tài khoản">Đăng nhập tài khoản</a></li>

                            <li><a href="/lien-he" title="Liên hệ">Liên hệ</a></li>

                        </ul>

                    </div>
                    <div className="col-6 col-md-6 col-lg-3 col-xl-3 link-list col-footer footer-click col-fix">
                        <h4 className="title-menu title-menu2">
                            Danh mục nổi bật

                        </h4>
                        <ul className="list-menu hidden-mobile">

                            <li><a href="/iphone" title="iPhone">iPhone</a></li>

                            <li><a href="/ipad" title="iPad">iPad</a></li>

                            <li><a href="/watch" title="Watch">Watch</a></li>

                            <li><a href="/mac" title="Mac">Mac</a></li>

                            <li><a href="/airpods" title="AirPods">AirPods</a></li>

                            <li><a href="/am-thanh" title="Âm thanh">Âm thanh</a></li>

                            <li><a href="/phu-kien" title="Phụ kiện">Phụ kiện</a></li>

                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-footer">
            <div className="container">
                <div className="row row-fix">
                    <div className="col-12 col-md-12 col-lg-12 col-xl-5 ft-info col-fix">
                        <a href="/" className="logo-ft" title="Logo">
                            <img style={imgStyle} width="414" height="85" className="lazyload"
                                src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/lazy.png?1710378160597"
                                data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/logo-ft.png?1710378160597"
                                alt="Dola Phone"/>
                        </a>
                        <div className="content-ft">
                            Hệ thống bán lẻ smartphone, máy tính bảng, MacBook, thiết bị công nghệ chính hãng với giá
                            tốt, có trả góp 0%, giao hàng nhanh miễn phí.
                        </div>
                        <div className="group-address">
                            <ul>
                                <li><b>Địa chỉ: </b><span>

                                        70 Lữ Gia, Phường 15, Quận 11, TP.HCM

                                    </span></li>
                                <li>
                                    <b>Điện thoại: </b><a title="1900 6750" href="tel:19006750">1900 6750</a>
                                </li>
                                <li>
                                    <b>Email: </b><a title="support@sapo.vn"
                                        href="mailto:support@sapo.vn">support@sapo.vn</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-4 col-fix">
                        <h4 className="title-menu">
                            Mạng xã hội
                        </h4>
                        <ul className="call-footer">

                            <li>
                                <span className="title">MUA ONLINE (08:00 - 21:00 mỗi ngày)</span>
                                <a href="tel:19006750" title="19006750">19006750</a>
                                <span className="content">Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
                            </li>


                            <li>
                                <span className="title">GÓP Ý & KHIẾU NẠI (08:30 - 20:30)</span>
                                <a href="tel:19006750" title="19006750">19006750</a>
                                <span className="content">Tất cả các ngày trong tuần (Trừ tết Âm Lịch)</span>
                            </li>

                        </ul>

                    </div>
                    <div className="col-12 col-md-6 col-lg-6 col-xl-3 col-fix">

                        <h4 className="title-menu" style={marginBottom10px}>
                            Liên kết sàn
                        </h4>
                        <ul className="social" style={marginBottom10px}>

                            <li><a href="#" title="Shopee"><img width="32" height="32" title="Shopee" className="lazyload"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                        data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/shopee.png?1710378160597"/></a>
                            </li>


                            <li><a href="#" title="Lazada"><img width="32" height="32" title="Lazada" className="lazyload"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                        data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/lazada.png?1710378160597"/></a>
                            </li>


                            <li><a href="#" title="Tiki"><img width="32" height="32" title="Tiki" className="lazyload"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                        data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/tiki.png?1710378160597"/></a>
                            </li>


                            <li><a href="#" title="Sendo"><img width="32" height="32" title="Sendo" className="lazyload"
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                                        data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/sendo.png?1710378160597"/></a>
                            </li>

                        </ul>
                        <h4 className="title-menu" style={marginBottom10px}>
                            Hình thức thanh toán
                        </h4>
                        <ul className="thanhtoan">

                            <li><img width="57" height="35" alt="Payment 1"
                                    data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/payment_1.png?1710378160597"
                                    className="lazyload"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"/>
                            </li>
                            <li><img width="57" height="35" alt="Payment 2"
                                    data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/payment_2.png?1710378160597"
                                    className="lazyload"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"/>
                            </li>
                            <li><img width="57" height="35" alt="Payment 3"
                                    data-src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/payment_3.png?1710378160597"
                                    className="lazyload"
                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"/>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div id="copyright" className="copyright">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-lg-12">
                        <span className="copy-right">Bản quyền thuộc về <b>Dola theme</b>.</span>
                        <span className="opacity1">
                            Cung cấp bởi
                            <a href="https://www.sapo.vn/?utm_campaign=cpn:kho_theme-plm:footer&utm_source=Tu_nhien&utm_medium=referral&utm_content=fm:text_link-km:-sz:&utm_term=&campaign=kho_theme-sapo"
                                rel="noopener" title="Sapo" target="_blank">Sapo</a>
                        </span>
                    </div>


                </div>
            </div>
        </div>
    </footer>

    <a href="#" className="backtop" title="Lên đầu trang">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="angle-up" role="img"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg-inline--fa fa-angle-up fa-w-10">
            <path fill="currentColor"
                d="M168.5 164.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 229.3 40.3 347.8c-4.7 4.7-12.3 4.7-17 0L3.5 328c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0z"
                className=""></path>
        </svg>
    </a>
    </div>
  )
}

export default FooterComponent