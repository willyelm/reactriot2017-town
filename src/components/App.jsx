import React, { Component } from 'react'
import { observer, PropTypes } from 'mobx-react'
import { noTextSelect } from './../styles'
import * as b from 'react-bootstrap'
import g from 'glamorous'
import DevTools from 'mobx-react-devtools'
import Multiplier from './Multiplier'

@observer
export default class App extends Component {
  // noinspection JSUnusedGlobalSymbols,JSUnresolvedVariable
  static propTypes = {
    appState: PropTypes.observableObject.isRequired
  }

  formatTrainingsMultiplier (I) {
    return (1 * 10 ** I) + 'x'
  }

  formatGameSpeed (I) {
    return 'x' + (I + 1)
  }

  render () {
    return (
      <b.Row {...noTextSelect}>
        <b.Col xs={3}>
          <b.Row>
            <g.P fontSize='24px'>
              Training
            </g.P>
            <Multiplier numberOfSpeeds={3} currentSpeed={1} nameFormatter={this.formatTrainingsMultiplier} />
          </b.Row>
          <b.Row>
            !!UNIT COMPONENT!!
          </b.Row>
          <b.Row>
            <g.P fontSize='24px'>
              War
            </g.P>
          </b.Row>
        </b.Col>
        <b.Col xs={6}>
          <g.P fontSize='24px'>
            Buildings
          </g.P>
        </b.Col>
        <b.Col xs={3}>
          <b.Row>
            Resources
          </b.Row>
          <b.Row>
            Population
          </b.Row>
          <b.Row>
            Taxes
          </b.Row>
          <b.Row>
            <g.P fontSize='24px'>
              Speed
            </g.P>
            <Multiplier numberOfSpeeds={3} currentSpeed={1} nameFormatter={this.formatGameSpeed} />
          </b.Row>
        </b.Col>
        <DevTools />
      </b.Row>
    )
  }
}
