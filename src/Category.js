import "./App.css";

const Category = ({ wines, title }) => {
    return (
     <section className="category">
      <h2>{title}</h2>
        <ul>
            {wines.map(({ imageUrl, isNew, label, isFinished, progress }) => (
            <li>
                <div className="wine">
                    <img src={imageUrl} alt="Wine" />
                    {
                        progress
                        ? <div className="amount-comsumed">
                          <progress min="0" max="100" value={progress}></progress>
                          </div>
                          : null  
                    }
                </div>
            </li>
            ))}
        </ul>
       </section>  
        )
}


export default Category