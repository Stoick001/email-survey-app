// clientId 525593411037-1o17puet4ncn4kgbnde1dtc6tf62g88a.apps.googleusercontent.com
// clientSecret B19aDawIgOgvNOE_ZWTLNeh3

if (process.env.NODE_ENV === 'produciton') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}
