import {useRouter} from 'next/router'
export default function Product(){
    const {query} = useRouter()
    return (
        <div>
            <h1>Product</h1>
        </div>
    )
}