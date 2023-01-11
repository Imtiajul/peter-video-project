import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children?: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-white">
      {children}
    </div>
  );
};
