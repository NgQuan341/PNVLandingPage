import React, { Component } from "react";
import Staff from "./single/Staff";
class Staffs extends Component {
    render() {
        return (
            <>
                <section className="u-align-center u-clearfix u-section-4" id="carousel_f370">
                    <div className="u-clearfix u-sheet u-sheet-1">
                        <div className="u-expanded-width u-list u-list-1">
                            <div className="u-repeater u-repeater-1">
                                <Staff></Staff>
                                <Staff></Staff>
                                <Staff></Staff>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Staffs;
