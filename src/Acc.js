class Widget {
    constructor() {
            // 弹窗dom
            this.boundingBox = null;
        }
        // 添加事件处理函数(订阅)
    on(type, handler) {
            if (typeof this.handlers[type] == 'undefined') {
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
            return this;
        }
        // 处理所有type类型事件(发布)
    fire(type, data) {
        if (this.handlers[type] instanceof Array) {
            let handlers = this.handlers[type];
            for (let i = 0, len = handlers.length; i < len; i++) {
                handlers[i](data);
            }
        }
    }
    rendUI() {}
    bindUI() {}
    syncUI() {}
    render(container = document.body) {
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
    destructor() {}
    destroy() {
        this.destructor();
        document.body.removeChild(this.boundingBox);
    }
}
class Acc extends Widget {
    constructor() {
        super();
        this.config = {
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
            isDraggable: true,
        };
    }
    rendrUI() {
        let footerContent = '';
        switch (this.config.type) {
            case 'alert':
                footerContent = `<input type="button" class='Acc-alert-btn' value=${this.config.textAlertBtn}>`;
                break;
            case 'confirm':
                footerContent = `<input type="button" class='Acc-confirm-btn' value=${this.config.textConfirmBtn}><input type="button" class='Acc-cancel-btn' value=${this.config.textCancelBtn}>`;
                break;
        }
        this.boundingBox = function(that) {
            let div = document.createElement('div');
            div.className = 'Acc-box';
            div.draggable = true;
            div.innerHTML = `<div class='Acc-header'>${that.config.title}</div>
                              <div class='Acc-body'>${that.config.content}</div>
                              <div class='Acc-footer'>
                                   ${footerContent}
                              </div>`;
            return div;
        }(this);
        // 创建遮罩
        if (this.config.hasMask) {
            this.mask = function() {
                let mask = document.createElement('div');
                mask.className = 'Acc-mask';
                document.body.appendChild(mask);
                return mask;
            }();
        }
    }
    bindUI() {
        // 监听按钮点击
        this.boundingBox.addEventListener('click', e => {
            switch (e.target.className) {
                case 'Acc-alert-btn':
                    this.fire('alert');
                    this.destroy();
                    break;
                case 'Acc-confirm-btn':
                    this.fire('confirm');
                    this.destroy();
                    break;
                case 'Acc-cancel-btn':
                    this.fire('cancel');
                    this.destroy();
                    break;
            }
        });
        // 添加回调函数
        if (this.config.handlerAlertBtn) { this.on('alert', this.config.handlerAlertBtn); }
        if (this.config.handlerConfirmBtn) { this.on('confirm', this.config.handlerConfirmBtn); }
        if (this.config.handlerCancelBtn) { this.on('cancel', this.config.handlerCancelBtn); }
    }
    syncUI() {
            this.setWindow(this.config);
            // 皮肤
            if (this.config.skinClassName) {
                this.boundingBox.className += ` ${this.config.skinClassName}`;
            }
            if (this.config.isDraggable) { this.draggable(this.boundingBox); }
        }
        // 设置弹窗大小与位置
    setWindow(config) {
            this.boundingBox.style.width = config.width + 'px';
            this.boundingBox.style.height = config.height + 'px';
            this.boundingBox.style.left = config.x || (window.innerWidth - config.width) / 2 + "px";
            this.boundingBox.style.top = config.y || (window.innerHeight - config.width) / 2 + "px";
        }
        // 拖动功能
    draggable() {
            let mouseOffsetX = 0,
                mouseOffsetY = 0,
                box = this.boundingBox;
            document.body.addEventListener('dragover', e => {
                e.preventDefault();
            });
            box.addEventListener('dragstart', e => {
                //鼠标点击点离弹窗左边框的距离
                mouseOffsetX = e.pageX - box.offsetLeft;
                //鼠标点击点离弹窗上边框的距离
                mouseOffsetY = e.pageY - box.offsetTop;
            });
            box.addEventListener('dragend', e => {
                let moveX = e.pageX - mouseOffsetX,
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
    destructor() { this.mask && document.body.removeChild(this.mask); }
    alert(config) {
        config = Object.assign(this.config, config, { type: 'alert' });
        this.render();
        return this;
    }
    confirm(config) {
        config = Object.assign(this.config, config, { type: 'confirm' });
        this.render();
        return this;
    }
}

export default Acc;
