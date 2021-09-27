import React from 'react';

export const CloseContext = React.createContext<Context>({
  visible: [],
  setVisible: () => {},
  handleClick: () => {},
});
