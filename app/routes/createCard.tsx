import { useState } from "react";
import AppMenu from "./template/menu";

let nextId = 0;



export default function CreateCard() {


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [type, setType] = useState('');
    const [indic, setIndic] = useState('');
    const [use, setUse] = useState('');
    const [producer, setProducer] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState('');
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleClickAdd = (na: string, ad: string, ty: string, ind: string, use: string, pro: string, ph: string, img: string) => {
        const phoneNumber = parseFloat(ph);

        if (isNaN(phoneNumber)) {
            alert('ใส่เลขโทรศัพท์เป็นตัวเลขเท่านั้นนะเดี๋ยวไม่ติด');
            return;
        }

        setCards([
            ...cards,
            {
                id: nextId++,
                name: na,
                address: ad,
                type: ty,
                use: use,
                indic: ind,
                producer: pro, 
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
        <div className="pt-20">
            <h1 className="text-2xl font-bold mb-4">เมนูสมุนไพร</h1>
            <label className="block mb-2">ชื่อสมุนไพร</label>
            <input
                name="cName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border p-2 mb-4 w-full rounded"
                type="text"
            />
            <label className="block mb-2">รายละเอียด</label>
            <textarea
                name="cAddress"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border p-2 mb-4 w-full rounded"
            />
            
            <div className="sm:col-span-3">
          <label htmlFor="cType" className="block text-sm font-medium leading-6 text-gray-900">ประเภทของสมุนไพร</label>
          <div className="mt-2">
            <select id="cType" name="cType" autoComplete="Type" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
              <option>สมุนไพร</option>
              <option>ยา</option>
              <option>อื่น</option>
            </select>
          </div>
        </div>

             <label className="block pt-8">สรรพคุณ</label>
            <textarea
                name="cIndic"
                value={indic}
                onChange={(e) => setIndic(e.target.value)}
                className="border p-2 mb-4 w-full rounded"
            />
            <legend className="block mb-2">การนำไปใช้</legend>
              <div className="mt-6 space-y-6">
              <div className="flex items-center mb-4">


    <input
         id="default-radio-1" 
         type="radio" value={use} 
         name="useout" 
         className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="useout" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ใช้ภายนอก</label>
</div> 
<div className="flex items-center">
    <input 
     id="default-radio-2"
     type="radio" value={use}
      name="usein" 
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="usein" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ใช้ภายใน</label>
</div>
<input 
    checked id="default-radio-3"
     type="radio" value={use}
      name="useall" 
      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label htmlFor="useall" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ใช้ทั้งภายในและภายนอก</label>
</div>


            <label className="block mb-2">ผู้ผลิต</label>
            <input
                name="cProducer"
                value={producer}
                onChange={(e) => setProducer(e.target.value)}
                className="border p-2 mb-4 w-full rounded"
                type="text"
            />
            <label className="block mb-2">ติดต่อผู้ผลิต:</label>
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
                onClick={() => handleClickAdd(name, address, type, indic, use, producer, phone, image)}
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
                บันทึกข้อมูล
            </button>
            <h1 className="text-2xl font-bold mt-8 text-center">ข้อมูลสมุนไพร</h1>
            {cards.length > 0 ? (
                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full bg-white divide-y divide-gray-200 rounded-lg shadow-md">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อสมุนไพร</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รายละเอียดสมุนไพร</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ประเภทของสมุนไพร</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">สรรพคุณ</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">การนำไปใช้</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อผู้ผลิต</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ติดต่อผู้ผลิต</th>
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
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.indic}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.use}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{card.producer}</td>
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
                <p className="mt-4 text-center">ไม่มีข้อมูลสมุนไพร</p>
            )}
            {selectedCard && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold mb-4">ข้อมูลสมุนไพร</h2>
                        <p><strong>ID:</strong> {selectedCard.id}</p>
                        <p><strong>ชื่อสมุนไพร:</strong> {selectedCard.name}</p>
                        <p><strong>รายละเอียดสมุนไพร:</strong> {selectedCard.address}</p>
                        <p><strong>ประเภทของสมุนไพร:</strong> {selectedCard.type}</p>
                        <p><strong>สรรพคุณ:</strong> {selectedCard.indic}</p>
                        <p><strong>การนำไปใช้:</strong> {selectedCard.use}</p>
                        <p><strong>ชื่อผู้ผลิต:</strong> {selectedCard.producer}</p>
                        <p><strong>ติดต่อผู้ผลิต:</strong> {selectedCard.phone}</p>
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
