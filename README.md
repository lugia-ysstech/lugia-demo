# @lugia/lugia-demo

Lugia Mega 的导出自定义组件 demo。

### 补充：

在 `src/components` 文件目录下可以看到当前项目导出的所有自定义组件，
进入到要编辑的组件目录，修改 `index.js` 文件代码即可。

自定义组件需向外暴露一些方法和属性，来供使用，暴露的这些属性，可以自行在代码中添加。
添加完成后，在 `lugia.文件夹.zh-CN.json` 文件 props 和 events 字段下，分别添加对应的
属性和回调事件。添加完成后 Lugia Mega 的属性面板便可以读取到这些属性。

#### 为自定义组件绑定model：

在 `src/models` 文件目录下编写需要被绑定的model模型，定义model的 `state` 和 `mutations`，
写完这些后，在 Lugia Mega 中选中导出的自定义组件，将该组件与model的 `state` 和 `mutations`
进行绑定，绑定操作完成后，便可以启动服务进行调试了。
