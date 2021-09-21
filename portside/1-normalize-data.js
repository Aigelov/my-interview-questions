// #1 --------------------------------------

const inputData = [
{ id: 1, name: 'Item 1' },
{ id: 2, name: 'Item 2' },
{ id: 4, name: 'Item 4' },
{ id: 7, name: 'Item 7' },
];

function normalize(data) {
  const newData = {
    entities: {},
    byId: [],
  };

  data.forEach((item) => {
    newData.entities[item.id] = item;

    if (!item.entities[item.id]) {
      newData.entities[item.id] = item;
    } else {
      newData.entities[item.id] = item;
    }

    newData.byId.push(item.id);
  });

  return newData;
}

normalize(inputData);

// it('should return normalized data', () => {
//   expect(normalize(inputData)).toEqual({
//     entities: {
//       1: { id: 1, name: 'Item 1' },
//       2: { id: 2, name: 'Item 2' },
//       4: { id: 4, name: 'Item 4' },
//       7: { id: 7, name: 'Item 7' },
//     },
//     byId: [1, 2, 4, 7],
//   });
// });