import React, { Component } from 'react';

import logo from '../logo.png';

export default class Setup extends Component {

    render() {
        return (
            <div>
                <div id="page-head">
                    <div id="page-title">
                        <h1 className="page-header text-overflow">Setup</h1>
                    </div>
                    <ol className="breadcrumb">
                        <li><a href="void(0)"><i className="demo-pli-home"></i></a></li>
                        <li className="active">Setup</li>
                    </ol>
                </div>

                <div id="page-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4 className="page-header">Company Settings <button className="btn btn-success">Save</button></h4>
                                            <hr />
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="media pad-ver pad-hor">
                                                        <div className="media-left">
                                                            <a href="void(0)" className="box-inline">
                                                                <img alt="Company Logo" className="img-md img-circle img-border" src={logo} />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <span className="text-lg text-semibold text-main">Company Logo  </span>
                                                            <p className="text-sm">This image will show on reciepts and all areas visible to users</p>
                                                            <button className="btn btn-default pull-right">Change</button>
                                                        </div>
                                                    </div>
                                                    <p className="text-center">Website: <b>http://companywebsite.com</b></p>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="pad-ver">
                                                        <span className="text-lg text-semibold text-main">Company Information</span>
                                                        <form className="form-horizontal">
                                                            <div className="form-group">
                                                                <div className="col-md-6">
                                                                    <label htmlFor="" className="control-label">Company Name</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label htmlFor="" className="control-label">Company Phone</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label htmlFor="" className="control-label">Company Email</label>
                                                                    <input type="text" className="form-control" />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label htmlFor="" className="control-label">Company Address</label>
                                                                    <textarea rows="3" className="form-control"></textarea>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4 className="page-header">Tax Settings</h4>
                                            <hr />
                                            <span className="text-lg text-semibold text-main">Tax Information Setup</span>
                                            <div class="row">
                                                <div className="col-md-3">
                                                    <p className="text-sm">Set tax percentage on items.</p>
                                                    <form className="form-horizontal">
                                                        <label htmlFor="" className="control-label">Tax Percentage</label>
                                                        <div className="input-group">

                                                            <input type="text" className="form-control" />
                                                            <div className="input-group-addon">%</div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}