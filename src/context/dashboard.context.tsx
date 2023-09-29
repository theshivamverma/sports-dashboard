import React from "react"

type DashboardContextState = {
  activeMenuItem: string;
  setActiveMenuItem: (a: string) => void;
  isModalOpen: boolean;
  setIsModalOpen: (a: boolean) => void;
}

const initialState: DashboardContextState = {
  activeMenuItem: '111',
  setActiveMenuItem: () => null,
  isModalOpen: false,
  setIsModalOpen: () => null,
}

export const DashboardContext = React.createContext<DashboardContextState>(initialState);

export const DashboardProvider: React.FC<React.PropsWithChildren> = ({
  children
}) => {
  const [activeMenuItem, setActiveMenuItem] = React.useState<string>('111');
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  return (
    <DashboardContext.Provider value={{
      activeMenuItem,
      setActiveMenuItem,
      isModalOpen,
      setIsModalOpen
    }}>
      {children}
    </DashboardContext.Provider>
  )
};

export const useDashboard = () => React.useContext(DashboardContext)