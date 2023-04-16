import React from 'react';
import { useParams  } from 'react-router-dom';
import {Link} from 'react-router-dom';
export default function Single(props) {
    const{id}=useParams();
    // const data=props
    console.log(id)
    // console.log(data)

    const product=props.data.find((i)=>i.id===id)
    console.log("product2",product.title,product.img)
    console.log(`img/${product.img}`)



  return (
    <div>
      <img className="" src={`/img/${product.img}`} alt="ii" width="200px" />
            <div className="card-body">
                <p className="card-title">{product.title}</p>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.description}</p>

            <Link to={"/"}> Retourner a la page d accceuil</Link>
    </div>
 
    </div>


  )
}
