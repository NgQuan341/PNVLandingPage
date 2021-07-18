import React, { Component } from "react";

class Partner extends Component {
    render() {
        return (
            <>
                <div className="u-container-style u-list-item u-repeater-item">
                    <div className="u-container-layout u-similar-container u-valign-middle u-container-layout-1">
                        <a href={`${this.props.link}`}>
                        <img
                            alt=""
                            className="u-expanded-width-xs u-image u-image-contain u-image-default u-image-1"
                            style={{width: "200px" , height: "150px"}}
                            src={`images/partners/${this.props.img}`}
                        /></a>
                    </div>
                </div>
            </>
        );
    }
}

export default Partner;
