import React from 'react'
import { useState, useEffect } from 'react';
const HeaderComponent = () => {
  return (
    <div>
      <header className="header header_menu">
        <div className="mid-header wid_100 d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center position-relative">
              <div className=' col-12 header-main'>
                <div className='row align-items-center'>
                  <div className="col-4 d-lg-none menu-mobile">
                    <div className="toggle-nav btn menu-bar mr-4 ml-0 p-0 d-lg-none d-flex text-white">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </div>
                  </div>
                  <div className='col-lg-3 col-4 logo-col'>
                    <a href="/" className="logo-wrapper" title='EGA Cake'>
                      <img loading="lazy" className="img-fluid"
                        src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/logo.png?1704435927037"
                        alt="logo EGA Cake" width="187" height="50" />
                    </a>
                  </div>
                  <div className="col-lg-5 col-12 header-center px-lg-0" id="search-header">
                    <form action="/search" method="get" className="input-group search-bar custom-input-group "
                      role="search">
                      <input type="text" name="query" autoComplete="off"
                        className="input-group-field auto-search form-control " required=""
                        data-placeholder="Bạn cần tìm gì..;
Nhập tên sản phẩm.."/>
                      <input type="hidden" name="type" />
                      <span className="input-group-btn btn-action">
                        <button type="submit" aria-label="search"
                          className="btn text-white icon-fallback-text h-100">
                          <i className="fa fa-search" aria-hidden="true"></i></button>
                      </span>
                    </form>
                    <div className="search-overlay">
                    </div>
                  </div>
                  <div className="col-4 col-lg-4 menu-cart">
                    <ul
                      className="header-right mb-0 list-unstyled d-flex align-items-center justify-content-end">
                      <li className='media d-lg-block d-none '>
                        <a href="/apps/kiem-tra-don-hang" className='d-block text-center' title="Đơn hàng">
                          <img loading="lazy"
                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/order-icon.png?1704435927037"
                            width="24" height="24" className="align-self-center" alt="order-icon" />
                          <span className='d-none d-xl-block mt-1'>
                            Đơn hàng
                          </span>
                        </a>
                      </li>
                      <li className='media d-lg-block d-none '>
                        <a href="/he-thong-cua-hang" className='d-block text-center'
                          title="Hệ thống cửa hàng">
                          <img loading="lazy"
                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/address-icon.png?1704435927037"
                            width="24" height="24" className="align-self-center" alt="phone-icon" />
                          <span className='d-none d-xl-block mt-1'>
                            Cửa hàng
                          </span>
                        </a>
                      </li>
                      <li className='media d-lg-block d-none  '>
                        <a href='/account/login' className='text-center d-block' title="Tài khoản">
                          <img loading="lazy"
                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/account-icon.png?1704435927037"
                            width="24" height="24" alt="account_icon" className="align-self-center" />
                          <span className='d-none d-xl-block mt-1'>Tài khoản</span>
                        </a>
                      </li>
                      <li className="cartgroup">
                        <div className="mini-cart text-xs-center">
                          <a className="img_hover_cart d-block d-xl-flex flex-column align-items-center"
                            href="/cart" title="Giỏ hàng">
                            <div className="cart-icon">
                              <img loading="lazy"
                                src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/cart-icon.png?1704435927037"
                                width="24" height="24" alt="cart_icon" />
                              <span className="count_item count_item_pr">0</span>
                            </div>
                            <span className='d-xl-block d-none mt-1'>Giỏ hàng</span>
                          </a>
                          <div className="top-cart-content card ">
                            <ul id="cart-sidebar" className="mini-products-list count_li list-unstyled">
                              <li className="list-item">
                                <ul></ul>
                              </li>
                              <li className="action"></li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="sub-header d-lg-block d-none" style={{ '--header-background': '#2d2d2d', '--header-color': '#ffffff' }}>
        <div className="container">
          <div className="navigation--horizontal d-md-flex align-items-center d-none">
            <div className=" navigation-horizontal-wrapper ">
              <nav>
                <ul className="navigation-horizontal list-group list-group-flush scroll">
                  <li className="menu-item list-group-item">
                    <a href="/" className="menu-item__link" title="Trang chủ">
                      <span> Trang chủ</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a href="/gioi-thieu" className="menu-item__link" title="Giới thiệu">
                      <span> Giới thiệu</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a href="/khuyen-mai" className="menu-item__link" title="Quà tặng 08/03">
                      <span> Quà tặng 08/03</span>
                    </a>

                  </li>
                  <li className="menu-item list-group-item">
                    <a href="#" className="menu-item__link" title="Chương trình khuyến mãi">
                      <span> Chương trình khuyến mãi</span>
                      <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </a>
                    <div className="submenu scroll  default ">
                      <ul className="submenu__list">
                        <li className="submenu__item submenu__item--main">
                          <a className="link" href="/flash-sales"
                            title="Landing Page - Flash Sales">Landing Page - Flash Sales</a>
                        </li>
                        <li className="submenu__item submenu__item--main">
                          <a className="link" href="/landing-page-black-friday"
                            title="Landing Page - Black Friday">Landing Page - Black Friday</a>
                        </li>
                        <li className="submenu__item submenu__item--main">
                          <a className="link" href="/landing-page-xmas"
                            title="Landing Page - XMas">Landing Page - XMas</a>
                        </li>
                        <li className="submenu__item submenu__item--main">
                          <a className="link" href="/landing-page-food-and-beverage"
                            title="Landing Page - FnB">Landing Page - FnB</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item list-group-item">
                    <a href="/san-pham-noi-bat" className="menu-item__link" title="Bánh ngon mỗi ngày">
                      <span> Bánh ngon mỗi ngày</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a href="/cong-thuc" className="menu-item__link" title="Công thức làm bánh">
                      <span> Công thức làm bánh</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a href="/tin-tuc" className="menu-item__link" title="Chuyên mục làm bánh">
                      <span> Chuyên mục làm bánh</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a href="/lien-he" className="menu-item__link" title="Liên hệ">
                      <span> Liên hệ</span>
                    </a>
                  </li>
                  <li className="menu-item list-group-item">
                    <a href="/lien-he" className="menu-item__link" title="Góp ý / Khiếu nại">
                      <span> Góp ý chúng tôi </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent