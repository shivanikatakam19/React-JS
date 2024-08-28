import star from '../images/Star 1.png'

export default function Card({ item }) { //de structured props
    let badgeText
    if (item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className='mt-3'>
            <section className='col d-grid'>
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className='card--image' src={`./images/${item.coverImg}`} alt={item.title} />
                <div className='d-flex mt-1'>
                    <img style={{ height: "17px" }} src={star} />
                    <small className='card--text ms-2'>{item.stats.rating} <small className='card--text' style={{ color: "#918E9B" }}>({item.stats.reviewCount}). {item.location}</small></small>
                </div>
                <small className='card--text'>{item.title}</small>
                <small className='card--text'><span className='fw-bold'>From ${item.price} </span>/ Person</small>
            </section>
        </div >
    )
}


// export default function Card(props) { //de structured props
//     return (
//         <div className='mt-3'>
//             <section className='col d-grid'>
//                 <img className='card--image' src={props.img} alt={props.title} />
//                 <div className='d-flex mt-1'>
//                     <img style={{ height: "17px" }} src={star} />
//                     <small className='card--text ms-2'>{props.rating} <small className='card--text' style={{ color: "918E9B" }}>{props.country}</small></small>
//                 </div>
//                 <small className='card--text'>{props.title}</small>
//                 <small className='card--text'><span className='fw-bold'>From ${props.price} </span>/ Person</small>
//             </section>
//         </div >
//     )
// }