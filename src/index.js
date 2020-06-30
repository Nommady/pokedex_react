import ReactDom from 'react-dom'
import React, { Fragment } from 'react'
import App from './App';
import "./index.css"


const el = document.getElementById('root')

ReactDom.render(
    <Fragment>
        <App></App>
    </Fragment>,
    el
    )
