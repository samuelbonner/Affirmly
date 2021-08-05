import * as React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// import { useState, useEffect } from 'react';
import Home from "./views/Home";
import AccomplishedTasks from "./views/AccomplishedTasks";
import TrophyCase from './views/TrophyCase';
import LogIn from './views/LogIn';

const App: React.FC = (props: AppProps) => {
	return (
	  <BrowserRouter>
		<Switch>
		  <Route exact path="/">
			<Home />
		  </Route>
		  <Route exact path="/accomplishedtasks">
		  <AccomplishedTasks />
		  </Route>
		  <Route exact path="/trophycase">
		  <TrophyCase />
		  </Route>
		  <Route exact path="/login">
		  <LogIn />
		  </Route>

		</Switch>
	  </BrowserRouter>
	);
  };
  
  interface AppProps {}
  

export default App;

































// import * as React from 'react';
// import { useState, useEffect } from 'react';

// /* HOOK REACT EXAMPLE */
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = useState<string>('');

// 	useEffect(() => {
// 		async function getGreeting() {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		}
// 		getGreeting();
// 	}, []);

// 	return (
// 		<main className="container my-5">
// 			<h1 className="text-primary text-center">Hello {greeting}!</h1>
// 		</main>
// 	);
// };

// interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

// export default App;
