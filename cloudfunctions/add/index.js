// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init() //(默认配置或者初传入自定义配置)
const db=cloud.database();
// 云函数入口函数
exports.main = async (event, context) => {
    //event  传入的参数
    //context  包含此处调用信息以及运行状态
    /* 
        获取todos集合数据
    */
        /* await cloud.callFunction({  //调用其他的云函数)
            name:'login',
            data:{} //调用是传入的参数
        }).then((res)=>{
            console.log(res)
        }).catch(console.error) */
    /* 
    // return db.collection('todos').get()  //获取数据库某个字段的集合  (全部查询)
        return db.collection('todos).doc('W8_l5wIrVDZJFtWj').get({  //获取某一条数据的集合
            success:function(res){
                console.log(res)
            }
        })
        return db.collection('todos').where({ //获取用户所有待办事件
            _openid:'W8_l5wIrVDZJFtWj',
            done:false,
            "style.color":"yellow"   //嵌套查询 
        }).get({
            success:function(res){
                console.log(res)
            }
        })
    */

    return db.collection('todos').add({  //往数据库中添加数据
        data:{
            description:'前端添加的数据',
            due:new Date('2018-09-01'),
            tags:[
                'cloud',
                'database'
            ],
            location:new db.Geo.Point(113,23),
            done:false
        },
        success:function(res){
            //res 是一个对象
            console.log(res)
        }
    })
}