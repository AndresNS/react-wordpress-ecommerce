const Product = (props) => {
    const { product } = props;
    return (
        // <div  key={product.id}>
        //     <h3 >{product.name}</h3>
        //     <img style="height: 200px; width: 100%; display: block;" src={product.images[0].src} alt="Product image" />
        //     <div >
        //         <h5 >{product.price}</h5>
        //         <h6 >Support card subtitle</h6>
        //     </div>
        // </div>
        <div className="card mb-3">
            <h3 className="card-header">{product.name}</h3>
            <img  src={product.image.sourceUrl} alt="Product image" />
            <div className="card-body">
                <h5 className="card-title">{product.price}</h5>
                <a href="" className="btn btn-secondary text-center">View</a>
            </div>
        </div>
    );
};

export default Product;