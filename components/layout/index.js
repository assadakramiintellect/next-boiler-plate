import React from "react";
import Head from "next/head";
import Favicon from 'react-favicon';
import '../../style.css';

export default (props) => (
    <div>
        <Head>
            <title>Boyler Plate</title>
        </Head>
        <Favicon url="/static/favicon.ico"/>
        {props.children}
    </div>
)