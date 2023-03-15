function createApp(){
    let app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);
    return app;
}

module.exports = createApp;
