import React from 'react';
import PropTypes from 'prop-types';
import './Layout.scss';
import { LayoutHeader } from './LayoutHeader';

export const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <div className="layout__header header">
        <LayoutHeader />
      </div>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
