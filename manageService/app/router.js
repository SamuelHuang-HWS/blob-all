module.exports = (app) => {
    const { router, controller } = app;
    console.log(router);
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
}