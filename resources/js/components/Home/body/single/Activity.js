import React, { Component } from 'react';

class Activity extends Component {
    render() {
        return (
            <>
                <div className="u-effect-hover-zoom u-gallery-item u-gallery-item-1">
                <div className="u-back-slide u-back-slide-1">
                  <img src={`images/activities/${this.props.img}`} alt="Thể dục" data-image-width={2000} data-image-height={1333} className="u-back-image u-expanded" />
                </div>
                <div className="u-align-center u-over-slide u-valign-bottom u-over-slide-1">
                  <h3 className="u-gallery-heading" style={{marginLeft: '0px', marginRight: 'auto'}}>Thể dục</h3>
                  <p className="u-gallery-text" style={{marginLeft: '0px', marginRight: 'auto', marginTop: '0px'}}>Thể thao</p>
                </div>
              </div>
            </>
        );
    }
}

export default Activity;