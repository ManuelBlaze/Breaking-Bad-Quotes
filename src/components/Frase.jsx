import React from 'react';
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
	padding: 3rem;
	border-radius: 0.5rem;
	background-color: white;
	max-width: 800px;
	margin-top: 1rem;

	-webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

	@media (min-width: 768px) {
		margin-top: 1.2rem;
	}
	h1 {
		font-family: Arial, Helvetica, sans-serif;
		text-align: center;
		position: relative;
		padding-left: 4rem;

		&::before {
			content: open-quote;
			font-size: 8rem;
			color: black;
			position: absolute;
			left: -1rem;
			top: -2rem;
		}
	}
	p {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-size: 1.4rem;
		text-align: right;
		color: #666;
		margin-top: 2rem;
		font-weight: bold;
	}
`;

const Frase = ({frase}) => {

    return ( 
        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>- {frase.author}</p>
        </ContenedorFrase>
    );
}

Frase.propTypes = {
    frase: PropTypes.object.isRequired
}

export default Frase;