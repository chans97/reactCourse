import React from 'react';
import { Footerdiv, FooterBig, FooterSmall } from './styledComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
  return (
    <Footerdiv>
      <FontAwesomeIcon icon={faReact} />
      <FooterBig>for react study</FooterBig>
      <FooterSmall>2022. by chans</FooterSmall>
    </Footerdiv>
  );
}

export default React.memo(Footer);
