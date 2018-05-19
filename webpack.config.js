// 专门抽离html的插件
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 抽离css、scss
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

// 引入webpack来使用压缩插件
// const webpack = require("webpack")

module.exports = { //webpack配置对象
    entry:"./src/main.js",     //入口文件，主模块(相当于变形金刚的底座，拼图的板)
    output:{//输出选项
        path:__dirname+'/build',         //必须是绝对路径  输出的地址
        
        // 有的时候会给打包出来的文件名后面跟上一些乱七八糟的东西，:1、为了做版本回退方便;2、浏览器会对外链文件做缓存，这样的话当我们更新功能后用户访问的却是浏览器缓存的上次的文件，所以保证每次更新后页面引入的文件名字都不一样
        filename:'app.js'        //输出的文件名
        // filename:'app_'+Date.now()+'.js'    //时间戳
        //  filename:'app_[hash].js'    //哈希值
    },
    // 开启一个服务器
    devServer:{
        contentBase:'./build',            //服务器开启的位置
        port:9000,
        host:'localhost',
        historyApiFallback:true,     //是否使用H5里的history后退功能

        proxy:{
            '/doc_api':{
                target:'https://wap.91160.com',
                changeOrigin: true,
        		pathRewrite:{
        			'^/doc_api':'/'
        		}
            }
        },
        proxy:{
            '/api':{
                target:'http://localhost:3000',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/node':'/'
                // }
            }
        }
    },
    plugins:[//写很多插件的配置
        new HtmlWebpackPlugin({//当开启webpack-dev-server服务的时候不会打包页面到build中去，真正执行webpack打包的时候会输出过去
            template:'./src/index.html',
            filename:'index.html'
        }),
        new ExtractTextWebpackPlugin({//抽离文本（css...）
            filename:'app.css',   //将src中的样式抽离到build中的app.css文件中
            allChunks:true
        })
        // new webpack.optimize.UglifyJsPlugin({//压缩代码，webpack自带的插件，直接引用就行
        //     compress: {
        //       warnings: false
        //     }
        // }
    ],
    module:{
        loaders:[ //写一个一个的规则
            // {
            //     test:/\.css$/,
            //     loader:'style-loader!css-loader'      //要使用的loader,把从css里抽离出来的css放在style中
            // },
            // {
            //     test:/\.scss$/,
            //     loader:'style-loader!css-loader!sass-loader'
            // }

            {
                test:/\.css$/,
                loader:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })      
            },
            {
                test:/\.scss$/,
                loader:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:'css-loader!sass-loader'
                })  
            },
            // {
            //     test:/\.js$/,
            //     exclude:__dirname+'/node_modules'    //不包括的js
            //     loader:'jsx-loader'
            // },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    }

}