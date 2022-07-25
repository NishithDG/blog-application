

import React from "react";
import PropTypes from 'prop-types'
import Articles from "./Articles";
import { useEffect } from "react";



class Welcome extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       articles:[],
    }
  }

  async UNSAFE_componentWillMount(){
    const articles = await this.props.getArticles()
    this.setState({articles})
    this.props.setArticles(articles.data)
  }

  handlePagination=async(url)=>{
    const articles = await this.props.getArticles(url)
    this.setState({articles})
    this.props.setArticles(articles.data)
  }

  deleteArticle = async (id) => {
    await this.props.deleteArticle(id);

    // remove article from list.
    const articles = this.state.articles.filter(article => article.id !== id);
    this.setState({
      articles,
    });
  }

  render(){
    return(
      <Articles 
      articles={this.state.articles}
      nextUrl={this.state.articles.next_page_url}
      prevUrl={this.state.articles.prev_page_url}
      handlePagination={this.handlePagination}
      deleteArticle={this.deleteArticle}
      />
    )
  }


}
Welcome.propTypes={
  getArticles:PropTypes.func.isRequired,
  setArticles:PropTypes.func.isRequired,
  deleteArticle:PropTypes.func.isRequired
}

export default Welcome;