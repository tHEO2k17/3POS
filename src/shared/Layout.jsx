import React, { Component } from 'react';

import logo from '../logo.png';
import Aside from './Aside.jsx';
import Sidebar from './Sidebar.jsx';

export default class Layout extends Component {
    render() {
        return (
            <div id="container" className="effect aside-float aside-bright mainnav-lg">
                {/*BEGIN HEADER*/}
                <header id="navbar">
                    <div id="navbar-container" className="boxed">

                        <div className="navbar-header">
                            <a href="index-2.html" className="navbar-brand">
                                <img src={logo} alt="Nifty Logo" className="brand-icon" />
                                <div className="brand-title">
                                    <span className="brand-text">3POS</span>
                                </div>
                            </a>
                        </div>

                        <div className="navbar-content">
                            <ul className="nav navbar-top-links">
                                <li className="tgl-menu-btn">
                                    <a className="mainnav-toggle" href="void(0)">
                                        <i className="demo-pli-list-view"></i>
                                    </a>
                                </li>
                                <li>
                                    <div className="custom-search-form">
                                        <label className="btn btn-trans" htmlFor="search-input" data-toggle="collapse" data-target="#nav-searchbox">
                                            <i className="demo-pli-magnifi-glass"></i>
                                        </label>
                                        <form>
                                            <div className="search-container collapse" id="nav-searchbox">
                                                <input id="search-input" type="text" className="form-control" placeholder="Type for search..." />
                                            </div>
                                        </form>
                                    </div>
                                </li>
                            </ul>
                            <ul className="nav navbar-top-links">
                                <li className="dropdown">
                                    <a href="void(0)" data-toggle="dropdown" className="dropdown-toggle">
                                        <i className="demo-pli-bell"></i>
                                        <span className="badge badge-header badge-danger"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <div className="nano scrollable">
                                            <div className="nano-content">
                                                <ul className="head-list">
                                                    <li>
                                                        <a href="void(0)" className="media add-tooltip" data-title="Used space : 95%" data-container="body" data-placement="bottom">
                                                            <div className="media-left">
                                                                <i className="demo-pli-layout-grid icon-2x text-main"></i>
                                                            </div>
                                                            <div className="media-body">
                                                                <p className="text-nowrap text-main text-semibold">Some Products are Expiring</p>
                                                                <div className="progress progress-sm mar-no">
                                                                    <div className="progress-bar progress-bar-danger" style={{width: "95%"}}>
                                                                        <span className="sr-only">95% Complete</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="pad-all bord-top">
                                            <a href="void(0)" className="btn-link text-main box-block">
                                                <i className="pci-chevron chevron-right pull-right"></i>Show All Notifications
									</a>
                                        </div>
                                    </div>
                                </li>

                                <li id="dropdown-user" className="dropdown">
                                    <a href="void(0)" data-toggle="dropdown" className="dropdown-toggle text-right">
                                        <span className="ic-user pull-right">
                                            <i className="demo-pli-male"></i>
                                        </span>
                                    </a>


                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right panel-default">
                                        <ul className="head-list">
                                            <li>
                                                <a href="void(0)">
                                                    <i className="demo-pli-male icon-lg icon-fw"></i> Profile</a>
                                            </li>
                                            <li>
                                                <a href="void(0)">
                                                    <span className="badge badge-danger pull-right">9</span>
                                                    <i className="demo-pli-mail icon-lg icon-fw"></i> Messages</a>
                                            </li>
                                            <li>
                                                <a href="void(0)">
                                                    <span className="label label-success pull-right">New</span>
                                                    <i className="demo-pli-gear icon-lg icon-fw"></i> Settings</a>
                                            </li>
                                            <li>
                                                <a href="void(0)">
                                                    <i className="demo-pli-computer-secure icon-lg icon-fw"></i> Lock screen</a>
                                            </li>
                                            <li>
                                                <a href="pages-login.html">
                                                    <i className="demo-pli-unlock icon-lg icon-fw"></i> Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li>
                                    <a href="void(0)" className="aside-toggle">
                                        <i className="demo-pli-dot-vertical"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </header>
                {/*END FOOTER*/}

                <div className="boxed">
                    <div id="content-container">

                    {/*BEGIN PAGE CONTENT*/}
                    {this.props.children}
                     {/*END PAGE CONTENT*/}

                    </div>
                    <aside id="aside-container">
                    <Aside/>
                    </aside>
                    <nav id="mainnav-container">
                    <Sidebar/>
                    </nav>
                </div>

                {/*BEGIN FOOTER*/}
                <footer id="footer">
                    <div className="show-fixed pad-rgt pull-right">
                        You have
                        <a href="void(0)" className="text-main">
                            <span className="badge badge-danger">3</span> pending action.
                        </a>
                    </div>

                    <div className="hide-fixed pull-right pad-rgt">
                        14GB of <strong>512GB</strong> Free.
                    </div>
                    <p className="pad-lft">&#0169; 2017</p>
                </footer>
                <button className="scroll-top btn">
                    <i className="pci-chevron chevron-up"></i>
                </button>
                {/*END FOOTER*/}
            </div>
        );
    }

}