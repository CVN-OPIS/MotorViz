import React from 'react';

import {Quantity, TwoQuantities} from './signal.js';

class Simulated extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          speed: {},
          torque: {},
          current_d: {},
          current_q: {},
          voltage_d: {},
          voltage_q: {},
          statorPuls: {},

          time_domain: [],
          speed_domain: [], //Also statorPuls domain
          torque_domain: [],
          current_domain: [],
          voltage_domain: []
      }
  }
  static getDerivedStateFromProps(props, state) {
    return {
            speed: props.speed,
            torque: props.torque,
            current_d: props.current_d,
            current_q: props.current_q,
            voltage_d: props.voltage_d,
            voltage_q: props.voltage_q,
            statorPuls: props.statorPuls,

            time_domain: props.time_domain,
            speed_domain: props.speed_domain,
            torque_domain: props.torque_domain,
            current_domain: props.current_domain,
            voltage_domain: props.voltage_domain
          };
  }
  render() {
    return (
      <div class="row">
        <div class="col">
            <Quantity label_y="Speed (Hz)" label_x="Time (s)"
                  domain_x={this.state.time_domain} domain_y={this.state.speed_domain}
                  data={this.state.speed}/>
        </div>
        <div class="col">
            <Quantity label_y="Torque (% Nominal)" label_x="Time (s)"
                 domain_x={this.state.time_domain} domain_y={this.state.torque_domain}
                 data={this.state.torque}/>
        </div>
        <div class="col">
                <TwoQuantities label_y="Current (A)" label_x="Time (s)"
                 domain_x={this.state.time_domain} domain_y={this.state.current_domain}
                 data_one={this.state.current_d} data_two={this.state.current_q}
                 legend_one="Current d" legend_two="Current q"/>
        </div>
        <div class="col">
                <TwoQuantities label_y="Voltage (V)" label_x="Time (s)"
                 domain_x={this.state.time_domain} domain_y={this.state.voltage_domain}
                 data_one={this.state.voltage_d} data_two={this.state.voltage_q}
                 legend_one="Voltge d" legend_two="Voltage q"/>
        </div>
        <div class="col">
                <Quantity label_y="StatorPuls (Hz)" label_x="Time (s)"
                 domain_x={this.state.time_domain} domain_y={this.state.speed_domain}
                 data={this.state.statorPuls}/>
        </div>
      </div>
    )
  }
}

export default Simulated;
