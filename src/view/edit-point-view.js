import AbstractView from '../framework/view/abstract-view';

function createEventTypeItem(offer, selectedOffer) {
  const isChecked = offer.type === selectedOffer;

  return (
    `
    <div class="event__type-item">
      <input id="event-type-${offer.type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${offer.type}" ${isChecked ? 'checked' : ''}>
      <label class="event__type-label  event__type-label--${offer.type}" for="event-type-${offer.type}-1">${offer.type}</label>
    </div>
    `
  );
}

function createDatalistOption(destination) {
  return (
    `
      <option value="${destination.name}"></option>
    `
  );
}

function createOfferItem(offer, pointOffers) {
  const isChecked = pointOffers.some((offerId) => offerId === offer.id);

  return (
    `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.title}-1" type="checkbox" name="event-offer-${offer.title}" ${isChecked ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-${offer.title}-1">
        <span class="event__offer-title">Add ${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>
    `
  );
}

function createDestinationPicture(picture) {
  return `<img class="event__photo" src="${picture.src}" alt="${picture.description}"></img>`;
}

function createEditPointTemplate({point, destinations, offers}) {
  const currentDestination = destinations.find((destination) => destination.id === point.destination) || destinations[0];

  const currentOffers = offers.find((offer) => offer.type === point.type);

  return (
    `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${point.type}.png" alt="Event type icon">
          </label>

          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              ${ offers.map((offer) => createEventTypeItem(offer, point.type)).join('') }

            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${point.type}
          </label>

          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${currentDestination.name}" list="destination-list-1">
          
          <datalist id="destination-list-1">
            ${ destinations.map((destination) => createDatalistOption(destination)).join('') }
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${point.basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>

      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>
          <div class="event__available-offers">

            ${ currentOffers.offers.map((offer) => createOfferItem(offer, point.offers)).join('') }

          </div>
        </section>
        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${currentDestination.description}</p>

          <div class="event__photos-container">
            <div class="event__photos-tape">
            ${ currentDestination.pictures.map((picture) => createDestinationPicture(picture)).join('') }
            </div>
          </div>
        </section>
      </section>
    </form>
  </li>`
  );
}

export default class EditPointView extends AbstractView{
  #point = null;
  #destinations = null;
  #offers = null;
  #submitHandler = null;
  #cancelHandler = null;

  constructor({point, destinations, offers, onFormCancel, onFormSubmit}){
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#cancelHandler = onFormCancel;
    this.#submitHandler = onFormSubmit;

    this.element.addEventListener('submit', this.#onFormSubmit);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#onCancelForm);
    this.element.querySelector('.event__reset-btn').addEventListener('click', this.#onCancelForm);
  }

  removeElement() {
    super.removeElement();
    this.element.removeEventListener('submit', this.#onFormSubmit);
    this.element.querySelector('.event__rollup-btn').removeEventListener('click', this.#onCancelForm);
    this.element.querySelector('.event__reset-btn').removeEventListener('click', this.#onCancelForm);
  }

  #onFormSubmit = (evt) => {
    evt.preventDefault();
    this.#submitHandler();
  };

  #onCancelForm = (evt) => {
    evt.preventDefault();
    this.#cancelHandler();
  };

  get template() {
    return createEditPointTemplate({point: this.#point, destinations: this.#destinations, offers: this.#offers});
  }
}
