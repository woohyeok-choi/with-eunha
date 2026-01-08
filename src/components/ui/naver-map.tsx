import React from "react"
import { NaverMap, Marker, Container, useNavermaps } from 'react-naver-maps';
import marker from "../../resources/static/marker.png";


interface Props {
    zoom: number
    center: [number, number]
    text: string
}

const Map = ({ zoom, center, text }: Props) => {
    const navermaps = useNavermaps();
    const [lat, lng] = center;
    const mapCenter = new navermaps.LatLng(lat, lng);
    return (
            <Container className='w-full aspect-3/2 border-y-2'>
                <NaverMap
                    center={mapCenter}
                    zoom={zoom}
                    zoomOrigin={mapCenter}
                >
                    <Marker
                        position={mapCenter}
                        clickable={false}
                        draggable={false}
                        icon={{
                            content: `<div class="flex items-center border-2 border-gray-pink bg-white/70 p-1 space-x-2 rounded-sm">
                                                    <img src=${marker} alt="marker" class="w-6" />
                                                    <p class="font-bold text-xs text-left">${text}</p>
                                                </div>`
                        }}
                    />
                </NaverMap>
            </Container >
    )
}

export default Map
