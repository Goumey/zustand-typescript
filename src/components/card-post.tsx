

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useStoreCart } from "@/store/cart.store"


interface IProps {
    img: string,
    id: string
}

export function CardPost({ img, id }: IProps) {
    const addId = useStoreCart((state) => state.addId)
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Cat N° {id}</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={img} alt="" className="w-full h-60 object-cover" />
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button variant="secondary" className="bg-black text-white hover:bg-gray-900 " onClick={() => addId(id)}>Ajouter au panier</Button>

            </CardFooter>
        </Card>
    )
}
