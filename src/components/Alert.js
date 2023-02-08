import React from 'react';

export default function Alert(props) {
    const alertStyle = {
        transition: "all 1s"
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type.toLowerCase()} alert-dismissible fade show`} style={alertStyle} role="alert">
            <strong>{props.alert.type}</strong> {props.alert.msg}
        </div>       
    )
}