/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"opensap/orders/HTML5Module/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});