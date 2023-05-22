// 导入定义验证规则的包
const joi = require("joi");

// 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(10).required();
const password = joi
  .string()
  .pattern(/^[\S]{6,12}$/)
  .required();

// 验证规则对象 - 注册和登录
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
};
