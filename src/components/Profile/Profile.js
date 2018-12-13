import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src="https://randomuser.me/api/portraits/lego/8.jpg" alt="Card cap" />
                <div className="card-body">
                    <p className="card-text">
                        <b>@ilovelove</b>
                        <hr />
                        <span>I like that energy! BOP!</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Profile