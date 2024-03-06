import React from "react";
import "./App.css";
import jsonData from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <h1>
      Welcome! This page will help you keep track of all the information about
      all the colleges in NCAA Basketball
    </h1>
  );
}

class Card extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;
    return (
      <div className="card-container">
        <div className="card-content">
          <h1>{oneTeam.school}</h1>
          <h3>{oneTeam.name}</h3>
          <h3>
            {oneTeam.city}, {oneTeam.state}
          </h3>
        </div>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {jsonData.teams.map((team) => (
        <Card {...team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <>
        <Welcome />
        <TeamList />
      </>
    </div>
  );
}

export default App;
