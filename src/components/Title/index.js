import React from 'react';
import {Text} from 'react-native';
import styles from "./styles"
const Title = (props) => {
    return (
        <Text style={[styles.title, props.style]}>
            {props.text}
        </Text>
    );
};

Title.defaultProps = {
    text: 'Default text'
}


export default Title;