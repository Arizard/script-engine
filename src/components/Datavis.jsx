import React, { Component } from 'react'
import { FlexibleWidthXYPlot,
         LineSeries,
         MarkSeries,
         VerticalGridLines,
         HorizontalGridLines,
         XAxis,
         YAxis,
       } from 'react-vis'
import '../../node_modules/react-vis/dist/style.css';
import './Datavis.css'
import BoneData from '../datasets/bone.json'

const DATA = []

BoneData.forEach(row => {
    var col = 'red'
    if (row.gender == 'male') {
        col = 'blue'
    }
    DATA.push(
        {
            x: row.age,
            y: row.spnbmd,
            color: col,
        }
    )
});



export default class Datavis extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12'>
                    <h1>Hey You~</h1>
                    <p>Yeah you. Take a look at this <i>data</i>:</p>
                    <FlexibleWidthXYPlot
                        height={300}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis title='Age (Years)'/>
                        <YAxis title='Bone Mineral Density (Bones/Kg)'/>
                        <MarkSeries
                            colorType="literal"
                            className="mark-series-example"
                            size={2}
                            data={DATA}/>
                    </FlexibleWidthXYPlot>
                    <p>Damn, now <b>that's</b> a <i>business insight</i>.</p>
                </div>
            </div>
        )
    }
}
