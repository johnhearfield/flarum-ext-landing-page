'use strict';

System.register('johnhearfield/landing-page/components/LandingPageSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, LandingPageSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      LandingPageSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(LandingPageSettingsModal, _SettingsModal);

        function LandingPageSettingsModal() {
          babelHelpers.classCallCheck(this, LandingPageSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(LandingPageSettingsModal).apply(this, arguments));
        }

        babelHelpers.createClass(LandingPageSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'LandingPageSettingsModal Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return "Landing Page Settings";
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Header HTML'
              ),
              m('textarea', { rows: '10', required: true, className: 'FormControl', type: 'text', bidi: this.setting('johnhearfield-landing-page.header') })
            ), m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Body HTML'
              ),
              m('textarea', { rows: '25', required: true, className: 'FormControl', type: 'text', bidi: this.setting('johnhearfield-landing-page.container') })
            )];
          }
        }]);
        return LandingPageSettingsModal;
      }(SettingsModal);

      _export('default', LandingPageSettingsModal);
    }
  };
});;
'use strict';

System.register('johnhearfield/landing-page/main', ['flarum/app', 'flarum/extend', 'johnhearfield/landing-page/components/LandingPageSettingsModal'], function (_export, _context) {
  "use strict";

  var app, extend, LandingPageSettingsModal;
  return {
    setters: [function (_flarumApp) {
      app = _flarumApp.default;
    }, function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_johnhearfieldLandingPageComponentsLandingPageSettingsModal) {
      LandingPageSettingsModal = _johnhearfieldLandingPageComponentsLandingPageSettingsModal.default;
    }],
    execute: function () {

      app.initializers.add('johnhearfield/landing-page', function () {
        app.extensionSettings['johnhearfield-landing-page'] = function () {
          return app.modal.show(new LandingPageSettingsModal());
        };
      });
    }
  };
});