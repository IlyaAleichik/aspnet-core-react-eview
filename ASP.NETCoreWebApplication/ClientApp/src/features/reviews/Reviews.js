import React, { Component } from "react";


export class Reviews extends Component {
  static displayName = Reviews.name;

  constructor(props) {
    super(props);
    this.state = {
      forecast: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

  async populateWeatherData() {
    const response = await fetch("api/review");
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
        Reviews.renderTable(this.state.forecasts)
    );
    return (
        
      <div>
        <h1>Reviews Collection</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  static renderTable(forecasts) {
    return (
        
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Title</th>
            <th>Deskription</th>
            <th>View</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.id}>
              <td>{forecast.id}</td>
              <td>{forecast.date}</td>
              <td>{forecast.title}</td>
              <td>{forecast.description}</td>
              <td>{forecast.view}</td>
              <td>{forecast.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Reviews;
