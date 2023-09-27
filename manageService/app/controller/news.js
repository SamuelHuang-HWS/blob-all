/*
 * @Author: huangwensong huangwensong@58.com
 * @Date: 2023-09-26 15:11:15
 * @LastEditors: huangwensong huangwensong@58.com
 * @LastEditTime: 2023-09-26 15:12:34
 * @FilePath: /blob-all/manageService/app/controller/news.js
 * @Description: 
 */
const Controller = require("egg").Controller;

class NewsController extends Controller {
    async list() {
        const dataList = {
            list: [
                { id: 1, title: 'this is news 1', url: '/news/1' },
                { id: 2, title: 'this is news 2', url: '/news/2' },
            ],
        };
        await this.ctx.render('news/list.tpl', dataList);
    }
}



module.exports = NewsController;