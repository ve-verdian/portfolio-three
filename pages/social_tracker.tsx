import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/A3.png";

const SocialTracker: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
      Analisa Kredit at KSP Swamitra Anugrah Artha Abadi
      </h1>
      <Image src={projectImage} />
      <div className="mt-4">
      <div>
        <span>Watak / Karakter calon debitur.</span>
      </div>
      <div>
        <span>Kemampuan dalam segi financial guna kesanggupan membayar angsuran.</span>
      </div>
      <div>
        <span>Modal, jika pinjaman akan di gunakan sebagai bahan usaha.</span>
      </div>
      <div>
        <span>Kondisi calon debitur dari segi ekonomi.</span>
      </div>
      <div>
        <span>Jaminan untuk menutup resiko kredit jika terjadi gagal bayar / Agunan yang di jaminkan.</span>
      </div>
      </div>
      <div className="mt-6">
        <Link href="/">
          <a className="font-bold underline hover:text-indigo-600">Kembali</a>
        </Link>
      </div>
    </div>
  );
};

export default SocialTracker;
