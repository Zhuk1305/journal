import React, {Component} from 'react'
import './HeaderSearch.css'
class HeaderSearch extends Component {
	render() { 
		return (
			<div className="search__block">
  <form className="form__search">
    <input className="search" type="search" placeholder="Search"/>
    <button className="btn__search" type="submit">Search</button>
  </form>
</div>
		)
	}
}

export default HeaderSearch;


