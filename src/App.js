import React, { useState, useEffect } from "react";
import "./App.css";
import FormUser from "./components/FormUser/FormUser";
import { Toggle } from "./components/Toggle/Toggle";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import {
  getUser,
  getRepositories,
  getFollowers,
  getActivity,
} from "./services/Github";
import Repositories from "./components/Repositories/Repositories";
import UserInfo from "./components/UserInfo/UserInfo";
import ActivityFeed from "./components/ActivityFeed/ActivityFeed";
import Followers from "./components/Followers/Followers";

export function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("user") ? localStorage.getItem("user") : ""
  );
  const [userData, setUserData] = useState([]);
  const [repoData, setRepoData] = useState([]);
  const [followersData, setFollowersData] = useState([]);
  const [activity, setActivity] = useState([]);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    getUser(user).then((value) => {
      setUserData(value);
    });
    getRepositories(user).then((value) => {
      setRepoData(value);
    });
    getFollowers(user).then((value) => {
      setFollowersData(value);
    });
    getActivity(user).then((value) => {
      setActivity(value);
    });
  }, [user]);

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const submit = async (value) => {
    localStorage.setItem("user", value);
    setUser(value);
  };

  return (
    <ThemeProvider theme={themeMode}>
      {}
      <GlobalStyles />
      <div className="App">
        <header>
          <h2>Github Panel</h2>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </header>
        <section>
          <FormUser initialValues={{ user: "" }} submit={submit} />
          <UserInfo userData={userData} repoData={repoData} />
        </section>
          { user ?
           <>
            <section className="content" data-testid="content">
              <Followers followersData={followersData} />
              <Repositories repositoryData={repoData} />
            </section>
            <section>
              <ActivityFeed activityData={activity} />
            </section> 
            </>
            : null
          }
      </div>
    </ThemeProvider>
  );
}
