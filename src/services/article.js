import Axios from "axios";

export default class ArticleService{
    async getArticleCategories(){
        console.log('called')
        const response = await Axios.get(`https://62d10cb3d9bf9f1705917522.mockapi.io/Article`);
        console.log(response.data)

         return response.data 
    }
}