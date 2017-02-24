(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Acc"] = factory();
	else
		root["Acc"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Widget = function () {
	    function Widget() {
	        _classCallCheck(this, Widget);
	
	        // 弹窗dom
	        this.boundingBox = null;
	    }
	    // 添加事件处理函数(订阅)
	
	
	    _createClass(Widget, [{
	        key: 'on',
	        value: function on(type, handler) {
	            if (typeof this.handlers[type] == 'undefined') {
	                this.handlers[type] = [];
	            }
	            this.handlers[type].push(handler);
	            return this;
	        }
	        // 处理所有type类型事件(发布)
	
	    }, {
	        key: 'fire',
	        value: function fire(type, data) {
	            if (this.handlers[type] instanceof Array) {
	                var handlers = this.handlers[type];
	                for (var i = 0, len = handlers.length; i < len; i++) {
	                    handlers[i](data);
	                }
	            }
	        }
	    }, {
	        key: 'rendUI',
	        value: function rendUI() {}
	    }, {
	        key: 'bindUI',
	        value: function bindUI() {}
	    }, {
	        key: 'syncUI',
	        value: function syncUI() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
	
	            // 生成弹窗dom
	            this.rendrUI();
	            // 事件处理函数列表
	            this.handlers = {};
	            // 绑定事件
	            this.bindUI();
	            // 样式及其他功能设置
	            this.syncUI();
	            container.appendChild(this.boundingBox);
	        }
	    }, {
	        key: 'destructor',
	        value: function destructor() {}
	    }, {
	        key: 'destroy',
	        value: function destroy() {
	            this.destructor();
	            document.body.removeChild(this.boundingBox);
	        }
	    }]);
	
	    return Widget;
	}();
	
	var Acc = function (_Widget) {
	    _inherits(Acc, _Widget);
	
	    function Acc() {
	        _classCallCheck(this, Acc);
	
	        var _this = _possibleConstructorReturn(this, (Acc.__proto__ || Object.getPrototypeOf(Acc)).call(this));
	
	        _this.config = {
	            width: 500,
	            height: 300,
	            title: '系统提示',
	            content: 'welcome!',
	            textAlertBtn: '确定',
	            textConfirmBtn: '确定',
	            textCancelBtn: '取消',
	            handlerAlertBtn: null,
	            handlerConfirmBtn: null,
	            handlerCancelBtn: null,
	            skinClassName: null,
	            hasMask: true,
	            isDraggable: true
	        };
	        return _this;
	    }
	
	    _createClass(Acc, [{
	        key: 'rendrUI',
	        value: function rendrUI() {
	            var footerContent = '';
	            switch (this.config.type) {
	                case 'alert':
	                    footerContent = '<input type="button" class=\'Acc-alert-btn\' value=' + this.config.textAlertBtn + '>';
	                    break;
	                case 'confirm':
	                    footerContent = '<input type="button" class=\'Acc-confirm-btn\' value=' + this.config.textConfirmBtn + '><input type="button" class=\'Acc-cancel-btn\' value=' + this.config.textCancelBtn + '>';
	                    break;
	            }
	            this.boundingBox = function (that) {
	                var div = document.createElement('div');
	                div.className = 'Acc-box';
	                div.draggable = true;
	                div.innerHTML = '<div class=\'Acc-header\'>' + that.config.title + '</div>\n                              <div class=\'Acc-body\'>' + that.config.content + '</div>\n                              <div class=\'Acc-footer\'>\n                                   ' + footerContent + '\n                              </div>';
	                return div;
	            }(this);
	            // 创建遮罩
	            if (this.config.hasMask) {
	                this.mask = function () {
	                    var mask = document.createElement('div');
	                    mask.className = 'Acc-mask';
	                    document.body.appendChild(mask);
	                    return mask;
	                }();
	            }
	        }
	    }, {
	        key: 'bindUI',
	        value: function bindUI() {
	            var _this2 = this;
	
	            // 监听按钮点击
	            this.boundingBox.addEventListener('click', function (e) {
	                switch (e.target.className) {
	                    case 'Acc-alert-btn':
	                        _this2.fire('alert');
	                        _this2.destroy();
	                        break;
	                    case 'Acc-confirm-btn':
	                        _this2.fire('confirm');
	                        _this2.destroy();
	                        break;
	                    case 'Acc-cancel-btn':
	                        _this2.fire('cancel');
	                        _this2.destroy();
	                        break;
	                }
	            });
	            // 添加回调函数
	            if (this.config.handlerAlertBtn) {
	                this.on('alert', this.config.handlerAlertBtn);
	            }
	            if (this.config.handlerConfirmBtn) {
	                this.on('confirm', this.config.handlerConfirmBtn);
	            }
	            if (this.config.handlerCancelBtn) {
	                this.on('cancel', this.config.handlerCancelBtn);
	            }
	        }
	    }, {
	        key: 'syncUI',
	        value: function syncUI() {
	            this.setWindow(this.config);
	            // 皮肤
	            if (this.config.skinClassName) {
	                this.boundingBox.className += ' ' + this.config.skinClassName;
	            }
	            if (this.config.isDraggable) {
	                this.draggable(this.boundingBox);
	            }
	        }
	        // 设置弹窗大小与位置
	
	    }, {
	        key: 'setWindow',
	        value: function setWindow(config) {
	            this.boundingBox.style.width = config.width + 'px';
	            this.boundingBox.style.height = config.height + 'px';
	            this.boundingBox.style.left = config.x || (window.innerWidth - config.width) / 2 + "px";
	            this.boundingBox.style.top = config.y || (window.innerHeight - config.width) / 2 + "px";
	        }
	        // 拖动功能
	
	    }, {
	        key: 'draggable',
	        value: function draggable() {
	            var mouseOffsetX = 0,
	                mouseOffsetY = 0,
	                box = this.boundingBox;
	            document.body.addEventListener('dragover', function (e) {
	                e.preventDefault();
	            });
	            box.addEventListener('dragstart', function (e) {
	                //鼠标点击点离弹窗左边框的距离
	                mouseOffsetX = e.pageX - box.offsetLeft;
	                //鼠标点击点离弹窗上边框的距离
	                mouseOffsetY = e.pageY - box.offsetTop;
	            });
	            box.addEventListener('dragend', function (e) {
	                var moveX = e.pageX - mouseOffsetX,
	                    moveY = e.pageY - mouseOffsetY,
	
	                // 获取页面宽高
	                pageWidth = document.documentElement.clientWidth,
	                    pageHeight = document.documentElement.clientHeight,
	                    maxMoveX = pageWidth - box.offsetWidth,
	                    maxMoveY = pageHeight - box.offsetHeight;
	                // 限制弹窗拖动范围
	                moveX = Math.min(maxMoveX, Math.max(0, moveX));
	                moveY = Math.min(maxMoveY, Math.max(0, moveY));
	                box.style.left = moveX + "px";
	                box.style.top = moveY + "px";
	            });
	        }
	        // 清除遮罩
	
	    }, {
	        key: 'destructor',
	        value: function destructor() {
	            this.mask && document.body.removeChild(this.mask);
	        }
	    }, {
	        key: 'alert',
	        value: function alert(config) {
	            config = Object.assign(this.config, config, { type: 'alert' });
	            this.render();
	            return this;
	        }
	    }, {
	        key: 'confirm',
	        value: function confirm(config) {
	            config = Object.assign(this.config, config, { type: 'confirm' });
	            this.render();
	            return this;
	        }
	    }]);
	
	    return Acc;
	}(Widget);
	
	exports.default = Acc;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=Acc.js.map