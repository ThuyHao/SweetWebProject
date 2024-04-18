import React from 'react'
import { useEffect, useState } from 'react'
import { listProducts } from '../services/ProductService'

const ListProductComponent = () => {

    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        listProducts(currentPage).then((response) => {
            setProducts(response.data.content);
            setTotalPages(response.data.totalPages);
        }).catch((error) => { console.log(error) });
    }, [currentPage]);

    const handleCopy = (event) => {
        const copyText = "Sao chép";
        const copiedText = "Đã chép";
        const coupon = event.currentTarget.dataset.egaCoupon;
        const targetElement = event.currentTarget; // Lưu trữ tham chiếu đến phần tử hiện tại
        targetElement.innerHTML = `<span>${copiedText}</span>`;
        targetElement.classList.add('disabled');
        setTimeout(() => {
            targetElement.innerHTML = `<span>${copyText}</span>`;
            targetElement.classList.remove('disabled');
        }, 3000);
        navigator.clipboard.writeText(coupon);
    }

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };



    return (
        <div>
            <section className="bread-crumb mb-0">
                <span className="crumb-border"></span>
                <div className="container ">
                    <div className="row">
                        <div className="col-12 a-left">
                            <ul className="breadcrumb m-0 px-0 py-2">
                                <li className="home">
                                    <a href="/" className='link'><span>Trang chủ</span></a>
                                    <span className="mr_lr">&nbsp;/&nbsp;</span>
                                </li>
                                <li><strong><span> Tất cả sản phẩm</span></strong></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className='collection_banner mb-3 container text-center'>
                <a className="banner" href="/collections/all" title="Tất cả sản phẩm">
                    <picture>
                        <source media="(min-width: 768px)"
                            srcSet="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037"
                            data-srcset="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037" />
                        <source media="(max-width: 767px)"
                            srcSet="//bizweb.dktcdn.net/thumb/large/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037"
                            data-srcset="//bizweb.dktcdn.net/thumb/large/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037" />
                        <img className=' img-fluid'
                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/collection_main_banner.jpg?1704435927037"
                            loading="lazy" width="1200" height="200" alt="Tất cả sản phẩm" />
                    </picture>
                </a>
            </div>
            <div className="section mb-3">
                <div className='container'>
                    <link rel="preload" as='style' type="text/css"
                        href="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/coupon.css?1704435927037" />

                    <link rel="stylesheet" href="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/coupon.css?1704435927037" />
                    <div className="section_coupons">
                        <div className="container">
                            <div className="row scroll justify-content-xl-center">
                                <div className=" col-md-5 col-lg-6 col-9 col-xl-3">
                                    <div className="coupon_item no-icon">
                                        <div className="coupon_body">
                                            <div className="coupon_head">
                                                <h3 className="coupon_title">NHẬP MÃ: EGA50</h3>
                                                <div className="coupon_desc">Giảm 50% cho đơn hàng giá trị tối thiểu 500K. Mã giảm
                                                    tối đa 200K </div>

                                            </div>
                                            <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                <button className="btn btn-main btn-sm coupon_copy" data-ega-coupon="EGA50" onClick={handleCopy}>
                                                    <span>Sao chép</span></button>
                                                <span className="coupon_info_toggle" data-coupon="EGA50">
                                                    Điều kiện
                                                </span>
                                                <div className="coupon_info">
                                                    - Giá trị đơn hàng tối thiểu 500K. <br />
                                                    - Mỗi khách hàng được sử dụng tối đa 1 lần. </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-md-5 col-lg-6 col-9 col-xl-3">
                                    <div className="coupon_item no-icon">
                                        <div className="coupon_body">
                                            <div className="coupon_head">
                                                <h3 className="coupon_title">NHẬP MÃ: EGA15</h3>
                                                <div className="coupon_desc">Giảm 15% cho đơn hàng giá trị tối thiểu 500k. Mã giảm
                                                    tối đa 100K </div>

                                            </div>
                                            <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                <button className="btn btn-main btn-sm coupon_copy" data-ega-coupon="EGA15" onClick={handleCopy}>
                                                    <span>Sao chép</span></button>
                                                <span className="coupon_info_toggle" data-coupon="EGA15">
                                                    Điều kiện
                                                </span>
                                                <div className="coupon_info">
                                                    - Đơn hàng giá trị tối thiểu 250K. <br />
                                                    - Chỉ áp dụng 1 mã giảm giá trên một đơn hàng. </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className=" col-md-5 col-lg-6 col-9 col-xl-3">
                                    <div className="coupon_item no-icon">
                                        <div className="coupon_body">
                                            <div className="coupon_head">
                                                <h3 className="coupon_title">NHẬP MÃ: EGA99K</h3>
                                                <div className="coupon_desc">Nhập mã EGA99K giảm ngay 99K </div>

                                            </div>
                                            <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                <button className="btn btn-main btn-sm coupon_copy" data-ega-coupon="EGA99K" onClick={handleCopy}>
                                                    <span>Sao chép</span></button>
                                                <span className="coupon_info_toggle" data-coupon="EGA99K">
                                                    Điều kiện
                                                </span>
                                                <div className="coupon_info">
                                                    - Đơn hàng từ 1000K.<br />
                                                    - Chỉ áp dụng 1 mã giảm giá trên một đơn hàng. </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className=" col-md-5 col-lg-6 col-9 col-xl-3">
                                    <div className="coupon_item no-icon">
                                        <div className="coupon_body">
                                            <div className="coupon_head">
                                                <h3 className="coupon_title">NHẬP MÃ: FREESHIP</h3>
                                                <div className="coupon_desc">Nhập mã FREESHIP miễn phí vận chuyển </div>

                                            </div>
                                            <div className="d-flex align-items-center flex-wrap justify-content-between">
                                                <button className="btn btn-main btn-sm coupon_copy" data-ega-coupon="FREESHIP" onClick={handleCopy}>
                                                    <span>Sao chép</span></button>
                                                <span className="coupon_info_toggle" data-coupon="FREESHIP">
                                                    Điều kiện
                                                </span>
                                                <div className="coupon_info">
                                                    - Đơn hàng từ 500K <br />
                                                    - Áp dụng cho khu vực Tp.HCM </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="coupon-modal" className="coupon-modal modal fade " role="dialog" style={{ display: 'none' }}>
                                    <div className="modal-dialog align-vertical">
                                        <div className="modal-content">
                                            <button type="button" className="close window-close" data-dismiss="modal" data-backdrop="false"
                                                aria-label="Close" style={{ zIndex: '9' }}><span aria-hidden="true">×</span></button>
                                            <div className="coupon-content"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section wrap_background">
                <div className="container">
                    <div className="bg_collection section">
                        <div className="coll-head">
                            <h1 className="title_page collection-title mb-0 pb-3">
                                Tất cả sản phẩm </h1>
                            <div className="coll-sortby d-flex justify-content-between align-items-center">
                                <div className="sortPagiBar">
                                    <div className="sort-cate clearfix">
                                        <div id="sort-by" className="d-flex align-items-baseline">
                                            <label className="left">
                                                <span className=''>Sắp xếp: </span>
                                            </label>
                                            <select className="content_ul" >
                                                <option data-sort="name:asc" value="alpha-asc">Tên A &rarr; Z</option>
                                                <option data-sort="name:desc" value="alpha-desc">Tên Z &rarr; A</option>
                                                <option data-sort="price_min:asc" value="price-asc">Giá tăng dần</option>
                                                <option data-sort="price_min:desc" value="price-desc">Giá giảm dần</option>
                                                <option data-sort="created_on:desc" value="created-desc">Hàng mới</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div id="open-filters" className="btn open-filters d-lg-none d-block p-0">
                                    <i className="fa fa-filter"></i>
                                    <span>Lọc</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className='col-lg-3 col-md-12 col-sm-12'>
                                <aside className=" scroll card py-2 dqdt-sidebar sidebar left-content">
                                    <div className="wrap_background_aside asidecollection">
                                        <div className="filter-content aside-filter">
                                            <div className="filter-container">
                                                <button className="btn d-block d-lg-none open-filters p-0">
                                                    <i className="fa fa-arrow-left mr-3 "> </i>
                                                    <b className="d-inline">
                                                        Tìm theo
                                                    </b>
                                                </button>
                                                <div className="filter-container__selected-filter" style={{ display: 'none' }}>
                                                    <div className="filter-container__selected-filter-header clearfix d-none">
                                                        <span className="filter-container__selected-filter-header-title"><i
                                                            className="fa fa-arrow-left hidden-sm-up"></i> Bạn chọn</span>
                                                        <a href=""
                                                            className="filter-container__clear-all">Bỏ hết <i
                                                                className="fa fa-angle-right"></i></a>
                                                    </div>
                                                </div>
                                                <aside className="aside-item filter-vendor">
                                                    <div className="aside-title">
                                                        <h2 className="title-head margin-top-0"><span>Hãng sản xuất</span></h2>
                                                    </div>
                                                    <div className="aside-content filter-group">
                                                        <ul>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-abc">
                                                                        <input type="checkbox" id="filter-abc"
                                                                            data-group="PRODUCT_VENDOR"
                                                                            data-field="vendor.filter_key" data-text=""
                                                                            value="(&#34;ABC&#34;)" data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        ABC
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-ega-cake">
                                                                        <input type="checkbox" id="filter-ega-cake"
                                                                            data-group="PRODUCT_VENDOR"
                                                                            data-field="vendor.filter_key" data-text=""
                                                                            value="(&#34;Ega-Cake&#34;)" data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Ega-Cake
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                                <aside className="aside-item filter-tag-style-1">
                                                    <div className="aside-title">
                                                        <h2 className="title-head margin-top-0"><span>Màu sắc</span></h2>
                                                    </div>
                                                    <div className="aside-content filter-group clearfix scroll">
                                                        <ul style={{ overflow: 'visible' }}>


                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-trang">
                                                                        <input type="checkbox" id="filter-trang"
                                                                            data-group="tag1" data-field="tags"
                                                                            data-text="Trắng" value="(Trắng)"
                                                                            data-operator="OR" />
                                                                        <i className="fa trang" style={{ '--filter-color': '#ffffff' }}></i>
                                                                        Trắng
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-den">
                                                                        <input type="checkbox" id="filter-den" data-group="tag1"
                                                                            data-field="tags" data-text="Đen" value="(Đen)"
                                                                            data-operator="OR" />
                                                                        <i className="fa den" style={{ '--filter-color': '#000000' }}></i>
                                                                        Đen
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-xam">
                                                                        <input type="checkbox" id="filter-xam" data-group="tag1"
                                                                            data-field="tags" data-text="Xám" value="(Xám)"
                                                                            data-operator="OR" />
                                                                        <i className="fa xam" style={{ '--filter-color': '#7e7e7e' }}></i>
                                                                        Xám
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox color"
                                                                        htmlFor="filter-xanh-duong">
                                                                        <input type="checkbox" id="filter-xanh-duong"
                                                                            data-group="tag1" data-field="tags"
                                                                            data-text="Xanh dương" value="(Xanh dương)"
                                                                            data-operator="OR" />
                                                                        <i className="fa xanh-duong"
                                                                            style={{ '--filter-color': '#009cce' }}></i>
                                                                        Xanh dương
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-do">
                                                                        <input type="checkbox" id="filter-do" data-group="tag1"
                                                                            data-field="tags" data-text="Đỏ" value="(Đỏ)"
                                                                            data-operator="OR" />
                                                                        <i className="fa do" style={{ '--filter-color': '#e80000' }}></i>
                                                                        Đỏ
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green  overflow-item ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-hong">
                                                                        <input type="checkbox" id="filter-hong"
                                                                            data-group="tag1" data-field="tags" data-text="Hồng"
                                                                            value="(Hồng)" data-operator="OR" />
                                                                        <i className="fa hong" style={{ '--filter-color': '#ffd1d1' }}></i>
                                                                        Hồng
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green  overflow-item ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-tim">
                                                                        <input type="checkbox" id="filter-tim" data-group="tag1"
                                                                            data-field="tags" data-text="Tím" value="(Tím)"
                                                                            data-operator="OR" />
                                                                        <i className="fa tim" style={{ '--filter-color': '#a000bb' }}></i>
                                                                        Tím
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green  overflow-item ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-xanh-reu">
                                                                        <input type="checkbox" id="filter-xanh-reu"
                                                                            data-group="tag1" data-field="tags"
                                                                            data-text="Xanh rêu" value="(Xanh rêu)"
                                                                            data-operator="OR" />
                                                                        <i className="fa xanh-reu"
                                                                            style={{ '--filter-color': '#ebebeb' }}></i>
                                                                        Xanh rêu
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green  overflow-item ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-kem">
                                                                        <input type="checkbox" id="filter-kem" data-group="tag1"
                                                                            data-field="tags" data-text="Kem" value="(Kem)"
                                                                            data-operator="OR" />
                                                                        <i className="fa kem" style={{ '--filter-color': '#fff8e2' }}></i>
                                                                        Kem
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item color filter-item--check-box filter-item--green  overflow-item ">
                                                                <span>
                                                                    <label className="custom-checkbox color" htmlFor="filter-bac">
                                                                        <input type="checkbox" id="filter-bac" data-group="tag1"
                                                                            data-field="tags" data-text="Bạc" value="(Bạc)"
                                                                            data-operator="OR" />
                                                                        <i className="fa bac" style={{ '--filter-color': '#f0f0f0' }}></i>
                                                                        Bạc
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item-toggle cursor-pointer">
                                                                Xem thêm <i className="fa fa-chevron-down" aria-hidden="true"></i>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                </aside>
                                                <aside className="aside-item filter-price dq-filterxx">
                                                    <div className="aside-title">
                                                        <h2 className="title-head margin-top-0"><span>GIÁ</span></h2>
                                                    </div>
                                                    <div className="aside-content filter-group scroll">
                                                        <div className="showstt d-none">
                                                        </div>
                                                        <ul>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-duoi-1000000">
                                                                        <input type="checkbox" id="filter-duoi-1000000"
                                                                            data-group="Khoảng giá"
                                                                            data-field="price_min" data-text="Dưới 1000000"
                                                                            value="(<1000000)" data-operator="OR" />
                                                                        <i className="fa "></i>
                                                                        Giá dưới 1.000.000₫
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-1000000-2000000">
                                                                        <input type="checkbox" id="filter-1000000-2000000"
                                                                            data-group="Khoảng giá"
                                                                            data-field="price_min" data-text="1000000 - 2000000"
                                                                            value="(>=1000000 AND <=2000000)"
                                                                            data-operator="OR" />
                                                                        <i className="fa "></i>
                                                                        1.000.000₫ - 2.000.000₫
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-2000000-3000000">
                                                                        <input type="checkbox" id="filter-2000000-3000000"
                                                                            data-group="Khoảng giá"
                                                                            data-field="price_min" data-text="2000000 - 3000000"
                                                                            value="(>=2000000 AND <=3000000)"
                                                                            data-operator="OR" />
                                                                        <i className="fa "></i>
                                                                        2.000.000₫ - 3.000.000₫
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-3000000-5000000">
                                                                        <input type="checkbox" id="filter-3000000-5000000"
                                                                            data-group="Khoảng giá"
                                                                            data-field="price_min" data-text="3000000 - 5000000"
                                                                            value="(>=3000000 AND <=5000000)"
                                                                            data-operator="OR" />
                                                                        <i className="fa "></i>
                                                                        3.000.000₫ - 5.000.000₫
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-5000000-7000000">
                                                                        <input type="checkbox" id="filter-5000000-7000000"
                                                                            data-group="Khoảng giá"
                                                                            data-field="price_min" data-text="5000000 - 7000000"
                                                                            value="(>=5000000 AND <=7000000)"
                                                                            data-operator="OR" />
                                                                        <i className="fa "></i>
                                                                        5.000.000₫ - 7.000.000₫
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox"
                                                                        htmlFor="filter-7000000-10000000">
                                                                        <input type="checkbox" id="filter-7000000-10000000"
                                                                            data-group="Khoảng giá"
                                                                            data-field="price_min"
                                                                            data-text="7000000 - 10000000"
                                                                            value="(>=7000000 AND <=10000000)"
                                                                            data-operator="OR" />
                                                                        <i className="fa "></i>
                                                                        7.000.000₫ - 10.000.000₫
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-tren10000000">
                                                                        <input type="checkbox" id="filter-tren10000000"
                                                                            data-group="Khoảng giá"
                                                                            data-field="price_min" data-text="Trên 10000000"
                                                                            value="(>=10000000)" data-operator="OR" />
                                                                        <i className="fa "></i>
                                                                        Giá trên 10.000.000₫
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                                <aside className="aside-item aside-itemxx filter-type">
                                                    <div className="aside-title">
                                                        <h2 className="title-head margin-top-0"><span>Loại sản phẩm</span></h2>
                                                    </div>
                                                    <div className="aside-content filter-group scroll">
                                                        <ul>
                                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-banh-can-lop">
                                                                        <input type="checkbox" id="filter-banh-can-lop"
                                                                            data-group="PRODUCT_TYPE"
                                                                            data-field="product_type.filter_key" data-text=""
                                                                            value="(&#34;Bánh cán lớp&#34;)" data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Bánh cán lớp
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-banh-kem">
                                                                        <input type="checkbox" id="filter-banh-kem"
                                                                            data-group="PRODUCT_TYPE"
                                                                            data-field="product_type.filter_key" data-text=""
                                                                            value="(&#34;Bánh kem&#34;)" data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Bánh kem
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-chocolate">
                                                                        <input type="checkbox" id="filter-chocolate"
                                                                            data-group="PRODUCT_TYPE"
                                                                            data-field="product_type.filter_key" data-text=""
                                                                            value="(&#34;Chocolate&#34;)" data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Chocolate
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li className="filter-item filter-item--check-box filter-item--green ">
                                                                <span>
                                                                    <label className="custom-checkbox" htmlFor="filter-cupcakes">
                                                                        <input type="checkbox" id="filter-cupcakes"
                                                                            data-group="PRODUCT_TYPE"
                                                                            data-field="product_type.filter_key" data-text=""
                                                                            value="(&#34;Cupcakes&#34;)" data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Cupcakes
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                                <aside className="aside-item sidebar-item filter-tag-style-1">
                                                    <div className="aside-title">
                                                        <h2 className="title-head margin-top-0">
                                                            <span>BÁNH THEO MÙA</span>
                                                        </h2>
                                                    </div>
                                                    <div className="module-content aside-content filter-group scroll">
                                                        <ul>
                                                            <li
                                                                className="filter-item filter_size filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" data-group="tag2"
                                                                            data-field="tags" id="filter-le-tinh-nhan"
                                                                            data-text="Lễ tình nhân" value="(Lễ tình nhân)"
                                                                            data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Lễ tình nhân
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item filter_size filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" data-group="tag2"
                                                                            data-field="tags" id="filter-ngay-cua-me"
                                                                            data-text="Ngày của mẹ" value="(Ngày của mẹ)"
                                                                            data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Ngày của mẹ
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item filter_size filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" data-group="tag2"
                                                                            data-field="tags" id="filter-ngay-cua-cha"
                                                                            data-text="Ngày của cha" value="(Ngày của cha)"
                                                                            data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Ngày của cha
                                                                    </label>
                                                                </span>
                                                            </li>
                                                            <li
                                                                className="filter-item filter_size filter-item--check-box filter-item--green">
                                                                <span>
                                                                    <label className="custom-checkbox">
                                                                        <input type="checkbox" data-group="tag2"
                                                                            data-field="tags" id="filter-giang-sinh"
                                                                            data-text="Giáng sinh" value="(Giáng sinh)"
                                                                            data-operator="OR" />
                                                                        <i className="fa"></i>
                                                                        Giáng sinh
                                                                    </label>
                                                                </span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </aside>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="main_container collection col-lg-9 col-12 pl-lg-0">
                                <div className="filter-content aside-filter">
                                    <div className="filter-container">
                                        <div className="filter-container__selected-filter" style={{ display: 'none' }}>
                                            <div className="filter-container__selected-filter-list mb-2 ">
                                                <ul></ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="category-products products">
                                    <div className="products-view products-view-grid collection_reponsive list_hover_pro">
                                        <div className="row product-list content-col">
                                            {/* Render Product */}
                                            {
                                                products.map(product =>
                                                    <div className="col-6  col-sm-3  col-md-3 col-lg-3  product-col" key={product.id}>
                                                        <div className="item_product_main">
                                                            <form action="/cart/add" method="post" className="variants product-action"
                                                                encType="multipart/form-data" data-tags='[]'>
                                                                <div className="product-thumbnail pos-relative">
                                                                    <a className="image_thumb pos-relative embed-responsive embed-responsive-1by1"
                                                                        href="/happy-birthday-chocolate-cream-cake"
                                                                        title="Happy Birthday Chocolate Cream Cake (Meta coupon)">
                                                                        <img loading="lazy"
                                                                            className='product-thumbnail__img product-thumbnail__img--primary'
                                                                            width="480" height="480" style={{ '--image-scale': '1' }}
                                                                            src={product.imageProducts[0].image}
                                                                            alt={product.imageProducts[0].image} />
                                                                        <img loading="lazy"
                                                                            className='product-thumbnail__img product-thumbnail__img--secondary'
                                                                            width="480" height="480" style={{ '--image-scale': '1' }}
                                                                            src={product.imageProducts[1].image}
                                                                            alt={product.imageProducts[0].image} />
                                                                    </a>
                                                                    <div className="label_product d-none">
                                                                        <div className="label_wrapper">
                                                                            - {product.productPrice.discount}%
                                                                        </div>
                                                                    </div>
                                                                    <div className="product-action">
                                                                        <div className="group_action"
                                                                            data-url="/happy-birthday-chocolate-cream-cake">
                                                                            <a title="Xem nhanh"
                                                                                href="/happy-birthday-chocolate-cream-cake"
                                                                                data-handle="happy-birthday-chocolate-cream-cake"
                                                                                className="xem_nhanh btn-circle btn-views btn_view btn right-to quick-view">
                                                                              <i className="fa fa-paperclip" aria-hidden="true"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="product-info">
                                                                    <h3 className="product-name"><a
                                                                        href="/happy-birthday-chocolate-cream-cake"
                                                                        title="Happy Birthday Chocolate Cream Cake (Meta coupon)">{product.nameProduct}</a></h3>
                                                                    <div className="product-item-cta position-relative">
                                                                        <div className="price-box">
                                                                            <span className="price">{parseInt(product.productPrice.discountPrice).toLocaleString('it-IT')}₫</span>
                                                                            <span className="compare-price">{parseInt(product.productPrice.listPrice).toLocaleString('it-IT')}₫</span>
                                                                            <div className="label_product d-inline-block">
                                                                                <div className="label_wrapper">
                                                                                    - {product.productPrice.discount}%
                                                                                </div>
                                                                            </div>

                                                                        </div>

                                                                        <button data-href="/happy-birthday-chocolate-cream-cake"
                                                                            className="product-item-btn btn-style2 btn left-to"
                                                                            title="Tùy chọn" type="button"
                                                                        >
                                                                            <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                        <div className="section pagenav">
                                            <nav className="clearfix relative nav_pagi w_100">
                                                <ul className="pagination clearfix float-right">
                                                    {currentPage !== 1 && (
                                                        <li className="page-item">
                                                            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}><i className="fa fa-angle-left"></i></button>
                                                        </li>
                                                    )}
                                                    {[...Array(totalPages)].map((_, i) => (
                                                        <li key={i} className={currentPage === i + 1 ? "active page-item disabled" : "page-item"}>
                                                            <button className="page-link" onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                                                        </li>
                                                    ))}
                                                    {currentPage !== totalPages && (
                                                        <li className="page-item">
                                                            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
                                                        </li>
                                                    )}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ListProductComponent