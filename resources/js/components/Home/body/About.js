import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <>
              <section className="u-clearfix u-section-3" id="gioithieu" style={{backgroundColor: "white"}}>
                  <div className="u-clearfix u-sheet u-sheet-1">
                    <div className="
                      u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1
                    ">
                      <div className="u-layout">
                        <div className="u-layout-row">
                          <div className="
                            u-align-center
                            u-container-style
                            u-layout-cell
                            u-left-cell
                            u-size-23-lg
                            u-size-23-xl
                            u-size-29-md
                            u-size-29-sm
                            u-size-29-xs
                            u-layout-cell-1
                          ">
                            <div className="
                              u-container-layout u-valign-middle u-container-layout-1
                            ">
                              <img
                                src="images/pn-logo.png"
                                className="u-logo-image u-logo-image-1"
                                data-image-width={742} data-image-height={743} />
                            </div>
                          </div>
                          <div className="
                            u-align-center-sm
                            u-align-center-xs
                            u-align-left-lg
                            u-align-left-md
                            u-align-left-xl
                            u-container-style
                            u-layout-cell
                            u-right-cell
                            u-size-31-md
                            u-size-31-sm
                            u-size-31-xs
                            u-size-37-lg
                            u-size-37-xl
                            u-layout-cell-2
                          ">
                            <div className="
                              u-container-layout
                              u-valign-bottom-xs
                              u-valign-middle-lg
                              u-valign-middle-md
                              u-valign-middle-sm
                              u-valign-middle-xl
                              u-container-layout-2
                            ">
                              <h2 className="u-text u-text-1">{this.props.title}</h2>
                              <p className="u-align-left-xs u-text u-text-2" style={{"fontSize":"16px"}}>
                               {this.props.content}
                              </p>
                              <a href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/" className="
                                u-active-palette-1-light-3
                                u-btn
                                u-btn-round
                                u-button-style
                                u-custom-color-2
                                u-hover-custom-color-1
                                u-radius-2
                                u-btn-1
                              ">Xem thêm</a>
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

export default About;