import Head from 'next/head'
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Home() {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 42.0266573,
    longitude: -93.6456403,
    zoom: 14,
  });
  return (
    <>
      <Head>
        <title>Map Tab</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.mapbox.com/mapbox-gl-js/v1.11.0/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <main>
        <ReactMapGL
          {...viewport}
          mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange={nextViewport => setViewport(nextViewport)}
        />
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}