
import { getRandomPoint } from '../mock/point-mock';
import { getDestination } from '../mock/destination-mock';
import { getOffer } from '../mock/offers-mock';

const POINTS_COUNT = 5;

export default class TripModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoint);
  destinations = getDestination;
  offers = getOffer;

  getPoints(){
    return this.points;
  }

  getDestinations(){
    return this.destinations();
  }

  getOffers() {
    return this.offers();
  }

  getCurrentDestination(destinationID) {
    return this.destinations.find((destination) => destination.id === destinationID);
  }

  getPointOffers(offerType) {
    return this.offers.find((offer) => offer.type === offerType);
  }

  getEmptyPoint() {
    return {
      'id': '942f726b-e073-4a3f-b5d3-77203849bfb4',
      'basePrice': 0,
      'dateForm': new Date(),
      'dateTo': new Date(),
      'destination': 0,
      'isFavorite': false,
      'offers': [],
      'type': 'taxi'
    };
  }
}
