import React, { useEffect, useState } from 'react'

const HomeComponent = () => {

    const [isActive, setIsActive] = useState(false);

    const bannerTopStyle = {
        background: '#000000',
    };
    const icon_megamenu = {
        1: {
            backgroundImage: 'url("//bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_megamenu_1.png?1710378160597")'
        },
        2: {
            backgroundImage: 'url("//bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_megamenu_2.png?1710378160597")'
        },
        3: {
            backgroundImage: 'url("//bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_megamenu_3.png?1710378160597")'
        },
        4: {
            backgroundImage: 'url("//bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_megamenu_4.png?1710378160597")'
        },
        5: {
            backgroundImage: 'url("//bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_megamenu_5.png?1710378160597")'
        },
        6: {
            backgroundImage: 'url("//bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_megamenu_6.png?1710378160597")'
        },
        7: {
            backgroundImage: 'url("//bizweb.dktcdn.net/100/502/883/themes/934584/assets/icon_megamenu_7.png?1710378160597")'
        },
    };

    const svgStyle = {
        position: 'relative',
        top: '1px'
    };

    const relativeCss = {
        position: 'relative',
    };

    const handleClick = () => {
        setIsActive(!isActive); // Đảo ngược trạng thái khi nhấn vào
    };

    return (
        <div>
            <div className="opacity_menu"></div>
            <div className="banner-top d-none d-md-block" style={bannerTopStyle}>
                <div className="container">
                    <a href="/collections/all" title="Banner top">
                        <picture>
                            <source media="(max-width: 567px)" srcSet="//bizweb.dktcdn.net/thumb/large/100/502/883/themes/934584/assets/banner_top.jpg?1710378160597" />
                            <img alt="Banner top" width="1270" height="47" src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/banner_top.jpg?1710378160597" />
                        </picture>
                    </a>
                </div>
            </div>
            <header className="header header-scroll">
                <div className="container">
                    <div className="header-top d-flex align-items-center">
                        <a href="/" className="logo" title="Logo">
                            <picture>
                                <source media="(max-width: 567px)"
                                    srcSet="//bizweb.dktcdn.net/thumb/large/100/502/883/themes/934584/assets/logo-mobile2.png?1710378160597" />
                                <img width="414" height="85"
                                    src="//bizweb.dktcdn.net/100/502/883/themes/934584/assets/logo.png?1710378160597"
                                    alt="Dola Phone" />
                            </picture>
                        </a>
                        <div
                            className={`icon-menu vertical-menu-category d-none d-lg-block ${isActive ? 'active' : ''}`}
                            onClick={handleClick}
                        >
                            <span className="menu-icon">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                    className="svg-inline--fa fa-bars fa-w-14">
                                    <path fill="#ffffff"
                                        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                                        className=""></path>
                                </svg>
                            </span>
                            <span className="vertical-heading-text">Danh mục</span>
                        </div>
                        <div className={`menu-vertical ${isActive ? 'active' : ''}`}>
                            <div className="list_menu_header">
                                <div className="ul nav vertical-nav ul_menu site-nav-vetical">
                                    <div className="nav_item nav-item lv1 li_check ">
                                        <a href="/iphone" title="iPhone" style={icon_megamenu[1]}>iPhone
                                            <i className="fas fa-angle-right">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                    <path
                                                        d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                </svg>
                                            </i>
                                        </a>
                                        <div className="ul_content_right_1">
                                            <div className="row">
                                                <div className="nav_item nav-item lv2 col-lg-4 col-md-4">
                                                    <a href="/iphone-15-series" title="iPhone 15 Series">iPhone 15 Series</a>
                                                    <div className="ul_content_right_2">
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-15"
                                                            title="iPhone 15">iPhone 15</a></div>
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-15-plus"
                                                            title="iPhone 15 Plus">iPhone 15 Plus</a></div>
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-15-pro"
                                                            title="iPhone 15 Pro">iPhone 15 Pro</a></div>
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-15-pro-max"
                                                            title="iPhone 15 Pro Max">iPhone 15 Pro Max</a></div>
                                                    </div>
                                                </div>
                                                <div className="nav_item nav-item lv2 col-lg-4 col-md-4">
                                                    <a href="/iphone-14-series" title="iPhone 14 Series">iPhone 14 Series</a>
                                                    <div className="ul_content_right_2">
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-14-pro-max"
                                                            title="iPhone 14 Pro Max">iPhone 14 Pro Max</a></div>
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-14-pro"
                                                            title="iPhone 14 Pro">iPhone 14 Pro</a></div>
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-14-plus"
                                                            title="iPhone 14 Plus">iPhone 14 Plus</a></div>
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-14"
                                                            title="iPhone 14">iPhone 14</a></div>
                                                    </div>
                                                </div>
                                                <div className="nav_item nav-item lv2 col-lg-4 col-md-4">
                                                    <a href="/iphone-13" title="iPhone 13">iPhone 13</a>
                                                    <div className="ul_content_right_2">
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-13-1"
                                                            title="iPhone 13">iPhone 13</a></div>
                                                        <div className="nav_item nav-item lv3"><a href="/iphone-13-mini"
                                                            title="iPhone 13 mini">iPhone 13 mini</a></div>
                                                    </div>
                                                </div>
                                                <div className="nav_item nav-item lv2 col-lg-4 col-md-4"><a href="/iphone-12"
                                                    title="iPhone 12">iPhone 12</a></div>
                                                <div className="nav_item nav-item lv2 col-lg-4 col-md-4"><a href="/iphone-11"
                                                    title="iPhone 11">iPhone 11</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="nav_item nav-item lv1 li_check ">
                                        <a href="/ipad" title="iPad"
                                            style={icon_megamenu[2]}>iPad
                                            <i className="fas fa-angle-right">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 384 512">
                                                    <path
                                                        d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </div>
                                    <div className="nav_item nav-item lv1 li_check ">
                                        <a href="/watch" title="Watch"
                                        style={icon_megamenu[3]}>Watch
                                            <i className="fas fa-angle-right">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 384 512">
                                                    <path
                                                        d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </div>
                                    <div className="nav_item nav-item lv1 li_check ">
                                        <a href="/mac" title="Mac"
                                            style={icon_megamenu[4]}>Mac
                                            <i className="fas fa-angle-right">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 384 512">
                                                    <path
                                                        d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </div>
                                    <div className="nav_item nav-item lv1 li_check ">
                                        <a href="/airpods" title="AirPods"
                                            style={icon_megamenu[5]}>AirPods
                                        </a>
                                    </div>
                                    <div className="nav_item nav-item lv1 li_check ">
                                        <a href="/am-thanh" title="Âm thanh"
                                            style={icon_megamenu[6]}>Âm
                                            thanh
                                            <i className="fas fa-angle-right">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 384 512">
                                                    <path
                                                        d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </div>
                                    <div className="nav_item nav-item lv1 li_check ">
                                        <a href="/phu-kien" title="Phụ kiện"
                                            style={icon_megamenu[7]}>Phụ
                                            kiện
                                            <i className="fas fa-angle-right">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 384 512">
                                                    <path
                                                        d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                                </svg>
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-header">
                            <div className="search-smart">
                                <form action="/search" method="get" className="header-search-form input-group search-bar"
                                    role="search">
                                    <input type="text" name="query" required
                                        className="input-group-field auto-search search-auto form-control"
                                        placeholder="Bạn cần tìm gì..." autoComplete="off" />
                                    <input type="hidden" name="type" value="product" />
                                    <button type="submit" className="btn icon-fallback-text" aria-label="Tìm kiếm" title="Tìm kiếm">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                                            viewBox="0 0 512 512">
                                            <path fill="#fff"
                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z">
                                            </path>
                                        </svg> </button>
                                </form>
                            </div>
                        </div>
                        <div className="header-control d-none d-xl-flex ">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-telephone" viewBox="0 0 16 16">
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                            </div>
                            <div className="content">
                                <a title="1900 6750" href="tel:19006750" className="button-wishlist">
                                    Hotline<span>1900 6750</span>
                                </a>
                            </div>
                        </div>
                        <div className="header-control d-none d-lg-flex">
                            <div className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path
                                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                            </div>
                            <div className="content">
                                <a title="Hệ thống cửa hàng" href="/he-thong-cua-hang" className="button-wishlist">
                                    Hệ thống<span>cửa hàng</span>
                                </a>
                            </div>
                            <div className="header-control d-none d-lg-flex">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-clipboard2-check" viewBox="0 0 16 16">
                                        <path
                                            d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                                        <path
                                            d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                                        <path
                                            d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z" />
                                    </svg>
                                </div>
                                <div className="content">
                                    <a title="Tra cứu đơn hàng" href="/apps/kiem-tra-don-hang" className="button-wishlist">
                                        Tra cứu<span>đơn hàng</span>
                                    </a>
                                </div>
                            </div>
                            <div className="header-control d-none header-cart block-cart d-lg-flex">
                                <div title="Giỏ hàng" className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 40 40">
                                        <defs></defs>
                                        <g id="ic-cart">
                                            <path id="shopping-bag" className="cls-1"
                                                d="M35.91,36.17,33.24,10.75a1,1,0,0,0-1-.94h-5V8.67a6.47,6.47,0,1,0-12.93,0V9.81h-5a1.05,1.05,0,0,0-1,.94L5.52,36.17a1,1,0,0,0,.93,1.15H34.87a1,1,0,0,0,1.05-1A.41.41,0,0,0,35.91,36.17ZM16.35,8.67a4.38,4.38,0,1,1,8.75,0V9.81H16.35ZM7.73,35.24l2.45-23.33h4.07v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91H25.1v2.3a1,1,0,0,0,1,1.09,1,1,0,0,0,1.09-1V11.91h4.07l2.45,23.33Z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="content">
                                    <a href="/cart" title="Giỏ hàng">
                                        Giỏ hàng
                                        <br></br>
                                        Sản phẩm <span className=" count_item_pr">2</span>
                                    </a>
                                </div>
                                <div className="top-cart-content">
                                    <div className="CartHeaderContainer">
                                    </div>
                                </div>
                            </div>
                            <div className="account-header d-none d-lg-block">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 40 40">
                                        <defs></defs>
                                        <g id="ic-user">
                                            <g id="_6-User" data-name="6-User">
                                                <g id="Group_18" data-name="Group 18">
                                                    <path id="Path_92" data-name="Path 92" className="cls-1"
                                                        d="M20,22.21a6.12,6.12,0,1,0-6.12-6.12h0A6.13,6.13,0,0,0,20,22.21ZM20,12a4.08,4.08,0,1,1-4.08,4.08A4.08,4.08,0,0,1,20,12Z" />
                                                    <path id="Path_93" data-name="Path 93" className="cls-1"
                                                        d="M20,4.88A16.31,16.31,0,1,0,36.31,21.19,16.31,16.31,0,0,0,20,4.88Zm0,2A14.25,14.25,0,0,1,31.93,29a15.23,15.23,0,0,0-21.38-2.47A15.66,15.66,0,0,0,8.07,29,14.25,14.25,0,0,1,20,6.92Zm0,28.54A14.24,14.24,0,0,1,9.35,30.65a13.24,13.24,0,0,1,21.3,0A14.24,14.24,0,0,1,20,35.46Z" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <span>Thông tin</span>
                                <ul>
                                    <li className="li-account"><a rel="nofollow" href="/account/login" title="Đăng nhập">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z">
                                            </path>
                                            <path fillRule="evenodd"
                                                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z">
                                            </path>
                                        </svg>
                                        Đăng nhập</a>
                                    </li>
                                    <li className="li-account"><a rel="nofollow" href="/account/register" title="Đăng ký">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-person-plus" viewBox="0 0 16 16">
                                            <path
                                                d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z">
                                            </path>
                                            <path fillRule="evenodd"
                                                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z">
                                            </path>
                                        </svg>
                                        Đăng ký</a>
                                    </li>
                                    <li className="li-account"><a rel="nofollow" href="/san-pham-yeu-thich" title="Danh sách yêu thích">
                                        <svg style={svgStyle} xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                            <path
                                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z">
                                            </path>
                                        </svg>
                                        Danh sách yêu thích </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="menu-bar d-lg-none d-flex">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bars" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-bars fa-w-14">
                                    <path fill="#ffffff"
                                        d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"
                                        className=""></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`header-menu ${isActive ? 'active' : ''}`}>
                    <div className="container" style={relativeCss}>
                        <div className="header-menu-des">
                            <nav className="header-nav">
                                <ul className="item_big">

                                    <li className="d-block d-lg-none title-danhmuc"><span>Menu chính</span></li>

                                    <li className="nav-item active  ">
                                        <a className="a-img" href="/" title="Trang chủ">
                                            Trang chủ
                                        </a>
                                    </li>

                                    <li className="nav-item  ">
                                        <a className="a-img" href="/gioi-thieu" title="Giới thiệu">
                                            Giới thiệu
                                        </a>
                                    </li>

                                    <li className="nav-item   has-mega ">
                                        <a className="a-img caret-down" href="/collections/all" title="Sản phẩm">
                                            Sản phẩm
                                        </a>
                                        <i className="fa fa-caret-down"></i>


                                        <div className="mega-content d-lg-block d-none">

                                            <ul className="level0">

                                                <li className="level1 parent item fix-navs" data-title="iPhone" data-link="/iphone">
                                                    <a className="hmega" href="/iphone" title="iPhone">iPhone</a>
                                                    <ul className="level1">

                                                        <li className="level2">
                                                            <a href="/iphone-15-series" title="iPhone 15 Series">iPhone 15
                                                                Series</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/iphone-14-series" title="iPhone 14 Series">iPhone 14
                                                                Series</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/iphone-13" title="iPhone 13">iPhone 13</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/iphone-12" title="iPhone 12">iPhone 12</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/iphone-11" title="iPhone 11">iPhone 11</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li className="level1 parent item fix-navs" data-title="iPad" data-link="/ipad">
                                                    <a className="hmega" href="/ipad" title="iPad">iPad</a>
                                                    <ul className="level1">

                                                        <li className="level2">
                                                            <a href="/ipad-pro" title="iPad Pro">iPad Pro</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/ipad-air" title="iPad Air">iPad Air</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/ipad-gen-10-10-9" title="iPad Gen 10">iPad Gen 10</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/ipad-gen-9-10-2" title="iPad Gen 9">iPad Gen 9</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/ipad-mini" title="iPad mini">iPad mini</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li className="level1 parent item fix-navs" data-title="Watch" data-link="/watch">
                                                    <a className="hmega" href="/watch" title="Watch">Watch</a>
                                                    <ul className="level1">

                                                        <li className="level2">
                                                            <a href="/apple-watch-ultra" title="Apple Watch Ultra">Apple Watch
                                                                Ultra</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/apple-watch-s7" title="Apple Watch S7">Apple Watch S7</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/apple-watch-se" title="Apple Watch SE">Apple Watch SE</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/apple-watch-s8" title="Apple Watch S8">Apple Watch S8</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/apple-watch-s9" title="Apple Watch S9">Apple Watch S9</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li className="level1 parent item fix-navs" data-title="Mac" data-link="/mac">
                                                    <a className="hmega" href="/mac" title="Mac">Mac</a>
                                                    <ul className="level1">

                                                        <li className="level2">
                                                            <a href="/macbook" title="MacBook">MacBook</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/mac-studio" title="Mac Studio">Mac Studio</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/imac" title="iMac">iMac</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/mac-mini" title="Mac mini">Mac mini</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/apple-tv" title="Apple TV">Apple TV</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li className="level1 parent item">
                                                    <a className="hmega" href="/airpods" title="AirPods">AirPods</a>
                                                </li>
                                                <li className="level1 parent item fix-navs" data-title="Âm thanh"
                                                    data-link="/am-thanh">
                                                    <a className="hmega" href="/am-thanh" title="Âm thanh">Âm thanh</a>
                                                    <ul className="level1">

                                                        <li className="level2">
                                                            <a href="/loa" title="Loa">Loa</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/tai-nghe" title="Tai nghe">Tai nghe</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                                <li className="level1 parent item fix-navs" data-title="Phụ kiện"
                                                    data-link="/phu-kien">
                                                    <a className="hmega" href="/phu-kien" title="Phụ kiện">Phụ kiện</a>
                                                    <ul className="level1">

                                                        <li className="level2">
                                                            <a href="/phu-kien-apple" title="Phụ kiện Apple">Phụ kiện Apple</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/coc-cap" title="Cốc - Cáp">Cốc - Cáp</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/sac-du-phong" title="Sạc dự phòng">Sạc dự phòng</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/bao-da-op-lung" title="Bao da - Ốp lưng">Bao da - Ốp
                                                                lưng</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/dan-cuong-luc" title="Dán cường lực">Dán cường lực</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/phu-kien-macbook" title="Phụ kiện MacBook">Phụ kiện
                                                                MacBook</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/ban-phim-chuot" title="Bàn phím - Chuột">Bàn phím -
                                                                Chuột</a>
                                                        </li>

                                                        <li className="level2">
                                                            <a href="/balo-tui-chong-shock" title="Balo - Túi chống shock">Balo
                                                                - Túi chống shock</a>
                                                        </li>

                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="item_small d-lg-none d-block">
                                            <li>
                                                <a className="caret-down" href="/iphone" title="iPhone">
                                                    iPhone
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/iphone-15-series" title="iPhone 15 Series" className="a3">iPhone
                                                            15 Series</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-14-series" title="iPhone 14 Series" className="a3">iPhone
                                                            14 Series</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-13" title="iPhone 13" className="a3">iPhone 13</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-12" title="iPhone 12" className="a3">iPhone 12</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-11" title="iPhone 11" className="a3">iPhone 11</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/ipad" title="iPad">
                                                    iPad
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/ipad-pro" title="iPad Pro" className="a3">iPad Pro</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ipad-air" title="iPad Air" className="a3">iPad Air</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ipad-gen-10-10-9" title="iPad Gen 10" className="a3">iPad Gen
                                                            10</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ipad-gen-9-10-2" title="iPad Gen 9" className="a3">iPad Gen 9</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ipad-mini" title="iPad mini" className="a3">iPad mini</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/watch" title="Watch">
                                                    Watch
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/apple-watch-ultra" title="Apple Watch Ultra" className="a3">Apple
                                                            Watch Ultra</a>
                                                    </li>
                                                    <li>
                                                        <a href="/apple-watch-s7" title="Apple Watch S7" className="a3">Apple Watch
                                                            S7</a>
                                                    </li>
                                                    <li>
                                                        <a href="/apple-watch-se" title="Apple Watch SE" className="a3">Apple Watch
                                                            SE</a>
                                                    </li>
                                                    <li>
                                                        <a href="/apple-watch-s8" title="Apple Watch S8" className="a3">Apple Watch
                                                            S8</a>
                                                    </li>
                                                    <li>
                                                        <a href="/apple-watch-s9" title="Apple Watch S9" className="a3">Apple Watch
                                                            S9</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/mac" title="Mac">
                                                    Mac
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/macbook" title="MacBook" className="a3">MacBook</a>
                                                    </li>
                                                    <li>
                                                        <a href="/mac-studio" title="Mac Studio" className="a3">Mac Studio</a>
                                                    </li>
                                                    <li>
                                                        <a href="/imac" title="iMac" className="a3">iMac</a>
                                                    </li>
                                                    <li>
                                                        <a href="/mac-mini" title="Mac mini" className="a3">Mac mini</a>
                                                    </li>
                                                    <li>
                                                        <a href="/apple-tv" title="Apple TV" className="a3">Apple TV</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="" href="/airpods" title="AirPods">
                                                    AirPods
                                                </a>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/am-thanh" title="Âm thanh">
                                                    Âm thanh
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/loa" title="Loa" className="a3">Loa</a>
                                                    </li>
                                                    <li>
                                                        <a href="/tai-nghe" title="Tai nghe" className="a3">Tai nghe</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/phu-kien" title="Phụ kiện">
                                                    Phụ kiện
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/phu-kien-apple" title="Phụ kiện Apple" className="a3">Phụ kiện
                                                            Apple</a>
                                                    </li>
                                                    <li>
                                                        <a href="/coc-cap" title="Cốc - Cáp" className="a3">Cốc - Cáp</a>
                                                    </li>
                                                    <li>
                                                        <a href="/sac-du-phong" title="Sạc dự phòng" className="a3">Sạc dự phòng</a>
                                                    </li>
                                                    <li>
                                                        <a href="/bao-da-op-lung" title="Bao da - Ốp lưng" className="a3">Bao da -
                                                            Ốp lưng</a>
                                                    </li>
                                                    <li>
                                                        <a href="/dan-cuong-luc" title="Dán cường lực" className="a3">Dán cường
                                                            lực</a>
                                                    </li>
                                                    <li>
                                                        <a href="/phu-kien-macbook" title="Phụ kiện MacBook" className="a3">Phụ kiện
                                                            MacBook</a>
                                                    </li>
                                                    <li>
                                                        <a href="/ban-phim-chuot" title="Bàn phím - Chuột" className="a3">Bàn phím -
                                                            Chuột</a>
                                                    </li>
                                                    <li>
                                                        <a href="/balo-tui-chong-shock" title="Balo - Túi chống shock"
                                                            className="a3">Balo - Túi chống shock</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>

                                    </li>
                                    <li className="nav-item  ">
                                        <a className="a-img" href="/tin-tuc" title="Tin tức">
                                            Tin tức
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a className="a-img" href="/review-san-pham" title="Review">
                                            Review
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a className="a-img" href="/cau-hoi-thuong-gap" title="Câu hỏi thường gặp">
                                            Câu hỏi thường gặp
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a className="a-img" href="/tra-cuu-bao-hanh" title="Tra cứu bảo hành">
                                            Tra cứu bảo hành
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a className="a-img" href="/dat-truoc-san-pham" title="Đặt trước">
                                            Đặt trước
                                        </a>
                                    </li>
                                    <li className="nav-item  ">
                                        <a className="a-img" href="/lien-he" title="Liên hệ">
                                            Liên hệ
                                        </a>
                                    </li>
                                    <li className="d-block d-lg-none title-danhmuc"><span>Danh mục sản phẩm</span></li>
                                    <li className="nav-item d-block d-lg-none  danhmuc">
                                        <a className="a-img caret-down" href="/iphone" title="iPhone"
                                            style={icon_megamenu[1]}>
                                            iPhone
                                        </a>
                                        <i className="fa fa-caret-down"></i>
                                        <ul className="item_small">
                                            <li>
                                                <a className="caret-down" href="/iphone-15-series" title="iPhone 15 Series">
                                                    iPhone 15 Series
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/iphone-15" title="iPhone 15" className="a3">iPhone 15</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-15-plus" title="iPhone 15 Plus" className="a3">iPhone 15
                                                            Plus</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-15-pro" title="iPhone 15 Pro" className="a3">iPhone 15
                                                            Pro</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-15-pro-max" title="iPhone 15 Pro Max" className="a3">iPhone
                                                            15 Pro Max</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/iphone-14-series" title="iPhone 14 Series">
                                                    iPhone 14 Series
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/iphone-14-pro-max" title="iPhone 14 Pro Max" className="a3">iPhone
                                                            14 Pro Max</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-14-pro" title="iPhone 14 Pro" className="a3">iPhone 14
                                                            Pro</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-14-plus" title="iPhone 14 Plus" className="a3">iPhone 14
                                                            Plus</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-14" title="iPhone 14" className="a3">iPhone 14</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/iphone-13" title="iPhone 13">
                                                    iPhone 13
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/iphone-13-1" title="iPhone 13" className="a3">iPhone 13</a>
                                                    </li>
                                                    <li>
                                                        <a href="/iphone-13-mini" title="iPhone 13 mini" className="a3">iPhone 13
                                                            mini</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="" href="/iphone-12" title="iPhone 12">
                                                    iPhone 12
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/iphone-11" title="iPhone 11">
                                                    iPhone 11
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item d-block d-lg-none  danhmuc">
                                        <a className="a-img caret-down" href="/ipad" title="iPad"
                                            style={icon_megamenu[2]}>
                                            iPad
                                        </a>
                                        <i className="fa fa-caret-down"></i>
                                        <ul className="item_small">
                                            <li>
                                                <a className="caret-down" href="/ipad-pro" title="iPad Pro">
                                                    iPad Pro
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/ipad-pro-2022" title="iPad Pro 2022" className="a3">iPad Pro
                                                            2022</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/ipad-air" title="iPad Air">
                                                    iPad Air
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/ipad-air-5" title="iPad Air 5" className="a3">iPad Air 5</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="" href="/ipad-gen-10-10-9" title="iPad Gen 10">
                                                    iPad Gen 10
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/ipad-gen-9-10-2" title="iPad Gen 9">
                                                    iPad Gen 9
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/ipad-mini" title="iPad mini">
                                                    iPad mini
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item d-block d-lg-none  danhmuc">
                                        <a className="a-img caret-down" href="/watch" title="Watch"
                                            style={icon_megamenu[3]}>
                                            Watch
                                        </a>
                                        <i className="fa fa-caret-down"></i>
                                        <ul className="item_small">
                                            <li>
                                                <a className="" href="/apple-watch-ultra" title="Apple Watch Ultra">
                                                    Apple Watch Ultra
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/apple-watch-s7" title="Apple Watch S7">
                                                    Apple Watch S7
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/apple-watch-se" title="Apple Watch SE">
                                                    Apple Watch SE
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/apple-watch-s8" title="Apple Watch S8">
                                                    Apple Watch S8
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/apple-watch-s9" title="Apple Watch S9">
                                                    Apple Watch S9
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item d-block d-lg-none  danhmuc">
                                        <a className="a-img caret-down" href="/mac" title="Mac"
                                            style={icon_megamenu[4]}>
                                            Mac
                                        </a>
                                        <i className="fa fa-caret-down"></i>
                                        <ul className="item_small">
                                            <li>
                                                <a className="" href="/macbook" title="MacBook">
                                                    MacBook
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/mac-studio" title="Mac Studio">
                                                    Mac Studio
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/imac" title="iMac">
                                                    iMac
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/mac-mini" title="Mac mini">
                                                    Mac mini
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/apple-tv" title="Apple TV">
                                                    Apple TV
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item  d-block d-lg-none  danhmuc">
                                        <a className="a-img" href="/airpods" title="AirPods"
                                            style={icon_megamenu[5]}>
                                            AirPods
                                        </a>
                                    </li>
                                    <li className="nav-item d-block d-lg-none  danhmuc">
                                        <a className="a-img caret-down" href="/am-thanh" title="Âm thanh"
                                            style={icon_megamenu[6]}>
                                            Âm thanh
                                        </a>
                                        <i className="fa fa-caret-down"></i>
                                        <ul className="item_small">
                                            <li>
                                                <a className="caret-down" href="/loa" title="Loa">
                                                    Loa
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/loa-marshall" title="Loa Marshall" className="a3">Loa Marshall</a>
                                                    </li>
                                                    <li>
                                                        <a href="/loa-bose" title="Loa Bose" className="a3">Loa Bose</a>
                                                    </li>
                                                    <li>
                                                        <a href="/loa-bang-olufsen" title="Loa Bang & Olufsen" className="a3">Loa
                                                            Bang & Olufsen</a>
                                                    </li>
                                                    <li>
                                                        <a href="/loa-harman-kardon" title="Loa Harman/Kardon" className="a3">Loa
                                                            Harman/Kardon</a>
                                                    </li>
                                                    <li>
                                                        <a href="/loa-jbl" title="Loa JBL" className="a3">Loa JBL</a>
                                                    </li>
                                                    <li>
                                                        <a href="/loa-samsung" title="Loa Samsung" className="a3">Loa Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="/loa-lg" title="Loa LG" className="a3">Loa LG</a>
                                                    </li>
                                                    <li>
                                                        <a href="/loa-sony" title="Loa Sony" className="a3">Loa Sony</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a className="caret-down" href="/tai-nghe" title="Tai nghe">
                                                    Tai nghe
                                                </a>
                                                <i className="fa fa-caret-down"></i>
                                                <ul>
                                                    <li>
                                                        <a href="/tai-nghe-apple" title="Tai nghe Apple" className="a3">Tai nghe
                                                            Apple</a>
                                                    </li>
                                                    <li>
                                                        <a href="/tai-nghe-samsung" title="Tai nghe Samsung" className="a3">Tai nghe
                                                            Samsung</a>
                                                    </li>
                                                    <li>
                                                        <a href="/tai-nghe-marshall" title="Tai nghe Marshall" className="a3">Tai
                                                            nghe Marshall</a>
                                                    </li>
                                                    <li>
                                                        <a href="/tai-nghe-bose" title="Tai nghe Bose" className="a3">Tai nghe
                                                            Bose</a>
                                                    </li>
                                                    <li>
                                                        <a href="/tai-nghe-b-o" title="Tai nghe B&O" className="a3">Tai nghe B&O</a>
                                                    </li>
                                                    <li>
                                                        <a href="/tai-nghe-jbl" title="Tai nghe JBL" className="a3">Tai nghe JBL</a>
                                                    </li>
                                                    <li>
                                                        <a href="/tai-nghe-lg" title="Tai nghe LG" className="a3">Tai nghe LG</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item d-block d-lg-none  danhmuc">
                                        <a className="a-img caret-down" href="/phu-kien" title="Phụ kiện"
                                            style={icon_megamenu[7]}>
                                            Phụ kiện
                                        </a>
                                        <i className="fa fa-caret-down"></i>
                                        <ul className="item_small">
                                            <li>
                                                <a className="" href="/phu-kien-apple" title="Phụ kiện Apple">
                                                    Phụ kiện Apple
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/coc-cap" title="Cốc - Cáp">
                                                    Cốc - Cáp
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/sac-du-phong" title="Sạc dự phòng">
                                                    Sạc dự phòng
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/bao-da-op-lung" title="Bao da - Ốp lưng">
                                                    Bao da - Ốp lưng
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/dan-cuong-luc" title="Dán cường lực">
                                                    Dán cường lực
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/phu-kien-macbook" title="Phụ kiện MacBook">
                                                    Phụ kiện MacBook
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/ban-phim-chuot" title="Bàn phím - Chuột">
                                                    Bàn phím - Chuột
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="/balo-tui-chong-shock" title="Balo - Túi chống shock">
                                                    Balo - Túi chống shock
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="d-lg-none d-block item-mb">
                                        <a href="/he-thong-cua-hang" title="Hệ thống cửa hàng">
                                            Hệ thống cửa hàng
                                        </a>

                                        <a href="/apps/kiem-tra-don-hang" title="Tra cứu đơn hàng">
                                            Tra cứu đơn hàng
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="control-menu d-none">
                                <a href="#" id="prev"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="#fff"
                                        d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                                </svg></a>
                                <a href="#" id="next"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path fill="#fff"
                                        d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </div >
    );
}

export default HomeComponent;
