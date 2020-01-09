import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default class Foo extends Component {
    layout = hbs`<span>Injected From Host App</span>`;
}