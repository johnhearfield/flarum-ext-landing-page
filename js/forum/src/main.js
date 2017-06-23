import app from 'flarum/app';
import { extend } from 'flarum/extend';

// 1. Import Page component
// extracted from routes.js
import IndexPage from 'flarum/components/IndexPage';
import DiscussionPage from 'flarum/components/DiscussionPage';
import PostsUserPage from 'flarum/components/PostsUserPage';
import DiscussionsUserPage from 'flarum/components/DiscussionsUserPage';
import TagsPage from 'flarum/tags/components/TagsPage';

// johnhearfield/landing-page
import LandingPage from 'johnhearfield/landing-page/components/LandingPage';

app.initializers.add('johnhearfield/landing-page', function(app) {

    var toExtend = [
        DiscussionPage,
        PostsUserPage,
        DiscussionsUserPage,
        IndexPage,
        TagsPage
    ];

    // We now extend the view of the component.prototype
    toExtend.forEach(function (component) {
        extend(component.prototype, 'view', function(view) {
           showLandingPageForLoggedOutUsers(view);
        });
    });

    var showLandingPageForLoggedOutUsers = function(view) {
        // Check if there is no logged-in user
        if (!app.session.user) {
            console.log('User is logged out, show landing page');

            // Empty the vdom children
            view.children = [];

            // Add our new LandingPage component
            view.children.unshift(
                LandingPage.component({})
            );
        }
    }

}, 200);


