import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  genTime = timestamp => {
    let date =  new Date(timestamp);
    let y = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();
    let hrs = `0${date.getHours()}`.slice(-2);
    let min = `0${date.getMinutes()}`.slice(-2);
    return `${y}-${m}-${d}  ${hrs}:${min}`;
  }

  render() {
    return (
      <div className="data-container">
      <h4>USGS All Earthquakes, Past Hour</h4>
      <table>
        <tbody>
        <tr>
          <td>Title</td>
          <td>Magnitude</td>
          <td>Time</td>
        </tr>
      {this.props.records.map((record, index) => {
              return (
                  <tr key={index}>
                    {/* <td> <Link to={{
                        pathname: "detail",
                        search: "?id="+record.id,
                      }}>{record.properties.place}</Link></td> */}
                    <td> <Link to={`/detail/${record.id}`}>{record.properties.place}</Link></td>
                    <td>{record.properties.mag}</td>
                    <td>{this.genTime(record.properties.time)}</td>
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