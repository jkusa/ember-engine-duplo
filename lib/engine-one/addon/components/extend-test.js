import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';


export default class Foo extends Component {
    extended = "no";
    get layout() {
        return hbs`<span>ExtendTest extend: {{this.extended}}</span>`;
    }
}