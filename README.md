Markdown
# 🍿 Başucu Filmlerim (Movie Tracking App)

Bu proje, izlediğiniz veya izlemek istediğiniz film ve dizileri takip edebileceğiniz, modern ve duyarlı (responsive) bir web uygulamasıdır.

## ✨ Özellikler
- **Film Ekleme:** Film adı, türü ve çıkış tarihi ile veritabanına yeni kayıt oluşturma.
- **İzlendi İşaretleme:** Filmleri tek tıkla "İzlendi" olarak işaretleme (kart tasarımının transparanlaşıp geriye düşmesi).
- **Silme İşlemi:** Listeden istenmeyen filmleri kalıcı olarak kaldırma.
- **Canlı Veritabanı:** Firebase Firestore sayesinde sayfayı yenilemeye gerek kalmadan anlık (real-time) veri senkronizasyonu.
- **Tam Mobil Uyumluluk:** Bootstrap grid sistemi ile telefonda, tablette ve bilgisayarda kusursuz görünüm.

## 🛠️ Kullanılan Teknolojiler
- **Frontend:** React (Vite)
- **Veritabanı:** Firebase (Cloud Firestore)
- **Stil & Tasarım:** Bootstrap 5

---

## 🚀 Kurulum ve Çalıştırma

Projeyi kendi yerel ortamınızda (bilgisayarınızda) çalıştırmak için aşağıdaki adımları sırasıyla izleyin.

> **⚠️ ÖNEMLİ NOT:** Projenin boyutunu optimize etmek amacıyla `node_modules` klasörü (gerekli paketler) bu depoya dahil edilmemiştir. Projeyi çalıştırabilmek için indirdikten hemen sonra **`npm install`** komutunu çalıştırarak paketleri yüklemeniz gerekmektedir.

### 1. Projeyi İndirin
Projeyi bilgisayarınıza klonlayın ve klasörün içine girin:
```bash
git clone [https://github.com/KULLANICI_ADIN/REPO_ADIN.git](https://github.com/KULLANICI_ADIN/REPO_ADIN.git)
cd REPO_ADIN
2. Gerekli Paketleri Yükleyin
Uygulamanın çalışması için gereken React, Firebase ve Bootstrap kütüphanelerini indirmek için bu komutu çalıştırın:

Bash
npm install
3. Firebase Bağlantısını Yapılandırın (DİKKAT)
Uygulamanın veritabanı ile haberleşebilmesi için src/ klasörü içinde bir firebase.js dosyası oluşturun. Kendi Firebase projenizden aldığınız Config bilgilerini aşağıdaki şablona uygun şekilde doldurmanız gerekmektedir:

JavaScript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase yapılandırma bilgilerin (kendi bilgilerini buraya gir)
const firebaseConfig = {
  apiKey: "KENDİ API ANAHTARINI BURAYA GİR",
  authDomain: "KENDİ AUTH DOMAIN'İNİ BURAYA GİR",
  projectId: "KENDİ PROJE ID'İNİ BURAYA GİR",
  storageBucket: "KENDİ STORAGE BUCKET'İNİ BURAYA GİR",
  messagingSenderId: "KENDİ MESSAGING SENDER ID'İNİ BURAYA GİR",
  appId: "KENDİ APP ID'İNİ BURAYA GİR",
};

// Firebase'i BAŞLAT (Sadece bir kere)
const app = initializeApp(firebaseConfig);

// db'yi DIŞA AKTAR
export const db = getFirestore(app);
4. Geliştirme Sunucusunu Başlatın
Tüm ayarlar tamamlandıktan sonra projeyi ayağa kaldırmak için:

Bash
npm run dev
Terminalde beliren yerel adrese (genellikle http://localhost:5173) tıklayarak uygulamanızı tarayıcıda görüntüleyebilirsiniz. İyi seyirler! 🎬
