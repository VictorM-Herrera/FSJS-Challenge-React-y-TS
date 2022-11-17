import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import { useCart } from 'react-use-cart'

export default function Carrito() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity, removeItem, emptyCart,
    }= useCart();
    if(isEmpty) return <h1 className='text-center'>El carrito esta vacio</h1>
  return (
    <MDBContainer>
        <MDBRow>
            <MDBCol>
                <h5>Carrito: cantidad de productos: ({totalItems})</h5>
                <table>
                    <tbody>
                        {items.map((item,index)=>{
                            return(
                                <tr key={index} >
                                    <td className='table-img'>
                                        <img src={item.img} style={{height: '6rem'}} className="t-img-width"/>
                                    </td>
                                    <td className='text-center table-text'>
                                        {item.title}
                                    </td>
                                    <td>${item.price}</td>
                                    <td>Cantidad: ({item.quantity})</td>
                                    <td>
                                        <div className='d-flex gap'>
                                        <button className='boton' onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}><i class="fas fa-minus"></i></button>
                                        <button className='boton' onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}><i class="fas fa-plus"></i></button>
                                        <button className='boton boton-rojo' onClick={() => removeItem(item.id)}><i class="fas fa-trash"></i></button>                                          
                                        </div>
 </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
  )
}
