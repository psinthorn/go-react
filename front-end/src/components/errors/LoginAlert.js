
const LoginAlert = ({ alertLoginMessage, alertClassName}) => {

    return (
        <div className={"alert " + alertClassName } role="alert">
            { alertLoginMessage }
        </div>
    )
}

export default LoginAlert;