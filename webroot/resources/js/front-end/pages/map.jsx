import React from 'react';
import TimelineMap from '../components/map.jsx';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    Link
} from 'framework7-react';

export default () => (
    <Page name="map">
        <Navbar>
            <NavLeft>
                <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
            </NavLeft>
            <NavTitle>{ this.props.appName }</NavTitle>
        </Navbar>
        <TimelineMap></TimelineMap>
    </Page>
);
