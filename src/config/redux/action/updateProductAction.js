import axios from "axios";

const updateProductAction = (data, image_product, id_product, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name_product', data.name_product)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('image_product', image_product)
        formData.append('rate', data.rate)
        formData.append('shop_name', data.shop_name)
        formData.append('description', data.description)
        const product = await axios.put(`${process.env.REACT_APP_BASEURL}/${id_product}`, formData)

        alert("Product update")
        setShow(false)
        window.location.reload()
        const result = product.data.data;
        dispatch({ type: "UPDATE_PRODUCT", payload: result });

    } catch (err) {
        alert(err);
        setShow(false)
    }
}

export default updateProductAction