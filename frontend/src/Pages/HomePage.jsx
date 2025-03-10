import React from 'react';
import { Phone, MessageCircle, Pizza, Sandwich, Rotate3D as Potato } from 'lucide-react';
import frenchFries from '../assets/fried-potatoes.png' 
import panieerPizza from '../assets/WhatsApp Image 2025-03-10 at 17.21.55(1).jpeg'
import cheesePizza from '../assets/cheesePizza.jpg'
import vegCheeseSandwich from '../assets/VegCheeseSandwich.jpg'
import FrenchFriesPeriPeri from '../assets/FrenchFriesPeri-Peri.jpg'

function HomePage() {
    const pizzas = [
        {
            name: "व्हेज चीज पिझ्झा (मिनी)",
            description: "ताजे मोझारेला, तुळस, चेरी टोमॅटो, ऑलिव्ह ऑइल",
            price: "₹80",
            image: cheesePizza,
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "पनियर चीज पिझ्झा (मिनी)",
            description: "ताजे मोझारेला, पनीर, तुळस",
            price: "₹100",
            image: panieerPizza,
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "व्हेज चीज पिझ्झा (मध्यम)",
            description: "डबल पीपरोनी, एक्सट्रा चीज, इटल रस",
            price: "₹120",
            image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800",
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "पनीर चीज पिझ्झा (मध्यम)",
            description: "डबल पीपरोनी, एक्सट्रा चीज, इटल रस",
            price: "₹140",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800",
            icon: <Pizza className="w-6 h-6" />
        },
    ];

    const sandwiches = [
        {
            name: "व्हेज चीज सैंडविच",
            description: "तरक, बैकोन, लेट्स, टोमाटो, मायो",
            price: "₹40",
            image: vegCheeseSandwich,
            icon: <Sandwich className="w-6 h-6" />
        },
        {
            name: "पेरी-पेरी सैंडविच",
            description: "ग्रील्ड भाज्या, हुमस, फेटा चीज",
            price: "₹50",
            image: "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&w=800",
            icon: <Sandwich className="w-6 h-6" />
        },
        {
            name: "पनीर चीज सैंडविच",
            description: "ग्राइल्ड चिकन, पेस्टो, मोज़रा, टोमाटो",
            price: "₹60",
            image: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?auto=format&fit=crop&w=800",
            icon: <Sandwich className="w-6 h-6" />
        },
    ];

    const fries = [
        {
            name: "फ्रेंच फ्राईज (पेरी-पेरी)",
            description: "क्रिसपी गोल्डन फ्रेंच फ्राईज वाला सी",
            price: "₹50",
            image: FrenchFriesPeriPeri,
            icon: <img src={frenchFries} alt="French Fries" className="w-6 h-6" />,
        },
        {
            name: "फ्रेंच फ्राईज (सैल्ट)",
            description: "चीज सैँट, बैकोन बिट्स, ग्रीन ओनियोन्स",
            price: "₹50",
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800",
            icon: <img src={frenchFries} alt="French Fries" className="w-6 h-6" />,
        }
    ];

    const MenuSection = ({ title, items }) => (
        <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">{title} </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div key={index} className="cursor-pointer bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                        <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                                {item.icon}
                                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                            </div>
                            {/* <p className="text-gray-600 mb-4">{item.description}</p> */}
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
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">क्लाउड किचन</h1>
                    <p className="text-xl opacity-90">पिझ्झा • सैंडविचेस • फ्रीस</p>
                </div>
            </div>

            {/* Menu Section */}
            <div className="container mx-auto px-4 py-12">
                <MenuSection title={<>पिझ्झा <Pizza className="w-6 h-6" /></>} items={pizzas} />
                <MenuSection title={<>सैंडविच <Sandwich className="w-6 h-6" /></>} items={sandwiches} />
                <MenuSection title={<>फ्रेंच फ्राईज <img src={frenchFries} alt="French Fries" className="w-6 h-6" /></>} items={fries} />

                {/* Contact Buttons */}
                <div className="flex justify-center gap-6 mt-12">
                    <a
                        href="tel:+917397927021"
                        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                        <Phone className="w-5 h-5" />
                        Call Now
                    </a>
                    <a
                        href="https://wa.me/+917397927021"
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