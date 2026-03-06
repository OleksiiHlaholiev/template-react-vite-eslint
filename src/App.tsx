import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type IMyFuncProps = {
	x: number;
	y: string;
	z: boolean;
}

const myFunc = (
	input: IMyFuncProps) => {
	return input
}

const newJsFeaturesFunc = () => {
	const inventory = [
		{ name: 'asparagus', type: 'vegetables', quantity: 5 },
		{ name: 'bananas', type: 'fruit', quantity: 0 },
		{ name: 'goat', type: 'meat', quantity: 23 },
		{ name: 'cherries', type: 'fruit', quantity: 5 },
		{ name: 'fish', type: 'meat', quantity: 22 }
	]

	const result = Object.groupBy(inventory, ({ type }) => type)
	const result2 = Map.groupBy(inventory, ({ type }) => type)

	console.log('newJsFeaturesFunc', { inventory, result, result2 })
}

function App() {
	const [count, setCount] = useState<number>(0)

	const test = { x: 50, y: 'test', z: true }

	myFunc(test)

	newJsFeaturesFunc()

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo"/>
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo"/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
