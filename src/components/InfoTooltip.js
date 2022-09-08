import React from 'react';
import icon from '../images/icon.svg';
import union from '../images/union.svg';

function InfoTooltip({isOpen, onClose, status}){

    return(
        <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>    
            <div className="popup__container">
                <button type="button" className="popup__button-close" onClick={onClose}></button>
                <div className="popup__tooltip">
                <img alt="реакция" className="tooltip__icon" src={status ? icon : union} />
                <p className="popup__tooltip-message">{status ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoTooltip;