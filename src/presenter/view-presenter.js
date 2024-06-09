import { render, replace } from '../framework/render';

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

  #renderSortView() {
    this.#sortView = new SortView();
    render(this.#sortView, this.#container);
  }

  #renderListView() {
    this.#listView = new ListView();
    render(this.#listView, this.#container);
  }

  #renderCreateView() {
    this.#createView = new CreateView();
    render(this.#createView, this.#listView.element);
  }

  #renderItemView({ point, destinations, offers }) {
    const onEditClick = () => switchToEditMode();
    const onFormSubmit = () => switchToViewMode();
    const onFormCancel = () => switchToViewMode();

    const itemComponent = new ItemView({
      point,
      offers,
      destinations,
      onEditClick,
    });

    const editComponent = new EditPointView({
      point,
      offers,
      destinations,
      onFormSubmit,
      onFormCancel,
    });

    function switchToEditMode() {
      replace(editComponent, itemComponent);
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function switchToViewMode() {
      replace(itemComponent, editComponent);
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function escKeyDownHandler(evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        switchToViewMode();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }

    render(itemComponent, this.#listView.element);
  }

  init() {
    const points = this.#tripModel.getPoints();
    const destinations = this.#tripModel.getDestinations();
    const offers = this.#tripModel.getOffers();

    this.#renderSortView();
    this.#renderListView();

    points.forEach((point) => {
      this.#renderItemView({ point, destinations, offers });
    });

    render(this.#listView, this.#container);
  }
}
