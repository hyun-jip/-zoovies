import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Detail from "../screens/Detail";
import { CardStyleInterpolators } from "@react-navigation/stack";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "black",
        borderBottomColor: "black",
        shadowColor: "black",
      },
      headerTintColor: "white",
      headerBackTitleVisible: false,
      gestureEnabled: true,
    }}
  >
    <Stack.Screen
      name="Tabs"
      component={Tabs}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    />
  </Stack.Navigator>
);
