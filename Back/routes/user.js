const express = require("express");
const router = express.Router();
const userHandler = require("../services/user"); //导入用户路由处理函数
const {reg_login_schema} = require("../schema/user"); //导入验证规则对象
const expressJoi = require("@escook/express-joi"); //导入验证规则中间件

//增加表达验证中间件expressJoi
router.post(
    "/register",
    expressJoi(reg_login_schema),
    userHandler.register,
    () => {
        console.log("触发注册");
    }
);

router.post("/login", expressJoi(reg_login_schema), userHandler.login, () => {
    console.log("触发登录");
});

module.exports = router; //导出路由对象
