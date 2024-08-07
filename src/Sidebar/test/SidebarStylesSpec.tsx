import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../index';
import { getStyle, itChrome } from '@test/utils';

import '../styles/index.less';

describe('Sidebar styles', () => {
  itChrome('Should render the correct styles', () => {
    const instanceRef = React.createRef<HTMLDivElement>();
    const { container } = render(<Sidebar ref={instanceRef} className="rs-sidebar-collapse" />);

    console.log(getStyle(container.firstChild as Element, 'transition')),
      expect(getStyle(container.firstChild as Element, 'transition')).to.be.equal(
        'flex 0.15s ease-in, width 0.15s ease-in'
      );
  });
});
