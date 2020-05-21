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
    };
    pauseScene.prototype.create = function () {
        var _this = this;
        //: Phaser.GameObjects.Graphics
        //x: this.sys.canvas.width / 2,
        //y: this.sys.canvas.height - 40,
        this.pauseMenu = this.add.graphics();
        this.pauseMenu.fillStyle(0x0000FF, 1);
        this.pauseMenu.fillRect(192, 192, 320, 320);
        //Maybe change to switch
        //or change start to resume
        var resumeButton = this.add.text(320, 256, "resume", { font: "16px Courier ", fill: "#0f0" });
        resumeButton.setInteractive();
        resumeButton.on('pointerdown', function () {
            _this.scene.resume("gameScene");
            _this.scene.stop();
        });
    };
    return pauseScene;
}(Phaser.Scene));
exports.pauseScene = pauseScene;
//# sourceMappingURL=pauseScreen.js.map