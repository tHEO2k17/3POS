import React, { Component } from 'react';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['item 1', 'item 2', 'item 3', 'item 4']
        }
    }
    render() {
        const viewItems = this.state.items.map((listItems, i) => {
            return (
                <li key={i}>
                    <div className="well well-sm ver-alny">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>{listItems} <br /><small>In stock: <b>5</b></small></h5>
                            </div>
                            <div className="col-md-3">
                                <div className="input-group input-group-sm my">
                                    <div className="input-group-addon">Qty</div>
                                    <input type="number" className="form-control" defaultValue="1" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <h5>5 GHS</h5>
                            </div>
                            <div className="col-md-1">
                                <button className="btn btn-danger btn-rounded btn-sm my">X</button>
                            </div>
                        </div>
                    </div>
                </li>
            );
        });

        return (
            <div>
                <div id="page-head">
                    <div id="page-title">
                        <h1 className="page-header text-overflow">Sales</h1>
                    </div>
                    <ol className="breadcrumb">
                        <li><a href="void(0)"><i className="demo-pli-home"></i></a></li>
                        <li className="active">Sales</li>
                    </ol>
                </div>

                <div id="page-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-body pad-no">
                                    <div className="col-md-7 bord-rgt mar-no">
                                        <div className="row">
                                            <div className="col-md-12 bord-btm pad-ver">
                                                <form className="form-horizontal">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" />
                                                        <div className="input-group-btn">
                                                            <button className="btn btn-primary">Add</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 pad-ver">
                                                <ul className="list-unstyled item-list padr-sm">
                                                    {viewItems}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-12 pad-ver bord-btm">
                                                <input type="text" className="form-control input-lg text-center" defaultValue="GHS 50.00" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="input-group input-group-sm">
                                                                    <div className="input-group-addon">Currency</div>
                                                                    <select type="number" className="form-control">
                                                                        <option defaultValue="0">GHS</option>
                                                                        <option defaultValue="1">USD</option>
                                                                    </select>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="input-group input-group-sm">
                                                                    <div className="input-group-addon">Payment Option</div>
                                                                    <select type="number" className="form-control">
                                                                        <option defaultValue="0">Cash</option>
                                                                        <option defaultValue="1">Credit Card</option>
                                                                        <option defaultValue="2">E-Cash</option>
                                                                    </select>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="input-group input-group-sm">
                                                                    <div className="input-group-addon">Trans ID:</div>
                                                                    <input type="text" className="form-control" defaultValue="1" />
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="input-group input-group-sm">
                                                                    <div className="input-group-addon">Discount</div>
                                                                    <input type="number" className="form-control" defaultValue="5.0" />
                                                                    <div className="input-group-addon">%</div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Tax: <input id="demo-sw-checked" type="checkbox" defaultChecked /></td>
                                                            <td>Sub Total: <span className="pull-right"><strong>GHS. 250</strong></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>Total: <span className="pull-right"><strong>GHS. 300</strong></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>Balance: <span className="pull-right"><strong>GHS. 10</strong></span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <button className="btn btn-success btn-block"> Pay</button>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <button className="btn btn-danger btn-block"> Cancel</button>
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
            </div>

        );
    }
}