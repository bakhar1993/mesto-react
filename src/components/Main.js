
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
        })
    }, [userName, userDescription, userAvatar])

    React.useEffect(() => {
        api.getInitialCards().then((res) => {
            setCards(res);

        })
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









            {/* <div className="popup popup_type_profile-edit">
        <div className="popup__container">
            <button type="button" className="popup__close popup__close_type_profile-edit"></button>
            <form action="/" method="post" className="popup__form popup__form_type_profile-edit" name="popup__form" novalidate>
                <h2 className="popup__title">Редактировать профиль</h2>
                <input id="name-input" type="text" name="name" className="popup__input popup__input_type-name" minlength="2" maxlength="40" required />
                <span className="name-input-error popup__input-error"></span>
                <input id="job-input" type="text" name="about" className="popup__input popup__input_type-job" minlength="2" maxlength="200" required />
                <span className="job-input-error popup__input-error"></span>
                <button type="submit" className="popup__submit popup__submit_type_profile-edit">Сохранить</button>
            </form>
        </div>
    </div>

    <div className="popup popup_type_add-card">
        <div className="popup__container">
            <button type="button" className="popup__close popup__close_type_add-card"></button>
            <form action="/" method="post" className="popup__form popup__form_type_add-card" name="popup__form" novalidate>
                <h2 className="popup__title popup__title_type_add-card">Новое место</h2>
                <input id="place-input" type="text" name ="name" className="popup__input popup__input_type-place" placeholder="Название" minlength="2" maxlength="30" required />
                <span className="place-input-error popup__input-error"></span>
                <input id="url-input" type="url" name="link" className="popup__input popup__input_type-link"
                    placeholder="Ссылка на картинку" required />
                    <span className="url-input-error popup__input-error"></span>
                <button type="submit" className="popup__submit popup__submit_type_add-card">Создать</button>
            </form>
        </div>
    </div>


    <div className="popup popup_type_delete-card">
    <div className="popup__container">
        <form action="/" method="post" className="popup__form popup__form_type_delete-card" name="popup__form" novalidate>
        <button type="button" className="popup__close popup__close_type_delete-card"></button>
            <h2 className="popup__title popup__title_type_delete-card">Вы уверены?</h2>
            <button type="submit" className="popup__submit popup__submit_type_delete-card">Да</button>
        </form>
    </div>
</div>

<div className="popup popup_type_avatar-edit">
    <div className="popup__container">
        <button type="button" className="popup__close popup__close_type_avatar-edit"></button>
        <form action="/" method="post" className="popup__form popup__form_type_avatar-edit" name="popup__form" novalidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input id="avatar-input" type="url" name="avatar" className="popup__input popup__input_type-avatar-edit" required />
            <span className="avatar-input-error popup__input-error"></span>
            <button type="submit" className="popup__submit popup__submit_type_avatar-edit">Сохранить</button>
        </form>
    </div>
</div> */}

        </>
    )
}

export default Main;