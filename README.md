# 🍿 Başucu Filmlerim

İzlediğiniz veya izleme listenize eklemek istediğiniz film ve dizileri kolayca takip edebileceğiniz, modern tasarıma sahip bir web uygulaması.

Firebase Firestore'un gerçek zamanlı veri senkronizasyonu sayesinde eklediğiniz içerikler anında güncellenir ve tüm değişiklikler sayfayı yenilemeye gerek kalmadan görüntülenir.

## ✨ Özellikler

🎬 **Film ve Dizi Ekleme**

* Film adı, türü ve çıkış tarihi bilgileriyle yeni içerikler ekleyebilirsiniz.

✅ **İzlendi Durumu**

* Tek tıkla içerikleri "İzlendi" olarak işaretleyebilirsiniz.
* İzlenen içerikler görsel olarak arka plana alınarak listede daha düzenli bir görünüm sağlar.

🗑️ **Silme İşlemi**

* İstemediğiniz içerikleri kalıcı olarak kaldırabilirsiniz.

⚡ **Gerçek Zamanlı Senkronizasyon**

* Firebase Firestore sayesinde tüm değişiklikler anlık olarak veritabanına yansır.

📱 **Responsive Tasarım**

* Mobil, tablet ve masaüstü cihazlarda sorunsuz çalışan kullanıcı dostu arayüz.

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji          | Açıklama                                     |
| ------------------ | -------------------------------------------- |
| React (Vite)       | Modern ve hızlı kullanıcı arayüzü geliştirme |
| Firebase Firestore | Bulut tabanlı gerçek zamanlı veritabanı      |
| Bootstrap 5        | Responsive ve modern tasarım altyapısı       |

---

## 🚀 Kurulum

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edin.

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/KULLANICI_ADIN/REPO_ADIN.git
cd REPO_ADIN
```

### 2. Gerekli Paketleri Yükleyin

```bash
npm install
```

> Not: Projede `node_modules` klasörü depoya dahil edilmemiştir. Bu nedenle projeyi indirdikten sonra ilk olarak `npm install` komutunu çalıştırmanız gerekir.

### 3. Firebase Yapılandırması

`src` klasörü içerisinde `firebase.js` dosyası oluşturun ve kendi Firebase projenize ait yapılandırma bilgilerini ekleyin:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

### 4. Uygulamayı Başlatın

```bash
npm run dev
```

Uygulama çalıştıktan sonra terminalde görüntülenen yerel adresi (genellikle `http://localhost:5173`) tarayıcınızda açarak projeyi kullanmaya başlayabilirsiniz.

---

## 📄 Lisans

Bu proje eğitim ve kişisel kullanım amacıyla geliştirilmiştir.

Keyifli seyirler! 🍿🎬
