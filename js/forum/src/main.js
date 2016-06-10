import app from 'flarum/app';
import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';
import NewIndexPage from 'johnhearfield/landing-page/components/NewIndexPage';

app.initializers.add('johnhearfield/landing-page', function() {
    app.routes.index = {path: '/', component: NewIndexPage.component()};
});


