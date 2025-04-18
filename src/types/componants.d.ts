export interface ContainerProps {
    children: React.ReactNode
}

export interface DrawerProps {
    drawerOpen: boolean;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    setDrawerOpen: (open: boolean) => void;
    logoColor: string;
}

export interface LogoProps {
    color: string;
    lWidth: string;
    lHeight: string
}

export interface AreaChartData {
    name: string;
    uv: number;
}