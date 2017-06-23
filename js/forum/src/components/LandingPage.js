import Component from 'flarum/Component';
import Page from 'flarum/components/Page';

export default class LandingPage extends Page {
    view() {

        return (
            <div class="LandingPage page">
                <div class="LandingPage header">
                    {m.trust(app.forum.attribute('johnhearfield-landing-page.header'))}
                </div>
                <div class="LandingPage content">
                    {m.trust(app.forum.attribute('johnhearfield-landing-page.container'))}
                </div>
            </div>
        );
    }
}
