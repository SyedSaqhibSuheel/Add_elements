const Error=({ok})=>{
    return(
        <>
        {ok.length===0 && <p>I Am Hungry</p>}
        </>
    )
}
export default Error;