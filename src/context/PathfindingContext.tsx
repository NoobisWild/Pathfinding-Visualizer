import { Children, createContext, ReactNode, useState } from "react";
import { AlgorithmType, GridType, MazeType } from "../utils/types";
//import react from '@vitejs/plugin-react';
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIGURATION, START_TILE_CONFIGURATION } from "../utils/constants";


interface PathfindingContextInterface {
    algorithm: AlgorithmType;
    setAlgorithm: (algorithm: AlgorithmType) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGraphVisualized: boolean;
    setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);

export const PathfindingProvider = ({children}: {children:ReactNode}) => {
    const[algorithm, setAlgorithm] = useState<AlgorithmType>('BFS');
    const [maze, setMaze] = useState<MazeType>("NONE");
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIGURATION, END_TILE_CONFIGURATION));
    const[isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);
    

}