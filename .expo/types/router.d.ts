/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/..\hooks\ApolloClientSetup` | `/Navigation/TabNavigation` | `/Screens/CartScreen/CartScreen` | `/Screens/DeliveryScreen/DeliveryScreen` | `/Screens/GetStartedScreen/GetStartedScreen` | `/Screens/HomeScreen/HomeScreen` | `/Screens/ProfileScreen/ProfileScreen` | `/Screens/layout` | `/Screens/productScreen/ProductScreen` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
