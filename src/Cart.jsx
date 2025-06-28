

function Cart({ info }) {

    function deleteElement() {
        
    }

    if(!info) return <h1>Nothing</h1>

    return(
        <>
          {info.map((data) => {
            return <div style={{display: "flex", border: "1px solid black"}}>
                <img src={data.img} width={200}/>
                <h1>{data.name}</h1>
                <button>X</button>
            </div>
          })}
        </>
    )
}

export default Cart