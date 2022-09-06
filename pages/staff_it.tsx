import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../public/FAMILY.png";

const StaffIt: NextPage = () => {
  return (
    <div>
      <h1 className="text-xl text-indigo-600 mb-4 font-bold">
      Staff IT at RSIA Family
      </h1>
      <Image src={projectImage} />
      <div className="mt-4">
        <div>
          <span>Melakukan pengecekan serta memperbarui sistem operasi dan aplikasi yang dijalankan oleh pengguna.</span>
        </div>
        <div>
        <span>Memastikan setiap aplikasi yang digunakan oleh pengguna berjalan dengan baik.</span>
        </div>
        <div>
        <span>Bertanggung jawab terhadap mesin pendukung, misalnya seperti scanner, printer, dan lain-lain.</span>
        </div>
        <div>
        <span>Melakukan pengaturan pada browser yang biasa digunakan.</span>
        </div>
        <div>
        <span>Menjaga keamanan sistem dengan menggunakan tools seperti antivirus, dan sejenisnya.</span>
        </div>
        <div>
        <span>Bertugas untuk melakukan backup terhadap semua data.</span>
        </div>
        <div>
        <span>Memastikan setiap komputer yang digunakan oleh pengguna dapat berkomunikasi dengan baik dan terhubung ke jaringan.</span>
        </div>
        <div>
        <span>Bertugas untuk memperbaiki dan mengecek jaringan komputer pengguna yang bermasalah.</span>
        </div>
        <div>
        <span>Melakukan pembaruan dan pengecekan terhadap aplikasi maupun sistem operasi yang dijalankan oleh pengguna.</span>
        </div>
        <div>
        <span>Bertugas untuk memastikan setiap data yang ada di komputer pengguna tidak bisa diambil oleh orang lain tanpa seizin pengguna.</span>
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

export default StaffIt;
