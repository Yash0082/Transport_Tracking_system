const Cards = () => {
    return (
      <div className="container mt-4">
        <div className="row">
          {[1, 2, 3, 4].map((card) => (
            <div className="col-md-3" key={card}>
              <div className="card">
                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Card" />
                <div className="card-body">
                  <h5 className="card-title">Card {card}</h5>
                  <p className="card-text">This is a description for card {card}.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Cards;