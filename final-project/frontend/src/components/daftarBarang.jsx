import React from 'react'
import axios from "axios"
import useSWR from "swr"

const fetcher = async() => {
    const response = await axios.get('http://localhost:8000/barang')
    return response.data
}


const DaftarBarang = () => {
    const {data}=useSWR('barang', fetcher)
    if(!data) return <h1> Loading</h1>
  return (
    <div>
        <div>daftarBarang</div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama Barang</th>
                        <th>Harga      </th>
                        <th>Stok       </th>
                        <th>Aksi       </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1       </td>
                        <td>Sepatu  </td>
                        <td>225000  </td>
                        <td>30      </td>
                        <td>        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DaftarBarang