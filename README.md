# ERC20 Analytics

## Deploy MESG process

```bash
mesg-cli process:dev application.yml --env PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/PROJECT_ID
```

Then go to `localhost:3000`, login with `admin` and the password `admin`. You can change your password on the next screen.

Select InfluxDB as a data source.

In the HTTP -> URL input, enter the
value `http://influxdb:8086`

In the InfluxDB Details -> Database input, enter the value `default`

Click on the "Save & Test" button.

You can now create all the dashboards you want, the data from all transfer activity on all the ERC20 on the Ethereum mainnet are now accessible.
