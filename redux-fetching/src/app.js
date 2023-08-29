import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getItemsIncorrectly } from "./slices.js";

const App = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItemsIncorrectly('/'));
	}, []);

	return (
		<div>
			Hello
		</div>
	);
};

export default App;
