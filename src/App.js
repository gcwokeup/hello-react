import React, {Component} from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

class App extends Component  {

  constructor() {
    // super means call the constructor of my parent
    super();
    this.state = {
      profiles: [
          {
            username: "ola",
            bio: "I am an aspiring Full Stack Developer and polyglot programmer. I have a strong interest in data visualization.",
            profilePicture: "https://avatars3.githubusercontent.com/u/1919772?s=460&v=4",
            github: "https://github.com/zaynaib"
          },
        {
            username: "Rashad",
            bio: "I’m an aspiring front-end designer who loves to tinker with all things related to the web.",
            profilePicture: "https://avatars0.githubusercontent.com/u/5515036?s=460&v=4",
            github: "https://github.com/rashadmad"
          },
          {
            username: "Tiff",
            bio: "Full Stack Web Developer",
            profilePicture: "https://avatars3.githubusercontent.com/u/21062007?s=460&v=4",
            github: "https://github.com/grace000"
          },
          {
            username: "Enas",
            bio: "Northwestern Coding Bootcamp student eager to make a positive impact through technology",
            profilePicture: "https://avatars1.githubusercontent.com/u/26067547?s=460&v=4",
            github: "https://github.com/esiddi4"
          },
          {
            username: "Brittney",
            bio: "Software Developer",
            profilePicture: "https://avatars2.githubusercontent.com/u/11078842?s=460&v=4",
            github: "https://github.com/mintii"
          },
          {
            username: "Sam",
            bio: "I am",
            profilePicture: "https://avatars2.githubusercontent.com/u/3430950?s=460&v=4",
            github: "https://github.com/sanghun89"
          },
          {
            username: "Alex",
            bio: "Chicago is too cold",
            profilePicture: "https://avatars3.githubusercontent.com/u/12702836?s=460&v=4",
            github: "https://github.com/arincon9"
          },
          {
            username: "Rick",
            bio: "Slick",
            profilePicture: "https://avatars3.githubusercontent.com/u/27748809?s=460&v=4",
            github: "https://github.com/rickstylz01"
          },
          {
            username: "Paul",
            bio: "I have abnormally long arms",
            profilePicture: "https://avatars0.githubusercontent.com/u/7453522?s=400&v=4",
            github: "https://github.com/uuunk"
          }
          ]
    }
  }

  render() {

    const profilesList = this.state.profiles.map((profile) =>
        <div className="col-md-3 col-sm-4 my-2">
          <Profile
              username={profile.username.toUpperCase()}
              profilePicture={profile.profilePicture}
              bio={profile.bio}
              github={profile.github}
          />
        </div>

    );

    return (

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Header/>
            </div>
          </div>

          <div className="row">
            {profilesList}

          </div>
        </div>
  )
    ;
  }
}

export default App;
