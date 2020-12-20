# hyb-element-table

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## 主要是对element-table 在使用过程中的一些解决方案做一些总结。主要包括以下内容：

1. el-table设置某些行的背景颜色，不受默认 hover样式影响 [代码](./src/views/TableRowHover.vue), [博客](https://blog.csdn.net/hyb_xiaoWuWan/article/details/110672791)  
2. 动态新增table 的行来增加多条信息，并且在新增的时候要对填写的数据进行验证。 [代码](./src/views/TableRules.vue), [博客](https://blog.csdn.net/hyb_xiaoWuWan/article/details/111457278)  
3. 监听路由参数显示子页面。 [代码](./src/views/watchRouter/WatchRouter.vue), [博客](https://blog.csdn.net/hyb_xiaoWuWan/article/details/111460598)  