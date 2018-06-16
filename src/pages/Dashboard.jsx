import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div id="page-head">
                    <div className="pad-all text-center">
                        <h3>Welcome back to the Dashboard.</h3>
                        <p>Scroll down to see quick links and overviews of your Server, To do list, Order status or get some Help using Nifty.</p>
                    </div>
                </div>

                <div id="page-content">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Recent Sales</h3>
                                </div>
                                <div className="pad-all">
                                    <div id="demo-morris-line-legend" className="text-center"></div>
                                    <div id="demo-morris-line" style={{height: '268px'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}