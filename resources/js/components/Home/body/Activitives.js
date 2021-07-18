import React, { Component } from 'react';
import Activity from './single/Activity';

class Activitives extends Component {
  render() {
    return (
      <>
        <section className="u-clearfix u-custom-color-2 u-section-7" id="hoatdong">
        <div className="u-clearfix u-sheet u-valign-middle-sm u-sheet-1">
          <h1 className="u-align-center-xs u-align-right-lg u-align-right-md u-align-right-sm u-align-right-xl u-text u-text-1">
            Hình ảnh&nbsp; hoạt động tại PNV</h1>
          <div className="u-custom-color-1 u-shape u-shape-rectangle u-shape-1" data-animation-name="fadeIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction />
          <div className="u-carousel-fade u-expanded-width-xs u-gallery u-layout-grid u-lightbox u-no-transition u-show-text-on-hover u-gallery-1" id="carousel-fb15">
            <div className="u-gallery-inner u-gallery-inner-1" role="listbox">
                {
                  this.props.activities.map(a => {
                    return (
                      <Activity key={a.id}  img={a.img} description={a.description}></Activity>
                    );
                  })
                }
            </div>
          </div>
          <div className="u-effect-hover-zoom u-gallery-item u-gallery-item-7">
            <div className="u-back-slide u-back-slide-7">
              <img className="u-back-image u-expanded" src="images/3.svg" />
            </div>
            <div className="u-align-center u-over-slide u-valign-bottom u-over-slide-7">
              <h3 className="u-gallery-heading" style={{width: '921px', marginRight: 'auto', marginLeft: 'auto'}} />
              <p className="u-gallery-text" style={{width: '921px', marginRight: 'auto', marginLeft: 'auto', marginTop: '0px'}} />
            </div>
          </div>
          <div className="u-effect-hover-zoom u-gallery-item u-gallery-item-8" data-image-width={1280} data-image-height={853}>
            <div className="u-back-slide u-back-slide-8">
              <img className="u-back-image u-expanded" src="https://pixabay.com/get/g0fec7dd036153bcf5034c6962fb96663f82d0848edd0afcca0bcd173c2a09c8ff2b805105e33288fe7348d9fd56b1e8e31d556a77238a5a303d24dce47bc0039_1280.jpg" />
            </div>
            <div className="u-align-center u-over-slide u-valign-bottom u-over-slide-8">
              <h3 className="u-gallery-heading" style={{marginLeft: '0px', marginRight: 'auto'}} />
              <p className="u-gallery-text" style={{marginLeft: '0px', marginRight: 'auto', marginTop: '0px'}} />
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default Activitives;