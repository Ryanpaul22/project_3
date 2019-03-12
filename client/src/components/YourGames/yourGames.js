import React from 'react';
import { Table } from 'reactstrap';

export default class YourGames extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Assigner</th>
            <th>Parter</th>
            <th>Position</th>
            <th>Payment Type</th>
            <th>Payment Status</th>
            <th>Fee</th>
            <th>Level</th>
            <th>Town</th>
            <th>Site</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
            <td scope="row">6/7/18</td>
            <td>4:30pm</td>
            <td>Lew Satulsky</td>
            <td>Kevin Paul</td>
            <td>Plate</td>
            <td>Cash</td>
            <td>Paid</td>
            <td>$60</td>
            <td>16u</td>
            <td>Westfield</td>
            <td>Gumpert Park</td>
            <td>Ejected coach in the 4th inning</td>
          </tr>
          <tr>
          <td scope="row">6/9/18</td>
            <td>6:30pm</td>
            <td>Lew Satulsky</td>
            <td>Blaire Killough</td>
            <td>Bases</td>
            <td>Cash</td>
            <td>Paid</td>
            <td>$55</td>
            <td>12u</td>
            <td>Berkeley Heights</td>
            <td>Snyder Park</td>
            <td>None</td>
          </tr>
          <tr>
          <td scope="row">6/11/18</td>
            <td>7:00pm</td>
            <td>Marty Clark</td>
            <td>Steven Switzer</td>
            <td>Plate</td>
            <td>Direct Deposit</td>
            <td>Not Paid</td>
            <td>$58.50</td>
            <td>18u</td>
            <td>Flemington</td>
            <td>Diamond Nation Field 3</td>
            <td>Went into extra innings</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}