import React, { Component } from 'react';


export default class Container extends Component {
  constructor(props) {
    super(props);
      this.state = {
        error: null,
        isLoaded: false,
        posts: []
      };
    }

    componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          posts: result
        });
      },
      (error) => {
        this.setState({
          isLoaded:true,
          error
        });
      }
    )
    }
  
  render() {
    const {error,isLoaded, posts} = this.state;
    if(error) {
      return <p> Error </p>
    } else if (!isLoaded) {
      return <p> Loading... </p>
    } else {
      return (
      <div>
        {posts.map(post =>(
          <div key={post.id}>
            {post.title} {post.body}
          </div>
        ))}
      </div>
      );
    }
}
}
