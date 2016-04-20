/*
MAIN GAME FILE
Source file	name:       game.ts
Author’s name:	        George Savcheko and Jason Gunter
Last modified by:       George Savchenko
Date last modified:     2016-04-15
Program	description:    Create an original 3D game. The game must have a Menu Scene, Instructions Scene, at least 3
                        Game-Level Scenes, and a Game-Over Scene. A scoring system must also be included.
Revision history:       added music, fixed menu, commented code
THREEJS Aliases
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @module scenes
 */
var scenes;
(function (scenes) {
    /**
     * This class instantiates the game over scene object
     *
     * @class Over
     * @extends scenes.Scene
     */
    var Rules = (function (_super) {
        __extends(Rules, _super);
        /**
         * Empty Contructor
         *
         * @constructor
         */
        function Rules() {
            _super.call(this);
            this._initialize();
            this.start();
        }
        Rules.prototype._setupCanvas = function () {
            canvas.style.width = "100%";
            canvas.setAttribute("height", config.Screen.HEIGHT.toString());
            canvas.style.backgroundColor = "#ffffff";
        };
        /**
         * This method sets up default values for class member variables
         * and objects
         *
         * @method _initialize
         * @return void
         */
        Rules.prototype._initialize = function () {
            // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";
            // setup canvas for menu scene
            this._setupCanvas();
            // setup a stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        };
        /**
         * The start method is the main method for the scene class
         *
         * @method start
         * @return void
         */
        Rules.prototype.start = function () {
            this._gameOverLabel = new createjs.Text("1. Avoid bears, they drain health \n 2. The ground turns to lava periodically, don't touch it \n 3. Press E to use your levitation ability \n 4. Collect coins to progress your score and level (some give you power ups!) ", "30px Arial Black", "#ffffff");
            this._gameOverLabel.regX = this._gameOverLabel.getMeasuredWidth() * 0.5;
            this._gameOverLabel.regY = this._gameOverLabel.getMeasuredLineHeight() * 0.5;
            this._gameOverLabel.x = config.Screen.WIDTH * 0.5 + 1200;
            this._gameOverLabel.y = config.Screen.HEIGHT * 0.5 - 200;
            this._stage.addChild(this._gameOverLabel);
            this._menuButton = new createjs.Bitmap(assets.getResult("MenuButton"));
            this._menuButton.regX = this._menuButton.getBounds().width * 0.5;
            this._menuButton.regY = this._menuButton.getBounds().height * 0.5;
            this._menuButton.x = config.Screen.WIDTH * 0.5;
            this._menuButton.y = (config.Screen.HEIGHT * 0.5) + 100;
            this._stage.addChild(this._menuButton);
            this._menuButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._menuButton.on("mouseout", function (event) {
                event.target.alpha = 1.0;
            });
            this._menuButton.on("click", function (event) {
                currentScene = config.Scene.MENU;
                changeScene();
            });
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Rules.prototype.update = function () {
            this._stage.update();
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Rules.prototype.resize = function () {
            this._setupCanvas();
        };
        return Rules;
    })(scenes.Scene);
    scenes.Rules = Rules;
})(scenes || (scenes = {}));
//# sourceMappingURL=rules.js.map