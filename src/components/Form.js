import { useState } from "react";



function Form(props){

    // State to hold the data of our form 
    const [ formData, setFormData ] = useState({searchterm:""});

        // Updates formData when we type into form
    const handleChange = (e) => {
        // Use event object to detect key, and value to update
        setFormData({...formData, [e.target.name]: e.target.value })
    };

    const handleSubmit = (e) => {
        // Prevent page from refreshing on form submission
        e.preventDefault();
        // Pass the search term to moviesearch prop, which is Apps function
        props.moviesearch(formData.searchterm);
    }


    return (
        <div>
            {/* <h1> The Form Component </h1> */}
            <form onSubmit={handleSubmit} > 
                <input type="text" name="searchterm" value={formData.searchterm} onChange={handleChange} />
                <input type="submit" value="submit" />
            </form>
        </div>
        )

};

export default Form;