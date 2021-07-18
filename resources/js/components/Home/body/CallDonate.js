import React, { Component } from 'react';

class CallDonate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title:"",
      content:""
    }
  }
    render() {
        return (
            <>
                <section className="u-clearfix u-section-2" id="taitro">
        <div className="u-clearfix u-sheet u-sheet-1">
          <div className="
            u-clearfix
            u-expanded-width
            u-gutter-30
            u-layout-wrap
            u-layout-wrap-1
          ">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="
                  u-align-left
                  u-container-style
                  u-layout-cell
                  u-left-cell
                  u-size-36
                  u-layout-cell-1
                ">
                  <div className="u-container-layout">
                    <div className="u-custom-color-1 u-shape u-shape-1" />
                    <img className="u-image u-image-1" src="images/IMG_3350.jpg" style={{width: "558px", height:"380px"}} />
                    <img className="u-image u-image-2" src="images/pn-logo.png" style={{width: "180px", height:"180px"}} />
                  </div>
                </div>
                <div className="
                  u-align-left
                  u-container-style
                  u-layout-cell
                  u-right-cell
                  u-size-24
                  u-layout-cell-2
                ">
                  <div className="
                    u-container-layout u-valign-bottom-xs u-container-layout-2
                  ">
                    <h3 className="u-text u-text-1">
                      {this.props.title}
                    </h3>
                    <p className="u-text u-text-2">
                     {this.props.content}
                    </p>

                    <a href="/donate" className="u-btn u-button-style u-custom-color-1 u-btn-1" data-toggle="modal">Tài trợ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            </>
        );
    }
}

export default CallDonate;