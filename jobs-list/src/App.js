import React from "react";
import Info from "./components/info/info";
import Form from "./components/form/form";
import Jobs from "./components/jobs/jobs";

const API_KEY = "Какой-то ключ";

class App extends React.Component {
  state = {
    salary: undefined,
    name: undefined,
    url: undefined,
    city: undefined,
    phone: undefined,
    error: undefined,
  };

  gettingJobs = async (e) => {
    e.preventDefault();

    let city = e.target.elements.city.value;
    let searchField = e.target.elements.search_field.value;
    let experience = e.target.elements.experience.value;

    if (city) {
      const api_url = await fetch(
        `https://api.hh.ru/${city}${searchField}${experience}${API_KEY}`
      );
      const data = await api_url.json();

      this.setState({
        salary: data.items.salary.from,
        name: data.items.name,
        url: data.items.url,
        city: data.items.area.name,
        phone: data.items.contacts.phones.number,
        error: undefined,
      });
    } else {
      this.setState({
        salary: undefined,
        name: undefined,
        url: undefined,
        city: undefined,
        phone: undefined,
        error: "Введите название города",
      });
    }
  };

  render() {
    return (
      <div>
        <Info />
        <Form joobsMethod={this.gettingJobs} />
        <Jobs
          salary={this.state.salary}
          name={this.state.name}
          url={this.state.url}
          city={this.state.city}
          phone={this.state.phone}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
