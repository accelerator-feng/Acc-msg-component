# Acc-msg-component
原生JS模态框组件

- 可自定义模态框大小位置内容
- 可设置皮肤
- 可设置拖动
- 可绑定多个回调函数
- 支持AMD，ES6模块引入以及<script>标签引入

```
 //参数默认值：
   {
       width: 300,           // 模态框宽度
       height: 135,          // 模态框高度
       title: '系统提示',     // 标题
       content: 'welcome!',   // 内容
       textAlertBtn: '确定',  // 按钮内容
       textConfirmBtn: '确定',
       textCancelBtn: '取消',
       handlerAlertBtn: null,  // 回调函数
       handlerConfirmBtn: null,
       handlerCancelBtn: null,
       skinClassName: null,    // 皮肤类名
       hasMask: true,          // 是否有遮罩层
       isDraggable: true       // 是否可拖动
   }  
```
