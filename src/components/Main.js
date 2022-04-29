
import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo().then((res) => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar)
        }).catch((error) => console.log(error))
    }, [userName, userDescription, userAvatar])

    React.useEffect(() => {
        api.getInitialCards().then((res) => {
            setCards(res);
        }).catch((error) => console.log(error))
    }, [])

    return (
        <>
            <main className="content-container">
                <section className="profile">
                    <img className="profile__avatar" src={userAvatar} alt="аватар" />
                    <button type="button" className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
                    <div className="profile__info">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-Button" onClick={props.onEditProfile}>
                        </button>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                    <button type="button" className="profile__add-Button" onClick={props.onAddPlace}></button>

                </section>

                <section className="photo-grid">
                    {cards.map((res) => <Card card={res} key={res._id} onCardClick={props.onCardClick}/>)}
                </section>
            </main>
        </>
    )
}

export default Main;