import "./Categoryes.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppRootState } from "../redux/store";
import { fetchProducts } from "../redux/products/productSlice";

const Products = () => {
    const dispatch = useDispatch<AppDispatch>();
    const value = useSelector((state: AppRootState) => state.category.value);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    console.log(value);

    return (
        <div>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {value.map((item: any, index: number) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.title}</td>
                            <td>
                                <img src={item.image} alt={item.name} width="100" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Products;
