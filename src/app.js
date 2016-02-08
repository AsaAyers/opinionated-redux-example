import boot from 'asa-react'
import routes from './routes.jsx'
import reducer from './reducer'

boot({
    domRoot: document.getElementById('root'),
    reducer,
    routes,
})
