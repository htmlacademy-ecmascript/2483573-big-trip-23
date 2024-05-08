import { render } from '../render';
import { points } from '../mock/point-mock';
import EditPointView from '../view/edit-point-view';
import SortView from '../view/list-sort-view';
import ItemView from '../view/item-view';
import ListView from '../view/list-view';
import CreateView from '../view/create-view';
export default class Presenter {
  constructor({ container,pointModel }) {
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

  renderEditView() {
    this.EditView = new EditPointView();
    render(this.EditView, this.ListView.getElement());
  }

  renderCreateView() {
    this.CreateView = new CreateView();
    render(this.CreateView, this.ListView.getElement());
  }

  renderItemView(PointsModel,destination) {
    this.ItemView = new ItemView(PointsModel,destination);
    render(this.ItemView, this.ListView.getElement());
  }

  init() {
    this.pointContainer = [...this.pointModel.getPoints()];
    this.destinationContainer = [...this.pointModel.getDestination()];
    this.renderSortView();
    this.renderListView();
    this.renderEditView();
    this.renderCreateView();

    points.forEach((pointsModels, destination) => {
      this.renderItemView(pointsModels, destination);
    });

    render(this.ListView, this.container);
  }
}

