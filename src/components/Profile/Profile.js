import React, {Component} from 'react';

class Profile extends Component {
  render() {
    return (
        <a href={this.props.github} target="_blank">
          <div className="card">
            <img className="card-img-top"
                 src={this.props.profilePicture}
                 alt="Card cap"/>
            <div className="card-body">
              <p className="card-text">
                <b>{this.props.username}</b>
                <hr/>
                <span>{this.props.bio}</span>
              </p>
            </div>
          </div>

        </a>
    );
  }
}

export default Profile;
