import axios from "axios";

const api = axios.create({
    baseURL: ' http://192.168.0.106:3000'
})


const getDebtors = async () =>{
    const result = await api.get("/devedores")
    const data = result.data
    return data
}

const getDebtor = async (id) =>{
    const result = await api.get("/compras_devedores", {
        params: {
            id: id
        }
    })
    const data = result.data[0]
    return data
}

const addDebtor = async (debtor) =>{
    const res = await api.post('devedores', debtor)
    const data = res.data
    return data
}


export default {getDebtor, getDebtors, addDebtor};