import * as React from 'react';
import styled from "styled-components";

export const Btn = styled.button<{ color?: string }>`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : '#002d4b')};
  border: 1px solid;
  border-color: ${(props) => (props.color ? props.color : '#002d4b')};
  background-color: transparent;
  border-radius: 20px;
  padding: 10px;
  :hover {
    cursor: pointer;
    background-color: #ECF5FC;
  }
`;

export const TxtBtn = styled.button<{ color?: string }>`
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 12px;
  color: ${(props) => (props.color ? props.color :'#002d4b')};
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: transparent;
  svg {
    color: ${(props) => (props.color ? props.color : '#B1E0FF')};
    height: 18px;
    margin-right: 8px;
  }
  :hover {
    cursor: pointer;
    background-color: #ECF5FC;
    text-decoration: underline;
  }
`;

export type ButtonProps = {
  color?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  ariaLabel?: string;
};

export const Button = (props: ButtonProps) => (
  <Btn aria-label={props.ariaLabel} color={props.color}>
    {props.children}
  </Btn>
);
export const TextButton = (props: ButtonProps) => (
  <TxtBtn aria-label={props.ariaLabel} color={props.color}>
    {props.children}
  </TxtBtn>
);
