import { Link, useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="contanier">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center text-blue">OoPs! :O </h1>
                    <p className="text-center">Not found what you looking for please try again.</p>
                   <p className="text-center"><em>System Error: { error.statusText || error.message }</em></p>
                   <p className="text-center mt-3">
                    <Link to="http://localhost:3000" className="btn btn-success">Home</Link>
                   </p>
                </div>
            </div>
        </div>
    );
};