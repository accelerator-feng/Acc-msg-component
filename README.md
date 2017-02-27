# Acc-msg-component

原生JS模态框组件

- 可自定义模态框大小位置内容
- 可设置皮肤
- 可设置拖动
- 可设置模态框遮罩
- 可绑定多个回调函数，且支持链式调用
- 支持AMD，ES6模块引入以及`<script>`标签引入

API:

.alert( config ):

config


类型: Object


各项属性默认值


```
   {
       width: 300,           // 模态框宽度
       title: '系统提示',     // 标题
       content: 'welcome!',   // 内容
       textAlertBtn: '确定',  // 按钮内容
       handlerAlertBtn: null,  // 回调函数
       skinClassName: null,    // 皮肤类名
       hasMask: true,          // 是否有遮罩层
       isDraggable: true       // 是否可拖动
   }  
```

.confirm( config ):

config


类型: Object


各项属性默认值


```
   {
       width: 300,           // 模态框宽度
       title: '系统提示',     // 标题
       content: 'welcome!',   // 内容
       textConfirmBtn: '确定', // 按钮内容
       textCancelBtn: '取消',
       handlerConfirmBtn: null, // 回调函数
       handlerCancelBtn: null,
       skinClassName: null,    // 皮肤类名
       hasMask: true,          // 是否有遮罩层
       isDraggable: true       // 是否可拖动
   }  
```

.prompt( config ):

config


类型: Object


各项属性默认值


```
   {
       width: 300,                    // 模态框宽度
       title: '系统提示',             // 标题
       content: 'welcome!',           // 内容
       textPromptBtn: '确定',         // 按钮内容
       textCancelBtn: '取消',
       isPromptInputPassword: false,  // 是否作为密码显示
       defaultValuePromptInput: '',   // 文本框默认值
       maxlengthPromptInput: 10,      // 输入字数限制
       handlerPromptBtn: null,        // 回调函数
       handlerCancelBtn: null,
       skinClassName: null,           // 皮肤类名
       hasMask: true,                 // 是否有遮罩层
       isDraggable: true,             // 是否可拖动
    }
```

.on( events , handler() )

events


类型: String


一个事件类型，比如"alert", "confirm", "prompt", 或者 "cancel"。


handler()


类型: Function()


事件被触发时，执行的函数。


使用示例：
```javascript
import Acc from './Acc.js';
let modal = new Acc();
modal.confirm({
        title: 'confirm标题',
        content: 'confirm内容',
        handlerConfirmBtn: function() {
            alert('confirm第一个回调');
        },
        handlerCancelBtn: function() {
            alert('cancel第一个回调');
        },
        textConfirmBtn: 'hello',
        textCancelBtn: 'world',
        isDraggable: false,
    })
    .on('confirm', function() {
        alert('confirm第二个回调');
    })
    .on('confirm', function() {
        alert('confirm第三个回调');
    })
    .on('cancel', function() {
        alert('cancel第二个回调');
    })
    .on('cancel', function() {
        alert('cancel第二个回调');
    });
```


