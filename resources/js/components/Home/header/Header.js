import React, { Component } from 'react';
import $ from "jquery";
class Header extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <>
                <header
                    className="header u-clearfix u-header u-sticky u-white u-header"
                    id="sec-2b6f"
                >
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <a
                            href="#"
                            className="u-image u-logo u-image-1"
                            data-image-width={375}
                            data-image-height={134}
                        >
                            <img
                                src="images/pn_logo.png"
                                className="u-logo-image u-logo-image-1"
                                data-image-width="189.2"
                            />
                        </a>
                        <nav
                            className="u-menu u-menu-one-level u-offcanvas u-menu-1"
                            data-position
                        >
                            <div
                                className="menu-collapse"
                                style={{
                                    fontSize: "1rem",
                                    letterSpacing: "0px",
                                    fontWeight: 500,
                                }}
                            >
                                <a
                                    className="
                u-button-style
                u-custom-active-border-color
                u-custom-active-color
                u-custom-border
                u-custom-border-color
                u-custom-border-radius
                u-custom-borders
                u-custom-color
                u-custom-hover-border-color
                u-custom-hover-color
                u-custom-left-right-menu-spacing
                u-custom-padding-bottom
                u-custom-text-active-color
                u-custom-text-color
                u-custom-text-hover-color
                u-custom-top-bottom-menu-spacing
                u-nav-link
                u-text-active-palette-1-base
                u-text-hover-palette-2-base
                u-text-palette-5-light-2
              "
                                    href="#"
                                >
                                    <svg>
                                        <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#menu-hamburger"
                                        />
                                    </svg>
                                    <svg
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                    >
                                        <defs>
                                            <symbol
                                                id="menu-hamburger"
                                                viewBox="0 0 16 16"
                                                style={{
                                                    width: "16px",
                                                    height: "16px",
                                                }}
                                            >
                                                <rect
                                                    y={1}
                                                    width={16}
                                                    height={2}
                                                />
                                                <rect
                                                    y={7}
                                                    width={16}
                                                    height={2}
                                                />
                                                <rect
                                                    y={13}
                                                    width={16}
                                                    height={2}
                                                />
                                            </symbol>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                            <div className="u-custom-menu u-nav-container">
                                <ul className="u-nav u-spacing-2 u-unstyled u-nav-1">
                                    <li className="u-nav-item">
                                        <a
                                            className="
                    u-active-grey-5
                    u-border-active-palette-1-base
                    u-border-hover-palette-1-base
                    u-button-style
                    u-hover-grey-10
                    u-nav-link
                    u-radius-4
                    u-text-active-grey-90
                    u-text-grey-90
                    u-text-hover-grey-90
                  "
                                            href="#campainge"
                                            data-page-id={37968121}
                                            style={{ padding: "10px" }}
                                        >
                                            ITnuoiIT
                                        </a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a
                                            className="
                    u-active-grey-5
                    u-border-active-palette-1-base
                    u-border-hover-palette-1-base
                    u-button-style
                    u-hover-grey-10
                    u-nav-link
                    u-radius-4
                    u-text-active-grey-90
                    u-text-grey-90
                    u-text-hover-grey-90
                  "
                                            href="#gioithieu"
                                            data-page-id={37968121}
                                            style={{ padding: "10px" }}
                                        >
                                            Giới thiệu
                                        </a>
                                    </li>
                                    {/* <li className="u-nav-item">
                                        <a
                                            className="
                    u-active-grey-5
                    u-border-active-palette-1-base
                    u-border-hover-palette-1-base
                    u-button-style
                    u-hover-grey-10
                    u-nav-link
                    u-radius-4
                    u-text-active-grey-90
                    u-text-grey-90
                    u-text-hover-grey-90
                  "
                                            href="#carousel_f370"
                                            data-page-id={37968121}
                                            style={{ padding: "10px" }}
                                        >
                                            Staff
                                        </a>
                                    </li> */}
                                    <li className="u-nav-item">
                                        <a
                                            className="
                    u-active-grey-5
                    u-border-active-palette-1-base
                    u-border-hover-palette-1-base
                    u-button-style
                    u-hover-grey-10
                    u-nav-link
                    u-radius-4
                    u-text-active-grey-90
                    u-text-grey-90
                    u-text-hover-grey-90
                  "
                                            href="#muctieugiatri"
                                            data-page-id={37968121}
                                            style={{ padding: "10px" }}
                                        >
                                            Mục tiêu &amp; giá trị
                                        </a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a
                                            className="
                    u-active-grey-5
                    u-border-active-palette-1-base
                    u-border-hover-palette-1-base
                    u-button-style
                    u-hover-grey-10
                    u-nav-link
                    u-radius-4
                    u-text-active-grey-90
                    u-text-grey-90
                    u-text-hover-grey-90
                  "
                                            href="#video"
                                            data-page-id={37968121}
                                            style={{ padding: "10px" }}
                                        >
                                            Video &amp; hình ảnh
                                        </a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a
                                            className="
                    u-active-grey-5
                    u-border-active-palette-1-base
                    u-border-hover-palette-1-base
                    u-button-style
                    u-hover-grey-10
                    u-nav-link
                    u-radius-4
                    u-text-active-grey-90
                    u-text-grey-90
                    u-text-hover-grey-90
                  "
                                            href="#doitac"
                                            data-page-id={37968121}
                                            style={{ padding: "10px" }}
                                        >
                                            Đối tác
                                        </a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a
                                            className="
                    u-active-grey-5
                    u-border-active-palette-1-base
                    u-border-hover-palette-1-base
                    u-button-style
                    u-hover-grey-10
                    u-nav-link
                    u-radius-4
                    u-text-active-grey-90
                    u-text-grey-90
                    u-text-hover-grey-90
                  "
                                            href="#contact"
                                            data-page-id={37968121}
                                            style={{ padding: "10px" }}
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li className="u-nav-item">
                                        <a
                                            className="
                    u-active-grey-5
                    u-border-active-palette-1-base
                    u-border-hover-palette-1-base
                    u-button-style
                    u-hover-grey-10
                    u-nav-link
                    u-radius-4
                    u-text-active-grey-90
                    u-text-grey-90
                    u-text-hover-grey-90
                    u-custom-color-1 u-btn-1
                  "
                                            href="/donate"
                                            data-page-id={37968121}
                                            style={{ padding: "10px" }}
                                        >
                                            Tài trợ
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="u-custom-menu u-nav-container-collapse">
                                <div
                                    className="
                u-black
                u-container-style
                u-inner-container-layout
                u-opacity
                u-opacity-95
                u-sidenav
                u-sidenav-1
              "
                                    data-offcanvas-width="289.6"
                                >
                                    <div className="u-sidenav-overflow">
                                        <div className="u-menu-close" />
                                        <ul
                                            className="
                    u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2
                  "
                                        >
                                            <li className="u-nav-item">
                                                <a
                                                    className="u-button-style u-nav-link"
                                                    href="#campainge"
                                                    data-page-id={37968121}
                                                    style={{
                                                        padding: "10px 20px",
                                                    }}
                                                >
                                                    ITnuoiIT
                                                </a>
                                            </li>
                                            <li className="u-nav-item">
                                                <a
                                                    className="u-button-style u-nav-link"
                                                    href="#gioithieu"
                                                    data-page-id={37968121}
                                                    style={{
                                                        padding: "10px 20px",
                                                    }}
                                                >
                                                    Giới thiệu
                                                </a>
                                            </li>
                                            {/* <li className="u-nav-item">
                                                <a
                                                    className="u-button-style u-nav-link"
                                                    href="#carousel_f370"
                                                    data-page-id={37968121}
                                                    style={{
                                                        padding: "10px 20px",
                                                    }}
                                                >
                                                    Staff
                                                </a>
                                            </li> */}
                                            <li className="u-nav-item">
                                                <a
                                                    className="u-button-style u-nav-link"
                                                    href="#muctieugiatri"
                                                    data-page-id={37968121}
                                                    style={{
                                                        padding: "10px 20px",
                                                    }}
                                                >
                                                    Mục tiêu &amp; giá trị
                                                </a>
                                            </li>
                                            <li className="u-nav-item">
                                                <a
                                                    className="u-button-style u-nav-link"
                                                    href="#video"
                                                    data-page-id={37968121}
                                                    style={{
                                                        padding: "10px 20px",
                                                    }}
                                                >
                                                    Video &amp; hình ảnh
                                                </a>
                                            </li>
                                            <li className="u-nav-item">
                                                <a
                                                    className="u-button-style u-nav-link"
                                                    href="#doitac"
                                                    data-page-id={37968121}
                                                    style={{
                                                        padding: "10px 20px",
                                                    }}
                                                >
                                                    Đối tác
                                                </a>
                                            </li>
                                            <li className="u-nav-item">
                                                <a
                                                    className="u-button-style u-nav-link"
                                                    href="#contact"
                                                    data-page-id={37968121}
                                                    style={{
                                                        padding: "10px 20px",
                                                    }}
                                                >
                                                    Contact
                                                </a>
                                            </li>
                                            <li className="u-nav-item">
                                                <a
                                                    className="u-button-style u-nav-link u-btn u-custom-color-1 u-btn-1"
                                                    href="#contact"
                                                    data-page-id={37968121}
                                                    style={{
                                                        padding: "10px 20px",
                                                    }}
                                                >
                                                    Tài trợ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
                            </div>
                        </nav>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;