const localtunnel = require('localtunnel')
const app = require('./app')

const port = process.env.PORT || 3000
const hostname = process.env.HOST || 'localhost'
const subdomain = process.env.LTSUBDOMAIN || 'moltin'

if (!subdomain) {
  // throw new Error('environment variable LTSUBDOMAIN required')
  console.error('environment variable LTSUBDOMAIN required')
  process.exit(0)
}

app.listen(port, hostname, () => {
  console.debug(`App url http://${hostname}:${port}`)
})

const tunnel = localtunnel(port, {
  subdomain,
  local_host: hostname
}, (err, result) => {
  if (err) {
    console.log(err)
  }
  console.debug(`Tunnel url ${result.url}`)
})

tunnel.on('close', (e) => {
  // tunnels are closed
  console.error('Tunnel close')
  process.exit(0)
});
