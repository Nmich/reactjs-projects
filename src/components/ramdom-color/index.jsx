"use client";
import { useEffect, useState } from "react";

export default function RandomColor() {

    const [typeOfcolor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        // try do replace by regex rule
        const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
if(typeOfcolor === 'rgb') handleCreateRandomRgbColor
else handleCreateRandomHexColor
    }, [typeOfcolor]);

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: color,
                color: "white"
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfcolor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Create Random Color</button>
            <div style={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px',
                flexDirection: 'column',
                gap: '20px'
            }}>
                <h3>{typeOfcolor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );
}