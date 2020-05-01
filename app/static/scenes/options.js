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
var optionsScene = /** @class */ (function (_super) {
    __extends(optionsScene, _super);
    function optionsScene() {
        return _super.call(this, {
            key: "optionsScene"
        }) || this;
    }
    optionsScene.prototype.init = function () {
    };
    optionsScene.prototype.preload = function () {
        this.load.image("slitherLogoFull", "src/assets/Slither_Logo.png");
    };
    optionsScene.prototype.create = function () {
        var _this = this;
        this.backGround = this.add.image(0, 0, "slitherLogoFull").setOrigin(0);
        var returnButton = this.add.text(150, 100, "Back", { font: "16px Courier ", fill: "#0f0" });
        returnButton.setInteractive();
        returnButton.on('pointerdown', function () {
            _this.scene.start("menuScene");
        });
    };
    return optionsScene;
}(Phaser.Scene));
exports.optionsScene = optionsScene;
//# sourceMappingURL=options.js.map