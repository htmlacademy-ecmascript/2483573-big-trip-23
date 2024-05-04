
import { getRandomPoint } from '../mock/point-mock';
import { getRandomDestination } from '../mock/destination-mock';
const POINTS_COUNT = 3;
const DESTINATION_COUNT = 3;
export default class PointsModel {
  points = Array.from({length: POINTS_COUNT}, getRandomPoint);
  destinations = Array.from({length: DESTINATION_COUNT}, getRandomDestination);
  getPoints(){
    return this.points;
  }

  getDestination(){
    return this.destinations;
  }
}
