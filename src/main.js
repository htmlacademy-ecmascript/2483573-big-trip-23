import { render } from './render';
import ListFilterView from './view/list-filter-view';
import Presenter from './presenter/view-presenter';
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripPresenter = new Presenter({
  container: tripEvents,
});

render(new ListFilterView(), tripFilters);

tripPresenter.init();
