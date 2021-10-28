import React from 'react';
import {mainStyle} from '../../styles/Main';
import {Route, Switch} from 'react-router-native';
import Dashboard from '../Dashboard/Dashboard';
import AddWork from '../AddWork/AddWork';
import WorkGroup from '../WorkGroup/WorkGroup';
import Profile from '../Profile/Profile';
import NavBar from '../Navbar/Navbar';
import {View} from 'react-native';
import {useSpring, a} from '@react-spring/native';
import CreateWorkGroup from '../WorkGroup/CreateWorkGroup';
import {useThemeStore} from '../../stores/themeStore';
import SingleWorkGroup from '../WorkGroup/SingleWorkGroup';
import EditWorkGroup from '../WorkGroup/EditWorkGroup';
import Search from '../Search/Search';
import WorkGroupWorks from '../WorkGroup/WorkGroupWorks';

export default function Main() {
  const {theme} = useThemeStore();

  const animation = useSpring(() => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  }));

  return (
    <a.View
      style={[
        mainStyle.main,
        ...animation,
        {
          backgroundColor: theme === 'dark' ? '#2b2b2b' : 'white',
        },
      ]}>
      <Switch>
        <Route path="/" exact={true}>
          <Dashboard />
        </Route>
        <Route path="/work/add">
          <AddWork />
        </Route>
        <Route path="/workgroup/add" exact={true}>
          <CreateWorkGroup />
        </Route>
        <Route path="/workgroup/:id" exact={true}>
          <SingleWorkGroup />
        </Route>
        <Route path="/workgroup/:id/works" exact={true}>
          <WorkGroupWorks />
        </Route>
        <Route path="/workgroup/:id/edit" exact={true}>
          <EditWorkGroup />
        </Route>
        <Route path="/workgroup" exact={true}>
          <WorkGroup />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
      <NavBar />
    </a.View>
  );
}
