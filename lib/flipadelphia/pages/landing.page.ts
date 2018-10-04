import { BasePage } from '../../core/base.page';
import { by, element } from 'protractor';

export class LandingPage extends BasePage {
  helloMessage = element(by.tagName('hello'));

  constructor() {
    super(by.tagName('my-app'));
  }
}
