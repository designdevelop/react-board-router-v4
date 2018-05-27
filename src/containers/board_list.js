import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchBoardList } from '../actions/index';


class BoardList extends Component {
   

    constructor(props) {
        super(props);
    }

    componentWillMount(){
		let userId = sessionStorage.getItem("userId");
		console.log("board list component will mount : ", userId);

		this.props.fetchBoardList(userId);
	}

    renderBoardList(){
		return this.props.list.map((item) => {
			return(
				<li key={item.board_seq}>
					<Link to={`/board/show/${item.board_seq}`}>{item.title}</Link>
				</li>
			);
		});
	}

    render(){
		console.log(this.props);
		return (
			<div>
				<ul>
					{this.renderBoardList()}
				</ul>
				<Link to={"/board/create"}>create</Link>
			</div>
		);
	}
}


function mapStateToProps(state){
	console.log("mapStateToProps : ", state);
	return {
		list : state.board.boardList
	}
}

export default connect(mapStateToProps, {fetchBoardList})(BoardList);
