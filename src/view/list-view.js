import {AbstractView} from '../framework/view/abstract-view';

function createListViewTemplate() {
  return (
    '<ul class="trip-events__list"></ul>'
  );
}

export default class ListView extends AbstractView {
  get template() {
    return createListViewTemplate();
  }


}
