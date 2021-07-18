import React, { Component } from "react";
import ReadMoreReact from "read-more-react";
class Staff extends Component {
    render() {
        return (
            <>
                <div
                    className="
                                u-align-center
                                u-container-style
                                u-list-item
                                u-radius-50
                                u-repeater-item
                                u-shape-round
                                u-white
                                u-list-item-1
                                "
                >
                    <div
                        className="
                                u-container-layout
                                u-similar-container
                                u-valign-top
                                u-container-layout-1
                                "
                    >
                        <img
                            alt=""
                            className="u-image u-image-round u-radius-50 u-image-1"
                            data-image-width="{1620}"
                            data-image-height="{1080}"
                            src="images/pexels-photo-2381069.jpeg"
                        />
                        <p
                            className="
                                    u-align-center u-text u-text-palette-1-light-2 u-text-1
                                "
                        >
                            {this.props.description}
                        </p>

                        <h3
                            className="
                                    u-align-center u-custom-font u-font-raleway u-text u-text-2
                                "
                        >
                            {this.props.name}
                        </h3>
                        <div
                            className="u-align-center u-text u-text-3"
                            style={{ cursor: "pointer" }}
                        >
                            <ReadMoreReact
                                text={this.props.content}
                                min={20}
                                ideal={30}
                                max={100}
                                readMoreText="...."
                            />
                        </div>
                        <div className="u-social-icons u-spacing-10 u-social-icons-1">
                            <a
                                className="u-social-url"
                                target="_blank"
                                href="#"
                            >
                                <span
                                    className="
                                        u-icon
                                        u-icon-circle
                                        u-social-facebook
                                        u-social-icon
                                        u-icon-1
                                    "
                                >
                                    <svg
                                        className="u-svg-link"
                                        preserveAspectRatio="xMidYMin slice"
                                        viewBox="0 0 112 112"
                                    >
                                        <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#svg-ad72"
                                        />
                                    </svg>
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 112 112"
                                        id="svg-ad72"
                                        className="u-svg-content"
                                    >
                                        <path d="M75.5,28.8H65.4c-1.5,0-4,0.9-4,4.3v9.4h13.9l-1.5,15.8H61.4v45.1H42.8V58.3h-8.8V42.4h8.8V32.2 c0-7.4,3.4-18.8,18.8-18.8h13.8v15.4H75.5z" />
                                    </svg>
                                </span>
                            </a>
                            <a
                                className="u-social-url"
                                target="_blank"
                                href="#"
                            >
                                <span
                                    className="
                                        u-icon
                                        u-icon-circle
                                        u-social-icon
                                        u-social-twitter
                                        u-icon-2
                                    "
                                >
                                    <svg
                                        className="u-svg-link"
                                        preserveAspectRatio="xMidYMin slice"
                                        viewBox="0 0 112 112"
                                    >
                                        <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#svg-f916"
                                        />
                                    </svg>
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 112 112"
                                        id="svg-f916"
                                        className="u-svg-content"
                                    >
                                        <path d="M92.2,38.2c0,0.8,0,1.6,0,2.3c0,24.3-18.6,52.4-52.6,52.4c-10.6,0.1-20.2-2.9-28.5-8.2 c1.4,0.2,2.9,0.2,4.4,0.2c8.7,0,16.7-2.9,23-7.9c-8.1-0.2-14.9-5.5-17.3-12.8c1.1,0.2,2.4,0.2,3.4,0.2c1.6,0,3.3-0.2,4.8-0.7 c-8.4-1.6-14.9-9.2-14.9-18c0-0.2,0-0.2,0-0.2c2.5,1.4,5.4,2.2,8.4,2.3c-5-3.3-8.3-8.9-8.3-15.4c0-3.4,1-6.5,2.5-9.2 c9.1,11.1,22.7,18.5,38,19.2c-0.2-1.4-0.4-2.8-0.4-4.3c0.1-10,8.3-18.2,18.5-18.2c5.4,0,10.1,2.2,13.5,5.7c4.3-0.8,8.1-2.3,11.7-4.5 c-1.4,4.3-4.3,7.9-8.1,10.1c3.7-0.4,7.3-1.4,10.6-2.9C98.9,32.3,95.7,35.5,92.2,38.2z" />
                                    </svg>
                                </span>
                            </a>
                            <a
                                className="u-social-url"
                                target="_blank"
                                href="#"
                            >
                                <span
                                    className="
                                        u-icon
                                        u-icon-circle
                                        u-social-icon
                                        u-social-instagram
                                        u-icon-3
                                    "
                                >
                                    <svg
                                        className="u-svg-link"
                                        preserveAspectRatio="xMidYMin slice"
                                        viewBox="0 0 112 112"
                                    >
                                        <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#svg-a0a0"
                                        />
                                    </svg>
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 112 112"
                                        id="svg-a0a0"
                                        className="u-svg-content"
                                    >
                                        <path d="M55.9,32.9c-12.8,0-23.2,10.4-23.2,23.2s10.4,23.2,23.2,23.2s23.2-10.4,23.2-23.2S68.7,32.9,55.9,32.9z M55.9,69.4c-7.4,0-13.3-6-13.3-13.3c-0.1-7.4,6-13.3,13.3-13.3s13.3,6,13.3,13.3C69.3,63.5,63.3,69.4,55.9,69.4z" />
                                        <path d="M79.7,26.8c-3,0-5.4,2.5-5.4,5.4s2.5,5.4,5.4,5.4c3,0,5.4-2.5,5.4-5.4S82.7,26.8,79.7,26.8z" />
                                        <path d="M78.2,11H33.5C21,11,10.8,21.3,10.8,33.7v44.7c0,12.6,10.2,22.8,22.7,22.8h44.7c12.6,0,22.7-10.2,22.7-22.7 V33.7C100.8,21.1,90.6,11,78.2,11z M91,78.4c0,7.1-5.8,12.8-12.8,12.8H33.5c-7.1,0-12.8-5.8-12.8-12.8V33.7 c0-7.1,5.8-12.8,12.8-12.8h44.7c7.1,0,12.8,5.8,12.8,12.8V78.4z" />
                                    </svg>
                                </span>
                            </a>
                            <a
                                className="u-social-url"
                                target="_blank"
                                href="#"
                            >
                                <span
                                    className="
                                        u-icon
                                        u-icon-circle
                                        u-social-icon
                                        u-social-linkedin
                                        u-icon-4
                                    "
                                >
                                    <svg
                                        className="u-svg-link"
                                        preserveAspectRatio="xMidYMin slice"
                                        viewBox="0 0 112 112"
                                    >
                                        <use
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xlinkHref="#svg-78e1"
                                        />
                                    </svg>
                                    <svg
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 112 112"
                                        id="svg-78e1"
                                        className="u-svg-content"
                                    >
                                        <path d="M33.8,96.8H14.5v-58h19.3V96.8z M24.1,30.9L24.1,30.9c-6.6,0-10.8-4.5-10.8-10.1c0-5.8,4.3-10.1,10.9-10.1 S34.9,15,35.1,20.8C35.1,26.4,30.8,30.9,24.1,30.9z M103.3,96.8H84.1v-31c0-7.8-2.7-13.1-9.8-13.1c-5.3,0-8.5,3.6-9.9,7.1 c-0.6,1.3-0.6,3-0.6,4.8V97H44.5c0,0,0.3-52.6,0-58h19.3v8.2c2.6-3.9,7.2-9.6,17.4-9.6c12.7,0,22.2,8.4,22.2,26.1V96.8z" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Staff;
