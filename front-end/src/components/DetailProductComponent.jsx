import React, { useEffect, useState, useRef } from 'react'
import { getProduct } from '../services/ProductService'
import Slider from "react-slick";
import ModalZoom from './ModalZoom';
const DetailProductComponent = ({ id }) => {
    // Tạo một product rổng
    const initialState = () => ({
        id: null,
        nameProduct: "",
        description: "",
        supplierEntity: supplierProducer(),
        producerEntity: supplierProducer(),
        categoryEntity: categorySubCategory(),
        subCategoryEntity: {
            id: null,
            nameSubCategorie: "",
            category: categorySubCategory()
        },
        isActive: "",
        isDelete: "",
        status: "",
        productPriceEntity: productPrice(),
        imageProducts: [],
        sizeColorProductsEntity: [],
        rates: [],
        importCouponDetailsEntity: [],
        orderDetailsEntity: []
    });
    const supplierProducer = () => ({
        id: null,
        name: "",
        emailSupplier: "",
        phone: "",
        isActive: "",
        createAt: ""
    });

    const categorySubCategory = () => ({
        id: null,
        nameCategorie: ""
    });

    const productPrice = () => ({
        id: null,
        listPrice: null,
        discount: null,
        discountPrice: null
    });
    // Product
    const [product, setProduct] = useState(initialState);
    useEffect(() => {
        if (id) {
            getProduct(id).then((res) => {
                setProduct(res.data)
            }).catch((err) => {
                console.log(err)
            })
        }

    }, [id])
    5
    // Slider
    const [isProductInit, setIsProductInit] = useState(false);
    const [shiftIndex, setShiftIndex] = useState(0);
    const [carouselKey, setCarouselKey] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [sliderActive, setSliderActive] = useState(false);
    const handleProductInit = () => {
        setSliderActive(false); // Đánh dấu slider không còn được thao tác
        if (!isProductInit) {
            setIsProductInit(true);
        }
    };
    const settingsForThumbnails = {
        slidesToShow: 4,
        vertical: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const handleButtonClickShift = (index) => {
        setShiftIndex(index);
        // Cập nhật giá trị của key mỗi khi shiftIndex thay đổi
        setCarouselKey(prevKey => prevKey + 1);
    };

    const settingsForMainCarousel = {
        key: carouselKey, // Sử dụng key để buộc React re-render carousel khi key thay đổi
        autoplay: false,
        autoplaySpeed: 6000,
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: shiftIndex,
        beforeChange: () => {
            setSliderActive(true); // Đánh dấu slider đang được thao tác
        },
    };


    const handleImageClick = (index) => {
        if (!sliderActive) {
            setSelectedImageIndex(index);
            setModalIsOpen(true);
        }
    };
    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImageIndex(null);

    };
    return (
        <div> <section className='section mt-0 mb-lg-4 mb-3 mb-sm-0'>
            <div className="container">
                <div className="section wrap-padding-15 wp_product_main m-0">
                    <div className="details-product">
                        <div className="row m-sm-0">
                            <div className="product-detail-left product-images bg-white py-3 col-12 col-lg-6 overflow-hidden">
                                <div className="section slickthumb_relative_product_1">
                                    <Slider {...settingsForThumbnails} id="gallery_02">
                                        {product.imageProducts.map((imageProduct, index) => (
                                            <div className={`item ${shiftIndex === index ? 'selected' : ''}`} key={index}>
                                                <a onClick={() => handleButtonClickShift(index)} data-zoom-image={imageProduct.image}>
                                                    <img className="img-fluid" data-img={imageProduct.image} src={imageProduct.image} alt={`Image ${index}`} loading="lazy" />
                                                </a>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="pt-0 col_large_default large-image">
                                    <Slider {...settingsForMainCarousel} id="gallery_1" afterChange={handleProductInit}>
                                        {product.imageProducts.map((imageProduct, index) => (
                                            <div className="item"
                                                data-src={imageProduct.image} key={index}>
                                                <a onClick={() => handleImageClick(index)} className="d-block pos-relative embed-responsive embed-responsive-1by1">
                                                    <picture>
                                                        <source media="(max-width: 480px)"
                                                            srcSet={imageProduct.image} />
                                                        <img loading="lazy" className=" img-fluid" style={{ '--image-scale': '1' , cursor:"pointer"}}
                                                            data-img={imageProduct.image}
                                                            src={imageProduct.image}
                                                            alt={imageProduct.image} width="600" height="600"
                                                            data-src={imageProduct.image} />
                                                    </picture>
                                                </a>
                                            </div>
                                        ))}
                                    </Slider>
                                    <ModalZoom images={product.imageProducts} isOpen={modalIsOpen} onClose={closeModal} selectedImageIndex={selectedImageIndex} />
                                    <div className='share-group d-flex justify-content-center align-items-center mt-5'>
                                        <strong className='share-group__heading mr-3'>Chia sẻ</strong>
                                        <div className='share-group__list'>
                                            <a className='share-group__item facebook' target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a className='share-group__item messenger d-lg-none' target="_blank">
                                                <i className="fab fa-facebook-messenger"></i>
                                            </a>
                                            <a className='share-group__item pinterest' target="_blank">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                            <a className='share-group__item twitter' target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-lg-6 details-pro bg-white py-3 mt-3 mt-lg-0 px-3">
                                <h1 className="title-product">{product.nameProduct}</h1>
                                <form encType="multipart/form-data" id="add-to-cart-form" action="/cart/add"
                                    method="post" className="form_background  margin-bottom-0">
                                    <div className="group-status">
                                        <span className="first_status mr-2">
                                            Thương hiệu:
                                            <span className="status_name">
                                                Đang cập nhật
                                            </span>
                                        </span>
                                        <span className="first_status product_sku">
                                            Mã sản phẩm:
                                            <span className="status_name product-sku" itemProp="sku" content="MousseSocola">
                                                {product.categoryEntity.nameCategorie}
                                            </span>
                                        </span>
                                    </div>
                                    <div className="price-box">
                                        <span className="special-price"><span className="price product-price">{parseInt(product.productPriceEntity.discountPrice).toLocaleString('it-IT')}₫</span>
                                        </span>
                                        <span className="old-price">
                                            <del className=" product-price-old sale">{parseInt(product.productPriceEntity.listPrice).toLocaleString('it-IT')}₫</del>
                                        </span>

                                        <div className="label_product">
                                            - {product.productPriceEntity.discount}%
                                        </div>
                                        <div className="save-price">
                                            (Tiết kiệm: <span>{parseInt(product.productPriceEntity.listPrice - product.productPriceEntity.discountPrice).toLocaleString('it-IT')}₫</span>)
                                        </div>
                                    </div>
                                    <span className="product-promo-tag product-promo-tag--2 product-promo-tag--image"
                                        style={{ '--color': '#a50a06', '--background': 'transparent', '--border-color': 'transparent' }}>
                                        <img src='//bizweb.dktcdn.net/100/419/628/themes/897067/assets/promo_tag_2.png?1704435927037'
                                            alt='Bánh mousse socola' />
                                    </span>
                                    <div className="product-summary">
                                        <div className="rte">
                                            <div className="product-summary-content">
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-product pt-sm-2">
                                        <div className='product-promotion rounded-sm' id='ega-salebox'>
                                            <h3 className='product-promotion__heading rounded-sm d-inline-flex align-items-center'
                                                style={{ backgroundColor: '#f33828', color: '#ffffff' }}>
                                                <img src='//bizweb.dktcdn.net/100/419/628/themes/897067/assets/icon-product-promotion.png?1704435927037'
                                                    alt='Bánh mousse socola' width='16' height='16' className='mr-2' />
                                                KHUYẾN MÃI - ƯU ĐÃI
                                            </h3>

                                            <ul className="promotion-box">

                                                <li>Nhập mã <strong>EGANY</strong> thêm 5% đơn hàng
                                                </li>
                                                <li>Đồng giá Ship toàn quốc 25.000đ </li>
                                                <li>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
                                                <li>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                                            </ul>
                                        </div>
                                        <div className='product-coupon__wrapper my-3'>
                                            <strong className='d-block mb-2'>Mã giảm giá</strong>
                                            <div className='product-coupons coupon-toggle-btn'>
                                                <div className="coupon_item lite">
                                                    <div className='coupon_content'>
                                                        EGA50
                                                    </div>
                                                </div>
                                                <div className="coupon_item lite">
                                                    <div className='coupon_content'>
                                                        EGA15
                                                    </div>
                                                </div>
                                                <div className="coupon_item lite">
                                                    <div className='coupon_content'>
                                                        EGA99K
                                                    </div>
                                                </div>
                                                <div className="coupon_item lite">
                                                    <div className='coupon_content'>
                                                        FREESHIP
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="form_button_details w-100">
                                            <div className="form_product_content type1 ">
                                                <div className="soluong soluong_type_1 ">
                                                    <div className="custom input_number_product custom-btn-number ">
                                                        <button className="btn btn_num num_1 button button_qty" type="button">
                                                            <i className="fa fa-minus" aria-hidden="true"></i></button>
                                                        <input type="text" id="qtym" name="quantity" defaultValue="1"
                                                            maxLength="3" className="form-control prd_quantity pd-qtym" />
                                                        <button className="btn btn_num num_2 button button_qty" type="button">
                                                            <i className="fa fa-plus" aria-hidden="true"></i></button>
                                                    </div>
                                                    <div className="button_actions mb-0">
                                                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                                                            <button type="submit"
                                                                className="btn btn_add_cart btn-cart add_to_cart">
                                                                THÊM VÀO GIỎ
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="button_actions ">
                                                    <button type="submit" className="btn btn_base buynow">
                                                        MUA NGAY
                                                    </button>

                                                </div>


                                                <p className='product-hotline mb-0 text-center'>
                                                    Gọi đặt mua <a className="link" href="tel:1800.0000">1800.0000</a> (7:30
                                                    - 22:00)
                                                </p>

                                            </div>
                                        </div>

                                        <div className="product-policises-wrapper">
                                            <ul className="product-policises list-unstyled py-sm-3 px-sm-3 m-0">
                                                <li className="media">
                                                    <div className="mr-2">
                                                        <img className="img-fluid " loading="lazy" width="24" height="24"
                                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/policy_product_image_1.png?1704435927037"
                                                            alt="Hẹn giờ giao hàng" />
                                                    </div>
                                                    <div className="media-body">
                                                        Hẹn giờ giao hàng
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <div className="mr-2">
                                                        <img className="img-fluid " loading="lazy" width="24" height="24"
                                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/policy_product_image_2.png?1704435927037"
                                                            alt="Ưu đãi mỗi ngày" />
                                                    </div>
                                                    <div className="media-body">
                                                        Ưu đãi mỗi ngày
                                                    </div>
                                                </li>
                                                <li className="media">
                                                    <div className="mr-2">
                                                        <img className="img-fluid " loading="lazy" width="24" height="24"
                                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/policy_product_image_4.png?1704435927037"
                                                            alt="Đổi trả trong vòng 7 ngày" />
                                                    </div>
                                                    <div className="media-body">
                                                        Đổi trả trong vòng 7 ngày
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section></div>
    )
}

export default DetailProductComponent