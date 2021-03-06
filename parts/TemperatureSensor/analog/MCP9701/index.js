const AnalogTemplatureSensor = require('../AnalogTempratureSensor');

class MCP9701 extends AnalogTemplatureSensor {
  calc(voltage) {
    return (voltage - 0.4) / 0.0195; //Temp(Celsius) = ([AD Voltage]-[Voltage at 0 deg])/[Temp coefficient]
  }
  static info() {
    return {
      name: 'MCP9701',
    };
  }
}

if (typeof module === 'object') {
  module.exports = MCP9701;
}
