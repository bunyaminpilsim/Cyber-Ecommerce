# Cyber E-Ticaret Projesi

Cyber E-Ticaret, React ile Vite kullanılarak geliştirilmiş bir e-ticaret platformudur. Responsive tasarım ilkeleri benimsenerek kullanıcı dostu bir arayüz sunmaktadır. Proje, API ile gelen verileri ürün kartlarına çevirip listelemekte, kullanıcıların çeşitli işlemleri gerçekleştirmesine olanak tanımaktadır.

## Özellikler

- Ürünleri listeleme
- Ürünleri filtreleme ve sıralama
- Sepete ekleme ve çıkartma
- Sepette ürün miktarını yönetme
- Birden fazla adres bilgisi ekleme ve güncelleme
- Ödeme işlemleri
- Sepet ve adres işlemlerinin eş zamanlı olarak uzak sunucuya gönderilmesi

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

 3. Gerekli paketleri yükleyin
 * ```npm install```
 * ```npm install axios```
 * ```npm install react-router-dom```
 * ```npm install react-custom-alert```
 * ```npm install json-server```

4. Projeyi başlatın
 * ```npm run dev```
 * ```npx json-server db.json```

# Cyber E-Commerce Project

Cyber E-Commerce is an e-commerce platform developed using React with Vite. It adopts responsive design principles to provide a user-friendly interface. The project converts data received from the API into product cards and lists them, allowing users to perform various operations.

## Features

- Listing products
- Filtering and sorting products
- Adding and removing items from the cart
- Managing the quantity of items in the cart
- Adding and updating multiple address information
- Payment processing
- Simultaneous sending of cart and address operations to a remote server

## Technologies Used

- **Frontend**: React.js, HTML, CSS
- **Dynamic Page Routing**: React Router DOM
- **React Hooks**: Use to manage state and side effects in functional components. Hooks like useState and useEffect play a significant role in managing the lifecycle and state of components.
- **API Communication**: Axios
- **Data Management**: json-server
- **Alert Management**: react-custom-alert
- **State Management**: Context API

## Installation

1. Clone the repository to your directory:
   *  ```git clone https://github.com/Emincurmen/Cyber-Ecommerce.git ```
2. Navigate to the project directory:
   * ```cd Cyber-Ecommerce```

3. Install the necessary packages:
   * ```npm install```
   * ```npm install axios```
   * ```npm install react-router-dom```
   * ```npm install react-custom-alert```
   * ```npm install json-server```

4. Start the project:
   * ```npm run dev```
   * ```npx json-server db.json```
