import { useState } from 'react';
import './Card.css';
export default function Card(props) {
    const [selected, setSelected] = useState(props.item.selected)
    const [hover, setHover] = useState(false)
    const [disabled] = useState(props.item.disabled)
    function handleClick() {
        setSelected(!selected)
    }
    function statusCheck() {
        if (selected) {
            return "card__content card__content_selected"
        } else if (disabled) {
            return "card__content card__content_disabled"
        } else {
            return "card__content"
        }
    }
    function handleHover(e) {
        if (e.target.getAttribute('data-modal') === 'true') {
            setHover(true)
        }
    }

    return (
        <div className="card" >
            <div className={statusCheck()} onClick={handleClick} data-modal={selected} onMouseEnter={(e) => handleHover(e)} onMouseLeave={() => setHover(false)}>
                <div className="card__info">
                    <p className={hover ? "card__title card__title_hover" : "card__title"}>{hover ? `${props.item.title_hover}` : `${props.item.title}`}</p>
                    <h1 className="card__name">{props.item.name}</h1>
                    <h4 className="card__subtitle">{props.item.subtitle}</h4>
                    <p>{props.item.amount}</p>
                    <p>{props.item.dop1}</p>
                    <p>{props.item.dop2}</p>
                </div>
                <h2 className={props.item.first ? "card__weight card__weight_first" : "card__weight"}>{props.item.weight}<span>{props.item.weight_dop}</span></h2>
            </div>
            {selected
                ? <span className="card__description">{props.item.description_selected}</span>
                : <span className={disabled ? "card__description card__description_disabled" : "card__description"}>{props.item.description}<span className="card__description_dop" onClick={handleClick}>{props.item.description_dop}</span></span>
            }
        </div>
    )
}