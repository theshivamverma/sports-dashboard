import React from "react"

type DashboardContextState = {
  activeMenuItem: string;
  setActiveMenuItem: (a: string) => void;
}

const initialState: DashboardContextState = {
  activeMenuItem: '',
  setActiveMenuItem: () => null,
}

export const DashboardContext = React.createContext<DashboardContextState>(initialState);

export const DashboardProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [activeMenuItem, setActiveMenuItem] = React.useState<string>('');

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