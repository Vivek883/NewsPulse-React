import React, { Component } from 'react'
import { NewsItem } from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
    articles = [];
    constructor() {
        super();
        console.log("hello, im a constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false,
            page:1 
        }
    }
    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3ca9ec3fded4286b0d2d86e69cccd43&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading:false})
    }

    handlePrevClick = async () => {
        console.log("previous");

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3ca9ec3fded4286b0d2d86e69cccd43&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading:false
        })
    }

    
    handleNextClick = async () => {
        console.log("next");
        if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=f3ca9ec3fded4286b0d2d86e69cccd43&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});    
        let data = await fetch(url);
            let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1, 
            articles: parsedData.articles,
            loading: false
        })
        }
        }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsPulse - Top headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-2 " key={element.url}>
                            <NewsItem title={element.title} description={element.description } Imgurl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled= { this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled= { this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
