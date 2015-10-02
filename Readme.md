# React Number Control

Bare bones number control - functionality only, you supply the styling.

## Usage

```js
const React = require('react')
const NumberSpinner = require('react-number-control')
 
const spinner = <NumberSpinner 
  max={4} 
  min={0} 
  n={0}
  onChange={fn}
  onReject={fn}
  className='user-supplied-main-class'
  childClasses={
    {
      minus: 'user-supplied-minus-class',
      num: 'user-supplied-num-class',
      plus: 'user-supplied-plus-class'
    }
  }
  minusChar='-'
  plusChar='+'
/>

```

All arguments are optional.

## Credits

Sponsored by [nearForm](http://nearform.com)


