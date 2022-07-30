import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from 'react-google-maps'
import mapStyle from '../CSS/MapStyle'
import { CircularProgress } from '@mui/material'

const MapLoader = () => {
    return (
        <div className='mapLoader'>
            <CircularProgress 
                sx={{
                    color:'#C7c000'
                }}
            />
        </div>
    )
}

const MyMap = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 10.009708, lng: 77.477366 }}
        options={{styles:mapStyle, disableDefaultUI:true}}
    >
        <Marker position={{lat:10.009708,lng:77.477366}}
            icon={{
                url:'/images/mapMe.png',
                scaledSize: new window.google.maps.Size(35,70)
            }}
            animation={window.google.maps.Animation.DROP}
        />
    </GoogleMap>
))

const Map = () => {

    return (
        <div className='mapDiv'>
            <MyMap 
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCJxwYZ3jRzF3FATO6NB-KLIgrRzUnQ6Sc&language=na"
                loadingElement={<MapLoader />}
                containerElement={<div style={{ height: `100%`,background:'red' }} />}
                mapElement={<div style={{ height: `100%`,background:'red' }} />}
            />
        </div>
    )
}

export default Map