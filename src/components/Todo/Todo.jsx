import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import List from "../List/List";


const Todo = () => {
    const [list, setList] = useState([]);
    const [text, setText] = useState('');

    //ComponentDidMount
    useEffect(()=>{
        const todoList = JSON.parse(window.localStorage.getItem('todoList')) || [];
        setList(todoList);
    }, []);

    //ComponentDidUpdate
    useEffect(()=>{
        window.localStorage.setItem('todoList', JSON.stringify(list));
    }, [list]);

    //ComponentWillUnmount
    useEffect(()=>{
        return () =>{
            console.log('ComponentWillUnmount');
        }
    });

    console.log('Todo component');

    const inputChangeHandler = (e) => { setText(e.target.value) };

    const btnClickHandler = () => {
        if(text.trim()){
        const items = [...list];
        items.push(text);
        setList(items);
        setText('');
        }  
    };

    const inputKeyUpHandler = (e)=>{
        if(e.key === "Enter"){
            btnClickHandler();
        }
    }
    return (
        <>
            <div className="text-center mb-3">
                <Input changeHandler={inputChangeHandler} value = {text} keyUpHandler ={inputKeyUpHandler}/>
                <Button clickHandler={btnClickHandler} btnText ="Add to the list" disabled ={text.length === 0}/>
            </div>
            <List items={list} />
        </>
    )
};
export default Todo;