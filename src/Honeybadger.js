import Config from 'Config'
import Honeybadger from 'honeybadger-js'

const HoneybadgerNotifier = Honeybadger.configure({
  apiKey: Config.honeybadgerApiKey,
  environment: process.env.SINOPIA_ENV,
  revision: Config.honeybadgerRevision,
})

export default HoneybadgerNotifier
