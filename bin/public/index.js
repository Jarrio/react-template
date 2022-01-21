/* eslint-disable */
;(function ($hx_exports, $global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Main = function() { };
Main.main = function() {
	ReactDOM.render(React.createElement(react_ReactType.fromComp(App),{ }),window.document.getElementById("root"));
};
var React_Component = require("react").Component;
var App = $hx_exports["App"] = function(props) {
	React_Component.call(this,props);
	this.state = { };
};
App.__super__ = React_Component;
App.prototype = $extend(React_Component.prototype,{
	render: function() {
		return React.createElement(react_ReactType.fromComp(pages_Overview),{ });
	}
});
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var pages_Overview = function(props,context) {
	React_Component.call(this,props,context);
};
pages_Overview.__super__ = React_Component;
pages_Overview.prototype = $extend(React_Component.prototype,{
	render: function() {
		return React.createElement(react_ReactType.fromString("div"),{ },"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\n\t\t\tut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum\n\t\t\tfacilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit\n\t\t\tgravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id\n\t\t\tdonec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit\n\t\t\tadipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.\n\t\t\tMetus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis\n\t\t\timperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget\n\t\t\tarcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem\n\t\t\tdonec massa sapien faucibus et molestie ac.\n\n\t\t\tConsequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla\n\t\t\tfacilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac\n\t\t\ttincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat\n\t\t\tconsequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed\n\t\t\tvulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In\n\t\t\thendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et\n\t\t\ttortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin\n\t\t\tnibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas\n\t\t\taccumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.");
	}
});
var React = require("react");
var ReactDOM = require("react-dom");
var react_ReactType = {};
react_ReactType.fromString = function(s) {
	if(s == null) {
		return react_ReactType.isNull();
	}
	return s;
};
react_ReactType.fromComp = function(cls) {
	if(cls == null) {
		return react_ReactType.isNull();
	}
	if(cls.__jsxStatic != null) {
		return cls.__jsxStatic;
	}
	return cls;
};
react_ReactType.isNull = function() {
	$global.console.error("Runtime value for ReactType is null." + " Something may be wrong with your externs.");
	return "div";
};
App.displayName = "App";
pages_Overview.displayName = "Overview";
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=index.js.map