import renderer from './renderer.js'
import { commonHTML, voidHTML } from './util.js'

const r = renderer.create()

export default r
  .define('h1', commonHTML('h1'))
  .define('h2', commonHTML('h2'))
  .define('h3', commonHTML('h3'))
  .define('h4', commonHTML('h4'))
  .define('h5', commonHTML('h5'))
  .define('h6', commonHTML('h6'))
  .define('bold', commonHTML('b'))
  .define('em', commonHTML('em'))
  .define('strong', commonHTML('strong'))
  .define('quote', commonHTML('blockquote'))
  .define('br', voidHTML('br'))
  .define('span', commonHTML('span'))
  .define('pre', commonHTML('pre'))
  .define('code', commonHTML('code'))
  .define('del', commonHTML('del'))
  .define('div', commonHTML('div'))
  .define('ol', commonHTML('ol'))
  .define('ul', commonHTML('ul'))
  .define('li', commonHTML('li'))
  .define('p', commonHTML('p'))
  .define('table', commonHTML('table'))
  .define('tbody', commonHTML('tbody'))
  .define('td', commonHTML('td'))
  .define('tfoot', commonHTML('tfoot'))
  .define('th', commonHTML('th'))
  .define('thead', commonHTML('thead'))

export * from './util.js'
