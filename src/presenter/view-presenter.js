import { render } from '../render';
import { getRandomArrayElement } from '../util';

import EditPointView from '../view/edit-point-view';
import SortView from '../view/list-sort-view';
import ItemView from '../view/item-view';
import ListView from '../view/list-view';
import CreateView from '../view/create-view';

export default class Presenter {
  constructor({ container, pointModel }) {
    this.container = container;
    this.pointModel = pointModel;
  }

  renderSortView() {
    this.sortView = new SortView();
    render(this.sortView, this.container);
  }

  renderListView() {
    this.ListView = new ListView();
    render(this.ListView, this.container);
  }

  renderEditView(point, destinations, offers) {
    this.EditView = new EditPointView(point, destinations, offers);
    render(this.EditView, this.ListView.getElement());
  }

  renderCreateView() {
    this.CreateView = new CreateView();
    render(this.CreateView, this.ListView.getElement());
  }

  renderItemView(points, destination, offers) {
    this.ItemView = new ItemView(points, destination, offers);
    render(this.ItemView, this.ListView.getElement());
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();

    const destination = this.pointModel.getDestinations();
    const randomPoint = getRandomArrayElement(points);
    const emptyPoint = this.pointModel.getEmptyPoint();

    this.renderSortView();
    this.renderListView();
    this.renderEditView(randomPoint, destinations, offers);
    this.renderEditView(emptyPoint, destinations, offers);
    // this.renderCreateView();


    this.pointModel.getPoints().forEach((point) => {


      this.renderItemView(point, destination, offers);
    });

    render(this.ListView, this.container);
  }
}

