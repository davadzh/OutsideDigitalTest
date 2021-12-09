import React, {FC, ReactNode} from 'react';
import ReactDOM from "react-dom";

interface IModalProps {
  domElementId: string;
  isOpen: boolean;
  children: ReactNode;
}

export const Modal: FC<IModalProps> = ({domElementId, isOpen, children}) => {
  const domNode = document.getElementById(domElementId);

  if (domNode && isOpen) {
    return ReactDOM.createPortal(
      children,
      domNode)
  }
  return null;
};