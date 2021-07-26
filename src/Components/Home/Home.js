import cardJson from './HomeCards.json'

export default () =>{
    return (
      <>
        <div className="container my-4">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {cardJson.map((elem) => {
              return (
                <>
                    {elem.card.map((row) => {
                        let { cardTitle, cardImg, cardDes, cardLstUpdTime, hrefLink } = row
                        return (
                        <>
                          <div className="col">
                            <div className="card h-100 shadow rounded">
                              <img src={cardImg} className="card-img-top" style={{height: "30vh"}} alt="..." />
                              <div className="card-body">
                                <h5 className="card-title">{cardTitle}</h5>
                                <p className="card-text">{cardDes}</p>
                              </div>
                              <div className="card-footer d-flex justify-content-between align-items-center">
                                <small className="text-muted">{cardLstUpdTime}</small>
                                <a href={hrefLink} target="_blank" className="btn btn-success">Buy</a>
                              </div>
                            </div>
                          </div>  
                        </>
                        )
                    })}
                </>
                )
              })}
          </div>
        </div>
      </>
    )
  }