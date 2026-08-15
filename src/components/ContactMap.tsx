"use client";

import { useEffect, useRef } from "react";

const LOCATIONS = [
    { title: "UAE Head Office", lat: 25.1843, lng: 55.2638, addr: "TROT SOLUTIONS EQUIPMENT AND MACHINERY REPAIRING LLC-FZ<br/>1307, ETA, Al Manara Stars Tower,<br/>Burj Khalifa District, Business Bay<br/>Dubai- UAE" },
    { title: "UAE Warehouse", lat: 24.9961, lng: 55.0645, addr: "Trot Global LLC FZCO<br/>RA08 SA02<br/>JAFZA, Dubai" },
    { title: "Oman Office", lat: 23.6190, lng: 58.4682, addr: "TROT SOLUTIONS INC LLC<br/>302, Beachone, Way 2601<br/>Qurum, Muscat<br/>Sultanate of Oman" },
    { title: "Malaysia Office", lat: 4.5975, lng: 101.0901, addr: "TROT ENGINEERING SDN. BHD<br/>No 58, Jalan Rishah Indah 2, Taman<br/>Desa Rishah, 30100, Ipoh Perak" },
    { title: "India Office", lat: 19.0182, lng: 73.0412, addr: "TROT SOLUTIONS LLC<br/>A-103, Shelton Sapphire<br/>Sector 15, CBD Belapur<br/>Navi Mumbai-400614<br/>Maharashtra-India" },
    { title: "Mauritius Office", lat: -20.3197, lng: 57.5750, addr: "TROT SAMLO<br/>La Pipe Midlands<br/>Republic of Mauritius" },
    { title: "Sri Lanka Office", lat: 6.9171, lng: 79.8803, addr: "TROT LANKA (PVT) LTD<br/>No 5th Floor, No 4A<br/>Ohlums Place<br/>Colombo 08<br/>Sri Lanka" },
    { title: "Starboard Port Service", lat: 17.0151, lng: 54.0924, addr: "Starboard Port Service LLC<br/>Slalh Alwsta, Salalah<br/>Dhofar Governorate<br/>Sultanate of Oman" }
];

function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function loadCSS(href: string) {
    if (document.querySelector(`link[href="${href}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}

export default function ContactMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<any>(null);

    useEffect(() => {
        const initMap = async () => {
            loadCSS("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");
            await loadScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js");

            const L = (window as any).L;
            if (!L || !mapRef.current) return;

            // Destroy previous instance if it exists
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }

            const map = L.map(mapRef.current).setView([10.0, 75.0], 4);
            mapInstanceRef.current = map;

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 19,
                attribution: "© Trot Solutions",
            }).addTo(map);

            LOCATIONS.forEach((loc) => {
                const popupContent = `<div style="font-size:14px;font-weight:600;margin-bottom:5px;color:#000">${loc.title}</div><div style="font-size:13px;color:#555;line-height:1.4">${loc.addr}</div>`;
                L.marker([loc.lat, loc.lng]).addTo(map).bindPopup(popupContent);
            });
        };

        initMap();

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, []);

    return (
        <div
            ref={mapRef}
            id="contact-map"
            className="google-map__one"
            style={{ width: "100%", height: "500px", zIndex: 1 }}
        />
    );
}
