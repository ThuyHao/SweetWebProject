import React from 'react'

const Navigation = () => {
    return (
        <div className="subheader">
            <div className="toogle-nav-wrapper">
                <div className="icon-bar btn menu-bar mr-2 p-0 d-inline-flex">
                    <span className="bar" />
                    <span className="bar" />
                    <span className="bar" />
                </div>
                <strong>DANH MỤC SẢN PHẨM</strong>
                <div className="toogle-nav-focus-area" />
                <div className="menu-wrapper">
                    <div className="navigation-wrapper">
                        <nav className="h-100">
                            <ul className="navigation list-group list-group-flush scroll">
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Tổng hơp khuyến mãi"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_1.png?1704435927037"
                                            alt="Tổng hơp khuyến mãi"
                                        />
                                        <span>Tổng hơp khuyến mãi</span>
                                    </a>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Bộ sưu tập bánh"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_2.png?1704435927037"
                                            alt="Bộ sưu tập bánh"
                                        />
                                        <span>Bộ sưu tập bánh</span>
                                    </a>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Bánh Chocolate"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_3.png?1704435927037"
                                            alt="Bánh Chocolate"
                                        />
                                        <span>Bánh Chocolate</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Bánh Chocolate </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh gato chocolate hương dâu"
                                                    >
                                                        Bánh gato chocolate hương dâu
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại nhỏ"
                                                    >
                                                        Loại nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại to"
                                                    >
                                                        Loại to
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a className="link" href="/" title="Loại đặc biệt">
                                                        Loại đặc biệt
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh brownies chocolate"
                                                    >
                                                        Bánh brownies chocolate
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại ít ngọt"
                                                    >
                                                        Loại ít ngọt
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại đắng(nhiều socola)"
                                                    >
                                                        Loại đắng(nhiều socola)
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại đặc biệt"
                                                    >
                                                        Loại đặc biệt
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh muffin cà phê chocolate"
                                                    >
                                                        Bánh muffin cà phê chocolate
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại 10% cà phê"
                                                    >
                                                        Loại 10% cà phê
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại 30% cà phê"
                                                    >
                                                        Loại 30% cà phê
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại 50% cà phê"
                                                    >
                                                        Loại 50% cà phê
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh ốc quế chocolate"
                                                    >
                                                        Bánh ốc quế chocolate
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị Hong Kong"
                                                    >
                                                        Vị Hong Kong
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị Korea"
                                                    >
                                                        Vị Korea
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Đặc biệt"
                                                    >
                                                        Đặc biệt
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Lamington"
                                                    >
                                                        Bánh Lamington
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Lamington vị nguyên bản"
                                                    >
                                                        Lamington vị nguyên bản
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Lamington vị trà xanh"
                                                    >
                                                        Lamington vị trà xanh
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Lamington vị dâu"
                                                    >
                                                        Lamington vị dâu
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh chocolate flan"
                                                    >
                                                        Bánh chocolate flan
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại 2 lớp"
                                                    >
                                                        Loại 2 lớp
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại 3 lớp"
                                                    >
                                                        Loại 3 lớp
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a className="link" href="/" title="Loại đặc biệt 5 lớp">
                                                        Loại đặc biệt 5 lớp
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Bánh Mousse"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_4.png?1704435927037"
                                            alt="Bánh Mousse"
                                        />
                                        <span>Bánh Mousse</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Bánh Mousse </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse sữa chua"
                                                    >
                                                        Mousse sữa chua
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mix hoa quả"
                                                    >
                                                        Mix hoa quả
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Cho người ăn kiêng(ít đường)"
                                                    >
                                                        Cho người ăn kiêng(ít đường)
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="VỊ nguyên bản"
                                                    >
                                                        VỊ nguyên bản
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse chanh dây"
                                                    >
                                                        Mousse chanh dây
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị chua chua ngọt ngọt"
                                                    >
                                                        Vị chua chua ngọt ngọt
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị ngọt nhiều"
                                                    >
                                                        Vị ngọt nhiều
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mix thêm trái cây"
                                                    >
                                                        Mix thêm trái cây
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse xoài"
                                                    >
                                                        Mousse xoài
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size nhỏ"
                                                    >
                                                        Size nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size lớn"
                                                    >
                                                        Size lớn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Đặc biệt"
                                                    >
                                                        Đặc biệt
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse dâu tây"
                                                    >
                                                        Mousse dâu tây
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size nhỏ"
                                                    >
                                                        Size nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size lớn"
                                                    >
                                                        Size lớn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a className="link" href="/" title="Đặc biệt">
                                                        Đặc biệt
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse việt quất"
                                                    >
                                                        Mousse việt quất
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size 18cm"
                                                    >
                                                        Size 18cm
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size 25cm"
                                                    >
                                                        Size 25cm
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size 30cm"
                                                    >
                                                        Size 30cm
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse thanh long"
                                                    >
                                                        Mousse thanh long
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse thanh long đỏ"
                                                    >
                                                        Mousse thanh long đỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse thanh long trắng"
                                                    >
                                                        Mousse thanh long trắng
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mousse thanh long thập cẩm"
                                                    >
                                                        Mousse thanh long thập cẩm
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Bánh Mì"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_5.png?1704435927037"
                                            alt="Bánh Mì"
                                        />
                                        <span>Bánh Mì</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Bánh Mì </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì Pháp"
                                                    >
                                                        Bánh mì Pháp
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Baguette"
                                                    >
                                                        Baguette
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sừng bò"
                                                    >
                                                        Sừng bò
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a className="link" href="/collections/all" title="Pogne">
                                                        Pogne
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Pain de Campage"
                                                    >
                                                        Pain de Campage
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Pain de Mie"
                                                    >
                                                        Pain de Mie
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Pain aux noix"
                                                    >
                                                        Pain aux noix
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì nướng Kaya"
                                                    >
                                                        Bánh mì nướng Kaya
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Kaya vị cổ điển"
                                                    >
                                                        Kaya vị cổ điển
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Biến tấu với bánh mì nâu thái lát"
                                                    >
                                                        Biến tấu với bánh mì nâu thái lát
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì Mitrailette"
                                                    >
                                                        Bánh mì Mitrailette
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size nhỏ"
                                                    >
                                                        Size nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size phổ thông"
                                                    >
                                                        Size phổ thông
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size lớn"
                                                    >
                                                        Size lớn
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì Medianoche"
                                                    >
                                                        Bánh mì Medianoche
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size nhỏ"
                                                    >
                                                        Size nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size phổ thông"
                                                    >
                                                        Size phổ thông
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size lớn"
                                                    >
                                                        Size lớn
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì Việt Nam"
                                                    >
                                                        Bánh mì Việt Nam
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì cay"
                                                    >
                                                        Bánh mì cay
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì chả cá"
                                                    >
                                                        Bánh mì chả cá
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì xíu mại"
                                                    >
                                                        Bánh mì xíu mại
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh mì thịt nướng"
                                                    >
                                                        Bánh mì thịt nướng
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Jambon"
                                                    >
                                                        Jambon
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Jambon không da"
                                                    >
                                                        Jambon không da
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Jambon có da"
                                                    >
                                                        Jambon có da
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Jambon đặc biệt"
                                                    >
                                                        Jambon đặc biệt
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Bánh kem"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_6.png?1704435927037"
                                            alt="Bánh kem"
                                        />
                                        <span>Bánh kem</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Bánh kem </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh tiramisu"
                                                    >
                                                        Bánh tiramisu
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh tiramisu 2 vị"
                                                    >
                                                        Bánh tiramisu 2 vị
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh tiramisu 5 vị"
                                                    >
                                                        Bánh tiramisu 5 vị
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh tiramisu đặc biệt"
                                                    >
                                                        Bánh tiramisu đặc biệt
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh kem lạnh(ice cream cake)"
                                                    >
                                                        Bánh kem lạnh(ice cream cake)
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị trái cây"
                                                    >
                                                        Vị trái cây
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị socola"
                                                    >
                                                        Vị socola
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị bơ sữa"
                                                    >
                                                        Vị bơ sữa
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh cheesecake"
                                                    >
                                                        Bánh cheesecake
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Cheesecake oreo"
                                                    >
                                                        Cheesecake oreo
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Cheesecake chanh dây"
                                                    >
                                                        Cheesecake chanh dây
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Cheesecake matcha"
                                                    >
                                                        Cheesecake matcha
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Cheesecake việt quất"
                                                    >
                                                        Cheesecake việt quất
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Bánh ngọt"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_7.png?1704435927037"
                                            alt="Bánh ngọt"
                                        />
                                        <span>Bánh ngọt</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Bánh ngọt </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Macaron Pháp"
                                                    >
                                                        Bánh Macaron Pháp
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp 6 bánh"
                                                    >
                                                        Hộp 6 bánh
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp 10 bánh"
                                                    >
                                                        Hộp 10 bánh
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp lớn 20 bánh"
                                                    >
                                                        Hộp lớn 20 bánh
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Táo Mỹ"
                                                    >
                                                        Bánh Táo Mỹ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 1 người ăn"
                                                    >
                                                        Set 1 người ăn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 3 người ăn"
                                                    >
                                                        Set 3 người ăn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 5 người ăn"
                                                    >
                                                        Set 5 người ăn
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Donut Mỹ"
                                                    >
                                                        Bánh Donut Mỹ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Donut vị socola"
                                                    >
                                                        Donut vị socola
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Donut vòng tròn"
                                                    >
                                                        Donut vòng tròn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Donut vị trái cây"
                                                    >
                                                        Donut vị trái cây
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Mochi Nhật Bản"
                                                    >
                                                        Bánh Mochi Nhật Bản
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Daifuku Mochi"
                                                    >
                                                        Daifuku Mochi
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Kusa Mochi"
                                                    >
                                                        Kusa Mochi
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mochi kem"
                                                    >
                                                        Mochi kem
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sakura Mochi"
                                                    >
                                                        Sakura Mochi
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hanabira Mochi"
                                                    >
                                                        Hanabira Mochi
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Black Forest Đức"
                                                    >
                                                        Bánh Black Forest Đức
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size nhỏ"
                                                    >
                                                        Size nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size phổ thông"
                                                    >
                                                        Size phổ thông
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size lớn"
                                                    >
                                                        Size lớn
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Limburg Pie Hà Lan"
                                                    >
                                                        Bánh Limburg Pie Hà Lan
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 1 người"
                                                    >
                                                        Set 1 người
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 3 người"
                                                    >
                                                        Set 3 người
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 5 người"
                                                    >
                                                        Set 5 người
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Bánh bông lan"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_8.png?1704435927037"
                                            alt="Bánh bông lan"
                                        />
                                        <span>Bánh bông lan</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Bánh bông lan </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Pound cake"
                                                    >
                                                        Pound cake
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Pound cake cổ điển"
                                                    >
                                                        Pound cake cổ điển
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Pound cake vị nho đen"
                                                    >
                                                        Pound cake vị nho đen
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Pound cake vị việt quất"
                                                    >
                                                        Pound cake vị việt quất
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Butter cake"
                                                    >
                                                        Butter cake
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 1 người ăn"
                                                    >
                                                        Set 1 người ăn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 3 người ăn"
                                                    >
                                                        Set 3 người ăn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 5 người ăn"
                                                    >
                                                        Set 5 người ăn
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Foam cake"
                                                    >
                                                        Foam cake
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị nguyên bản"
                                                    >
                                                        Vị nguyên bản
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Foam cake dâu tây"
                                                    >
                                                        Foam cake dâu tây
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Foam cake nho đen"
                                                    >
                                                        Foam cake nho đen
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Chiffon cake"
                                                    >
                                                        Chiffon cake
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Chiffon cake bông lan trà xanh"
                                                    >
                                                        Chiffon cake bông lan trà xanh
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Chiffon cake lá dứa"
                                                    >
                                                        Chiffon cake lá dứa
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Chiffon cake trứng muối phô mai"
                                                    >
                                                        Chiffon cake trứng muối phô mai
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sponge cake"
                                                    >
                                                        Sponge cake
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sponge cake cơ bản"
                                                    >
                                                        Sponge cake cơ bản
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sponge cake socola"
                                                    >
                                                        Sponge cake socola
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sponge cake trái cây"
                                                    >
                                                        Sponge cake trái cây
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Bánh rau câu"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_9.png?1704435927037"
                                            alt="Bánh rau câu"
                                        />
                                        <span>Bánh rau câu</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Bánh rau câu </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Rau câu dừa"
                                                    >
                                                        Rau câu dừa
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Nguyên trái"
                                                    >
                                                        Nguyên trái
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh đổ khuôn"
                                                    >
                                                        Bánh đổ khuôn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mix 5 vị 5 lớp"
                                                    >
                                                        Mix 5 vị 5 lớp
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Rau câu trái cây"
                                                    >
                                                        Rau câu trái cây
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh sinh nhật rau câu trái cây"
                                                    >
                                                        Bánh sinh nhật rau câu trái cây
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh trung thu rau câu"
                                                    >
                                                        Bánh trung thu rau câu
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh rau câu đặc biệt"
                                                    >
                                                        Bánh rau câu đặc biệt
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Rau câu 3D"
                                                    >
                                                        Rau câu 3D
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mẫu cho bé"
                                                    >
                                                        Mẫu cho bé
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mẫu bánh cưới"
                                                    >
                                                        Mẫu bánh cưới
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mẫu cho nữ"
                                                    >
                                                        Mẫu cho nữ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Mẫu cho mẹ"
                                                    >
                                                        Mẫu cho mẹ
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Rau câu chân vịt"
                                                    >
                                                        Rau câu chân vịt
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size nhỏ"
                                                    >
                                                        Size nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size phổ thông"
                                                    >
                                                        Size phổ thông
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size lớn"
                                                    >
                                                        Size lớn
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Rau câu sơn thủy"
                                                    >
                                                        Rau câu sơn thủy
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size nhỏ"
                                                    >
                                                        Size nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size phổ thông"
                                                    >
                                                        Size phổ thông
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size lớn"
                                                    >
                                                        Size lớn
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Rau câu lá dứa nhân phô mai"
                                                    >
                                                        Rau câu lá dứa nhân phô mai
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size nhỏ"
                                                    >
                                                        Size nhỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size phổ thông"
                                                    >
                                                        Size phổ thông
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Size lớn"
                                                    >
                                                        Size lớn
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Sản phẩm theo mùa"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_10.png?1704435927037"
                                            alt="Sản phẩm theo mùa"
                                        />
                                        <span>Sản phẩm theo mùa</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Sản phẩm theo mùa </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh cưới"
                                                    >
                                                        Bánh cưới
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh cưới 2 tầng"
                                                    >
                                                        Bánh cưới 2 tầng
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh cưới 3 tầng"
                                                    >
                                                        Bánh cưới 3 tầng
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh cưới 5 tầng"
                                                    >
                                                        Bánh cưới 5 tầng
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh trung thu"
                                                    >
                                                        Bánh trung thu
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh trung thu truyền thống"
                                                    >
                                                        Bánh trung thu truyền thống
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh trung thu nhân dừa"
                                                    >
                                                        Bánh trung thu nhân dừa
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh trung thu nhân thập cẩm"
                                                    >
                                                        Bánh trung thu nhân thập cẩm
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/"
                                                        title="Bánh trung thu nhân đậu xanh"
                                                    >
                                                        Bánh trung thu nhân đậu xanh
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Valentine"
                                                    >
                                                        Valentine
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh kem Valentine"
                                                    >
                                                        Bánh kem Valentine
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp bánh socola"
                                                    >
                                                        Hộp bánh socola
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh sinh nhật"
                                                    >
                                                        Bánh sinh nhật
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh vị ngô"
                                                    >
                                                        Bánh vị ngô
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh trái cây"
                                                    >
                                                        Bánh trái cây
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh in ảnh theo mẫu"
                                                    >
                                                        Bánh in ảnh theo mẫu
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Halloween"
                                                    >
                                                        Halloween
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh bí đỏ"
                                                    >
                                                        Bánh bí đỏ
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh rùng rợn"
                                                    >
                                                        Bánh rùng rợn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh hoá trang"
                                                    >
                                                        Bánh hoá trang
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="menu-item list-group-item">
                                    <a
                                        href="/collections/all"
                                        className="menu-item__link"
                                        title="Sản phẩm đóng gói"
                                    >
                                        <img
                                            width={24}
                                            height={24}
                                            src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/menu_icon_11.png?1704435927037"
                                            alt="Sản phẩm đóng gói"
                                        />
                                        <span>Sản phẩm đóng gói</span>
                                        <i className="float-right" data-toggle-submenu="">
                                            <svg className="icon">
                                                <use xlinkHref="#icon-arrow" />
                                            </svg>
                                        </i>
                                    </a>
                                    <div className="submenu scroll">
                                        <div className="toggle-submenu d-lg-none d-xl-none">
                                            <i className="mr-3">
                                                <svg
                                                    className="icon"
                                                    style={{ transform: "rotate(180deg)" }}
                                                >
                                                    <use xlinkHref="#icon-arrow" />
                                                </svg>
                                            </i>
                                            <span>Sản phẩm đóng gói </span>
                                        </div>
                                        <ul className="submenu__list">
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Yến Mạch Hàn Quốc"
                                                    >
                                                        Bánh Yến Mạch Hàn Quốc
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị sữa"
                                                    >
                                                        Vị sữa
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị socola"
                                                    >
                                                        Vị socola
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị trà xanh"
                                                    >
                                                        Vị trà xanh
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Vị dâu"
                                                    >
                                                        Vị dâu
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh CaCao Chiffon"
                                                    >
                                                        Bánh CaCao Chiffon
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp 200g"
                                                    >
                                                        Hộp 200g
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp 500g"
                                                    >
                                                        Hộp 500g
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp 750g"
                                                    >
                                                        Hộp 750g
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Mochi Nhân Khoai Môn"
                                                    >
                                                        Bánh Mochi Nhân Khoai Môn
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Mochi Nhân Khoai Môn nhân kem"
                                                    >
                                                        Bánh Mochi Nhân Khoai Môn nhân kem
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Mochi Nhân Khoai Môn nhân đậu"
                                                    >
                                                        Bánh Mochi Nhân Khoai Môn nhân đậu
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Mochi Nhân Khoai Môn nhân trà xanh"
                                                    >
                                                        Bánh Mochi Nhân Khoai Môn nhân trà xanh
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Lu Hộp Giấy Xanh"
                                                    >
                                                        Bánh Lu Hộp Giấy Xanh
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại 250g hộp giấy"
                                                    >
                                                        Loại 250g hộp giấy
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại 600g hộp giấy"
                                                    >
                                                        Loại 600g hộp giấy
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Loại hộp thiếc"
                                                    >
                                                        Loại hộp thiếc
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Bake Vị Kem Phô Mai Morinaga"
                                                    >
                                                        Bánh Bake Vị Kem Phô Mai Morinaga
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp 10 viên 25g"
                                                    >
                                                        Hộp 10 viên 25g
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Hộp 30 viên 25g"
                                                    >
                                                        Hộp 30 viên 25g
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Thùng 30 hộp"
                                                    >
                                                        Thùng 30 hộp
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Oreo Siêu Mỏng Nhân Vani"
                                                    >
                                                        Bánh Oreo Siêu Mỏng Nhân Vani
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 3 bịch Oreo"
                                                    >
                                                        Set 3 bịch Oreo
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Set 10 bịch Oreo"
                                                    >
                                                        Set 10 bịch Oreo
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Thùng 30 bịch Oreo"
                                                    >
                                                        Thùng 30 bịch Oreo
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Gạo Salad Sen Vị Phô Mai"
                                                    >
                                                        Bánh Gạo Salad Sen Vị Phô Mai
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="BỊch nhỏ 250g"
                                                    >
                                                        BỊch nhỏ 250g
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bịch lớn 500g"
                                                    >
                                                        Bịch lớn 500g
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Thùng 30 bịch"
                                                    >
                                                        Thùng 30 bịch
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="submenu__col">
                                                <span className="submenu__item submenu__item--main">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Bánh Kem Ốc Quế Vị Trà Xanh"
                                                    >
                                                        Bánh Kem Ốc Quế Vị Trà Xanh
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sản phẩm từ Hàn Quốc"
                                                    >
                                                        Sản phẩm từ Hàn Quốc
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sản phẩm từ Nhật Bản"
                                                    >
                                                        Sản phẩm từ Nhật Bản
                                                    </a>
                                                </span>
                                                <span className="submenu__item submenu__item">
                                                    <a
                                                        className="link"
                                                        href="/collections/all"
                                                        title="Sản phẩm từ  Đài Loan"
                                                    >
                                                        Sản phẩm từ Đài Loan
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <ul className="shop-policises list-unstyled mb-0 pr-0">
                        <li>
                            <img
                                className="img-fluid"
                                src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/policy_header_image_1.png?1704435927037"
                                width={24}
                                height={24}
                                alt="Giao hàng đúng giờ"
                            />
                            <a
                                className="link"
                                href="/chinh-sach-giao-hang"
                                title="Giao hàng đúng giờ"
                            >
                                Giao hàng đúng giờ
                            </a>
                        </li>
                        <li>
                            <img
                                className="img-fluid"
                                src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/policy_header_image_2.png?1704435927037"
                                width={24}
                                height={24}
                                alt="Miễn phí đổi trả trong 7 ngày"
                            />
                            <a
                                className="link"
                                href="/chinh-sach-doi-tra"
                                title="Miễn phí đổi trả trong 7 ngày"
                            >
                                Miễn phí đổi trả trong 7 ngày
                            </a>
                        </li>
                        <li>
                            <img
                                className="img-fluid"
                                src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/policy_header_image_3.png?1704435927037"
                                width={24}
                                height={24}
                                alt="Ưu đãi hấp dẫn mỗi ngày"
                            />
                            <a
                                className="link"
                                href="/uu-dai-moi-ngay"
                                title="Ưu đãi hấp dẫn mỗi ngày"
                            >
                                Ưu đãi hấp dẫn mỗi ngày
                            </a>
                        </li>
                        <li className="hotline">
                            <img
                                src="//bizweb.dktcdn.net/100/419/628/themes/897067/assets/phone-icon.png?1704435927037"
                                width={24}
                                height={24}
                                className="align-self-center"
                                alt="phone-icon"
                            />
                            <a
                                className="media-body d-md-flex flex-column d-none"
                                href="tel:18001818"
                                title={18001818}
                            >
                                <strong>Gọi mua hàng: 18001818</strong>
                                <span>(8:00 - 19:00 T2 - CN)</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sticky-overlay" />
        </div>
    )
}

export default Navigation