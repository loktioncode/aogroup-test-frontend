import React from "react";
import { useRouteError } from "react-router-dom";
import {
    Title
} from "./components/styles";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1></h1>
            <Title>
                Oops!
            </Title>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <p><a href="/" class="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">BACK</a></p>
        </div>
    );
}