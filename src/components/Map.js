import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'
import mapStyle from '../CSS/MapStyle'
import { CircularProgress } from '@mui/material'
// require('dotenv').config()

const MapLoader = () => {
    return (
        <div className='mapLoader'>
            <CircularProgress
                sx={{
                    color: '#C7c000'
                }}
            />
        </div>
    )
}

const MyMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 10.009708, lng: 77.477366 }}
        options={{ styles: mapStyle, disableDefaultUI: true }}
    >
        <Marker position={{ lat: 10.009708, lng: 77.477366 }}
            icon={{
                url: '/images/mapMe.png',
                scaledSize: new window.google.maps.Size(35, 70)
            }}
            animation={window.google.maps.Animation.DROP}
        />
    </GoogleMap>
))

const Map = () => {

    return (
        <div className='mapDiv'>
            <MyMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&key=${process.env.REACT_APP_MAP_API_KEY}&language=na`}
                loadingElement={<MapLoader />}
                containerElement={<div style={{ height: `100%`, background: '#2e2e2e' }} />}
                mapElement={<div style={{ height: `100%`, background: '#2e2e2e' }} />}
            />
        </div>
    )
}

export default Map