### 简介
条件编译 灵感来自uniapp的条件编译

### 安装
```
npm install dif-sign-loader
```

### 使用
```
module.exports = {
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.vue$/,
            use: [{
                loader: 'dif-sign-loader', //
                options: {
                    difsign: process.env.VUE_APP_DIFFSIGN, //环境变量可以自己设置
                    noCache: true //关闭缓存 默认开启
                }
            }]
        })
    },
}

//.env文件
VUE_APP_DIFFSIGN = MY_MODE

//vue文件
  <!--#if PROD_MODE_MODE -->
    <div>生产模式</div>
    <!-- #endif -->

    <!--#if MY_MODE --> 
    <!--process.env.VUE_APP_DIFFSIGN 编译后的结果 -->
    <div>this is english</div>
    <!-- #endif -->

    <!--#ifnot MY_MODE -->
    <div>this is jpan 开发模式</div>
    <!-- #endif -->

    
    //script
    test() {
      // #ifnot MY_MODE
      alert(111);
      // #endif
      // #if          
      this.handleActivated();
      // #endif
    },

```

### 注意
-  1.如果不再vue中，可能需要加载相关的loader；
-  2.在vue.config.js中 ache-loader 上部署了 pitch 方法，具体想了解机制可以自己查阅资料，可通过在 scrpit 指令中 加入"rm -rf node_modules/.cache &&  vue-cli-service build ；正常webpack 则通过noCache:true 关闭缓存


