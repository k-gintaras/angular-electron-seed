import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestDataService {
  constructor() {}

  testFolders = [
    'C:\\Users\\Ubaby\\Desktop\\Bands\\1200 Micrograms\\1200 Micrograms - Acid.mp3',
    'C:\\Users\\Ubaby\\Desktop\\Bands\\1200 Micrograms\\1200 Micrograms - Ailasco.mp3',
    'C:\\Users\\Ubaby\\Desktop\\Bands\\1200 Micrograms\\1200 Micrograms - Cosmologist.mp3',
    'C:\\Users\\Ubaby\\Desktop\\Bands\\1200 Micrograms\\1200 Micrograms - E Mc2.mp3',
    'C:\\Users\\Ubaby\\Desktop\\Bands\\1200 Micrograms\\1200 Micrograms - Extasy.mp3',
  ];

  getTestFolders(): string[] {
    return this.testFolders;
  }

  getTestData(): any[] {
    return this.testData;
  }

  testData2 = [
    {
      file:
        'C:\\Users\\Ubaby\\Desktop\\To Backup\\Music\\Bands\\Dj Cam\\Dj Cam - Voodoo Jazz.mp3',
      data: {
        title: 'Voodoo Jazz',
        artist: 'Dj Cam',
        album: 'Dj Cam',
        composer: 'Dj Cam',
        initialKey: 'Fm',
        genre: 'Rap',
        userDefinedText: [
          {
            description: 'SERATO_PLAYCOUNT',
            value: '0',
          },
        ],
        bpm: '141',
        comment: {
          language: 'eng',
          shortText: '',
          text:
            'old,loud,slow,cute,high,jazz,vocal,funky,heavy,tense,female,flowing,melodic,passive,balanced,electronic,atmospheric',
        },
        raw: {
          TIT2: 'Voodoo Jazz',
          TPE1: 'Dj Cam',
          TALB: 'Dj Cam',
          TCOM: 'Dj Cam',
          TKEY: 'Fm',
          TXXX: [
            {
              description: 'SERATO_PLAYCOUNT',
              value: '0',
            },
          ],
          TBPM: '141',
          COMM: {
            language: 'eng',
            shortText: '',
            text:
              'old,loud,slow,cute,high,jazz,vocal,funky,heavy,tense,female,flowing,melodic,passive,balanced,electronic,atmospheric',
          },
        },
      },
    },
  ];

  testData = [
    {
      file:
        'C:\\Users\\Ubaby\\Desktop\\Bands\\1200 Micrograms\\1200 Micrograms - Acid.mp3',
      data: {
        album: '1200 Micrograms',
        artist: '1200 Micrograms',
        comment: { language: 'eng', shortText: '', text: '1200 Micrograms' },
        composer: '1200 Micrograms',
        genre: 'Trance',
        title: 'Acid',
        raw: {
          TALB: '1200 Micrograms',
          TPE1: '1200 Micrograms',
          COMM: { language: 'eng', shortText: '', text: '1200 Micrograms' },
          TCOM: '1200 Micrograms',
          TCON: 'Trance',
          TIT2: 'Acid',
        },
      },
    },
    {
      file:
        'C:\\Users\\Ubaby\\Desktop\\Bands\\1200 Micrograms\\1200 Micrograms - Ailasco.mp3',
      data: {
        album: '1200 Micrograms',
        artist: '1200 Micrograms',
        comment: {
          language: 'eng',
          shortText: '',
          text: 'house,dance,happy,positive',
        },
        composer: '1200 Micrograms',
        genre: 'Trance',
        title: 'Ailasco',
        raw: {
          TALB: '1200 Micrograms',
          TPE1: '1200 Micrograms',
          COMM: { language: 'eng', shortText: '', text: '1200 Micrograms' },
          TCOM: '1200 Micrograms',
          TCON: 'Trance',
          TIT2: 'Ailasco',
        },
      },
    },
  ];
}
