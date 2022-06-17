import React from "react";
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="detail-page-container">
        <h4>{this.props.record.properties.title}</h4>
      <table>
        <tbody>
        <tr>
            <td><b>Title</b></td>
            <td>{this.props.record.properties.title}</td>
        </tr>
        <tr>
            <td><b>Magnitude</b></td>
            <td>{this.props.record.properties.mag}</td>
        </tr>
        <tr>
            <td><b>Time</b></td>
            <td>{this.props.record.properties.time}</td>
        </tr>
        <tr>
            <td><b>Status</b></td>
            <td>{this.props.record.properties.status}</td>
        </tr>
        <tr>
            <td><b>Tsunami</b></td>
            <td>{this.props.record.properties.tsunami}</td>
        </tr>
        <tr>
            <td><b>Type</b></td>
            <td>{this.props.record.properties.type}</td>
        </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

export default DetailPage;