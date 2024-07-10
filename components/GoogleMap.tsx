"use client"

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow
} from "@vis.gl/react-google-maps"
import { useState } from "react";

interface Position {
  lat: number;
  lng: number;
}

const GoogleMap = () => {

  const position: Position = { lat: 38.200965, lng: -77.589154 };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_API_KEY}>
      <div className="w-full h-full">
        <Map defaultZoom={13} defaultCenter={position} mapId={process.env.NEXT_PUBLIC_MAP_ID}>
          <AdvancedMarker position={position}>
            <Pin background={'lightgreen'} borderColor={'black'} glyphColor={'black'} />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  )
}

export default GoogleMap