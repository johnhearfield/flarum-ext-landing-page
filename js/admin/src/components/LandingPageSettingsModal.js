import SettingsModal from 'flarum/components/SettingsModal';

export default class LandingPageSettingsModal extends SettingsModal {
  className() {
    return 'LandingPageSettingsModal Modal--small';
  }

  title() {
    return "Landing Page Settings"
  }

  form() {
    return [
      <div className="Form-group">
        <label>Header HTML</label>
        <textarea rows="10" required className="FormControl" type="text" bidi={this.setting('johnhearfield-landing-page.header')}></textarea>
      </div>,

      <div className="Form-group">
        <label>Body HTML</label>
        <textarea rows="25" required className="FormControl" type="text" bidi={this.setting('johnhearfield-landing-page.container')}></textarea>
      </div>
    ];
  }
}