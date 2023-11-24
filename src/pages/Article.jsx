import { useParams } from "react-router-dom";
import articleData from "../pages/articleData.json"

const Article = ()=>{
    const {articleId} = useParams();
    const {articles} = articleData;
    const articleName = articles.find((item)=>{
        return item.articleId==articleId
    })
    if(articleName){
        return(
            <>
                <h1>This is Article page!</h1>
                <p>articleId is :{articleName.articleId}</p>
                <p>title is :{articleName.articleName}</p>
                <p>article is :{articleName.articleContent}</p>
            </>            
        )
    } else {
        return(
            <>
                <h1>not found Article page!</h1>     
            </>           
        )       
    }

}

export default Article;