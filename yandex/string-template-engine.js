/*
const data = {
  a: { b: { c: 'd' } },
  e: { f: 'g' },
  h: 'i'
};

get(data, 'a.b') // { c: 'd' }
get(data, 'a.b.c') // 'd'
*/

const data = {
  a: { b: { c: 'd' } },
  e: { f: 'g' },
  h: 'i'
};

console.clear();
const get = (obj, params) => {
  const keys = params.split('.');
  let notFound = false;
  let result = { ...obj };

  for (let key of keys) {
    if (key in result) {
      result = result[key];
    } else {
      result = key;
      notFound = true;
      break;
    }
  }

  if (notFound) {
    return params;
  }

  return result;
};

get(data, 'a.b'); // { c: 'd' }

/*
Реализовать строковый шаблонизатор вида:
  expand('Hello, {user.name}!', {user: {name: 'Vasya'}});
который сделает подстановку переменных и вернет 'Hello, Vasya!'.
*/

const normalizeKey = (key) => {
  return key.substr(1, key.length - 2);
};

const expand = (template, params) => {
  const keys = template.match(/{\S*}/gm);
  let newTemplate = template;

  keys.forEach((key) => {
    const searchValue = new RegExp(key, 'gi');
    let replaceValue = get(params, normalizeKey(key));

    if (replaceValue === normalizeKey(key)) {
      replaceValue = key;
    }

    newTemplate = newTemplate.replace(searchValue, replaceValue);
  });

  console.log(newTemplate);
  return newTemplate;
};

expand('Hello, {user.name}! Now {time} {date}', {
  user: { name: 'Vasya' },
  time: '14:30'
}); // Hello, Vasya! Now 14:30 {date}