
import { useFormik } from 'formik';
import {useNavigate} from 'react-router-dom';
import {object, string} from 'yup';

const validationSchema = object({
    movieUrl: string().required(),
    title: string().required(),
    name: string().required(),
    link: string().required(),
});




function Addmovies() {
    const formik = useFormik({
        initialValues: {
            movieUrl: '',
            title: '',
            name: '',
            link: '',
        },
        
        onSubmit: (values) => {
            addMovie(values);
        },
        validationSchema : validationSchema,
    });
    const Navigate=useNavigate();
    const addMovie=(values)=>{
        console.log(values);
        fetch('https://686e1a71c9090c49538847f9.mockapi.io/the_movies',{

            method: 'POST',
            body:JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(()=>Navigate('/movie_fetchA'));
    };
    return (
        <div>
            <form onSubmit={formik.handleSubmit} className=''>
                <input onChange={formik.handleChange} type='text' placeholder='movie url' name='movieUrl' onBlur={formik.handleBlur} /> 
                <p>{formik.errors.movieUrl}</p>
                <br></br>
                <input onChange={formik.handleChange} type='text' placeholder='movie title ' name='title'  /> 
                <p>{formik.errors.title}</p>
                <br></br>
                <input onChange={formik.handleChange} type='text' placeholder='movie name' name='name'  /> 
                <p>{formik.errors.name}</p>
                <br></br>
                <input onChange={formik.handleChange} type='text' placeholder='movie description' name='link'  /> 
                <p>{formik.errors.link}</p>
                <br></br>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default Addmovies;
