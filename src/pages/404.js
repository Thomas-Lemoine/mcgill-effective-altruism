import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <Fragment>
        <p style={{ textAlign: "center" }}>Sorry, the page you are looking for could not be found. <Link to="/">Go home</Link>.</p>
    </Fragment>
);