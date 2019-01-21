const { application } = require('mesg-js')

const mesg = application()
mesg.listenEvent({
  serviceID: 'ethereum-erc20',
  eventFilter: 'transfer'
})
  .on('data', data => {
    const { blockNumber, contractAddress, from, to, value } = JSON.parse(data.eventData)
    mesg.executeTask({
      serviceID: 'influxdb',
      taskKey: 'write',
      inputData: JSON.stringify({
        measurement: 'transfer',
        tags: {
          block: blockNumber,
          address: contractAddress,
          from: from,
          to: to
        },
        fields: {
          value: parseFloat(value)
        }
      })
    })
  })
  .on('error', console.error)
  .on('end', () => process.exit(0))
