import PouchVue from 'pouch-vue';
import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
import PouchLiveFind from 'pouchdb-live-find';
import { boot } from 'quasar/wrappers';

PouchDB.plugin(PouchFind)
PouchDB.plugin(PouchLiveFind)

export default boot(({ Vue }) => {
  Vue.use(PouchVue, {
    pouch: PouchDB,    // optional if `PouchDB` is available on the global object
    defaultDB: 'completionist',  // this is used as a default connect/disconnect database
    optionDB: {}, // this is used to include a custom fetch() method (see TypeScript example)
  });
});
