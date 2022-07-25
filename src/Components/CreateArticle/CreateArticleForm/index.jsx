import React from 'react';
import Banner from '../../Banner';
import PropTypes from 'prop-types'
const CreateArticle = ({ handleInputChange, categories, handleSubmit, errors }) => ((

    <div>

        <Banner
            backgroundImage={`url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
            title="Write an article"
        />

        <main className="main-content">
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            {/* <ul className="list-group">
                                {errors.map(error => <li key={error.message} className="list-group-item text-danger">{error.message}</li>)}
                            </ul> */}
                            <ul className='list-group'>
                                {errors.map(error => <li key={error.message} className="list-group-item text-danger">{error.message}</li>)}
                            </ul>
                            <form className="p-30 bg-gray rounded" data-form="mailer" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-12 my-5">
                                        <input type="file" className="form-control" onChange={handleInputChange} name="image" />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <input className="form-control form-control-lg" type="text" name="title" placeholder="Title" onChange={handleInputChange} />
                                    </div>
                                    <div className="form-group col-12 col-md-6">
                                        <select name="category" onChange={handleInputChange} id className="form-control form-control-lg">
                                            <option value>Select category</option>
                                            {
                                                categories.map(category =>
                                                    <option key={category.id} value={category.id}>{category.category_name}</option>
                                                )}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" rows={4} placeholder="Content" name="content" defaultValue={""} onChange={handleInputChange} />
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

))

CreateArticle.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
    })).isRequired,

    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.arrayOf(PropTypes.shape({
        message: PropTypes.string.isRequired,
    })).isRequired,

}

export default CreateArticle;