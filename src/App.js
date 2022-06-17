import { useState } from 'react';

export default function App() {
	const [count, setCount] = useState(0);

	function add() {
		setCount((prevCount) => prevCount + 1);
	}

	function subtract() {
		setCount((prevCount) => prevCount - 1);
	}

	return (
		<div className="container">
			<button className="subtract" onClick={subtract}>
				-
			</button>
			<div className="value">{count}</div>
			<button className="add" onClick={add}>
				+
			</button>
		</div>
	);
}
