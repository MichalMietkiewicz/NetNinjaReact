import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    // const [name, setName] = useState('mario');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    // useEffect(() => {
    //     fetch('http://localhost:8000/blogs')
    //     .then(res => {
    //         if (!res.ok) {
    //             throw Error('oops! weve done a fucky wucky!!!')
    //         }
    //         return res.json();
    //     })
    //     .then((data) => {
    //         setIsLoading(false);
    //         setBlogs(data);
    //         setError(null)
    //     })
    //     .catch(err => {
    //         setIsLoading(false);
    //         setError(err.message);
    //     })
    // }, []);
    // // let name = 'mario'
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(35);
    // }
    // // const handleClickAgain = (name, e) => {
    // //     console.log('hello' + name, e.target);
    // // } 
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            { isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} /*title="All blogs"*//> /*handleDelete={handleDelete}/>*/}
            {/* <button onClick={() => setName('luigi')}>changename</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )} title="Mario's blogs"/> */}
            {/* <h2>Homepage</h2> */}
            {/* <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Mario', e)}>Click me again</button> */}
        </div>
     );
}
 
export default Home;