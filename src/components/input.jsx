const Input=({Handle})=>{
    return(
        <input type="text" placeholder="Enter Food Item" onKeyDown={Handle}/>
    )
}
export default Input;