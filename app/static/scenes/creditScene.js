"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var creditScene = /** @class */ (function (_super) {
    __extends(creditScene, _super);
    function creditScene() {
        return _super.call(this, {
            key: "creditScene"
        }) || this;
    }
    creditScene.prototype.init = function () {
    };
    creditScene.prototype.preload = function () {
        this.load.image("logo", "/static/assets/logo.png");
    };
    creditScene.prototype.create = function () {
        var _this = this;
        this.logo = this.add.image(0, 70, "logo");
        var textline1 = this.add.text(0, 110, 'We would like to take a moment to thank the team of developers!', { font: "15px Courier ", fill: "#0f0" });
        var textline2 = this.add.text(0, 130, 'Shervone Mayes: Senior full stack development engineer.', { font: "15px Courier ", fill: "#0f0" });
        var textline3 = this.add.text(0, 150, 'Madison Crowns: Technical sprite and art designer.', { font: "15px Courier ", fill: "#0f0" });
        var textline4 = this.add.text(0, 170, 'Adrian Lopez: Senior game design software engineer.', { font: "15px Courier ", fill: "#0f0" });
        var textline5 = this.add.text(0, 190, 'Mesut Apil: UI & UX  Engineer', { font: "15px Courier ", fill: "#0f0" });
        var textline6 = this.add.text(0, 210, 'Asa Murphy: Associate game design software engineer', { font: "15px Courier ", fill: "#0f0" });
        var textline7 = this.add.text(0, 230, 'Thank you for playing our game!', { font: "15px Courier ", fill: "#0f0" });
        var backButton = this.add.text(150, 280, "return", { font: "16px Courier ", fill: "#0f0" });
        backButton.setInteractive();
        backButton.on('pointerdown', function () {
            _this.scene.start("menuScene");
        });
    };
    return creditScene;
}(Phaser.Scene));
exports.creditScene = creditScene;
//# sourceMappingURL=creditScene.js.map