# Cyber E-Ticaret Projesi

Cyber E-Ticaret, React ile Vite kullanılarak geliştirilmiş bir e-ticaret platformudur. Responsive tasarım ilkeleri benimsenerek kullanıcı dostu bir arayüz sunmaktadır. Proje, API ile gelen verileri ürün kartlarına çevirip listelemekte, kullanıcıların çeşitli işlemleri gerçekleştirmesine olanak tanımaktadır.

## Özellikler

- Ürünleri listeleme
- Ürünleri filtreleme ve sıralama
- Sepete ekleme ve çıkartma
- Sepette ürün sayısını artırma
- Birden fazla Adres bilgisi ekleme ve güncelleme
- Ödeme işlemleri
- Sepet ve adres işlemlerinin eşzamanlı olarak uzak sunucuya gönderilmesi

## Kullanılan Teknolojiler

- **Frontend**: React.js, HTML, CSS
- **Dinamik Sayfa Yönlendirme**: React Router DOM
- **React Hooks**: Fonksiyonel bileşenlerde state ve yan etkileri yönetmek için kullanılır. Özellikle useState, useEffect gibi hook'lar, bileşenlerin yaşam döngüsünü ve durumunu yönetmek için önemli bir rol oynar.
- **API İletişimi**: Axios
- **Veri Yönetimi**: json-server
- **Alert Yönetimi**: react-custom-alert
- **State Yönetimi**: Context Api

## Kurulum

1. Repo'yu dizininize kopyalayın:
 *  ```git clone https://github.com/Emincurmen/Cyber-Ecommerce.git ```
2. Proje dizinine gidin
  * ```cd Cyber-Ecommerce```

 3.gerekli paketleri yükleyin
 * ```npm install```
 * ```npm install axios```
 * ```npm install react-router-dom```
 * ```npm install react-custom-alert```
 * ```npm install json-server```

4.Projeyi başlatın
 * ```npm run dev```
 * ```npx json-server db.json```


