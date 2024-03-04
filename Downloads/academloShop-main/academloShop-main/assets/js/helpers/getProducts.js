async function getProducts () {
    try {
        const res = await window.fetch("https://marketplace-production-f533.up.railway.app/api/v1/products")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getProducts