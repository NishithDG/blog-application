import PropTypes from 'prop-types'
import React from 'react';
import CreateArticleForm from './CreateArticleForm';
class CreateArticle extends React.Component{
    constructor(props) {
      super(props)

      this.state = {
        title:'',
        image:null,
        content:'',
        channel:null,
        errors:{},
        categories:[],          
      }
    }
    async UNSAFE_componentWillMount(){
        const categories = await this.props.getArticleCategories();
        this.setState({
            categories
        })

        
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.type == 'files' ? event.taget.files[0] : event.target.value
        })
        console.log(this.state)
    }

    render(){
        return(
            <CreateArticleForm
            handleInputChange={this.handleInputChange}
            categories = {this.state.categories}
            />
        )
    }
}
CreateArticle.propTypes = {
    getArticleCategories: PropTypes.func.isRequired,
}
export default CreateArticle;