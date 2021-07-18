import React, { Component } from "react";
import ReactPlayer from "react-player";
class Video extends Component {
  render() {
    return (
      <>
        <section className="u-clearfix u-image u-section-6" id="video">
          <div className="u-clearfix u-sheet u-sheet-1">
            <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
              <div className="u-gutter-0 u-layout">
                <div className="u-layout-row">
                  <div
                    className="
                  u-align-left
                  u-container-style
                  u-layout-cell
                  u-left-cell
                  u-size-34
                  u-layout-cell-1
                "
                  >
                    <div
                      className="
                    u-container-layout u-valign-top-xs u-container-layout-1
                  "
                    >
                      <div
                        className="
                      u-expanded-width-xs u-video u-video-contain u-video-1
                    "
                      >
                        <div className="embed-responsive embed-responsive-1">
                          <ReactPlayer
                            controls={true}
                            url="https://youtu.be/3ocO3V0FhfU"
                            config={{
                              youtube: {
                                playerVars: {
                                  showinfo: 1,
                                  origin: "http://localhost:8100",
                                },
                              },
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="
                  u-align-left
                  u-container-style
                  u-layout-cell
                  u-right-cell
                  u-size-26
                  u-layout-cell-2
                "
                    data-animation-name="bounceIn"
                    data-animation-duration={1000}
                    data-animation-delay={0}
                    data-animation-direction
                  >
                    <div className="u-container-layout u-container-layout-2">
                      <h1 className="u-text u-text-custom-color-1 u-text-1">
                        Video
                      </h1>
                      <p className="u-text u-text-2">
                        {this.props.content}
                      </p>
                      <a
                        href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/"
                        className="
                      u-active-palette-3-light-3
                      u-align-left
                      u-btn
                      u-button-style
                      u-custom-color-2
                      u-hover-custom-color-1
                      u-text-active-white
                      u-text-body-alt-color
                      u-text-hover-white
                      u-btn-1
                    "
                      >
                        Xem thêm
                      </a>
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

export default Video;
