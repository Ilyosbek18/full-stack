-- Dern-Market uchun boshlang'ich ma'lumotlar

-- Admin foydalanuvchi qo'shish
INSERT INTO users (first_name, last_name, email, password_hash, role) VALUES
('Admin', 'User', 'admin@dern-market.uz', '$2b$10$hashedpassword', 'admin'),
('Ali', 'Valiyev', 'ali@example.com', '$2b$10$hashedpassword', 'customer'),
('Malika', 'Karimova', 'malika@example.com', '$2b$10$hashedpassword', 'customer'),
('Bobur', 'Toshmatov', 'bobur@example.com', '$2b$10$hashedpassword', 'customer');

-- Mahsulotlar qo'shish
INSERT INTO products (name, description, price, category, stock_quantity, image_url) VALUES
('Samsung Galaxy S24', 'Eng so''nggi Samsung smartfoni, 256GB xotira', 12000000.00, 'Elektronika', 15, '/images/samsung-s24.jpg'),
('Lenovo ThinkPad X1', 'Professional ishlar uchun noutbuk, Intel i7', 18000000.00, 'Kompyuter', 8, '/images/lenovo-thinkpad.jpg'),
('Paxta Ko''ylak', 'Yuqori sifatli paxta ko''ylak, turli ranglar', 250000.00, 'Kiyim', 25, '/images/shirt.jpg'),
('Dasturlash Asoslari', 'JavaScript va Python dasturlash kitobi', 150000.00, 'Kitob', 12, '/images/programming-book.jpg'),
('Sony WH-1000XM5', 'Shovqinni bekor qiluvchi quloqchin', 4500000.00, 'Elektronika', 6, '/images/sony-headphones.jpg'),
('Apple Watch Series 9', 'Aqlli soat eng so''nggi versiyasi', 6000000.00, 'Elektronika', 10, '/images/apple-watch.jpg'),
('Dell Monitor 27"', '4K Ultra HD monitor professional ishlar uchun', 3500000.00, 'Kompyuter', 5, '/images/dell-monitor.jpg'),
('Nike Krossovka', 'Sport krossovkalari, yuqori sifat', 800000.00, 'Kiyim', 20, '/images/nike-shoes.jpg');

-- Namuna buyurtmalar
INSERT INTO orders (user_id, total_amount, status, payment_method, payment_status, shipping_address) VALUES
(2, 12000000.00, 'pending', 'online', 'completed', 'Toshkent sh., Yunusobod t., 1-uy'),
(3, 500000.00, 'processing', 'cash', 'pending', 'Samarqand sh., Registon ko''chasi, 15-uy'),
(4, 6000000.00, 'delivered', 'online', 'completed', 'Buxoro sh., Mustaqillik ko''chasi, 8-uy');

-- Buyurtma elementlari
INSERT INTO order_items (order_id, product_id, quantity, unit_price, total_price) VALUES
(1, 1, 1, 12000000.00, 12000000.00),
(2, 3, 2, 250000.00, 500000.00),
(3, 6, 1, 6000000.00, 6000000.00);

-- To'lovlar
INSERT INTO payments (order_id, amount, payment_method, payment_status, transaction_id) VALUES
(1, 12000000.00, 'stripe', 'completed', 'pi_1234567890'),
(2, 500000.00, 'cash', 'pending', NULL),
(3, 6000000.00, 'stripe', 'completed', 'pi_0987654321');
