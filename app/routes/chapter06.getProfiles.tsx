import { useState, useEffect } from "react";

export default function GetProfiles() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // เพิ่มตัวแปรสำหรับจัดการข้อผิดพลาด

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/getProfiles');
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message); // ตั้งค่าข้อผิดพลาดหากมี
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="m-5 p-5">Loading...</p>;
    }

    if (error) {
        return <p className="m-5 p-5 text-red-500">Error: {error}</p>; // แสดงข้อผิดพลาดหากมี
    }

    if (!data) {
        return <p className="m-5 p-5">No data available.</p>; // จัดการกรณีที่ไม่มีข้อมูล
    }

    return (
        <div className="m-5 p-5">
            <h1 className="text-2xl font-bold">Welcome :</h1>
            <div>
                {data.profileImageUrl ? (
                    <img
                    src={`http://localhost:3001${data.profileImageUrl}`}
                    alt="Profile"
                    className="w-32 h-32 object-cover rounded-full"
                />
                ) : (
                    <p>No profile image available.</p> // แสดงข้อความหากไม่มีรูปภาพ
                )}
                <p><strong>First Name:</strong> {data.fname}</p>
                <p><strong>Last Name:</strong> {data.lname}</p>
                <p><strong>Major:</strong> {data.major}</p>
            </div>
        </div>
    );
}
