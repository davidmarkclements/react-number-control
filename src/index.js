const React = require('react')
const {Component} = React
const noop = ()=>{}

class NumberControl extends Component {
  constructor({max = 4, min = 0, n = 0}) {
    super()
    this.state = {max, min, n}
  }
  componentWillReceiveProps({max = 4, min = 0, n = 0}) {
    this.setState({max, min, n})
  }
  minus() {
    const {onChange = noop, onReject = noop} = this.props
    const {min, n} = this.state
    const next = n - 1
    if (next < min) return onReject('minus', min, n)
    this.setState({n: next})
    onChange(next, n)

  }
  plus() {
    const {onChange = noop, onReject = noop} = this.props
    const {max, n} = this.state
    const next = n + 1
    if (next > max) return onReject('plus', max, n)
    this.setState({n: next})
    onChange(next, n)  
  } 
  render() {
    const {n} = this.state
    const {className = 'ns', childClasses = {}, chars = {}} = this.props
    const {minus = 'ns-minus', num = 'ns-num', plus = 'ns-plus'} = childClasses
    const {minusChar = '-', plusChar = '+'} = chars
    return (
      <div className={className}>
        <span onClick={() => this.minus()} className={minus} key='ns-minus'>
          {minusChar}
        </span>
        <span className={plus} key='ns-num'>{n}</span>
        <span onClick={() => this.plus()} className={num} key='ns-plus'>
          {plusChar}
        </span>
      </div>
    )
  }
}

module.exports = NumberControl
