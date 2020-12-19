import localforage from 'localforage'

localforage.config({
  driver: [localforage.LOCALSTORAGE, localforage.INDEXEDDB],
  name: 'EBE',
  storeName: 'EBE_keys'
})

export default localforage