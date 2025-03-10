import React from 'react';
import { Phone, MessageCircle, Pizza, Sandwich, Rotate3D as Potato } from 'lucide-react';

// type MenuItem = {
//     name: string;
//     description: string;
//     price: number;
//     image: string;
//     icon: React.ReactNode;
// };

function HomePage() {
    const pizzas = [
        {
            name: "Paneer Cheese Pizza (Mini)",
            description: "Fresh mozzarella, paneer, basil",
            price: "₹80",
            image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800",
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "Veg Cheese Pizza (Mini)",
            description: "Fresh mozzarella, basil, cherry tomatoes, olive oil",
            price: "₹80",
            image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800",
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "Panieer Cheese Pizza (Medium)",
            description: "Grilled chicken, red onions, BBQ sauce, cilantro",
            price: "₹120",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800",
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "Veg Cheese Pizza (Medium)",
            description: "Double pepperoni, extra cheese, Italian herbs",
            price: "₹120",
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800",
            icon: <Pizza className="w-6 h-6" />
        }
    ];

    const sandwiches = [
        {
            name: "Veg Cheese Sandwich",
            description: "Turkey, bacon, lettuce, tomato, mayo",
            price: "₹40",
            image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800",
            icon: <Sandwich className="w-6 h-6" />
        },
        {
            name: "Paneer Cheese Sandwich",
            description: "Grilled chicken, pesto, mozzarella, tomatoes",
            price: "₹50",
            image: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?auto=format&fit=crop&w=800",
            icon: <Sandwich className="w-6 h-6" />
        },
        {
            name: "Peri-Peri Sandwich",
            description: "Grilled vegetables, hummus, feta cheese",
            price: "₹50",
            image: "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&w=800",
            icon: <Sandwich className="w-6 h-6" />
        }
    ];

    const fries = [
        {
            name: "French Fries (Peri-Peri)",
            description: "Crispy golden fries with sea salt",
            price: "₹50",
            image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=800",
            icon: <Potato className="w-6 h-6" />
        },
        {
            name: "French Fries (Salted)",
            description: "Cheese sauce, bacon bits, green onions",
            price: "₹50",
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800",
            icon: <Potato className="w-6 h-6" />
        }
    ];

    const MenuSection = ({ title, items }) => (
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                                {item.icon}
                                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{item.description}</p>
                            <p className="text-2xl font-bold text-orange-600">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Cloud Kitchen</h1>
                    <p className="text-xl opacity-90">Pizza • Sandwiches • Fries</p>
                </div>
            </div>

            {/* Menu Section */}
            <div className="container mx-auto px-4 py-12">
                <MenuSection title="Pizzas" items={pizzas} />
                <MenuSection title="Sandwiches" items={sandwiches} />
                <MenuSection title="French Fries" items={fries} />

                {/* Contact Buttons */}
                <div className="flex justify-center gap-6 mt-12">
                    <a
                        href="tel:+7397927021"
                        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        Call Now
                    </a>
                    <a
                        href="https://wa.me/7397927021"
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;