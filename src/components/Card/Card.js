import { useState } from 'react';
import './Card.css';
export default function Card(props) {
    const [selected, setSelected] = useState(props.item.selected)
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
    return (
        <div className="card" >
            <div className={statusCheck()} onClick={handleClick}>
                <div className="card__info">
                    <p className="card__title">{props.item.title}</p>
                    <h1 className="card__name">{props.item.name}</h1>
                    <h4 className="card__subtitle">{props.item.subtitle}</h4>
                    <p>{props.item.amount}</p>
                    <p>{props.item.dop1}</p>
                    <p>{props.item.dop2}</p>
                </div>
                <h2 className={props.item.first ? "card__weight card__weight_first" : "card__weight"}>{props.item.weight}<span>{props.item.weight_dop}</span></h2>
            </div>
            <span className="card__description">{props.item.description}<span className="card__description_dop" onClick={handleClick}>{props.item.description_dop}</span></span>
        </div>
    )
}