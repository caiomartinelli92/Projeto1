import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from '../pages/list';
import User from '../pages/user';
import CustomNavBar from '../components/CustomNavBar';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
      <Tab.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
      tabBar={props => <CustomNavBar {...props}/>}
      >
        <Tab.Screen 
          name="List" 
          component={List} 
        />
        <Tab.Screen 
          name="User"
          component={User} 
        />
      </Tab.Navigator>
  );
}