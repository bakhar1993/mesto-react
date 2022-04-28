// import logo from '../images/kusto.jpg';
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(false);

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(false)
    }

    function handleCardClick(data) {
        setSelectedCard(data)
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }


    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    return (
        <div className="page">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
            <Footer />

            <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title={'Редактировать профиль'}>
                {<><input id="name-input" type="text" name="name" className="popup__input popup__input_type-name" required />
                    <span className="name-input-error popup__input-error"></span>
                    <input id="job-input" type="text" name="about" className="popup__input popup__input_type-job" required />
                    <span className="job-input-error popup__input-error"></span></>} </PopupWithForm>
            ~

            <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title={'Новое место'}>
                {<> <input id="place-input" type="text" name="name" className="popup__input popup__input_type-place" placeholder="Название" required />
                    <span className="place-input-error popup__input-error"></span>
                    <input id="url-input" type="url" name="link" className="popup__input popup__input_type-link"
                        placeholder="Ссылка на картинку" required />
                    <span className="url-input-error popup__input-error"></span></>}</PopupWithForm>

            <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title={'Обновить аватар'} >
                {<><input id="avatar-input" type="url" name="avatar" className="popup__input popup__input_type-avatar-edit" required />
                    <span className="avatar-input-error popup__input-error"></span></>}</PopupWithForm>

            <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        </div>
    );
}

export default App;
