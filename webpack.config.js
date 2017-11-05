var path=require('path');
module.exports={
entry:'./Src/App.js',
output:{
path:'/output',
filename:'bundle.js',
},
module:{
    loaders:[
        {
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            loader:["babel-loader"],
            query:{
                presets:["es2015","stage-0","react"]
            }
        }
    ]
}

}