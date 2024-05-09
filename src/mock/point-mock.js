import { getRandomArrayElement } from '../util';

export const points = [
  {
    'id': 'efc31f33-09ba-4143-a623-18337a9a5883',
    'basePrice': 9894,
    'dateForm': '2024-04-29T06:48:06.942Z',
    'dateTo': '2024-04-30T20:53:06.942Z',
    'destination': '8c5e5b04-4bfc-40ee-af1b-077ff7f0e7e6',
    'isFavorite': true,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': 'fbfbc612-c1dc-467c-a353-93505e20fb61',
    'basePrice': 9194,
    'dateForm': '2024-05-02T01:01:06.942Z',
    'dateTo': '2024-05-03T10:24:06.942Z',
    'destination': '6f2930f9-4478-472a-b2bd-1923ed139e04',
    'isFavorite': true,
    'offers': [
      '596db00e-fb6f-4523-a1d9-793ba0068de6',
      '24743660-3313-4858-a00a-a9a26bc43aaa',
      'fc69bea0-672b-4d89-baa2-0c8cb74ce71c',
      '338c0db3-fe2d-4957-baf5-b1f8d85be9d0',
      'd34e7d6e-da05-490b-a471-9a1341e532f1',
      'aaa8730c-c6dc-4531-a322-cd8c60bce30d'
    ],
    'type': 'flight'
  },
  {
    'id': 'a4f9be51-8068-4565-9067-aaa35cad7ae2',
    'basePrice': 8865,
    'dateForm': '2024-05-05T02:54:06.942Z',
    'dateTo': '2024-05-05T12:40:06.942Z',
    'destination': '7f0b10c2-ccc5-4dd6-8e89-7740b8984044',
    'isFavorite': true,
    'offers': [
      'e6d2b818-fb9c-46a9-b795-c1fdbb7b866b',
      'c5082432-9843-4e40-9701-6f1752ccdafb',
      'cf396e85-51b9-48fc-9181-030ba50d166a'
    ],
    'type': 'ship'
  },
  {
    'id': '2e51787d-2e5f-4528-8ede-d18f7c49ecc0',
    'basePrice': 2731,
    'dateForm': '2024-05-07T10:55:06.942Z',
    'dateTo': '2024-05-07T19:20:06.942Z',
    'destination': '7f0b10c2-ccc5-4dd6-8e89-7740b8984044',
    'isFavorite': false,
    'offers': [
      'b8a29a14-d0dc-48e0-b714-6e9e55bb61b1',
      'adc36643-ba1f-4f17-8a03-a7c4a458a1cc',
      'c55fb5cc-da9a-465f-8af4-70cc059b8ce6',
      'a10575bb-5b4d-4fa8-9538-4420d66b08bd'
    ],
    'type': 'taxi'
  },
  {
    'id': '19730a5d-2b3b-4eee-95c4-af65636ee972',
    'basePrice': 4797,
    'dateForm': '2024-05-09T05:51:06.942Z',
    'dateTo': '2024-05-10T09:11:06.942Z',
    'destination': 'af9f2dac-2eda-4faa-80bb-ebac3973dfeb',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '548c017e-c9a1-47d3-824d-a871a7261d4b',
    'basePrice': 9038,
    'dateForm': '2024-05-10T20:14:06.942Z',
    'dateTo': '2024-05-12T06:09:06.942Z',
    'destination': '8e620a28-d0e4-4ccc-9e35-cb50b8c2e35c',
    'isFavorite': true,
    'offers': [],
    'type': 'train'
  },
  {
    'id': 'd2cdf27e-707e-4600-ab20-5e6d9084fb94',
    'basePrice': 4634,
    'dateForm': '2024-05-12T13:43:06.942Z',
    'dateTo': '2024-05-13T03:57:06.942Z',
    'destination': 'dfdecd86-ab95-445f-97ba-64c142a163a1',
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': 'e8cc7663-5308-47e9-8352-371942bf62a9',
    'basePrice': 8550,
    'dateForm': '2024-05-13T19:59:06.942Z',
    'dateTo': '2024-05-14T03:27:06.942Z',
    'destination': '2b48c740-a394-42e9-a70b-74d131187867',
    'isFavorite': false,
    'offers': [
      '634aa7ae-5dc6-435a-9edc-060dd9560894',
      '32333d53-eda5-4099-bcd3-9fadf954ba74'
    ],
    'type': 'bus'
  },
  {
    'id': '942f726b-e073-4a3f-b5d3-77203849bfb3',
    'basePrice': 8905,
    'dateForm': '2024-05-15T23:37:06.942Z',
    'dateTo': '2024-05-16T14:33:06.942Z',
    'destination': 'd3a4af24-45bf-4084-b9b7-4da10c5f94d7',
    'isFavorite': false,
    'offers': [],
    'type': 'train'
  },
  {
    'id': 'fcfeb083-0dd9-4420-8b8c-61140e5919ce',
    'basePrice': 1028,
    'dateForm': '2024-05-17T01:27:06.942Z',
    'dateTo': '2024-05-18T10:04:06.942Z',
    'destination': '8c5e5b04-4bfc-40ee-af1b-077ff7f0e7e6',
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': 'd0f41c3f-68b0-43d2-bb8a-800ca6219a88',
    'basePrice': 999,
    'dateForm': '2024-05-20T09:42:06.942Z',
    'dateTo': '2024-05-20T21:51:06.942Z',
    'destination': '8c5e5b04-4bfc-40ee-af1b-077ff7f0e7e6',
    'isFavorite': true,
    'offers': [
      'ab1521fa-5f49-4846-9eb9-3ef7e225a61d',
      '634aa7ae-5dc6-435a-9edc-060dd9560894',
      '32333d53-eda5-4099-bcd3-9fadf954ba74'
    ],
    'type': 'bus'
  },
  {
    'id': 'e93b7c2c-c189-4d83-9d4d-e23d54a182bd',
    'basePrice': 988,
    'dateForm': '2024-05-22T10:42:06.942Z',
    'dateTo': '2024-05-23T15:49:06.942Z',
    'destination': '8c5e5b04-4bfc-40ee-af1b-077ff7f0e7e6',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '6bcec22f-28b1-475b-9515-021e458b66ae',
    'basePrice': 1088,
    'dateForm': '2024-05-25T11:44:06.942Z',
    'dateTo': '2024-05-26T10:20:06.942Z',
    'destination': 'a22a2007-effd-450c-ac60-c0492f8f55a3',
    'isFavorite': false,
    'offers': [
      'cf396e85-51b9-48fc-9181-030ba50d166a'
    ],
    'type': 'ship'
  },
  {
    'id': '33c8f0fc-9b31-4c96-8f37-b3da80eccf4a',
    'basePrice': 5995,
    'dateForm': '2024-05-28T03:56:06.942Z',
    'dateTo': '2024-05-28T10:10:06.942Z',
    'destination': '8c5e5b04-4bfc-40ee-af1b-077ff7f0e7e6',
    'isFavorite': true,
    'offers': [],
    'type': 'ship'
  },
  {
    'id': 'd09c6d96-8dd9-4261-a03f-acd190e50bc0',
    'basePrice': 4929,
    'dateForm': '2024-05-29T09:37:06.942Z',
    'dateTo': '2024-05-30T02:06:06.942Z',
    'destination': 'a22a2007-effd-450c-ac60-c0492f8f55a3',
    'isFavorite': false,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': 'd3ddba89-4484-4e26-a672-26271c4bfbda',
    'basePrice': 6073,
    'dateForm': '2024-06-01T02:41:06.942Z',
    'dateTo': '2024-06-01T21:49:06.942Z',
    'destination': 'a22a2007-effd-450c-ac60-c0492f8f55a3',
    'isFavorite': false,
    'offers': [
      'e82410c2-ed79-4c38-a156-c55b2bce66cc',
      '8102e020-646d-42eb-bd93-07ae17af3a7d'
    ],
    'type': 'drive'
  },
  {
    'id': 'b76db096-162f-4cb8-aec3-98e99361873c',
    'basePrice': 9462,
    'dateForm': '2024-06-03T07:10:06.942Z',
    'dateTo': '2024-06-05T07:48:06.942Z',
    'destination': '7f0b10c2-ccc5-4dd6-8e89-7740b8984044',
    'isFavorite': false,
    'offers': [
      '6686c962-174d-4fbc-ac1b-f7c6adef415a',
      '80109a65-9831-4865-9ceb-ae110dcd73a3',
      'aad39f80-d3ae-4436-a53b-d81a9397a951'
    ],
    'type': 'train'
  },
  {
    'id': 'ff640920-9da5-43d8-89c0-7a69370624c3',
    'basePrice': 5098,
    'dateForm': '2024-06-05T20:16:06.942Z',
    'dateTo': '2024-06-06T14:25:06.942Z',
    'destination': '6f2930f9-4478-472a-b2bd-1923ed139e04',
    'isFavorite': true,
    'offers': [
      'ab1521fa-5f49-4846-9eb9-3ef7e225a61d',
      '634aa7ae-5dc6-435a-9edc-060dd9560894',
      '32333d53-eda5-4099-bcd3-9fadf954ba74'
    ],
    'type': 'bus'
  },
  {
    'id': 'c8524fbe-983a-49e3-9191-5067fe8d0cc0',
    'basePrice': 7238,
    'dateForm': '2024-06-08T07:27:06.942Z',
    'dateTo': '2024-06-09T11:38:06.942Z',
    'destination': '6f2930f9-4478-472a-b2bd-1923ed139e04',
    'isFavorite': false,
    'offers': [
      'f7466001-7c9c-42b0-af48-2334877eb457',
      '4ddcf118-5e2e-40bf-b3e6-cdbfed55c387',
      '0c905a4a-6794-4880-b5eb-c1b2ff98f517'
    ],
    'type': 'check-in'
  },
  {
    'id': '5bdc850d-b60d-4867-8cc7-464e545b16f8',
    'basePrice': 7574,
    'dateForm': '2024-06-10T07:33:06.942Z',
    'dateTo': '2024-06-10T17:38:06.942Z',
    'destination': 'd63dc367-c42f-46f7-be39-6eaa5db17df3',
    'isFavorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'd828d0b0-155e-48b8-a03d-bef4a60debd6',
    'basePrice': 6810,
    'dateForm': '2024-06-11T15:05:06.942Z',
    'dateTo': '2024-06-12T01:50:06.942Z',
    'destination': 'af9f2dac-2eda-4faa-80bb-ebac3973dfeb',
    'isFavorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': '4c6d7e73-f142-4a50-82d5-ecce7002cb73',
    'basePrice': 3553,
    'dateForm': '2024-06-12T13:10:06.942Z',
    'dateTo': '2024-06-13T04:30:06.942Z',
    'destination': 'a22a2007-effd-450c-ac60-c0492f8f55a3',
    'isFavorite': false,
    'offers': [
      '02e9f81b-fb91-47d5-9d01-280b35535c82',
      'f7466001-7c9c-42b0-af48-2334877eb457',
      '4ddcf118-5e2e-40bf-b3e6-cdbfed55c387',
      '0c905a4a-6794-4880-b5eb-c1b2ff98f517'
    ],
    'type': 'check-in'
  },
  {
    'id': '55831139-9e7b-4c2d-a6f9-dff7d9ecd97d',
    'basePrice': 3095,
    'dateForm': '2024-06-13T15:52:06.942Z',
    'dateTo': '2024-06-15T13:38:06.942Z',
    'destination': 'd63dc367-c42f-46f7-be39-6eaa5db17df3',
    'isFavorite': true,
    'offers': [],
    'type': 'restaurant'
  },
  {
    'id': '9afb4796-9503-43d1-8fda-efd6537794a2',
    'basePrice': 8546,
    'dateForm': '2024-06-17T13:29:06.942Z',
    'dateTo': '2024-06-18T01:52:06.942Z',
    'destination': 'd3a4af24-45bf-4084-b9b7-4da10c5f94d7',
    'isFavorite': false,
    'offers': [
      '8102e020-646d-42eb-bd93-07ae17af3a7d',
    ],
    'type': 'drive'
  },
  {
    'id': '6f180983-9cce-4f8d-b54b-6bdcf8add866',
    'basePrice': 496,
    'dateForm': '2024-06-19T03:56:06.942Z',
    'dateTo': '2024-06-20T00:13:06.942Z',
    'destination': '7f0b10c2-ccc5-4dd6-8e89-7740b8984044',
    'isFavorite': false,
    'offers': [],
    'type': 'train'
  }
];

export function getRandomPoint(){
  return getRandomArrayElement(points);
}
