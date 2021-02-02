class Prop extends React.Component {
	render(){
		return(
			<div>
				<h2>{this.props.name}</h2>
				<p>{this.props.address}</p>
				<hr/>
			</div>
		);
	}
}

class Data extends React.Component{
	render(){
		return(
			<div>
				<Prop name="Hello" address="Wold"></Prop>
				<Prop name="Arif" address="Tuban"></Prop>
			</div>
		);
	}
}