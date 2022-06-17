import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: this.props.records,
      lastSort: null,
    };
  }

  sort = column => {
    if(this.state.lastSort === column) {
      // reverse if same column sorted
      this.setState({
        records: this.state.records.reverse(),
    });
    } else {
    // sort by column
    this.setState({
      records: this.state.records.sort((a, b) => {
        return a.properties[column] - b.properties[column]
      })
    });
    this.setState({lastSort: column});
    }
  }

formatDate = (timestamp) => {
    let date =  new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return `${date.toString().substring(4,15)}, ${strTime}`;
}

  render() {
    return (
      <div className="data-container">
      <h4>USGS All Earthquakes, Past Hour</h4>
      <table>
        <tbody>
        <tr>
          <td>Title</td>
          <td onClick={()=>this.sort('mag')}>Magnitude</td>
          <td onClick={()=>this.sort('time')}>Time</td>
        </tr>
      {this.state.records.map((record, index) => {
              return (
                  <tr key={index}>
                    <td> <Link to={`/detail/${record.id}`}>{record.properties.place}</Link></td>
                    <td>{record.properties.mag}</td>
                    {/* <td>{this.genTime(record.properties.time)}</td> */}
                    <td>{this.formatDate(record.properties.time)}</td>
                  </tr>
              );
            })}
        </tbody>
      </table>
    </div>
    );
  }
}
export default Home;