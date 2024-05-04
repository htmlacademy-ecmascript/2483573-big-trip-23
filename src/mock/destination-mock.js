import { getRandomArrayElement } from '../util';
export const destinations = [
  {
    'id': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e04',
    'description': 'Astana is a very beautiful city with even more beautiful lrt',
    'name': 'Astana',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.076256300516617',
        'description': 'USA Embassy in Astana '
      }
    ]
  },{
    'id': 'bfa5cb75-a1fe-4b77-a83c-0e528e910e66704',
    'description': 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    'name': 'Chamonix',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005166717',
        'description': 'Chamonix parliament building'
      }
    ]
  },{
    'id': 'f4bm62099-29a3f-4c3d-a702-94eec4a2l808c',
    'description': 'Parlament is cigarettes.',
    'name': 'Parlament office',
    'pictures': [
      {
        'src': 'http://picsum.photos/300/200?r=0.0762563005166317',
        'description': 'Cigarettes parliament office'
      }
    ]
  }

];
export function getRandomDestination(){
  return getRandomArrayElement(destinations);
}
