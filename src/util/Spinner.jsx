import React from 'react';
import {Dimmer, Loader} from "semantic-ui-react";

const Spinner = ({size = 'small', content="Loading"}) => {
    return ( 
        <Dimmer style={{marginTop: 50}} active inverted>
        <Loader inverted content={content} size={size} />
      </Dimmer>
     );
}
 
export default Spinner;