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
        this.load.image("logo", "src/assets/logo.png");
    };
    creditScene.prototype.create = function () {
        var _this = this;
        this.logo = this.add.image(0, 0, "logo");
        var backButton = this.add.text(150, 100, "return", { font: "16px Courier ", fill: "#0f0" });
        backButton.setInteractive();
        backButton.on('pointerdown', function () {
            _this.scene.start("menuScene");
        });
    };
    return creditScene;
}(Phaser.Scene));
exports.creditScene = creditScene;
//# sourceMappingURL=creditScene.js.map