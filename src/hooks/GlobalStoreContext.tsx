"use client";

import React, { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type GlobalContextProps = {
    isCategoryLoading: boolean,
    setCategoryLoading: Dispatch<SetStateAction<boolean>>
    isToolsListLoading: boolean,
    setToolsListLoading: Dispatch<SetStateAction<boolean>>
}

const initGlobalState: GlobalContextProps = {
    isCategoryLoading: true,
    setCategoryLoading: () => {},
    isToolsListLoading: true,
    setToolsListLoading: () => {},
}

const GlobalStoreContext = createContext<GlobalContextProps>(initGlobalState);
GlobalStoreContext.displayName = 'GlobalStoreContext';

export const useGlobalStoreContext = () => useContext(GlobalStoreContext);

// Provider component to wrap your app
export const GlobalStoreProvider = ({ children }: {
    children: any;
}) => {
  const [isToolsListLoading, setToolsListLoading] = useState<boolean>(initGlobalState.isToolsListLoading);
  const [isCategoryLoading, setCategoryLoading] = useState<boolean>(initGlobalState.isCategoryLoading);

  const contextValue: GlobalContextProps = {
    isToolsListLoading,
    setToolsListLoading,
    isCategoryLoading,
    setCategoryLoading,
  };

  return <GlobalStoreContext.Provider value={contextValue}>{children}</GlobalStoreContext.Provider>;
};
