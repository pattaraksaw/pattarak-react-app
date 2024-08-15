import { useState } from "react";
import AppMenu from "./template/menu";

let nextId = 0;

export default function CreateCard() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClickAdd = (na: string, ad: string, ph: string, img: string) => {
        const phoneNumber = parseFloat(ph);

        if (isNaN(phoneNumber)) {
            alert('ต้องกรอกเลขโทรศัพท์เป็นตัวเลขเท่านั้นนะ');
            return;
        }

        setCards([
            ...cards,
            {
                id: nextId++,
                name: na,
                address: ad,
                phone: phoneNumber,
                image: img
            }
        ]);
    };

    const handleViewDetails = (card) => {
        setSelectedCard(card);
    };

    const handleCloseDetails = () => {
        setSelectedCard(null);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">เพิ่มข้อมูลนามบัตร</h1>
            <label className="block mb-2">ชื่อ-สกุล:</label>
            <input
                name="cName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mb-4 w-full rounded"
                type="text"
            />
            <label className="block mb-2">ที่อยู่:</label>
            <textarea
                name="cAddress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border p-2 mb-4 w-full rounded"
            />
            <label className="block mb-2">เบอร์โทร:</label>
            <input
                name="cPhone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="border p-2 mb-4 w-full rounded"
            />
            <label className="block mb-2">ใส่ลิ้งค์รูปภาพ:</label>
            <input
                name="cImage"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="border p-2 mb-4 w-full rounded"
            />
            <button
                onClick={() => handleClickAdd(name, address, phone, image)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
                เพิ่มนามบัตร
            </button>
            <h1 className="text-2xl font-bold mt-8 text-center">รายชื่อนามบัตร</h1>
            {cards.length > 0 ? (
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white divide-y divide-gray-200 rounded-lg shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อ-สกุล</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ที่อยู่</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">เบอร์โทร</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รูปภาพ</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ดูรายละเอียด</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {cards.map((card, index) => (
                                <tr key={card.id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white hover:bg-gray-100"}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {card.image ? (
                                            <img src={card.image} alt={card.name} className="w-16 h-16 object-cover rounded-md" />
                                        ) : (
                                            <span>ไม่มีรูปภาพ</span>
                                        )}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
                                        <button onClick={() => handleViewDetails(card)} className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600">
                                            ดูรายละเอียด
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="mt-4 text-center">ไม่มีข้อมูลนามบัตร</p>
            )}
            {selectedCard && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">รายละเอียดนามบัตร</h2>
                        <p><strong>ID:</strong> {selectedCard.id}</p>
                        <p><strong>ชื่อ-สกุล:</strong> {selectedCard.name}</p>
                        <p><strong>ที่อยู่:</strong> {selectedCard.address}</p>
                        <p><strong>เบอร์โทร:</strong> {selectedCard.phone}</p>
                        <p><strong>รูปภาพ:</strong></p>
                        {selectedCard.image ? (
                            <img src={selectedCard.image} alt={selectedCard.name} className="w-32 h-32 object-cover rounded-md" />
                        ) : (
                            <span>ไม่มีรูปภาพ</span>
                        )}
                        <button onClick={handleCloseDetails} className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600">
                            ปิด
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
