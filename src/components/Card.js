function Card(props){

    function handleClick() {
        props.onCardClick(props.card);
      } 

        return (
            <div className="photo-grid__item" >
            <button type="button" className="photo-grid__delete"></button>
            <img className="photo-grid__picture" src={props.card.link} alt={props.card.name} onClick={handleClick}/>
            <div className="photo-grid__description">
                <h2 className="photo-grid__title">{props.card.name}</h2>
                <div className="photo-grid__like-container">
                    <button type="button" className="photo-grid__like"></button>
                    <p className="photo-grid__like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
        )
}
export default Card;