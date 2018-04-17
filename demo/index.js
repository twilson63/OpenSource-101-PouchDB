import 'tachyons'
import movies from './movies'
import print from './print'
import PouchDB from 'pouchdb-browser'
import PouchDBFind from 'pouchdb-find'
import PouchDBUpsert from 'pouchdb-upsert'

PouchDB.plugin(PouchDBFind)
PouchDB.plugin(PouchDBUpsert)

const doc = { type: 'movie', title: 'Groundhog Day', year: '1983' }

print('PouchDB Demo', { hello: 'Columbia' })

// create pouchdb
// const db = PouchDB('os101')

// enable debugging - PouchDB.debug.enable('*')

// get info
// db.info().then(info => print('Database Info', info))

// add document
// db.post(doc).then(res => print('Added Document', res))

// get document
//db.get('6ea5038a-96ec-41ae-b7cc-3c8900799a21').then(doc => print('Doc', doc))

// update document
let updateDoc = {
  type: 'movie',
  title: 'Groundhog Day',
  year: '1993',
  _id: '6ea5038a-96ec-41ae-b7cc-3c8900799a21',
  _rev: '1-87a7b0540be04f7eaf95ec3cfab9577a'
}
// db.put(updateDoc).then(res => print('updated doc', res))

// list documents
// db.allDocs().then(res => print('all docs', res))
// db.allDocs({ include_docs: true }).then(res => print('all docs', res))

// remove documents
// db.remove(
//   '6ea5038a-96ec-41ae-b7cc-3c8900799a21',
//   '2-5b2521a7cf5b41a8840f9183a71e85a2'
// )

// bulk updates
// db.bulkDocs(movies).then(res => print('bulk add/update', res))

// find document
// db
//   .find({
//     selector: {
//       year: '1993'
//     }
//   })
//   .then(res => print('Movies by Year', res))

// createIndex
// db
//   .createIndex({
//     index: {
//       fields: ['year']
//     }
//   })
//   .then(res => print('Movie Index', res))

// upsert document
// db
//   .upsert('1', doc => {
//     return {
//       type: 'movie',
//       name: 'Ghostbusters',
//       year: '1963'
//     }
//   })
//   .then(res => print('Upsert', res))
// db.get('1').then(res => print('result', res))

// remove db
// db.destroy().then(res => print('Destroy Db', res))
