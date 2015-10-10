const React = require('react')
const test = require('blue-tape')
const render = require('react-shallow-renderer')
const NumberControl = require('../src')

test('n', async ({is}) => {

  const val = 3
  const cmp = render(<NumberControl n={val}/>)
  const actual = cmp.props.children[1].props.children
  const expected = val
  const it = `
    renders with value of n
  `
  is(actual, expected, it)

})

test('minus click', async ({is}) => {

  const cmp = render(<NumberControl n={3}/>)
  cmp.props.children[0].props.onClick()
  cmp.render()
  const actual = cmp.props.children[1].props.children
  const expected = 2
  const it = `
    subtracts 1 from n and renders new value
  `
  is(actual, expected, it)

})

test('plus click', async ({is}) => {

  const cmp = render(<NumberControl n={1}/>)
  cmp.props.children[2].props.onClick()
  cmp.render()
  const actual = cmp.props.children[1].props.children
  const expected = 2
  const it = `
    adds 1 to n and renders new value
  `
  is(actual, expected, it)

})

test('max', async ({is}) => {

  {
    const cmp = render(<NumberControl max={2} n={3}/>)
    const actual = cmp.props.children[1].props.children
    const expected = 2
    const it = `
      does not allow intial value of 
      n to be greater than max
    `
    is(actual, expected, it)
  }

  {
    const cmp = render(<NumberControl max={2} n={1}/>)
    cmp.props.children[2].props.onClick()
    cmp.props.children[2].props.onClick()
    cmp.render()
    const actual = cmp.props.children[1].props.children
    const expected = 2
    const it = `
      does not allow n to exceed max on plus click
    `
    is(actual, expected, it)
  }

})

test('min', async ({is}) => {
  
  {
    const cmp = render(<NumberControl min={2} n={1}/>)
    const actual = cmp.props.children[1].props.children
    const expected = 2
    const it = `
      does not allow intial value of 
      n to be less than min
    `
    is(actual, expected, it)
  }

  {
    const cmp = render(<NumberControl min={2} n={3}/>)
    cmp.props.children[0].props.onClick()
    cmp.props.children[0].props.onClick()
    cmp.render()
    const actual = cmp.props.children[1].props.children
    const expected = 2
    const it = `
      does not allow n to exceed min on minus click
    `
    is(actual, expected, it)
  }

})

test('onChange', async ({same}) => {

  {
    const cmp = render(<NumberControl n={1} onChange={(...actual) => {
      const expected = [2, 1]
      const it = `
        is triggered with (newValue, oldValue) on plus click
      `
      same(actual, expected, it)
    }}/>)

    cmp.props.children[2].props.onClick()
  }

  {
    const cmp = render(<NumberControl n={1} onChange={(...actual) => {
      const expected = [0, 1]
      const it = `
        is triggered with (newValue, oldValue) on minus click
      `
      same(actual, expected, it)
    }}/>)

    cmp.props.children[0].props.onClick()
  }

})

test.only('onReject', async ({same}) => {
  
  {
    const cmp = render(<NumberControl n={1} max={1} onReject={(...actual) => {
      const expected = ['plus', 1, 1]
      const it = `
        is triggered with ('plus', n, min) 
        when plus click attempts to exceed max
      `
      same(actual, expected, it)
    }}/>)

    cmp.props.children[2].props.onClick()
  }

  {
    const cmp = render(<NumberControl n={1} min={1} onReject={(...actual) => {
      const expected = ['minus', 1, 1]
      const it = `
        is triggered with ('minus', n, min)  
        when minus click attempts to exceed min
      `
      same(actual, expected, it)
    }}/>)

    cmp.props.children[0].props.onClick()
  }

})

test('className', async ({is}) => {

  const cmp = render(<NumberControl className='test'/>)
  const actual = cmp.props.className
  const expected = 'test'
  const it = `
    renders outer element with supplied class name
  `
  is(actual, expected, it)

})

test('childClasses.minus', async ({is}) => {

  const cmp = render(<NumberControl childClasses={{
    minus: 'test'
  }}/>)
  const actual = cmp.props.children[0].props.className
  const expected = 'test'
  const it = `
    renders minus element with supplied class name
  `
  is(actual, expected, it)

})

test('childClasses.num', async ({is}) => {

  const cmp = render(<NumberControl childClasses={{
    num: 'test'
  }}/>)
  const actual = cmp.props.children[1].props.className
  const expected = 'test'
  const it = `
    renders num element with supplied class name
  `
  is(actual, expected, it)

})

test('childClasses.plus', async ({is}) => {

  const cmp = render(<NumberControl childClasses={{
    plus: 'test'
  }}/>)
  const actual = cmp.props.children[2].props.className
  const expected = 'test'
  const it = `
    renders plus element with supplied class name
  `
  is(actual, expected)

})

test('minusChar', async ({is}) => {

  const cmp = render(<NumberControl minusChar='$'/>)
  const actual = cmp.props.children[0].props.children
  const expected = '$'
  const it = `
    renders with supplied minus character
  `
  is(actual, expected, it)

})

test('plusChar', async ({is}) => {

  const cmp = render(<NumberControl plusChar='$'/>)
  const actual = cmp.props.children[2].props.children
  const expected = '$'
  const it = `
    renders with supplied plus character
  `
  is(actual, expected, it)

})
