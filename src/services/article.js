import Axios from "axios";
import { validateAll } from "indicative/validator";

export default class ArticleService {
    async getArticleCategories() {
        console.log('called')
        const response = await Axios.get(`https://62d10cb3d9bf9f1705917522.mockapi.io/Article`);
        console.log(response.data)

        return response.data
    }


    createArticle = async (data, token) => {
        console.log("create article is called")
        console.log(data)

        const image = await this.uploadToCloudinary(data.image)
        if (!data.image) {
            return Promise.reject([{
              message: 'The image is required.',
            }]);
          }
        try {

            const rules = {
                title: 'required',
                content: 'required',
                category: 'required',
            }

            const message = {
                required: 'This {{field}} is required',
            }

            await validateAll(data, rules, message,)


            const response = await Axios.post(`https://62c7d17e0f32635590cad3ff.mockapi.io/Article`, {
                title: data.title,
                content: data.content,
                category_id: data.category_id,
                imageUrl: image.secure_url
            }, {
                hearders: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return response.data
        } catch (errors) {
            console.log(errors)
            if (errors.response) {
                return Promise.reject(errors.response.data);
            }

            return Promise.reject(errors);
        }



    }

    async uploadToCloudinary(image) {
        console.log("Cloudinery called");
        const form = new FormData();
        form.append('file', image);
        form.append('upload_preset', 'asae9sgz')
        form.append('api_key', '613346275219149')

        const response = await Axios.post('https://api.cloudinary.com/v1_1/blog-application/image/upload', form)

        console.log(response.data.url);
        return response.data.url;
    }


}