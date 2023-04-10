// TODO
const {useState} = React;

const App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList items={['Apples', 'Bananas', 'Cherries']}/>
  </div>
);

const GroceryList = (props) => (
  <ul>
      {props.items.map((item) => (
        <GroceryListItem item={item}/>
      ))}
  </ul>
);

const GroceryListItem = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const style = {
    textDecoration: isDone ? 'line-through' : 'none',
    fontWeight: isHover ? 'bold' : 'normal'
  };

  return (
    <li style={style} onClick={() => setIsDone(!isDone)} onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>
      {props.item}
    </li>
  );
};

ReactDOM.render(<App />, document.getElementById('app'))