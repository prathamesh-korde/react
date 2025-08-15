
export default function Prices({oldPrice,NewPrice}){

    return(
        <div style={{backgroundColor: "#e0c367", height: "30px", borderBottomLeftRadius:"14px" , borderBottomRightRadius:"14px"}}>
       <span style={{textDecorationLine:"line-through"}}>{oldPrice}</span>
       &nbsp; &nbsp;
       <span style={{fontWeight:"bold"}}>{NewPrice}</span>
       </div> 
    )
}