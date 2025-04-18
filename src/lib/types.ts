export interface Techs {
    id: number,
    image: string,
    name: string,
    description: string,
    bgColor?: string,
}

export interface SpotlightProps {
    spotlightColor?: string;
    className?: string;
    children: React.ReactNode;
}

export interface Projects {
    id: number;
    name: string;
    description: string;
    image: string;
    url: string;
    githubUrl?: string;
}