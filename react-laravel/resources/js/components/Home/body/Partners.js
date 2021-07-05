import React, { Component } from 'react';
import Partner from './single/Partner';
class Partners extends Component {
    render() {
        return (
            <>
                <section className="u-align-center u-clearfix u-grey-10 u-section-8" id="doitac">
                  <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-text u-text-default u-text-font u-text-1">
                      Đối tác của PN
                    </h2>
                    <div className="u-expanded-width u-list u-list-1">
                      <div className="u-repeater u-repeater-1">
                        <Partner></Partner>
                        <Partner></Partner>
                        <Partner></Partner>
                        <Partner></Partner>
                      </div>
                    </div>
                  </div>
                </section>
            </>
        );
    }
}

export default Partners;