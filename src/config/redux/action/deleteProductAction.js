import axios from "axios"

const deleteProductAction = (id_product, setShow) => async (dispatch) => {
    try {
        const product = await axios.delete(`${process.env.REACT_APP_BASEURL}/${id_product}`)
        alert("Product deleted")
        setShow(false)
        window.location.reload()
        const result = product.data.data
        dispatch({ type: "DELETE_PRODUCT", payload: result });

    } catch (error) {
        alert(error);
        setShow(false)
    }
}

export default deleteProductAction