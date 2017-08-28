const rp = require('request-promise')
const crypto = require('crypto')
const nonce = require('nonce')()

class Bithumb {
  constructor (key, secret) {
    this.key = key
    this.secret = secret
    this.API_URL = 'https://api.bithumb.com/'
  }

  _public (endpoint, parameter) {
    const options = {
      method: 'GET',
      uri: this.API_URL + endpoint + '/' + parameter,
      json: true
    }

    return rp(options)
  }

  async getTicker (currency) {
    return this._public('public/ticker', currency)
  }

  async getOrderbook (currency) {
    return this._public('public/orderbook', currency)
  }

  async getRecentTransactions (currency) {
    return this._public('public/recent_transactions', currency)
  }

  _private (endpoint, parameters) {
    return null
  }

  async getBalance () {
    return this._private('info/balance')
  }
}

module.exports = Bithumb
