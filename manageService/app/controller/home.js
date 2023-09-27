/*
 * @Author: huangwensong huangwensong@58.com
 * @Date: 2023-09-26 14:54:10
 * @LastEditors: huangwensong huangwensong@58.com
 * @LastEditTime: 2023-09-26 14:54:52
 * @FilePath: /blob-all/manageService/app/controller/home.js
 * @Description: 
 */
const Controller = require("egg").Controller;

class HomeController extends Controller {
    index() {
        this.ctx.body = "Hello World";
    }
}

module.exports = HomeController;