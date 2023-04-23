import styles from './List.module.css'
const List = ({items}) => {
    //[1,2,3]   ==> <li>1</li>,<li>2</li>,<li>3</li>
   const list = items.map((item ,index) => <li key ={index}>{item}</li>)
    return (
        <div className={styles.listContainer}>
            <ul>
               {list}
            </ul>

        </div>

    )

};

export default List;