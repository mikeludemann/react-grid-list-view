import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './../../node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './../../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './grid-list-view.css';

class GridListContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div class="grid--list--container">
				{this.props.children}
			</div>
		);
	}
}

GridListContainer.propTypes = {
  children: PropTypes.node.isRequired
}

// #######################################

class GridListButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    var elements = document.getElementsByClassName("grid--list--element");
    var i;

    function listView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
      }
    }

    function gridView() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
      }
    }

    function gridViewMax() {
      for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "33.33%";
      }
    }

    var button = document.getElementsByClassName("button");

    button[0].addEventListener("click", function(){
    	listView();
    });

    button[1].addEventListener("click", function(){
    	gridView();
    });

    button[2].addEventListener("click", function(){
    	gridViewMax();
    });

    var container = document.getElementById("grid--list--button");
    var btns = container.getElementsByClassName("button");
    for (i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  }

  render() {
    return (
      <div id="grid--list--button">
        <div class="button active"><i class="fas fa-bars"></i> List</div> 
        <div class="button"><i class="fas fa-th-large"></i> Grid</div>
        <div class="button"><i class="fas fa-th"></i> Grid Max</div>
      </div>
    );
  }
}

GridListButton.propTypes = {}

// #######################################

class GridListElementContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div id="grid--list--element--container">
				{this.props.children}
			</div>
		);
	}
}

GridListElementContainer.propTypes = {
  children: PropTypes.node.isRequired
}

// #######################################

class GridListElements extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div class="grid--list--element">
				{this.props.children}
			</div>
		);
	}
}

GridListElements.propTypes = {
  children: PropTypes.element.isRequired
}

export {
	GridListContainer,
	GridListButton,
  GridListElementContainer,
  GridListElements
}
