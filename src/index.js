const React = require('react')
const {Component} = React

class NumberControl extends Component {
  constructor({max = 4, min = 0, n = 0}) {
    super()
    this.state = {max, min, n}
  }
  compenentWillReceiveProps({max = 4, min = 0, n = 0}) {
    this.setState({max, min, n})
  }
  minus() {
    const {min} = this.state
    let {n} = this.state
    n -= 1
    console.log(n, min)
    if (n >= min) this.setState({n: n})
  }
  plus() {
    const {max} = this.state
    let {n} = this.state
    n += 1
    console.log(n, max)
    if (n <= max) this.setState({n: n})
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
