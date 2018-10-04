import { Given } from 'cucumber';
import { Flipadelphia } from '../../lib/flipadelphia';

const flipadelphia = new Flipadelphia();

Given('I am on the demo', async (): Promise<void> => {
  const landingPage = flipadelphia.landingPage();
  flipadelphia.wait(flipadelphia.presenceOf(landingPage.helloMessage));

  console.log(await landingPage.helloMessage.getText()); // ts-lint:disable-line
  return await landingPage.helloMessage.click();
});
