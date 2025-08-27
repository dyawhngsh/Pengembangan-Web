import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

const fetcher = async () => {
  const response = await axios.get("http://localhost:8000/barang", {
    headers: { Accept: "application/json" },
  });
  return response.data;
};

const DaftarBarang = () => {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR("http://localhost:8000/barang", fetcher);

  const deleteBarang = async (id) => {
    if (window.confirm("🗑️ Yakin ingin menghapus barang ini?")) {
      try {
        await axios.delete(`http://localhost:8000/barang/${id}`);
        mutate("http://localhost:8000/barang");
      } catch (error) {
        console.error("Gagal menghapus:", error);
      }
    }
  };

  if (error) return <h1 className="text-center text-red-500">❌ Gagal memuat data</h1>;
  if (!data) return <h1 className="text-center text-gray-600">⏳ Loading...</h1>;

  return (
    <div className="min-h-screen bg-[#f9f6f2] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-[#fef8f4] rounded-xl shadow-lg p-6 border border-[#e2d6c3]">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#5c4b3c]">📦 Daftar Barang</h1>
          <Link
            to="/tambah"
            className="bg-[#b98e68] hover:bg-[#a87750] text-white font-medium py-2 px-4 rounded-lg shadow transition-all duration-300"
          >
            ➕ Tambah Barang
          </Link>
        </div>

        <table className="w-full border border-[#e2d6c3] text-left rounded-md overflow-hidden">
          <thead>
            <tr className="bg-[#ebdbc9] text-[#5c4b3c]">
              <th className="py-3 px-4 border">No</th>
              <th className="py-3 px-4 border">Nama Barang</th>
              <th className="py-3 px-4 border">Harga</th>
              <th className="py-3 px-4 border">Stok</th>
              <th className="py-3 px-4 border">Aksi </th>
            </tr>
          </thead>
          <tbody>
            {data.map((barang, idx) => (
              <tr key={barang.id} className="hover:bg-[#f6f1eb] transition duration-150">
                <td className="py-3 px-4 border">{idx + 1}</td>
                <td className="py-3 px-4 border">
                  <span className="inline-block bg-[#f5e5d3]/70 text-[#5c4b3c] px-3 py-1 rounded-full text-sm shadow-sm">
                    {barang.nama_barang}
                  </span>
                </td>
                <td className="py-3 px-4 border">
                  <span className="inline-block bg-[#fceee0]/70 text-[#6d5a48] px-3 py-1 rounded-full text-sm shadow-sm">
                    Rp {barang.harga}
                  </span>
                </td>
                <td className="py-3 px-4 border">
                  <span className="inline-block bg-[#e7d9c8]/70 text-[#6b5d4d] px-3 py-1 rounded-full text-sm shadow-sm">
                    {barang.stok}
                  </span>
                </td>
                <td className="py-3 px-4 border space-x-2">
                  <Link
                    to={`/edit/${barang.id}`}
                    className="inline-flex items-center gap-1 bg-[#a1866f] hover:bg-[#8e6f59] text-white text-sm py-1.5 px-4 rounded-full transition-all duration-300 shadow-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteBarang(barang.id)}
                    className="inline-flex items-center gap-1 bg-[#d88f8f] hover:bg-[#c76f6f] text-white text-sm py-1.5 px-4 rounded-full transition-all duration-300 shadow-sm"
                  >
                    🗑️ Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DaftarBarang;
