// const obj = {

// 	name: 'Brian',
// 	getName() {
// 		return this.name
// 	}
// };

// const getName = obj.getName.bind(obj);

// console.log(getName())

//stateless function component

// class IndecisionApp extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		// console.log(super(props))
// 		this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
// 		this.handlePick = this.handlePick.bind(this)
// 		this.handleAddOption = this.handleAddOption.bind(this)
// 		this.handleDeleteOption = this.handleDeleteOption.bind(this)
// 		this.state = {
// 			options: props.options
// 		};
// 	}

// 	componentDidMount(){

// 		try { 
// 			const json = localStorage.getItem('options');
// 			const options = JSON.parse(json);

// 			if (options){
// 				this.setState(()=>({options}))
// 						}
// 		 	}

// 		catch (e){


// 		}

	
// 	}

// 	componentDidUpdate(prevProps, prevState){

// 		if (prevState.options.length !== this.state.options.length){

// 			const json = JSON.stringify(
// 				this.state.options
// 			)

// 			localStorage.setItem('options', json)
			

// 		}


// 	}

// 	componentWillUnmount(){
// 		console.log('Component Will Unmount')
// 	}

// 	handleDeleteOptions(){
// 		this.setState(()=>({options:[]}))
// 	}

// 	handleDeleteOption(optionToRemove){
// 		this.setState((prevState)=>({
// 			options: prevState.options.filter((option)=>  optionToRemove !== option)
// 		}))
// 	}

// 	handlePick(){
// 		const randomNum = Math.floor(Math.random() * this.state.options.length)
// 		alert(this.state.options[randomNum])
// 	}

// 	handleAddOption(option){
// 		if (!option){
// 			return 'Enter Valid Value to Add'
// 		}

// 		else if (this.state.options.indexOf(option) > -1) {
// 			return 'this option already exhists'
// 		} 

// 		this.setState((prevState)=>({options: prevState.options.concat(option)}))
// 			}

	

// 	render() {
		
// 		const subtitle = "Make a choice";

// 		return (
// 			<div>
// 				<Header subtitle={subtitle} />
// 				<Action 
// 				hasOptions={this.state.options.length > 0} 
// 				handlePick = {this.handlePick}
// 				/>
// 				<Options 
// 					options={this.state.options} 
// 					handleDeleteOptions = {this.handleDeleteOptions}
// 					handleDeleteOption = {this.handleDeleteOption}

// 				/>
// 				<AddOption 
// 					handleAddOption = {this.handleAddOption}
// 				/>
// 			</div>
// 		);
// 	}
// }

// IndecisionApp.defaultProps = {
// 	options: []
// }
// const Header = (props)=> {


// 		return (
// 			<div>
// 				<h1>{props.title}</h1>
// 				{props.subtitle && <h2>{props.subtitle}</h2>}
// 			</div>
// 		);

// }

// Header.defaultProps = {
// 	title: 'Indecision'
// }
// // class Header extends React.Component {
// // 	render() {
// // 		return (
// // 			<div>
// // 				<h1>{this.props.title}</h1>
// // 				<h2>{this.props.subtitle}</h2>
// // 			</div>
// // 		);
// // 	}
// // }

// const Action = (props)=> {

// 	return (
// 		<div>
// 			<button
// 				onClick={props.handlePick}
// 				disabled={!props.hasOptions}
// 			>
// 				What should I do?
// 			</button>
// 			</div>
// 		);

// }

// // class Action extends React.Component {

// // 	render() {
// // 		return (
// // 			<div>
// // 				<button
// // 					onClick={this.props.handlePick}
// // 					disabled={!this.props.hasOptions}
// // 				>
// // 					What should I do?
// // 				</button>
// // 			</div>
// // 		);
// // 	}
// // }

// const Options = (props)=>{
// 	// console.log(props)
// 		return (
// 			<div>
// 				<button onClick={props.handleDeleteOptions}>
// 					Remove all Options
// 				</button>
// 				{props.options.length === 0 && <p>please add an option</p>}

// 				{
// 					props.options.map((option) => (
// 						<Option 
// 							key={option} 
// 							optionText={option} 
// 							handleDeleteOption={props.handleDeleteOption}
// 						/>
// 						))
					
// 				}
			
// 			</div>
// 		);
// }

// // class Options extends React.Component {


// // 	render() {
// // 		return (
// // 			<div>
// // 				<button onClick={this.props.handleDeleteOptions}>
// // 					Remove all Options
// // 				</button>
// // 				{this.props.options.map(option => {
// // 					return <Option key={option} optionText={option} />;
// // 				})}
// // 			</div>
// // 		);
// // 	}
// // }

// class AddOption extends React.Component {
// 	constructor(props){
// 		super(props);
// 		this.handleAddOption = this.handleAddOption.bind(this);
// 		this.state = {
// 			error: undefined
// 		}
// 	}
// 	handleAddOption(e) {
// 		e.preventDefault();

// 		const option = e.target.elements.option.value.trim();
// 		const error = this.props.handleAddOption(option);

// 		this.setState(()=>({error}));

// 		if (!error){
// 			e.target.elements.option.value = '';
// 		}
// 		}


// 	render() {
// 		return (
// 			<div>
// 				<form onSubmit={this.handleAddOption}>
// 					{this.state.error && <p>{this.state.error}</p>}
// 					<input type="text" name="option" />
// 					<button>Add Option</button>
// 				</form>

// 			</div>
// 		);
// 	}
// }

// const Option = (props)=>{
// 	return (
// 		<div>
// 			{props.optionText}
			
// 				<button onClick={(e)=>{
// 					props.handleDeleteOption(props.optionText)

// 				}}>
// 				remove
// 				</button>
// 		</div>
// 		)
// }

// // class Option extends React.Component {
// // 	render() {
// // 		return <div>{this.props.optionText}</div>;
// // 	}
// // }

// // const User = (props)=>{
// // 	return (
// // 		<div>
// // 			<p>Name: {props.name}</p>
// // 			<p>Age: {props.age}</p>
// // 		</div>

// // 	);
// // };

// ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
