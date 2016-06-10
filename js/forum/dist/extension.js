'use strict';

System.register('johnhearfield/landing-page/components/NewIndexPage', ['flarum/extend', 'flarum/components/IndexPage'], function (_export, _context) {
    "use strict";

    var extend, IndexPage, NewIndexPage;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsIndexPage) {
            IndexPage = _flarumComponentsIndexPage.default;
        }],
        execute: function () {
            NewIndexPage = function (_IndexPage) {
                babelHelpers.inherits(NewIndexPage, _IndexPage);

                function NewIndexPage() {
                    babelHelpers.classCallCheck(this, NewIndexPage);
                    return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(NewIndexPage).apply(this, arguments));
                }

                babelHelpers.createClass(NewIndexPage, [{
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
                            return babelHelpers.get(Object.getPrototypeOf(NewIndexPage.prototype), 'view', this).call(this);
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

System.register('johnhearfield/landing-page/main', ['flarum/app', 'flarum/extend', 'flarum/components/IndexPage', 'johnhearfield/landing-page/components/NewIndexPage'], function (_export, _context) {
    "use strict";

    var app, extend, IndexPage, NewIndexPage;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumComponentsIndexPage) {
            IndexPage = _flarumComponentsIndexPage.default;
        }, function (_johnhearfieldLandingPageComponentsNewIndexPage) {
            NewIndexPage = _johnhearfieldLandingPageComponentsNewIndexPage.default;
        }],
        execute: function () {

            app.initializers.add('johnhearfield/landing-page', function () {
                app.routes.index = { path: '/', component: NewIndexPage.component() };
            });
        }
    };
});