import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { PrivateComponent } from "../component/PrivateComponent";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<PrivateComponent>
				<h1>You are authenticated</h1>
			</PrivateComponent>

		</div>
	);
};
