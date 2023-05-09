import React, { useState } from "react";
import { rexImage } from "../constant/formValidation";

const BlogForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        cover_image: "",
        content: "",
        author_name: "",
        seo_description: "",
    });

    const [errors, setErrors] = useState({
        title: "",
        cover_image: "",
        content: "",
        author_name: "",
        seo_description: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        let formErrors = {};
        let hasErrors = false;

        if (!formData.title || formData.title.length > 50) {
            formErrors.title = "Title must be between 1 and 50 characters";
            hasErrors = true;
        }

        if (
            !formData.cover_image ||
            !formData.cover_image.match({rexImage})
        ) {
            formErrors.cover_image =
                "Cover image must be a valid jpg, jpeg or png file";
            hasErrors = true;
        }

        if (!formData.content) {
            formErrors.content = "Content cannot be empty";
            hasErrors = true;
        }

        if (!formData.author_name || formData.author_name.length > 20) {

            formErrors.author_name = "Author name must be between 1 and 20 characters";
            hasErrors = true;
        }

        if (!formData.seo_description || formData.seo_description.length > 200) {
            formErrors.seo_description =
                "SEO description must be between 1 and 200 characters";
            hasErrors = true;
        }

        setErrors(formErrors);

        if (!hasErrors) {
            // Send form data  save to local storage
            console.log(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} id="container">
            <div class="form-group text-center text-danger">
                <h2> Blog Form</h2>
            </div>
            <div class="form-group pt-50px">
                <label htmlFor="title" >Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    class="form-control"
                />
                {errors.title && <span>{errors.title}</span>}
            </div>
            <div class="form-group">
                <label htmlFor="cover_image">Cover Image</label>
                <input
                    type="file"
                    name="cover_image"
                    id="cover_image"
                    accept=".jpeg, .png"
                    onChange={handleChange}
                    class="form-control"
                />
                {errors.cover_image && <span>{errors.cover_image}</span>}
            </div>
            <div class="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                    name="content"
                    id="content"
                    value={formData.content}
                    onChange={handleChange}
                    class="form-control"
                ></textarea>
                {errors.content && <span>{errors.content}</span>}
            </div>
            <div class="form-group">
                <label htmlFor="author_name">Author Name</label>
                <input
                    type="text"
                    name="author_name"
                    id="author_name"
                    value={formData.author_name}
                    onChange={handleChange}
                    class="form-control"
                />
                {errors.author_name && <span>{errors.author_name}</span>}
            </div>
            <div class="form-group">
                <label htmlFor="seo_description">Description</label>
                <input
                    type="text"
                    name="seo_description"
                    id="seo_description"
                    value={formData.seo_description}
                    onChange={handleChange}
                    class="form-control"
                />
                {errors.seo_description && <span>{errors.seo_description}</span>}
            </div>
            <button type="submit" class="btn btn-primary" id="Btn" >Submit</button>
        </form>
        // <form onSubmit={handleSubmit} id="container">
        //     <div className="containerHead">
        //         <h2> Blog Form</h2>
        //     </div>
        //     <div>
        //         <label htmlFor="title">Title</label>
        //         <input
        //             type="text"
        //             name="title"
        //             id="title"
        //             value={formData.title}
        //             onChange={handleChange}
        //         />
        //         {errors.title && <span>{errors.title}</span>}
        //     </div>
        //     <div>
        //         <label htmlFor="cover_image">Cover Image</label>
        //         <input
        //             type="file"
        //             name="cover_image"
        //             id="cover_image"
        //             accept=".jpeg, .png"
        //             onChange={handleChange}
        //         />
        //         {errors.cover_image && <span>{errors.cover_image}</span>}
        //     </div>
        //     <div>
        //         <label htmlFor="content">Content</label>
        //         <textarea
        //             name="content"
        //             id="content"
        //             value={formData.content}
        //             onChange={handleChange}
        //         ></textarea>
        //         {errors.content && <span>{errors.content}</span>}
        //     </div>
        //     <div>
        //         <label htmlFor="author_name">Author Name</label>
        //         <input
        //             type="text"
        //             name="author_name"
        //             id="author_name"
        //             value={formData.author_name}
        //             onChange={handleChange}
        //         />
        //         {errors.author_name && <span>{errors.author_name}</span>}
        //     </div>
        //     <div>
        //         <label htmlFor="seo_description">Description</label>
        //         <input
        //             type="text"
        //             name="seo_description"
        //             id="seo_description"
        //             value={formData.seo_description}
        //             onChange={handleChange}
        //         />
        //         {errors.seo_description && <span>{errors.seo_description}</span>}
        //     </div>
        //     <button type="submit" id="Btn" >Submit</button>
        // </form>
    )
}



export default BlogForm;
