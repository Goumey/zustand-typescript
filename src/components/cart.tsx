import React from 'react'
import { Button } from './ui/button'
import { useStoreCart } from '@/store/cart.store'

const Cart = () => {
    const selectedId = useStoreCart((state) => state.listIdCat)


    return (
        <div>
            <Button variant="secondary" className="bg-black text-white hover:bg-gray-900 " >Panier ({selectedId.size})</Button>
        </div>
    )
}

export default Cart