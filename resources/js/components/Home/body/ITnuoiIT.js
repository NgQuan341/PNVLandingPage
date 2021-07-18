import React, { Component } from "react";
import ContentAPI from '../../../api/contentAPI';

class ITnuoiIT extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ""
    }
  }
  render() {
    return (
      <>
        <section className="u-clearfix u-section-1" id="campainge">
          <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xl u-sheet-1">
            <div className="u-custom-color-2 u-expanded-width-xs u-shape u-shape-rectangle u-shape-1" data-animation-name="fadeIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction="Left" />
            <div className="u-custom-color-1 u-shape u-shape-rectangle u-shape-2" data-animation-name="fadeIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction="Right" />
            <img className="u-image u-image-1" src="images/chinh.jpg" data-image-width={895} data-image-height={1080} data-animation-name="fadeIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction />
            <div className="u-align-left u-container-style u-custom-color-2 u-group u-group-1" data-animation-name="fadeIn" data-animation-duration={1000} data-animation-delay={1500} data-animation-direction>
              <div className="u-container-layout u-valign-bottom-xs u-valign-top-lg u-valign-top-md u-valign-top-sm u-valign-top-xl u-container-layout-1">
                <h1 className="u-text u-text-1"><b>{this.props.title}</b>
                </h1>
                <p className="u-text u-text-body-alt-color u-text-2"><b>{this.props.content}</b>
                  <br />
                </p>
                <a href="https://www.passerellesnumeriques.org/vi/alettertoitengineers/" className="u-btn u-button-style u-custom-color-1 u-dialog-link u-hover-white u-text-active-palette-3-light-2 u-text-hover-custom-color-2 u-text-white u-btn-1">read
                  more</a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ITnuoiIT;
