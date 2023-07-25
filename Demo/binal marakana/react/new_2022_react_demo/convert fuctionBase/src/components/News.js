import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const[articles,setArticles] = useState([])
  const[loading,setLoading] = useState(false)
  const[page,setPage] = useState(1)
  const[totalResults,setTotalResults] = useState(0)
  
  
  
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const  UpdateNews = async () =>{
    props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    props.setProgress(40)
    let data = await fetch(url)
    props.setProgress(70)

    let parseData = await data.json()

    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
    
    props.setProgress(100)

  }

  useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} - News ` 
    UpdateNews();
  },[])
  
  // const handlePrevClick = async ()=>{
  //   setPage(page - 1)
  //   UpdateNews();
  // }

  // const handleNextClick = async ()=>{
  //   setPage(page + 1)
  //   UpdateNews();
  // }

  const fetchMoreData = async () => {
    setPage(page + 1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url)
    let parseData = await data.json()
    setArticles(articles.concat(parseData.articles))
    setTotalResults(parseData.totalResults)
  };

  return (
    <div>
      <h2 className='text-center'>News - top Headline  </h2>
      {loading && <Spinner/>}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner/>}
      >
        <div  className='container my-4'>
          <div className='row'>
            {articles.map((element) => {
                return<div className='col-md-4' key={element.url}>
                  <NewsItem title={element.title?element.title.slice(0,55):''} discription={element.description?element.description.slice(0,55):''} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
                </div>
              })
            }
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className='container d-flex justify-content-between'>
          <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/10)}  className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
      </div> */}
      
    </div>
  )
}

News.defaultProps = {
  country:'in',
  pageSize:8,
  category:'general'
}

News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}


export default News