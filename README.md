# WineFlix

![Wineflix demo](./wineflix.jpg)

Refactor the HTML and CSS in `src/App.js` to use components.

* Your solution should have over 10 components
* Replace all hard-coded data with the static data below
* Deploy your app to a public URL

## Data

```js
const wines = [{
  id: 1,
  imageUrl: '/red-wine.jpg',
  isNew: true,
  label: 'Wine',
  isFinished: true,
}, {
  id: 2,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 3,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isNew: true,
  isFinished: true,
}, {
  id: 4,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 5,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isNew: true,
  isFinished: true,
}, {
  id: 6,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 7,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 8,
  imageUrl: '/red-wine.jpg',
  label: 'Wine',
  isFinished: true,
}, {
  id: 1,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 2,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 3,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 4,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 5,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 6,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 7,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}, {
  id: 8,
  imageUrl: '/red-wine.jpg',
  progress: 22,
  label: 'Wine',
}];
```

```js
const heroContent = {
  title: 'Rex Goliath',
  subtitle: 'His Royal Majesty is back.',
  imageUrl: '/rex-goliath-logo.png',
  description: `America's most unhinged rooster is out of retirement, and this time? He's mad
  as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
}
```

## Rubric

* [ ] - Deployed
* [ ] - Has over 10 meaningful components
* [ ] - No hard-coded data
* [ ] - Data is passed through the component hierarchy
