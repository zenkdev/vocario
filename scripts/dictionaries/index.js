/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable camelcase */
const fs = require('fs');
const path = require('path');
const parse = require('csv-parse');
const subj_dct3000 = require('./subj_dct3000.json');

const dct500 = {
  id: 'dct500',
  name: 'Словарь 500',
  version: '2',
};

let dictionaries = null;

const reader = fs.createReadStream(path.join(__dirname, 'dct500.csv'));
const parser = parse();

async function getDictionaries() {
  if (!dictionaries) {
    const words = [];

    await new Promise(function executor(resolve, reject) {
      let headers = null;

      reader
        .pipe(parser)
        // Use the readable stream api
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

    dictionaries = [{ ...dct500, words }, subj_dct3000];
  }

  return dictionaries;
}

module.exports = getDictionaries;
