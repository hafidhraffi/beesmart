export type HomePageData = {
  pencapaian: {
    klien: number;
    pengalaman: number;
    projek: number;
  };
  portofolio: [
    {
      foto: string;
      instansi: string;
      jenis: string;
      nama: string;
      tanggal: string;
    }
  ];
  testimoni: [
    {
      bintang: 5;
      foto_id: string;
      foto_url: string;
      isi: string;
      link: string;
      nama: string;
      waktu: string;
    }
  ];
};
