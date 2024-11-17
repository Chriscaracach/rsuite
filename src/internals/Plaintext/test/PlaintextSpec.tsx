import React from 'react';
import Plaintext from '../Plaintext';
import { render } from '@testing-library/react';
import { testStandardProps } from '@test/utils';

describe('Plaintext', () => {
  testStandardProps(<Plaintext />);
  it('Should render a Plaintext', () => {
    const title = 'Test';
    const { container } = render(<Plaintext>{title}</Plaintext>);
    expect(container.firstChild).to.have.class('rs-plaintext');
    expect(container.firstChild).to.have.text(title);
  });
});
