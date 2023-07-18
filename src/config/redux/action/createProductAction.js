const createProductAction = (data, image_product, setShow) => async (dispatch) => {
    try {
        const formData = new FormData();
        formData.append('name_product', data.name_product)
        formData.append('price', data.price)
        formData.append('stock', data.stock)
        formData.append('image_product', image)
        formData.append('rate', data.rate)
        formData.append('shop_name', data.shop_name)
        formData.append('description', data.description)
        axios.post(process.env.REACT_APP_BASEURL, formData)

        alert("Product created")
        setShow(false)
        window.location.reload()
        const result = products.data.data;
        dispatch({ type: "CREATE_PRODUCT", payload: result });

    } catch (err) {
        alert(err);
        setShow(false)
    }
}

export default createProductAction