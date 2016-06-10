import { extend } from 'flarum/extend';
import IndexPage from 'flarum/components/IndexPage';

export default class NewIndexPage extends IndexPage {
    view() {
        if(!app.session.user) {
            return (
                <div class="newIndex page">
                    <div class="newIndex header">
                        {m.trust(app.forum.attribute('johnhearfield-landing-page.header'))}
                    </div>
                    <div class="newIndex content">
                        {m.trust(app.forum.attribute('johnhearfield-landing-page.container'))}
                    </div>
                </div>
            );
        } else {
            return super.view();
        }
    }
}