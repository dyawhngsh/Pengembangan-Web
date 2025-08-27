import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBarang = () => {
  const [nama_barang, setNamaBarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/barang/${id}`);
        setNamaBarang(res.data.nama_barang);
        setHarga(res.data.harga);
        setStok(res.data.stok);
      } catch (err) {
        console.error("Gagal mengambil data barang:", err);
      }
    };
    fetchData();
  }, [id]);

  const updateBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/barang/${id}`, {
        nama_barang: nama_barang,
        harga: Number(harga),
        stok: Number(stok),
      });
      navigate("/");
    } catch (error) {
      console.error("Gagal mengupdate data:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf7f0]">
      <div className="bg-[#f1e6d8] rounded-xl shadow-lg p-8 w-full max-w-md border border-[#d6c9b8]">
        <h2 className="text-2xl font-serif text-[#7a6f54] text-center mb-6 tracking-wide">
          Edit Barang
        </h2>

        <form onSubmit={updateBarang} className="space-y-6">
          <div>
            <label className="block text-[#7a6f54] text-sm font-semibold mb-2">
              Nama Barang:
            </label>
            <input
              type="text"
              value={nama_barang}
              onChange={(e) => setNamaBarang(e.target.value)}
              placeholder="Masukkan nama barang"
              className="w-full px-4 py-3 rounded-lg border border-[#d6c9b8] bg-[#f9f6f1] text-[#5c5143] placeholder-[#a9987e] focus:outline-none focus:ring-2 focus:ring-[#c9b798] transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-[#7a6f54] text-sm font-semibold mb-2">
              Harga:
            </label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              placeholder="Masukkan harga barang"
              className="w-full px-4 py-3 rounded-lg border border-[#d6c9b8] bg-[#f9f6f1] text-[#5c5143] placeholder-[#a9987e] focus:outline-none focus:ring-2 focus:ring-[#c9b798] transition duration-200"
              required
              min={0}
            />
          </div>

          <div>
            <label className="block text-[#7a6f54] text-sm font-semibold mb-2">
              Stok:
            </label>
            <input
              type="number"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              placeholder="Masukkan jumlah stok"
              className="w-full px-4 py-3 rounded-lg border border-[#d6c9b8] bg-[#f9f6f1] text-[#5c5143] placeholder-[#a9987e] focus:outline-none focus:ring-2 focus:ring-[#c9b798] transition duration-200"
              required
              min={0}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#b89b72] hover:bg-[#a18859] text-white font-semibold py-3 rounded-lg shadow-md transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBarang;
