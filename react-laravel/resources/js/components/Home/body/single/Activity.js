import React, { Component } from 'react';

class Activity extends Component {
    render() {
        return (
            <>
                <div className="
                        u-active
                        u-carousel-item
                        u-effect-hover-zoom
                        u-gallery-item
                        u-carousel-item-1
                      ">
                        <div className="u-back-slide">
                          <img className="u-back-image u-expanded" src="images/3.svg" alt="Sample Headline" />
                        </div>
                        <div className="u-grey-15 u-over-slide u-over-slide-1">
                          <h3 className="u-gallery-heading">Sample Headline</h3>
                          <p className="u-gallery-text">Sample Text</p>
                        </div>
                      </div>
            </>
        );
    }
}

export default Activity;