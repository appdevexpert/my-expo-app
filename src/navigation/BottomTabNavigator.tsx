import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

// Define your tabs here. You can easily add or remove tabs from this array.
const tabs = [
  {
    name: 'Home',
    component: HomeScreen,
    options: { title: 'Home' },
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    options: { title: 'Profile' },
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    options: { title: 'Settings' },
  },
];

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={tab.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
