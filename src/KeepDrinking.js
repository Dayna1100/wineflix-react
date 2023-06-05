import './App.css';
//import ProgressBars from './ProgressBars';

const data = [
    { id: 1, imageUrl: '/red-wine.jpg', progress: 22, label: 'Wine', },
    { id: 2, imageUrl: '/red-wine.jpg', progress: 43, label: 'Wine', },
    { id: 3, imageUrl: '/red-wine.jpg', progress: 75, label: 'Wine', },
    { id: 4, imageUrl: '/red-wine.jpg', progress: 100, label: 'Wine', },
    { id: 5, imageUrl: '/red-wine.jpg', progress: 0, label: 'Wine', },
    { id: 6, imageUrl: '/red-wine.jpg', progress: 60, label: 'Wine', },
    { id: 7, imageUrl: '/red-wine.jpg', progress: 20, label: 'Wine', },
    { id: 8, imageUrl: '/red-wine.jpg', progress: 90, label: 'Wine', },
  ];
  
  const KeepDrinking = () => {
    const filteredItems = data.filter((item) => item.progress !== 100);
  
    return (
      <section className="category">
        <h2>Keep Drinking</h2>
        <div className="wine">
          <ul>
            {filteredItems.map((item) => (
              <li key={item.id}>
                {item.progress !== 100 ? (
                  <img src={item.imageUrl} alt={item.label} />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        {/* <div>
          <ProgressBars data={data} />
        </div> */}
      </section>
    );
  };
  
  export default KeepDrinking;