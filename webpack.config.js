var webpackFactory = require('asa-react/webpack_factory')

module.exports = webpackFactory({
    projectRoot: __dirname,
    entry: {
        app: './app'
    }
})
