
import * as React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import CreateArticle from "./Components/CreateArticle";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import SingleArticle from "./Components/SingleArticle";
import Welcome from "./Components/Welcome";
import authService from "./services/auth";
import PropTypes from 'prop-types';
import ArticleService from "./services/article";



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      authUser: null,
    }
  }

  componentDidMount() {
    // const user = {
    //   name:localStorage.getItem('user.name'),
    //   email:localStorage.getItem('user.email'),
    //   password:localStorage.getItem('user.password')


    // }
    const user = localStorage.getItem('user')
    if (user) {
      console.log('in user')
      this.setState({
        authUser:JSON.parse(user),
      })
     // console.log('user oopouut')
    }
  }
    setAuthUser = (authUser) => {
      this.setState({
        authUser,
      },()=>{
        localStorage.setItem('user', JSON.stringify(authUser));
        this.props.history.push('/');
      })
  }
  render() {
    const { location } = this.props
    return (
      <div>
        {
          location.pathname !== '/login' && location.pathname !== '/register' &&
          <Navbar authUser={this.state.authUser} />
        }
        <Route exact path="/" component={Welcome} />
        <Route path="/articles/create" render={(props)=>(
          <CreateArticle
          {...props}
          getArticleCategories={this.props.articleService.getArticleCategories}
          />
        )} />
        <Route path="/article/:slugs" component={SingleArticle} />
        <Route path="/login" render={(props)=>(
          <Login
          {...props}
          setAuthUser = {this.setAuthUser}
          loginUser = {this.props.authService.loginUser}
          />
        )} />
        <Route path="/register" render={(props) => (
        <Signup
          {...props}
          registerUser={this.props.authService.registerUser}
          setAuthUser={this.setAuthUser} />)}
        />
        {
          location.pathname !== '/login' && location.pathname !== '/register' && <Footer />
        }
      </div>
    )
  }
}

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  authService: PropTypes.objectOf(PropTypes.func).isRequired,
  articleService: PropTypes.objectOf(PropTypes.func).isRequired,
}

export default App;
