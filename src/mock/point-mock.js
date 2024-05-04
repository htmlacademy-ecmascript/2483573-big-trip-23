import { getRandomArrayElement } from '../util';
export const points = [
  {
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'base_price': 6000,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'is_favorite': false,
    'offers': [
      'b4c3e4e6-9053-42ce-b747-e281314baa31667'
    ],
    'type': 'taxi'
  },{
    'id': 'f4b62099-293f-4c3d-a702-94eec4a2808c',
    'base_price': 2000,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e66704',
    'is_favorite': true,
    'offers': null,
    'type': 'flight'
  },{
    'id': 'f4bm62099-29a3f-4c3d-a702-94eec4a2l808c',
    'base_price': 1150,
    'date_from': '2019-07-10T22:55:56.845Z',
    'date_to': '2019-07-11T11:22:13.375Z',
    'destination': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'is_favorite': false,
    'offers': [
      'b6674c3e4e6-9053-42ce-b747-e281314baa31'
    ],
    'type': 'drive'
  }

];

export function getRandomPoints(){
  return getRandomArrayElement(points);
}
