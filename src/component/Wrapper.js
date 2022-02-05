import React from 'react';
import PropTypes from 'prop-types' // 프로퍼티 타입을 지정해주기 위해 사용 한다.

function Wrapper(props) {
    const style = {
        backgroundColor: 'yellow',
      };
    
    return (
        <div style={style}>
            {props.children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.element.isRequired
};

export default Wrapper;