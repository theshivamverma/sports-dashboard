import React from "react"

type DashboardContextState = {
  activeMenuItem: string;
  setActiveMenuItem: (a: string) => void;
}

const initialState: DashboardContextState = {
  activeMenuItem: '111',
  setActiveMenuItem: () => null,
}

export const DashboardContext = React.createContext<DashboardContextState>(initialState);

export const DashboardProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [activeMenuItem, setActiveMenuItem] = React.useState<string>('111');

  return (
    <DashboardContext.Provider value={{
      activeMenuItem,
      setActiveMenuItem
    }}>
      {children}
    </DashboardContext.Provider>
  )
};

export const useDashboard = () => React.useContext(DashboardContext)