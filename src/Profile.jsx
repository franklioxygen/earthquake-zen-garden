import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <div className="profile-container">
        <h4>Profile</h4>
        <img src={this.props.profile.avatarImage} className="profile-avatar" alt="profile avatar" />
      <table>
        <tbody>
        <tr>
            <td className="table-item">First name</td>
            <td>{this.props.profile.firstName}</td>
        </tr>
        <tr>
            <td className="table-item">Last name</td>
            <td>{this.props.profile.lastName}</td>
        </tr>
        <tr>
            <td className="table-item">Phone</td>
            <td>{this.props.profile.phone}</td>
        </tr>
        <tr>
            <td className="table-item">Email</td>
            <td>{this.props.profile.email}</td>
        </tr>
        <tr>
            <td className="table-item">Bio</td>
            <td>{this.props.profile.bio}</td>
        </tr>
        </tbody>
      </table>
    </div>
      )
    }
  
}

export default Profile