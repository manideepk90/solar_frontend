import React from "react";
import {Table, TableHead,  TableBody,TableRow, TableCell } from '@mui/material';
function InfoTable(props){

    return (<div style={{"width":"100%"}}>
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>Parameter</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Unit</TableCell>
            </TableRow>
        </TableHead>
        
        <TableBody>
        <TableRow>
            <TableCell>AOD</TableCell>
            <TableCell>{props.data.AOD}</TableCell>
            <TableCell>Unitless</TableCell>

        </TableRow>
        {/* <TableRow>
            <TableCell>AVG AOD</TableCell>
            <TableCell>0.5</TableCell>
            <TableCell>Particle</TableCell>

        </TableRow> */}
        <TableRow>
            <TableCell>Impact of AOD</TableCell>
            <TableCell>{(props.data.loss/props.data.irr)*100}</TableCell>
            <TableCell>%</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Solar Insolation</TableCell>
            <TableCell>{(props.data.irr*24*30)/1000}</TableCell>
            <TableCell>Kwh/M2/Month</TableCell>
        </TableRow>

        <TableRow>
            <TableCell>Solar Loss</TableCell>
            <TableCell>{(props.data.loss*24*30)/1000}</TableCell>
            <TableCell>KWh/M2/Month</TableCell>
        </TableRow>
        <TableRow>
            <TableCell>Max Solar Generation</TableCell>
            <TableCell>{((props.data.irr + props.data.loss)*24*30)/1000}</TableCell>
            <TableCell>Kwh/M2/Month</TableCell>
        </TableRow>
        {/* <TableRow>
            <TableCell>Loss in Cost</TableCell>
            <TableCell>Rs.156,000/-</TableCell>
            <TableCell>Rupees</TableCell>
        </TableRow> */}
    </TableBody>
        </Table>
        </div>)
}

export default InfoTable;