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
//Literal just displays the score
var hudScene = /** @class */ (function (_super) {
    __extends(hudScene, _super);
    function hudScene() {
        return _super.call(this, {
            key: "hudScene"
        }) || this;
    }
    hudScene.prototype.init = function () {
        this.bitmapText = [];
    };
    hudScene.prototype.create = function () {
        // create bitmap texts
        this.bitmapText.push(this.add.bitmapText(10, 10, "font", "Points: " + this.registry.get("points"), 8));
        // create events
        //const level = this.scene.get("gameScene");
        //level.events.on("pointsChanged", this.updatePoints, this);
    };
    hudScene.prototype.updatePoints = function () {
        this.bitmapText[1].setText("Points: " + this.registry.get("points"));
    };
    return hudScene;
}(Phaser.Scene));
exports.hudScene = hudScene;
//# sourceMappingURL=HUD.js.map