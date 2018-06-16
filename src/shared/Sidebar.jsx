import React, { Component } from 'react';
import { Link } from "react-router-dom";

import prof from '../img/profile-photos/1.png';

export default class Sidebar extends Component {
    render() {

        return (
            <div id="mainnav">

                <div id="mainnav-menu-wrap">
                    <div className="nano">
                        <div className="nano-content">

                            <div id="mainnav-profile" className="mainnav-profile">
                                <div className="profile-wrap text-center">
                                    <div className="pad-btm">
                                        <img className="img-circle img-md" src={prof} alt="Profile" />
                                    </div>
                                    <a href="#profile-nav" className="box-block" data-toggle="collapse" aria-expanded="false">
                                        <span className="pull-right dropdown-toggle">
                                            <i className="dropdown-caret"></i>
                                        </span>
                                        <p className="mnp-name">Administrator</p>
                                        <span className="mnp-desc">admin.cha@pos.net</span>
                                    </a>
                                </div>
                                <div id="profile-nav" className="collapse list-group bg-trans">
                                    <a href="void(0)" className="list-group-item">
                                        <i className="demo-pli-male icon-lg icon-fw"></i> View Profile
										</a>
                                    <a href="void(0)" className="list-group-item">
                                        <i className="demo-pli-gear icon-lg icon-fw"></i> Settings
										</a>
                                </div>
                            </div>

                            <div id="mainnav-shortcut" className="hidden">
                                <ul className="list-unstyled shortcut-wrap">
                                    <li className="col-xs-3" data-content="My Profile">
                                        <a className="shortcut-grid" href="void(0)">
                                            <div className="icon-wrap icon-wrap-sm icon-circle bg-mint">
                                                <i className="demo-pli-male"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="col-xs-3" data-content="Messages">
                                        <a className="shortcut-grid" href="void(0)">
                                            <div className="icon-wrap icon-wrap-sm icon-circle bg-warning">
                                                <i className="demo-pli-speech-bubble-3"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="col-xs-3" data-content="Activity">
                                        <a className="shortcut-grid" href="void(0)">
                                            <div className="icon-wrap icon-wrap-sm icon-circle bg-success">
                                                <i className="demo-pli-thunder"></i>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="col-xs-3" data-content="Lock Screen">
                                        <a className="shortcut-grid" href="void(0)">
                                            <div className="icon-wrap icon-wrap-sm icon-circle bg-purple">
                                                <i className="demo-pli-lock-2"></i>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <ul id="mainnav-menu" className="list-group">

                                <li className="list-header">Navigation</li>

                                <li>
                                    <Link to='/' activeclassname='active-sub'>
                                        <i className="demo-pli-home"></i>
                                        <span className="menu-title">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/sales'>
                                        <i className="demo-pli-basket-coins"></i>
                                        <span className="menu-title">
                                            Sales
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="void(0)">
                                        <i className="demo-pli-layout-grid"></i>
                                        <span className="menu-title">Products</span>
                                        <i className="arrow"></i>
                                    </a>

                                    <ul className="collapse">
                                        <li>
                                            <Link to='/inventory'>
                                                Inventory
                                            </Link>
                                        </li>
                                        <li>
                                            <a href="void(0)">Add Product</a>
                                        </li>
                                        <li>
                                            <a href="void(0)">Purchase Order</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="void(0)">
                                        <i className="demo-pli-list-view"></i>
                                        <span className="menu-title">
                                            Supplier
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="void(0)">
                                        <i className="demo-pli-pen-5"></i>
                                        <span className="menu-title">
                                            Customer
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="void(0)">
                                        <i className="demo-pli-male-female"></i>
                                        <span className="menu-title">
                                            Employees / Users
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="void(0)">
                                        <i className="demo-pli-file-html"></i>
                                        <span className="menu-title">Reporting</span>
                                        <i className="arrow"></i>
                                    </a>

                                    <ul className="collapse">
                                        <li>
                                            <a href="void(0)">Inventory Report</a>
                                        </li>
                                        <li>
                                            <a href="void(0)">Purchase Report</a>
                                        </li>
                                        <li>
                                            <a href="void(0)">Product Report</a>
                                        </li>
                                        <li>
                                            <a href="void(0)">Sales Report</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/setup">
                                        <i className="demo-pli-gear"></i>
                                        <span className="menu-title">
                                            Setup
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}