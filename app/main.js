global.jQuery = require('jquery')
global.io = require("socket.io-client");
require('bootstrap')
require('./public/css/style.scss')

import App from './App'

const app = new App()
app.start()

export default app