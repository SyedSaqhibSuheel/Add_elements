import Li from "./Li";

const UiList=({ok})=>{
    
  
    return(
        <ul className="list-group">

{ok.map((item)=>( <Li key={item} foodItem={item}/>))}
</ul>

    );
}
export default UiList;
