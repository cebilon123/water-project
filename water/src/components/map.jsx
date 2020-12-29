import React from 'react'
import {   ComposableMap,
    Geographies,
    Geography,
    Sphere,
    Graticule } from "react-simple-maps";
import Data from './csvjson.json'



class Map extends React.Component{
    
    constructor(props){
        super(props)
        this.dataOnYear = new Array()
        Data.forEach(r => {
            if(r.Year === 2015)
                this.dataOnYear.push(r)
        })
    }
    
    render() {
        return   <div>
        <ComposableMap
            projectionConfig={{
            rotate: [-20, 0, 0],
            scale: 90
          }}>
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
            <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
            <Geographies geography={"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"}>
          {({ geographies }) =>
            geographies.map((geo) => {
            var currentCountry = this.dataOnYear.find(c => c.Entity === geo.properties.NAME);  

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={this.getColorCodeBaseOnValue( currentCountry ? currentCountry.WaterPercent : 0)}/>
              );
            })
          }
        </Geographies>
        </ComposableMap>
      </div>
    }

    getColorCodeBaseOnValue = (val) => {
        
        console.log(val >= 0 )
            if (val <= 10.0) 
                return "#c7d4e2"               
            if (val <= 35.0)
                return "#a9c5e7"                 
            if(val <= 55.0)   
                return "#98b9e0"              
            if( val <= 85)
                return "#7eafeb"                
            if(val <= 100)     
                return "#2563af"                
        
    }
}

export default Map