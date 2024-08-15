import { useParams, useNavigate } from "@remix-run/react";
import { cards } from "./data"; 
import AppMenu from "./template/menu"; // นำเข้าคอมโพเนนต์ AppMenu

export default function GetCard() {
  const { cardId } = useParams<{ cardId: string }>();
  const id = Number(cardId);
  const navigate = useNavigate(); 

  const card = cards.find((card) => card.id === id);

  if (!card) {
    return <p>Card not found</p>;
  }

  return (
    <div>
      <AppMenu /> {/* แสดงเมนูที่นี่ */}
      <div className="p-4 bg-gray-800 text-white rounded mt-4">
        <h2 className="text-xl font-bold mb-2">{card.name}</h2>
        <p><strong>Biography:</strong> {card.biog}</p>
        <p><strong>Username:</strong> {card.userName}</p>
        <p><strong>Created At:</strong> {card.createdAt}</p>
        <img 
          src={card.bgProf} 
          alt={`${card.name} background`} 
          className="w-full h-32 object-cover mt-4" 
        />
        <img 
          src={card.userIcon} 
          alt={`${card.name} icon`} 
          className="w-16 h-16 rounded-full mt-2" 
        />
        <button 
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
