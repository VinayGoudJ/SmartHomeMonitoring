var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import styles from './AiSmartHomeWebpart.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { spfi } from "@pnp/sp";
import { Web } from "@pnp/sp/webs";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
//import { Card, CardSection } from "@fluentui/react-components";
import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
var _sp;
var getSP = function () {
    if (!_sp) {
        _sp = spfi(Web("https://rivieredu.sharepoint.com/sites/mydevsite"));
    }
    return _sp;
};
var AiSmartHomeWebpart = /** @class */ (function (_super) {
    __extends(AiSmartHomeWebpart, _super);
    function AiSmartHomeWebpart(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            motionData: [],
            temperatureData: [],
            securityLogs: []
        };
        return _this;
    }
    AiSmartHomeWebpart.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sp, motionData, temperatureData, securityLogs, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sp = getSP();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        console.log("Fetching Motion Sensor Data...");
                        return [4 /*yield*/, sp.web.lists.getByTitle("MotionSensorData").items
                                .select("Timestamp", "Location", "MotionDetected")
                                .top(5000)
                                .filter("ID gt 0")()];
                    case 2:
                        motionData = _a.sent();
                        console.log("Fetching Temperature Data...");
                        return [4 /*yield*/, sp.web.lists.getByTitle("TemperatureData").items
                                .select("Timestamp", "Room", "Temperature")
                                .top(5000)
                                .filter("ID gt 0")()];
                    case 3:
                        temperatureData = _a.sent();
                        console.log("Fetching Security Logs...");
                        return [4 /*yield*/, sp.web.lists.getByTitle("SecurityLogs").items
                                .select("Timestamp", "Event", "Status")
                                .top(5000)
                                .filter("ID gt 0")()];
                    case 4:
                        securityLogs = _a.sent();
                        console.log("Motion Data:", motionData);
                        console.log("Temperature Data:", temperatureData);
                        console.log("Security Logs:", securityLogs);
                        this.setState({ motionData: motionData, temperatureData: temperatureData, securityLogs: securityLogs });
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.error("Error fetching SharePoint list data", error_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    AiSmartHomeWebpart.prototype.render = function () {
        var _a = this.props, description = _a.description, environmentMessage = _a.environmentMessage, hasTeamsContext = _a.hasTeamsContext, userDisplayName = _a.userDisplayName;
        // Data for Motion Detection Chart
        var motionChartData = {
            labels: this.state.motionData.map(function (item) { return item.Timestamp; }),
            datasets: [
                {
                    label: 'Motion Detected',
                    data: this.state.motionData.map(function (item) { return item.MotionDetected ? 1 : 0; }),
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        };
        // Data for Temperature Trend Chart
        var temperatureChartData = {
            labels: this.state.temperatureData.map(function (item) { return item.Timestamp; }),
            datasets: [
                {
                    label: 'Temperature (°C)',
                    data: this.state.temperatureData.map(function (item) { return item.Temperature; }),
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                }
            ]
        };
        return (React.createElement("section", { className: "".concat(styles.aiSmartHomeWebpart, " ").concat(hasTeamsContext ? styles.teams : '') },
            React.createElement("div", { className: styles.welcome },
                React.createElement("h2", null,
                    "Welcome, ",
                    escape(userDisplayName),
                    "!"),
                React.createElement("div", null, environmentMessage),
                React.createElement("div", null,
                    "Web part property: ",
                    React.createElement("strong", null, escape(description)))),
            React.createElement("h3", null, "\uD83C\uDFE0 AI Smart Home Monitoring Dashboard"),
            React.createElement(Card, null,
                React.createElement(CardHeader, { header: React.createElement("h4", null, "\uD83D\uDCE1 Motion Detection Analytics") }),
                React.createElement(CardPreview, null,
                    React.createElement(Bar, { data: motionChartData }))),
            React.createElement(Card, null,
                React.createElement(CardHeader, { header: React.createElement("h4", null, "\uD83C\uDF21\uFE0F Temperature Trends") }),
                React.createElement(CardPreview, null,
                    React.createElement(Bar, { data: temperatureChartData }))),
            React.createElement(Card, null,
                React.createElement(CardHeader, { header: React.createElement("h4", null, "\uD83D\uDD12 Security Logs") }),
                React.createElement(CardPreview, null,
                    React.createElement("ul", null, this.state.securityLogs.map(function (item, index) { return (React.createElement("li", { key: index },
                        item.Timestamp,
                        " - ",
                        item.Event,
                        " - ",
                        item.Status)); }))))));
    };
    return AiSmartHomeWebpart;
}(React.Component));
export default AiSmartHomeWebpart;
//# sourceMappingURL=AiSmartHomeWebpart.js.map