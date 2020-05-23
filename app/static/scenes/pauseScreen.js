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
var pauseScene = /** @class */ (function (_super) {
    __extends(pauseScene, _super);
    function pauseScene() {
        return _super.call(this, {
            key: "pauseScene"
        }) || this;
    }
    pauseScene.prototype.init = function () {
    };
    pauseScene.prototype.preload = function () {
        this.load.image("backGround", "src/assets/Caza2_SliftUmmonAlbum.png");
    };
    pauseScene.prototype.create = function () {
        this.backGround = this.add.image(0, 0, "backGround").setOrigin(0);
        //let testButton = this.add.text(150,100, "test", {font: "16px Courier ", fill: "#0f0"});
        //testButton.setInteractive();
        //testButton.on('pointerdown', () => {
        //    this.scene.start("optionsScene") });
    };
    return pauseScene;
}(Phaser.Scene));
exports.pauseScene = pauseScene;
//# sourceMappingURL=pauseScreen.js.map