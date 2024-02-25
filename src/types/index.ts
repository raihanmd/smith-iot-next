import React from "react";

export type TAntares = {
  humidity: number;
  temperature: number;
  proximity: number;
  action: number;
};

export type TWeather = {
  main: string;
  icon: string;
  wind_force: number;
};

export type RootContent = {
  weather: TWeather;
  antares: TAntares;
};

export type RootWrapperProps = ChildrenProps & {
  data: RootContent;
};

export type ChildrenProps = {
  children: React.ReactNode;
};
