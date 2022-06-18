import './App.css';
import Card from './components/Card/Card';

function App() {
  const cards = [
    {id:1,title:'Сказочное заморское яство',title_hover:'Котэ не одобряет?',name:'Нямушка',subtitle:'с фуа-гра',amount:'10 порций',dop1:'мышь в подарок',weight:'0,5',weight_dop:'кг',first:true,description:'Чего сидишь? Порадуй котэ, ',description_dop:'купи',selected:false,description_selected:'Печень утки разварная с артишоками.'},
    {id:2,title:'Сказочное заморское яство',title_hover:'Котэ не одобряет?',name:'Нямушка',subtitle:'с рыбой',amount:'40 порций',dop1:'2 мыши в подарок',weight:'2',weight_dop:'кг',description:'Чего сидишь? Порадуй котэ, ',description_dop:'купи',description_selected:'Головы щучьи с чесноком да свежайшая сёмгушка.',selected:true},
    {id:3,title:'Сказочное заморское яство',title_hover:'Котэ не одобряет?',name:'Нямушка',subtitle:'с курой',amount:'100 порций',dop1:'5 мышей в подарок',dop2:'заказчик доволен',weight:'5',weight_dop:'кг',description:'Печалька, с курой закончился.',disabled:true},
  ]
  return (
    <div className="App">
      <h3 className="App__title">Ты сегодня покормил кота?</h3>
      <div className="App__container">
        {cards.map((item)=>(
           <Card
           key={item.id}
           item={item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
