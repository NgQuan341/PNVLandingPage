import React, { Component } from 'react';
import ReadMoreReact from "read-more-react";

class Share extends Component {
    render() {
        return (
            <>
                <div className="u-container-style u-list-item u-repeater-item">
                                    <div className="u-container-layout u-similar-container u-container-layout-1">
                                        <img
                                            alt=""
                                            className="u-expanded-width u-image u-image-contain u-image-default u-image-1"
                                            style={{width:"320px", height:"215px"}}
                                            src={`images/contents/${this.props.img}`}
                                        />
                                        <h4 className="u-text mt-3">
                                            {this.props.name}
                                        </h4>
                                        <h5 className="u-text u-text-3">
                                            {this.props.description}
                                        </h5>
                                        <div className="u-border-1 u-border-grey-dark-1 u-expanded-width u-line u-line-horizontal u-line-1" />
                                            <ReadMoreReact
                                                text={this.props.content}
                                                min={50}
                                                ideal={60}
                                                max={100}
                                                readMoreText={<span className="u-btn u-button-style u-custom-color-1 u-hover-custom-color-2 u-btn-1">Xem thêm</span>}
                                            />
                                    </div>
                                </div>
            </>
        );
    }
}

export default Share;