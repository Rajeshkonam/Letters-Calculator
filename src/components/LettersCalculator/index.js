import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {input: ''}

  onChangeInput = event => {
    const {value} = event.target
    this.setState({input: value})
  }

  render() {
    const {input} = this.state

    return (
      <div className="c1">
        <div>
          <h1 className="h1">Calculate the Letters you enter</h1>
          <div>
            <label className="p1" htmlFor="phraseText">
              Enter the phrase
            </label>
          </div>
          <input
            type="text"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.onChangeInput}
            value={input}
            id="phraseText"
          />
          <div className="c2">
            <p className="h2">No.of letters: {input.length}</p>
          </div>
        </div>
        {/* ///////// */}

        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="i1"
        />
      </div>
    )
  }
}
export default LettersCalculator
