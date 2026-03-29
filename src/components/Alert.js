import React from 'react'

function Alert(props) {
    const evaluateIcon = (yo) => {
        switch (yo) {
            case 'primary':
                return "info-circle-fill"
                break;
            case 'secondary':
                return "info-circle-fill"
                break;
            case 'success':
                return "check-circle-fill"
                break;
            case 'danger':
                return "exclamation-triangle-fill"
                break;
            case 'warning':
                return "exclamation-triangle-fill"
                break;
            case 'info':
                return "info-circle-fill"
                break;
            case 'light':
                return "info-circle-fill"
                break;
            case 'dark':
                return "info-circle-fill"
                break;
            default:
                return "info-circle-fill"
        }
    }


    return (
        <div style={props.themeStyle}>
            {props.alert && <div className={`container alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <i className={`bi bi-${evaluateIcon(props.alert.type)} me-2`}></i>
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}

export default Alert