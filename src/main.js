import { render } from './render';
import ListFilterView from './view/list-filter-view';
import Presenter from './presenter/view-presenter';
import TripModel from './model/trip-model';
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');

const tripModel = new TripModel();

const tripPresenter = new Presenter({
  container: tripEvents, tripModel
});

render(new ListFilterView(), tripFilters);

tripPresenter.init();

