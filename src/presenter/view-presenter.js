import { render } from '../render';
import EditPointView from '../view/edit-point-view';
import SortView from '../view/list-sort-view';
import ItemView from '../view/item-view';
import ListView from '../view/list-view';
import CreateView from '../view/create-view';
export default class Presenter {
  constructor({ container }) {
    this.container = container;
  }

  renderSortView() {
    this.sortView = new SortView();
    render(this.sortView, this.container);
  }

  renderListView() {
    this.ListView = new ListView();
    render(this.ListView, this.container);
  }

  renderEditView() {
    this.EditView = new EditPointView();
    render(this.EditView, this.ListView.getElement());
  }

  renderCreateView() {
    this.CreateView = new CreateView();
    render(this.CreateView, this.ListView.getElement());
  }

  renderItemView() {
    this.ItemView = new ItemView();
    render(this.ItemView, this.ListView.getElement());
  }

  init() {
    this.renderSortView();
    this.renderListView();
    this.renderEditView();
    this.renderCreateView();

    for (let i = 0; i < 3; i++) {
      this.renderItemView();
    }

    render(this.ListView, this.container);
  }
}

