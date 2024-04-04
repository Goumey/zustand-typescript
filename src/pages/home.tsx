import { CardPost } from '@/components/card-post'
import Cart from '@/components/cart';
import { Button } from '@/components/ui/button';
import { fetchCat } from '@/service/fetch-cat'
import { useStoreCart } from '@/store/cart.store';
import { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData] = useState([{ id: "", url: "", width: 0, height: 0 }])
    const recupData = async () => {
        const data = await fetchCat()
        setData(data)

    }
    useEffect(() => {
        recupData()
    }, [])


    return (
        <div>
            <div className="flex justify-end my-2">
                <Cart />
            </div>
            <div className="grid grid-cols-12 gap-2 my-4">
                {data.map((item, i) => <div key={i} className="col-span-3 bg-gray-300 dark:bg-gray-700"><CardPost img={item?.url} id={item?.id} /></div>)}

            </div>
        </div>
    )
}

export default Home