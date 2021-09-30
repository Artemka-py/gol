import React, { FC } from "react";
import styled from "@emotion/styled";

export interface CellProps {
  color: string;
}

export const Cell: FC<CellProps> = ({ color }) => {
  return <CellDesign color={color}></CellDesign>;
};

const CellDesign = styled.div<CellProps>`
  background-color: ${({ color }) => color};
  border: solid 1px #ccc;
  vertical-align: middle;
  text-align: center;
  width: 1.8vh;
  height: 1.8vh;
`;
