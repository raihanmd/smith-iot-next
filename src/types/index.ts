import React from "react";

export type TData = {
  humidity: number;
  temperature: number;
  proximity: number;
  action: number;
};

export type RootContent = TData;

export type RootWrapperProps = ChildrenProps & {
  data: any;
};

export type ChildrenProps = {
  children: React.ReactNode;
};
