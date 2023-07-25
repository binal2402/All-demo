import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  // articles = [
  //   {
  //     "source": {
  //         "id": "cnn",
  //         "name": "CNN"
  //     },
  //     "author": "Kevin Liptak, CNN",
  //     "title": "Inside Biden's successful six-month bid to expand NATO - CNN",
  //     "description": "President Joe Biden was meeting royalty in Spain on Tuesday when word arrived that an audacious plan he had hatched six months earlier was in the final stages of completion.",
  //     "url": "https://www.cnn.com/2022/06/28/politics/turkey-finland-sweden-joe-biden-nato/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220628151953-nato-summit-0628-super-tease.jpg",
  //     "publishedAt": "2022-06-29T09:34:00Z",
  //     "content": null
  //   },
  //   {
  //       "source": {
  //           "id": "cnn",
  //           "name": "CNN"
  //       },
  //       "author": "Swati Gupta, Rhea Mogul, Esha Mitra and Alex Stambaugh, CNN",
  //       "title": "Brutal killing caught on camera stokes religious tensions in India - CNN",
  //       "description": "Religious tensions are flaring in India following the alleged killing of a Hindu man by two Muslim assailants as authorities attempt to stop video of the brutal attack from circulating online.",
  //       "url": "https://www.cnn.com/2022/06/29/india/india-udaipur-hindu-muslim-killing-intl-hnk/index.html",
  //       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220628215156-udaipur-india-killing-muslim-hindu-tension-intl-hnk-super-tease.jpg",
  //       "publishedAt": "2022-06-29T09:06:00Z",
  //       "content": null
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "TMZ"
  //       },
  //       "author": "TMZ Staff",
  //       "title": "Actress Mary Mara's Drowning Death May Have Involved Blunt Head Trauma - TMZ",
  //       "description": "Actress Mary Mara's untimely drowning might've involved serious blunt head trauma, according to her family.",
  //       "url": "https://www.tmz.com/2022/06/29/actress-mary-mara-drowning-death-dies-possible-blunt-head-trauma/",
  //       "urlToImage": "https://imagez.tmz.com/image/12/16by9/2022/06/27/12bc747eece2423ab0d3b1c2370f0af2_xl.jpg",
  //       "publishedAt": "2022-06-29T08:00:00Z",
  //       "content": "Actress Mary Mara's drowning may have resulted from a serious head injury ... this according to her rep.\r\nMary's rep Craig Dorfman tells TMZ ... investigators informed her family about new evidence .… [+894 chars]"
  //   },

  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Yahoo Entertainment"
  //       },
  //       "author": "Reuters",
  //       "title": "Chinese spacecraft acquires images of entire planet of Mars - Yahoo News",
  //       "description": "An uncrewed Chinese spacecraft has acquired imagery data covering all of Mars, including visuals of its south pole, after circling the planet more than 1,300...",
  //       "url": "https://news.yahoo.com/chinese-spacecraft-acquires-images-entire-061230820.html",
  //       "urlToImage": "https://s.yimg.com/uu/api/res/1.2/MsAfOxvkIG29ft2ynL17OA--~B/aD02MDA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters.com/24755561521357b4ccff41d64de65110",
  //       "publishedAt": "2022-06-29T06:28:12Z",
  //       "content": "BEIJING (Reuters) - An uncrewed Chinese spacecraft has acquired imagery data covering all of Mars, including visuals of its south pole, after circling the planet more than 1,300 times since early las… [+1194 chars]"
  //   },
  
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "Hollywood Reporter"
  //       },
  //       "author": "Ryan Gajewski",
  //       "title": "‘Stranger Things’ Star Maya Hawke Says “F*** the Supreme Court” After Jimmy Fallon Encourages Her - Hollywood Reporter",
  //       "description": "Maya Hawke didn’t hold back while visiting The Tonight Show as she discussed her family history with abortion in light of the Supreme Court’s recent decision to overturn Roe v. Wade. The Stranger Things star, whose parents are Uma Thurman and Ethan Hawke, joi…",
  //       "url": "https://www.hollywoodreporter.com/tv/tv-news/stranger-things-maya-hawke-supreme-court-jimmy-fallon-1235173478/",
  //       "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2022/06/GettyImages-1399674802.jpg?w=1024",
  //       "publishedAt": "2022-06-29T05:31:18Z",
  //       "content": "Maya Hawke didn’t hold back while visiting The Tonight Show as she discussed her family history with abortion in light of the Supreme Court’s recent decision to overturn Roe v. Wade.\r\nThe Stranger Th… [+2807 chars]"
  //   },
  
  //   {
  //       "source": {
  //           "id": "cnn",
  //           "name": "CNN"
  //       },
  //       "author": "Raja Razek, CNN",
  //       "title": "A bull bison gored a man near Old Faithful at Yellowstone National Park, officials say - CNN",
  //       "description": "A Colorado man required medical treatment at a hospital after he was gored by a bull bison at Yellowstone National Park in Wyoming, officials said.",
  //       "url": "https://www.cnn.com/2022/06/29/us/yellowstone-man-gored-by-bison/index.html",
  //       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220628233803-yellowstone-man-gored-by-bison-super-tease.jpg",
  //       "publishedAt": "2022-06-29T04:48:00Z",
  //       "content": null
  //   },
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "WBAL TV Baltimore"
  //       },
  //       "author": "Kim Dacey",
  //       "title": "BPD sergeant struck, dragged by vehicle is on life support, police say - WBAL TV Baltimore",
  //       "description": "A Baltimore police sergeant is on life support after he was hit by vehicle and dragged for two blocks in northwest Baltimore.",
  //       "url": "https://www.wbaltv.com/article/officer-struck-by-vehicle-park-heights-baltimore/40451723",
  //       "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/poster-image-93-1656470085.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
  //       "publishedAt": "2022-06-29T04:31:00Z",
  //       "content": "BALTIMORE —A Baltimore police sergeant is on life support after he was hit by vehicle and dragged for two blocks in northwest Baltimore.\r\nBaltimore police said just after 8 p.m. Tuesday, the northwes… [+1293 chars]"
  //   },
    
  //   {
  //       "source": {
  //           "id": null,
  //           "name": "SciTechDaily"
  //       },
  //       "author": null,
  //       "title": "NASA's Curiosity Rover Measures Key Life Ingredient on Mars for First Time - SciTechDaily",
  //       "description": "Newly published research quantifies the presence of organic carbon in Martian rocks. For the first time, scientists using data from NASA’s Curiosity rover measured the total organic carbon – a key component in the molecules of life – in Martian rocks. “Total …",
  //       "url": "https://scitechdaily.com/nasas-curiosity-rover-measures-key-life-ingredient-on-mars-for-first-time/",
  //       "urlToImage": "https://scitechdaily.com/images/Yellowknife-Bay-Mars-Crop-scaled.jpg",
  //       "publishedAt": "2022-06-29T03:35:34Z",
  //       "content": "ByJet Propulsion LaboratoryJune 28, 2022\r\nNASAs Curiosity Mars rover used its Mast Camera, or Mastcam, to capture this area at the edge of a location nicknamed Yellowknife Bay. Credit: NASA/JPL-Calte… [+6960 chars]"
  //   },
  
  //   {
  //       "source": {
  //           "id": "associated-press",
  //           "name": "Associated Press"
  //       },
  //       "author": "Nicholas Riccardi",
  //       "title": "Colorado GOP rejects candidates who back Trump election lie - The Associated Press - en Español",
  //       "description": "DENVER (AP) — Republicans in Colorado rejected two prominent candidates whose political profiles were centered on election falsehoods in a fresh reminder that fealty to former President Donald Trump's  lies about mass voter fraud is no guarantee of success wi…",
  //       "url": "https://apnews.com/article/2022-midterms-colorado-illinois-updates-01f89314cca7a8671bef1f7637e5be7b",
  //       "urlToImage": "https://storage.googleapis.com/afs-prod/media/bc383dca88954a138eb515e17d26a51e/3000.jpeg",
  //       "publishedAt": "2022-06-29T02:37:30Z",
  //       "content": "DENVER (AP) Republicans in Colorado rejected two prominent candidates whose political profiles were centered on election falsehoods in a fresh reminder that fealty to former President Donald Trumps l… [+7552 chars]"
  //   }  
  // ]

  static defaultProps = {
    country:'in',
    pageSize:8,
    category:'general'
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }

 capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props){
    super(props);
    this.state ={
        // articles:this.articles,
        articles:[],
        loading:false,
        page:1,
        totalResults:0

    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News ` 
  }
  async UpdateNews(){
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    this.props.setProgress(40)
    let data = await fetch(url)
    this.props.setProgress(70)

    let parseData = await data.json()
    this.setState({
      articles:parseData.articles,
      totalResults:parseData.totalResults,
      loading:false

    })
    this.props.setProgress(100)

  }

  async componentDidMount(){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da8f4bef1cb34503acbf36ca6ec8ace9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url)
    // let parseData = await data.json()
    // this.setState({
    //   articles:parseData.articles,
    //   totalResults:parseData.totalResults,
    //   loading:false

    // })
    // console.log("data-------",parseData);
    this.UpdateNews();
  }

  handlePrevClick = async ()=>{
    console.log("-----prev");

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da8f4bef1cb34503acbf36ca6ec8ace9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading:true});

    // let data = await fetch(url)
    // let parseData = await data.json()
    // this.setState({
    //   page:this.state.page - 1,
    //   articles:parseData.articles,
    //   loading:false

    // })
    this.setState({ page : this.state.page - 1})
    this.UpdateNews();

  }
  handleNextClick = async ()=>{
    console.log("-----next",this.state.page + 1,Math.ceil(this.state.totalResults/10));
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/10))) {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da8f4bef1cb34503acbf36ca6ec8ace9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`

    //   this.setState({loading:true});

    //   let data = await fetch(url)
    //   let parseData = await data.json()
    //   this.setState({
    //     page:this.state.page + 1,
    //     articles:parseData.articles,
    //     loading:false
    //   })
    //   console.log("-",parseData,this.state.page);
    // }
    this.setState({ page:this.state.page + 1})
    this.UpdateNews();
  }
  fetchMoreData = async () => {
    this.setState({ page:this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.ApiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url)
    let parseData = await data.json()
    this.setState({
      articles:this.state.articles.concat(parseData.articles),
      totalResults:parseData.totalResults,
    })
  };

  render() {
    return (
      <div>
        <h2 className='text-center'>News - top Headline  </h2>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner/>}
        >
          <div  className='container my-4'>
            <div className='row'>
              {this.state.articles.map((element) => {
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
}

export default News