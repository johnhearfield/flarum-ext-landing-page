import app from 'flarum/app';
import { extend } from 'flarum/extend';
import LandingPageSettingsModal from 'johnhearfield/landing-page/components/LandingPageSettingsModal';

app.initializers.add('johnhearfield/landing-page', () => {
  app.extensionSettings['johnhearfield-landing-page'] = () => app.modal.show(new LandingPageSettingsModal());
});