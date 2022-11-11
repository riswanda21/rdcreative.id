route('/', 'index.html');
route('/project', 'project.html');

function main() {
    const app = new App();
    app.setTitle("RD Creative - Go Digital Bersama Kami");
    
    if(app.location == '/project') {
        app.setTitle("RD Creative - Project Kami");
    }
}

ready(main);