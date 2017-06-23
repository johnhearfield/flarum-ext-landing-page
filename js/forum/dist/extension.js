'use strict';

System.register('johnhearfield/landing-page/components/NewIndexPage', ['flarum/extend', 'flarum/components/IndexPage', 'flarum/Component', 'flarum/components/Page', 'flarum/tags/components/TagsPage'], function (_export, _context) {
    "use strict";

    var extend, IndexPage, Component, Page, TagsPage, NewIndexPage;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsIndexPage) {
            IndexPage = _flarumComponentsIndexPage.default;
        }, function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }, function (_flarumTagsComponentsTagsPage) {
            TagsPage = _flarumTagsComponentsTagsPage.default;
        }],
        execute: function () {
            NewIndexPage = function (_IndexPage) {
                babelHelpers.inherits(NewIndexPage, _IndexPage);

                function NewIndexPage() {
                    babelHelpers.classCallCheck(this, NewIndexPage);
                    return babelHelpers.possibleConstructorReturn(this, (NewIndexPage.__proto__ || Object.getPrototypeOf(NewIndexPage)).apply(this, arguments));
                }

                babelHelpers.createClass(NewIndexPage, [{
                    key: 'init',
                    value: function init() {
                        console.log('indexPage');
                    }
                }, {
                    key: 'view',
                    value: function view() {
                        if (!app.session.user) {
                            return m(
                                'div',
                                { 'class': 'newIndex page' },
                                m(
                                    'div',
                                    { 'class': 'newIndex header' },
                                    m.trust(app.forum.attribute('johnhearfield-landing-page.header'))
                                ),
                                m(
                                    'div',
                                    { 'class': 'newIndex content' },
                                    m.trust(app.forum.attribute('johnhearfield-landing-page.container'))
                                )
                            );
                        } else {
                            return babelHelpers.get(NewIndexPage.prototype.__proto__ || Object.getPrototypeOf(NewIndexPage.prototype), 'view', this).call(this);
                        }
                    }
                }]);
                return NewIndexPage;
            }(IndexPage);

            _export('default', NewIndexPage);
        }
    };
});;
'use strict';

System.register('johnhearfield/landing-page/main', ['flarum/app', 'flarum/extend', 'flarum/components/IndexPage', 'flarum/components/DiscussionPage', 'flarum/components/PostsUserPage', 'flarum/components/DiscussionsUserPage', 'flarum/tags/components/TagsPage', 'johnhearfield/landing-page/components/LandingPage'], function (_export, _context) {
    "use strict";

    var app, extend, IndexPage, DiscussionPage, PostsUserPage, DiscussionsUserPage, TagsPage, LandingPage;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsIndexPage) {
            IndexPage = _flarumComponentsIndexPage.default;
        }, function (_flarumComponentsDiscussionPage) {
            DiscussionPage = _flarumComponentsDiscussionPage.default;
        }, function (_flarumComponentsPostsUserPage) {
            PostsUserPage = _flarumComponentsPostsUserPage.default;
        }, function (_flarumComponentsDiscussionsUserPage) {
            DiscussionsUserPage = _flarumComponentsDiscussionsUserPage.default;
        }, function (_flarumTagsComponentsTagsPage) {
            TagsPage = _flarumTagsComponentsTagsPage.default;
        }, function (_johnhearfieldLandingPageComponentsLandingPage) {
            LandingPage = _johnhearfieldLandingPageComponentsLandingPage.default;
        }],
        execute: function () {

            // 1. Import Page component
            // extracted from routes.js
            app.initializers.add('johnhearfield/landing-page', function (app) {

                var toExtend = [DiscussionPage, PostsUserPage, DiscussionsUserPage, IndexPage, TagsPage];

                // We now extend the view of the component.prototype
                toExtend.forEach(function (component) {
                    extend(component.prototype, 'view', function (view) {
                        showLandingPageForLoggedOutUsers(view);
                    });
                });

                var showLandingPageForLoggedOutUsers = function showLandingPageForLoggedOutUsers(view) {
                    // Check if there is no logged-in user
                    if (!app.session.user) {
                        console.log('User is logged out, show landing page');

                        // Empty the vdom children
                        view.children = [];

                        // Add our new LandingPage component
                        view.children.unshift(LandingPage.component({}));
                    }
                };
            }, 200);

            // johnhearfield/landing-page
        }
    };
});;
'use strict';

System.register('johnhearfield/landing-page/components/LandingPage', ['flarum/Component', 'flarum/components/Page'], function (_export, _context) {
    "use strict";

    var Component, Page, LandingPage;
    return {
        setters: [function (_flarumComponent) {
            Component = _flarumComponent.default;
        }, function (_flarumComponentsPage) {
            Page = _flarumComponentsPage.default;
        }],
        execute: function () {
            LandingPage = function (_Page) {
                babelHelpers.inherits(LandingPage, _Page);

                function LandingPage() {
                    babelHelpers.classCallCheck(this, LandingPage);
                    return babelHelpers.possibleConstructorReturn(this, (LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).apply(this, arguments));
                }

                babelHelpers.createClass(LandingPage, [{
                    key: 'view',
                    value: function view() {

                        return m(
                            'div',
                            { 'class': 'LandingPage page' },
                            m(
                                'div',
                                { 'class': 'LandingPage header' },
                                m.trust(app.forum.attribute('johnhearfield-landing-page.header'))
                            ),
                            m(
                                'div',
                                { 'class': 'LandingPage content' },
                                m.trust(app.forum.attribute('johnhearfield-landing-page.container'))
                            )
                        );
                    }
                }]);
                return LandingPage;
            }(Page);

            _export('default', LandingPage);
        }
    };
});