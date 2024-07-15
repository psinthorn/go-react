import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="contanier">
            <div className="row">
                <div className="col-md-6 offets-md-3">
                    <h1 className="text-center text-blue">OoPs! </h1>
                    <p>Not found what you looking for please try again.</p>
                    <em>{ error.statusText || error.message }</em>
                </div>
            </div>
        </div>
    );
};