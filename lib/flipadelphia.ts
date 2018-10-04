import { BasePage } from './core/base.page';
import { browser, by, element } from 'protractor';
import { LandingPage } from './flipadelphia/pages/landing.page';

export class Flipadelphia extends BasePage {
  constructor() {
    super(by.tagName('my-app'));
  }

  landingPage(): LandingPage {
    return new LandingPage();
  }
}
