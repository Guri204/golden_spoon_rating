

function Gallery(props) {
    return(
        <section className="gallery-section">
            <div className="gallery-grid">
                {props.foodItems.map((img, index) => (
                    <div className="card" key={index}>
                        <img src={img}/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;