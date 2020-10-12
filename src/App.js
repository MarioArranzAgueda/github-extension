import React from "react";
import "./App.css";
import FormUser from "./components/FormUser/FormUser";
import GitHubUserPanel from "./components/GitHub/GitHubUserPanel";
import GitHubReposPanel from "./components/GitHub/GitHubReposPanel";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      repoData: null,
    };
  }

  submit = async (values, { setSubmitting }) => {
    this.getUser(values);
    this.getRepositories(values);
  };

  getUser = async (values) => {
    const response = await fetch(`https://api.github.com/users/${values.user}`);
    const userData = await response.json();
    this.setState({ userData: userData });
  };

  getRepositories = async (values) => {
    const response = await fetch(`https://api.github.com/users/${values.user}`);
    const repoData = await response.json();
    this.setState({ repoData: repoData });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h2>Github Panel</h2>
        </header>
        <section>
          <FormUser initialValues={{ user: "" }} submit={this.submit} />
        </section>
        <section>
          <GitHubUserPanel userData={this.state.userData} />
          <GitHubReposPanel repoData={this.state.repoData} />
        </section>
      </div>
    );
  }
}
