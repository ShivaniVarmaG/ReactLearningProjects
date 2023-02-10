const Book = (props) => {
    // console.log(props);
    // const { imgSrc, author, title } = props.book;
    const { imgSrc, author, title, displayValue, getBook, id ,number } = props;

    const displayTitle = () => {
        console.log(title);
    }

    const getSingleBook = () => {
        getBook(id);
    }

    return (
        <article className='book'>
            <span className="number">#{number+1}</span>
            <img src={imgSrc}
                alt={title} />
            <h2>{title}</h2>
            {/* <button onClick={displayValue}> display title</button> */}
            {/* <button onClick={getSingleBook}> Click me</button> */}
            {/* <button onClick={()=> getBook(id)}> click me</button>  // finding the details of the book using anonymous function  an alt for the above line*/}
            <h4>{author}</h4>
        </article>
    );
};

export default Book;