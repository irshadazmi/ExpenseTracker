--- This table stores information about roles, such as their name and description.
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL UNIQUE, 
    description VARCHAR(255)
);

-- This table stores information about users, such as their name, contact details, and employment status.
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    role_id INTEGER NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles (id)
);

--- This table stores information about categories, such as their name and description.
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) UNIQUE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO categories (name) VALUES
-- 🛒 Essentials
('Groceries'),
('Supermarket'),
('Fresh Market'),

-- 🍽️ Food & Dining
('Dining Out'),
('Takeaway / Delivery'),
('Coffee & Snacks'),

-- 🚗 Transportation
('Fuel / Gas'),
('Public Transport'),
('Taxi & Ride Share'),
('Car Maintenance'),
('Parking & Tolls'),

-- 🏠 Housing & Utilities
('Rent / Mortgage'),
('Electricity'),
('Water'),
('Gas'),
('Internet'),
('Mobile Phone'),

-- 🎓 Education & Kids
('School Fees'),
('Kids Activities'),

-- 🏥 Health & Wellness
('Medical / Doctor'),
('Pharmacy / Medicine'),
('Haircuts & Salon'),
('Fitness & Wellness'),

-- 👗 Personal & Home
('Clothing & Shoes'),
('Home Maintenance'),
('Cleaning Supplies'),
('Furniture & Decor'),

-- 📺 Entertainment
('Cable / Streaming'),
('Movies & Entertainment'),
('Family Outings'),
('Books & Magazines'),

-- 🎁 Giving & Fees
('Gifts'),
('Donations'),
('Bank Fees'),

-- 🧩 Other
('Miscellaneous');

--- This table stores information about expenses, such as their description, amount, category, and user.
CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    amount INTEGER NOT NULL,
    category_id INTEGER NOT NULL REFERENCES categories(id),
    user_id INTEGER NOT NULL REFERENCES users(id),
    expense_date TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO expenses (description, amount, category_id, user_id, expense_date)
VALUES
('Weekly groceries from local store', 2200, 1, 1, CURRENT_DATE - INTERVAL '1 day'),
('Monthly supermarket bulk buy', 4500, 2, 1, CURRENT_DATE - INTERVAL '3 days'),
('Fresh produce from market', 800, 3, 1, CURRENT_DATE - INTERVAL '5 days'),
('Dinner at Italian restaurant', 1200, 4, 1, CURRENT_DATE - INTERVAL '7 days'),
('Pizza delivery night', 950, 5, 1, CURRENT_DATE - INTERVAL '9 days'),
('Morning coffee and croissant', 250, 6, 1, CURRENT_DATE - INTERVAL '11 days'),
('Fuel refill for car', 3200, 7, 1, CURRENT_DATE - INTERVAL '13 days'),
('Metro card recharge', 600, 8, 1, CURRENT_DATE - INTERVAL '15 days'),
('Uber to airport', 850, 9, 1, CURRENT_DATE - INTERVAL '17 days'),
('Car oil change and service', 2800, 10, 1, CURRENT_DATE - INTERVAL '19 days'),
('Highway toll charges', 300, 11, 1, CURRENT_DATE - INTERVAL '21 days'),
('Monthly rent payment', 18000, 12, 1, CURRENT_DATE - INTERVAL '23 days'),
('Electricity bill', 2200, 13, 1, CURRENT_DATE - INTERVAL '25 days'),
('Water bill', 600, 14, 1, CURRENT_DATE - INTERVAL '27 days'),
('Gas cylinder refill', 950, 15, 1, CURRENT_DATE - INTERVAL '29 days'),
('Wi-Fi subscription', 1200, 16, 1, CURRENT_DATE - INTERVAL '31 days'),
('Mobile recharge', 499, 17, 1, CURRENT_DATE - INTERVAL '33 days'),
('Quarterly school fees', 15000, 18, 1, CURRENT_DATE - INTERVAL '35 days'),
('Dance class for kids', 1800, 19, 1, CURRENT_DATE - INTERVAL '37 days'),
('Doctor consultation', 700, 20, 1, CURRENT_DATE - INTERVAL '39 days'),
('Pharmacy purchase', 350, 21, 1, CURRENT_DATE - INTERVAL '41 days'),
('Salon haircut', 600, 22, 1, CURRENT_DATE - INTERVAL '43 days'),
('Gym membership renewal', 2500, 23, 1, CURRENT_DATE - INTERVAL '45 days'),
('New shoes for work', 1800, 24, 1, CURRENT_DATE - INTERVAL '47 days'),
('Plumbing repair', 2200, 25, 1, CURRENT_DATE - INTERVAL '49 days'),
('Cleaning supplies restock', 450, 26, 1, CURRENT_DATE - INTERVAL '51 days'),
('New sofa purchase', 12000, 27, 1, CURRENT_DATE - INTERVAL '53 days'),
('Netflix subscription', 649, 28, 1, CURRENT_DATE - INTERVAL '55 days'),
('Movie night with family', 1200, 29, 1, CURRENT_DATE - INTERVAL '57 days'),
('Zoo visit with kids', 1800, 30, 1, CURRENT_DATE - INTERVAL '59 days'),
('Bookstore haul', 950, 31, 1, CURRENT_DATE - INTERVAL '61 days'),
('Birthday gift for friend', 1500, 32, 1, CURRENT_DATE - INTERVAL '63 days'),
('Charity donation', 2000, 33, 1, CURRENT_DATE - INTERVAL '65 days'),
('ATM withdrawal fee', 25, 34, 1, CURRENT_DATE - INTERVAL '67 days'),
('Uncategorized expense', 500, 35, 1, CURRENT_DATE - INTERVAL '69 days'),
-- Repeat with varied descriptions and dates
('Weekly groceries', 2100, 1, 1, CURRENT_DATE - INTERVAL '71 days'),
('Supermarket snacks', 750, 2, 1, CURRENT_DATE - INTERVAL '73 days'),
('Fresh fruit basket', 650, 3, 1, CURRENT_DATE - INTERVAL '75 days'),
('Lunch with colleagues', 900, 4, 1, CURRENT_DATE - INTERVAL '77 days'),
('Burger delivery', 550, 5, 1, CURRENT_DATE - INTERVAL '79 days'),
('Evening tea and samosa', 180, 6, 1, CURRENT_DATE - INTERVAL '81 days'),
('Fuel top-up', 3000, 7, 1, CURRENT_DATE - INTERVAL '83 days'),
('Bus fare', 100, 8, 1, CURRENT_DATE - INTERVAL '85 days'),
('Cab to mall', 400, 9, 1, CURRENT_DATE - INTERVAL '87 days'),
('Brake pad replacement', 3500, 10, 1, CURRENT_DATE - INTERVAL '89 days'),
('Parking at event', 150, 11, 1, CURRENT_DATE - INTERVAL '91 days'),
('Rent paid', 18000, 12, 1, CURRENT_DATE - INTERVAL '93 days'),
('Electricity charges', 2100, 13, 1, CURRENT_DATE - INTERVAL '95 days'),
('Water usage bill', 550, 14, 1, CURRENT_DATE - INTERVAL '97 days'),
('Gas refill', 900, 15, 1, CURRENT_DATE - INTERVAL '99 days'),
('Internet bill', 1100, 16, 1, CURRENT_DATE - INTERVAL '101 days'),
('Mobile top-up', 399, 17, 1, CURRENT_DATE - INTERVAL '103 days'),
('School books', 2500, 18, 1, CURRENT_DATE - INTERVAL '105 days'),
('Kids swimming class', 1200, 19, 1, CURRENT_DATE - INTERVAL '107 days'),
('Dental checkup', 850, 20, 1, CURRENT_DATE - INTERVAL '109 days'),
('Cough syrup', 300, 21, 1, CURRENT_DATE - INTERVAL '111 days'),
('Hair spa', 1200, 22, 1, CURRENT_DATE - INTERVAL '113 days'),
('Yoga subscription', 1800, 23, 1, CURRENT_DATE - INTERVAL '115 days'),
('Winter jacket', 2200, 24, 1, CURRENT_DATE - INTERVAL '117 days'),
('AC servicing', 2500, 25, 1, CURRENT_DATE - INTERVAL '119 days'),
('Detergent and cleaner', 400, 26, 1, CURRENT_DATE - INTERVAL '121 days'),
('Curtains and cushions', 3000, 27, 1, CURRENT_DATE - INTERVAL '123 days'),
('Prime Video renewal', 1499, 28, 1, CURRENT_DATE - INTERVAL '125 days'),
('Concert tickets', 3500, 29, 1, CURRENT_DATE - INTERVAL '127 days'),
('Theme park visit', 2800, 30, 1, CURRENT_DATE - INTERVAL '129 days'),
('Magazine subscription', 499, 31, 1, CURRENT_DATE - INTERVAL '131 days'),
('Anniversary gift', 2000, 32, 1, CURRENT_DATE - INTERVAL '133 days'),
('NGO donation', 1000, 33, 1, CURRENT_DATE - INTERVAL '135 days'),
('Bank service charge', 50, 34, 1, CURRENT_DATE - INTERVAL '137 days'),
('Misc. expense', 700, 35, 1, CURRENT_DATE - INTERVAL '139 days');

--- This table stores information about audit logs, such as the action, user, target table, and target ID.
CREATE TABLE audit_logs (
    id SERIAL PRIMARY KEY,
    action VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    target_table VARCHAR(255) NOT NULL,
    target_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--- 6️⃣ `tokens`
CREATE TABLE tokens (
    id SERIAL PRIMARY KEY,
    token VARCHAR(255) NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);