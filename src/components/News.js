import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category:'general'
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category:PropTypes.string
  };

  constructor() {
    super();
    console.log("constructor called");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }
  async updateNews()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1109b130a12f40b88594d99d7c3085a1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({pageSize:this.state.pageSize+1});
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({pageSize:this.state.pageSize-1});
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.setState({pageSize:this.state.pageSize+1});
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1109b130a12f40b88594d99d7c3085a1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      });
  };




  capitlizeText=(word)=> 
{
    return word.charAt(0).toUpperCase() + word.slice(1);
}

  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center my-3' style={{margin:'35px 0px', marginTop:'100px'}}> {this.capitlizeText(this.props.category)} Top headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
         <div className='container'> 
        <div className='row'>
          {this.state.articles.map((element) => (
            <div className='col-md-4' key={element.url}>
              <Newsitem
                title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                lallu={element.source.name}
              />
            </div>
          ))}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}
export default News