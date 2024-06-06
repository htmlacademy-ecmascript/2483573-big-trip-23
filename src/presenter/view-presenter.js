import { render } from '../framework/render';
import { getRandomArrayElement } from '../util';

import EditPointView from '../view/edit-point-view';
import SortView from '../view/list-sort-view';
import ItemView from '../view/item-view';
import ListView from '../view/list-view';
import CreateView from '../view/create-view';

export default class Presenter {
  #container;
  #tripModel;
  #sortView;
  #listView;
  #editView;
  #createView;
  #itemView;

  constructor({ container, tripModel }) {
    this.#container = container;
    this.#tripModel = tripModel;
  }

  renderSortView() {
    this.#sortView = new SortView();
    render(this.#sortView, this.#container);
  }

  renderListView() {
    this.#listView = new ListView();
    render(this.#listView, this.#container);
  }

  renderEditView(point, destinations, offers) {
    this.#editView = new EditPointView(point, destinations, offers);
    render(this.#editView, this.#listView.element);
  }

  renderCreateView() {
    this.#createView = new CreateView();
    render(this.#createView, this.#listView.element);
  }

  renderItemView(points, destination, offers) {
    this.#itemView = new ItemView(points, destination, offers);
    render(this.#itemView, this.#listView.element);
  }

  init() {
    const points = this.#tripModel.getPoints();
    const destinations = this.#tripModel.getDestinations();
    const offers = this.#tripModel.getOffers();

    const destination = this.#tripModel.getDestinations();
    const randomPoint = getRandomArrayElement(points);
    const emptyPoint = this.#tripModel.getEmptyPoint();

    this.renderSortView();
    this.renderListView();
    this.renderEditView(randomPoint, destinations, offers);
    this.renderEditView(emptyPoint, destinations, offers);
    // this.renderCreateView();

    this.#tripModel.getPoints().forEach((point) => {
      this.renderItemView(point, destination, offers);
    });

    render(this.#listView, this.#container);
  }
}
