import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/LAWU.png";

const HelpDesk: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
      Help Desk at PT. Lawu Information Technology
      </h1>
      <Image src={projectImage} />
      <div className="mt-4">
      <div>
        <span>Melakukan Instalisasi Aplikasi yang telah dibuat.</span>
      </div>
      <div>
        <span>Memberikan pelatihan Software / Aplikasi kepada para User.</span>
      </div>
      <div>
        <span>Sebagai pendamping User pada saat implementasi Aplikasi.</span>
      </div>
      <div>
        <span>Menyelesaikan persoalan -persoalan yang berkaitan dengan Aplikasi. Seperti adanya eror ketika di jalankan.</span>
      </div>
      <div>
        <span>Dapat mengelola System Aplikasi contoh database.</span>
      </div>
      <div>
        <span>Menanggapi semua keluhan user apabila terjadi error pada aplikasi yang digunakan dan mencatat kekurang aplikasi yang kemudian akan di sampaikan kepada developer.</span>
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

export default HelpDesk;
