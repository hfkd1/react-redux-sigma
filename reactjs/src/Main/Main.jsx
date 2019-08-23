import React, { Component } from "react";
import classNames from "classnames";
import { AppTopbar } from "../Components/AppTopbar";
import { AppFooter } from "../Components/AppFooter";
import { AppMenu } from "../Components/AppMenu";
import { AppProfile } from "../Components/AppProfile";
import { Route } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
// import { FormsDemo } from "./components/FormsDemo";
// import { SampleDemo } from "./components/SampleDemo";
// import { DataDemo } from "./components/DataDemo";
// import { PanelsDemo } from "./components/PanelsDemo";
// import { OverlaysDemo } from "./components/OverlaysDemo";
// import { MenusDemo } from "./components/MenusDemo";
// import { MessagesDemo } from "./components/MessagesDemo";
// import { ChartsDemo } from "./components/ChartsDemo";
// import { MiscDemo } from "./components/MiscDemo";
// import { Documentation } from "./components/Documentation";
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "../layout/layout.scss";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      layoutMode: "static",
      layoutColorMode: "dark",
      icone: "assets/layout/images/moon1.png",
      staticMenuInactive: false,
      overlayMenuActive: false,
      mobileMenuActive: false
    };

    this.onWrapperClick = this.onWrapperClick.bind(this);
    this.onToggleMenu = this.onToggleMenu.bind(this);
    this.onSidebarClick = this.onSidebarClick.bind(this);
    this.onMenuItemClick = this.onMenuItemClick.bind(this);
    this.createMenu();
  }

  onThemeSwitchClick() {
    if (this.state.layoutColorMode === "dark") {
      this.setState({ layoutColorMode: "light" });
      this.setState({ icone: "assets/layout/images/sun1.png" });
    } else {
      this.setState({ layoutColorMode: "dark" });
      this.setState({ icone: "assets/layout/images/moon1.png" });
    }
  }

  onWrapperClick(event) {
    if (!this.menuClick) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }

    this.menuClick = false;
  }

  onToggleMenu(event) {
    this.menuClick = true;

    if (this.isDesktop()) {
      if (this.state.layoutMode === "overlay") {
        this.setState({
          overlayMenuActive: !this.state.overlayMenuActive
        });
      } else if (this.state.layoutMode === "static") {
        this.setState({
          staticMenuInactive: !this.state.staticMenuInactive
        });
      }
    } else {
      const mobileMenuActive = this.state.mobileMenuActive;
      this.setState({
        mobileMenuActive: !mobileMenuActive
      });
    }

    event.preventDefault();
  }

  onSidebarClick(event) {
    this.menuClick = true;
  }

  onMenuItemClick(event) {
    if (!event.item.items) {
      this.setState({
        overlayMenuActive: false,
        mobileMenuActive: false
      });
    }
  }

  createMenu() {
    this.menu = [
      {
        label: "Dashboard",
        icon: "pi pi-fw pi-home",
        command: () => {
          window.location = "#/";
        }
      },

      // {
      //     label: 'Menu Modes', icon: 'pi pi-fw pi-cog',
      //     items: [
      //         {label: 'Static Menu', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutMode: 'static'}) },
      //         {label: 'Overlay Menu', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutMode: 'overlay'}) }
      //     ]
      // },
      // {
      //     label: 'Components', icon: 'pi pi-fw pi-globe', badge: '9',
      //     items: [
      //         {label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'},
      // 		{label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms'},
      // 		{label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},
      // 		{label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
      // 		{label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays'},
      // 		{label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus'},
      // 		{label: 'Messages', icon: 'pi pi-fw pi-spinner',to: '/messages'},
      // 		{label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
      // 		{label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc'}
      //     ]
      // },
      {
        label: "Template Pages",
        icon: "pi pi-fw pi-file",
        items: [
          // { label: "Login Page", icon: "pi pi-fw pi-circle-off", to: "/login" }
        ]
      },
      // {
      //     label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
      //     items: [
      //         {
      //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
      //             items: [
      //                 {
      //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
      //                         {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
      //                         {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
      //                     ]
      //                 },
      //                 {
      //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
      //                         {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
      //                     ]
      //                 },
      //             ]
      //         },
      //         {
      //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
      //             items: [
      //                 {
      //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
      //                         {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
      //                         {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
      //                     ]
      //                 },
      //                 {
      //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
      //                     items: [
      //                         {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
      //                         {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}
      //                     ]
      //                 }
      //             ]
      //         }
      //     ]
      // },
      // {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location = "#/documentation"}},
      // {label: 'View Source', command: () => {window.location = "https://github.com/primefaces/sigma"}},
      {
        label: "ThemeSwitch",
        icon: this.state.icone,
        command: () => {
          this.onThemeSwitchClick();
        }
      }
    ];
  }

  addClass(element, className) {
    if (element.classList) element.classList.add(className);
    else element.className += " " + className;
  }

  removeClass(element, className) {
    if (element.classList) element.classList.remove(className);
    else
      element.className = element.className.replace(
        new RegExp(
          "(^|\\b)" + className.split(" ").join("|") + "(\\b|$)",
          "gi"
        ),
        " "
      );
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  componentDidUpdate() {
    if (this.state.mobileMenuActive)
      this.addClass(document.body, "body-overflow-hidden");
    else this.removeClass(document.body, "body-overflow-hidden");
  }

  render() {
    const logo =
      this.state.layoutColorMode === "dark"
        ? "assets/layout/images/logo-white.svg"
        : "assets/layout/images/logo.svg";

    const theme1 =
      this.state.layoutColorMode === "dark"
        ? "assets/layout/images/moon1.png"
        : "assets/layout/images/sun1.png";

    const wrapperClass = classNames("layout-wrapper", {
      "layout-overlay": this.state.layoutMode === "overlay",
      "layout-static": this.state.layoutMode === "static",
      "layout-static-sidebar-inactive":
        this.state.staticMenuInactive && this.state.layoutMode === "static",
      "layout-overlay-sidebar-active":
        this.state.overlayMenuActive && this.state.layoutMode === "overlay",
      "layout-mobile-sidebar-active": this.state.mobileMenuActive
    });

    const sidebarClassName = classNames("layout-sidebar", {
      "layout-sidebar-dark": this.state.layoutColorMode === "dark",
      "layout-sidebar-light": this.state.layoutColorMode === "light"
    });

    return (
      <div className={wrapperClass} onClick={this.onWrapperClick}>
        <AppTopbar onToggleMenu={this.onToggleMenu} />

        <div
          ref={el => (this.sidebar = el)}
          className={sidebarClassName}
          onClick={this.onSidebarClick}
        >
          <div className="layout-logo">
            <img alt="Logo" src={logo} />
          </div>
          <AppProfile />
          <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
          <img alt="Theme" src={theme1} />
        </div>

        <div className="layout-main">
          <Route path="/main" exact component={Dashboard} />
          {/* <Route path="/forms" component={FormsDemo} />
                    <Route path="/sample" component={SampleDemo} />
                    <Route path="/data" component={DataDemo} />
                    <Route path="/panels" component={PanelsDemo} />
                    <Route path="/overlays" component={OverlaysDemo} />
                    <Route path="/menus" component={MenusDemo} />
                    <Route path="/messages" component={MessagesDemo} />
                    <Route path="/charts" component={ChartsDemo} />
                  <Route path="/misc" component={MiscDemo} /> */}
          {/* <Route path="/documentation" component={Documentation} /> */}
        </div>

        <AppFooter />

        <div className="layout-mask" />
      </div>
    );
  }
}

//export default Main;