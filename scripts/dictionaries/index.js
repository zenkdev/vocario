/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const parse = require('csv-parse');

const dct500 = {
  id: 'dct500',
  name: 'Словарь 500',
  version: '2',
};

const subj3000 = {
  id: 'subj_dct3000',
  name: 'Тематический Словарь 3000',
  version: '2',
};

async function getWords(filename) {
  const words = [];
  const reader = fs.createReadStream(filename);
  const parser = parse();

  await new Promise((resolve, reject) => {
    let headers = null;

    reader
      .pipe(parser)
      .on('readable', function onReadable() {
        let record = this.read();
        while (record) {
          if (!headers) {
            headers = record;
          } else {
            const obj = {};
            for (let i = 0; i < record.length; i += 1) {
              const key = headers[i] || String(i);
              const value = record[i];
              if (value) {
                obj[key] = value;
              }
            }
            words.push(obj);
          }
          record = this.read();
        }
      })
      .on('end', resolve)
      .on('error', reject);
  });

  return words;
}

let dictionaries = null;

async function getDictionaries() {
  if (!dictionaries) {
    dictionaries = [
      { ...dct500, words: await getWords(path.join(__dirname, 'dct500.csv')) },
      { ...subj3000, words: await getWords(path.join(__dirname, 'subj3000.csv')) },
    ];
  }

  return dictionaries;
}

module.exports = getDictionaries;
