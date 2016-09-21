cc.game.onStart = function () {
  var screenSize = cc.view.getFrameSize();

  cc.view.setDesignResolutionSize(614, 460, cc.ResolutionPolicy.SHOW_ALL);

  cc.LoaderScene.preload(gameResources, function () {
	cc.director.runScene(new gameScene());
  }, this);

};

cc.game.run();