import React from 'react';
import { render } from '@testing-library/react';
import Content from '../index';
import { itChrome } from '@test/utils';

import '../styles/index.less';

describe('Content styles', () => {
  itChrome('Should render the correct styles', () => {
    const instanceRef = React.createRef<HTMLDivElement>();
    render(<Content ref={instanceRef}>Title</Content>);
    const dom = instanceRef.current as Element;
    expect(dom).to.have.style('flex', '1 1 auto');
  });
});
