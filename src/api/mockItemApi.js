import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    id: 1,
    name: 'Broccoli',
    plantFamily: 'Cabbage family'
  },
  {
    id: 2,
    name: 'Carrot',
    plantFamily: 'Carrot family'
  },
  {
    id: 3,
    name: 'Tomato',
    plantFamily: 'Tomato family'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return Math.max(...items.map(itm => itm.id), 0) + 1;
};

function getItemById(id) {
  const item = items.filter(i => i.id === id);
  if (item.length) return item[0];
  return null;
}

class ItemApi {
  static getItem(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, getItemById(id)));
      })
    }, delay);
  }

  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
	item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemNameLength = 3;
        if (item.name.length < minItemNameLength) {
          reject(`Name must be at least ${minItemNameLength} characters.`);
        }

        if (item.plantFamily.length < minItemNameLength) {
            reject(`Plant family must be at least ${minItemNameLength} characters.`);
        }

        if (item.id) {
          const existingItemIndex = items.findIndex(itm => itm.id === item.id);
          items.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId();
          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          return item.id === itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemApi;