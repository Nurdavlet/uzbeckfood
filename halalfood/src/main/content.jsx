"use strict";
exports.__esModule = true;
exports.Main = void 0;
var react_router_dom_1 = require("react-router-dom");
require("./main.css");
require("../i18n/config");
var react_i18next_1 = require("react-i18next");
var React = require("react");
var config_1 = require("../i18n/config");
function Main() {
    var t = (0, react_i18next_1.useTranslation)().t;
    function changeLanguage(e) {
        config_1["default"].changeLanguage(e.target.value);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("header", null,
            React.createElement("div", { className: "navbar" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/recipes" }, t('recipes'))),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/products" }, t('products')))),
                React.createElement("div", { className: "langchangebutton" },
                    React.createElement("button", { onClick: changeLanguage, value: "en" }, "en"),
                    React.createElement("button", { onClick: changeLanguage, value: "ru" }, "ru"))),
            React.createElement("div", null))));
}
exports.Main = Main;
