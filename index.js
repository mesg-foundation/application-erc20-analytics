const MESG = require('mesg-js').application()

MESG.whenEvent({
  serviceID: 'ethereum-erc20',
  eventKey: 'transfer'
}, {
  serviceID: 'influxdb',
  taskKey: 'write',
  inputs: (_, eventData) => ({
    measurement: "transfer",
    tags: {
      block: eventData.blockNumber,
      address: eventData.contractAddress,
      from: eventData.from,
      to: eventData.to,
    },
    fields: {
      value: parseFloat(eventData.value)
    }
  })
})
