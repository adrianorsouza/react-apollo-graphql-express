import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PageContainer = ({ children }) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    setShow(true);
  }, []);

  return (
    <CSSTransition in={show} timeout={100} classNames="page-transition">
      <div className="main">{children}</div>
    </CSSTransition>
  );
};

export default PageContainer;
