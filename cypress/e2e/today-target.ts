import { CardContext } from '../support/step-contexts';
import { Then } from '../support/step-utils';

Then<CardContext>('I should see target for today as {int}', function (todayTarget: number) {
  CardContext.check(this);
});
