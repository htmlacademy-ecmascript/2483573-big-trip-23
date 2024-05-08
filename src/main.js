import { render } from './render';
import ListFilterView from './view/list-filter-view';
import Presenter from './presenter/view-presenter';
import PointsModel from './model/point-model';
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const pointModel = new PointsModel();
const tripPresenter = new Presenter({
  container: tripEvents,pointModel
});

render(new ListFilterView(), tripFilters);

tripPresenter.init();

