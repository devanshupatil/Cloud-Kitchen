import React from 'react';
import { Phone, MessageCircle, Pizza, Sandwich, Rotate3D as Potato } from 'lucide-react';
import frenchFries from '../assets/fried-potatoes.png' 
import vegCheesePizzaMini from '../assets/veg-cheese-pizaa-mini.jpeg'
import FrenchFriesPeriPeri from '../assets/FrenchFriesPeri-Peri.jpg'
import periPeriSandwich from '../assets/peri-peri-Sandwich.jpeg'
import कॉर्न_चीज_सँडविच from '../assets/कॉर्न चीज सँडविच.jpeg'
import पनीर_चीज_पिझ्झा_मध्यम from '../assets/पनीर चीज पिझ्झा (मध्यम).jpeg'
import पनीर_चीज_पिझ्झा_मिनी from '../assets/पनीर चीज पिझ्झा (मिनी).jpeg'
import पनीर_चीज_सँडविच from '../assets/पनीर चीज सँडविच.jpeg'
import व्हेज_चीज_पिझ्झा_मध्यम from '../assets/व्हेज चीज पिझ्झा (मध्यम).jpg'
import व्हेज_चीज_सँडविच from '../assets/व्हेज चीज सँडविच.jpeg'



function HomePage() {
    const pizzas = [
        {
            name: "व्हेज चीज पिझ्झा (मिनी)",
            description: "ताजे मोझारेला, तुळस, चेरी टोमॅटो, ऑलिव्ह ऑइल",
            price: "₹80",
            image: vegCheesePizzaMini,
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "पनियर चीज पिझ्झा (मिनी)",
            description: "ताजे मोझारेला, पनीर, तुळस",
            price: "₹100",
            image: पनीर_चीज_पिझ्झा_मिनी,
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "व्हेज चीज पिझ्झा (मध्यम)",
            description: "डबल पीपरोनी, एक्सट्रा चीज, इटल रस",
            price: "₹120",
            image: व्हेज_चीज_पिझ्झा_मध्यम,
            icon: <Pizza className="w-6 h-6" />
        },
        {
            name: "पनीर चीज पिझ्झा (मध्यम)",
            description: "डबल पीपरोनी, एक्सट्रा चीज, इटल रस",
            price: "₹150",
            image: पनीर_चीज_पिझ्झा_मध्यम,
            icon: <Pizza className="w-6 h-6" />
        },
    ];

    const sandwiches = [
        {
            name: "व्हेज चीज सैंडविच",
            description: "तरक, बैकोन, लेट्स, टोमाटो, मायो",
            price: "₹40",
            image: व्हेज_चीज_सँडविच,
            icon: <Sandwich className="w-6 h-6" />
        },
        {
            name: "पेरी-पेरी सैंडविच",
            description: "ग्रील्ड भाज्या, हुमस, फेटा चीज",
            price: "₹50",
            image: periPeriSandwich,
            icon: <Sandwich className="w-6 h-6" />
        },
        {
            name: "पनीर चीज सैंडविच",
            description: "ग्राइल्ड चिकन, पेस्टो, मोज़रा, टोमाटो",
            price: "₹60",
            image: पनीर_चीज_सँडविच,
            icon: <Sandwich className="w-6 h-6" />
        },
        {
            name: "कॉर्न चीज सँडविच",
            description: "ग्राइल्ड चिकन, पेस्टो, मोज़रा, टोमाटो",
            price: "₹60",
            image: कॉर्न_चीज_सँडविच,
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
            name: "फ्रेंच फ्राईज (सॉल्ल्टेड)",
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
                    <p className="text-xl opacity-90">पिझ्झा • सैंडविचेस • फ्रेंच फ्राईज</p>
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