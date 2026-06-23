"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import { useSiteData } from "@/sanity/SiteDataProvider";
import { profile as siteInfo } from "@/data/site";

// Ücretsiz, anahtarsız, kartsız koyu harita stili (Carto dark-matter)
const STYLE = "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json";

function lineFeature(points: { lng: number; lat: number }[]) {
  return {
    type: "Feature" as const,
    properties: {},
    geometry: {
      type: "LineString" as const,
      coordinates: points.map((p) => [p.lng, p.lat]),
    },
  };
}

export default function WorldMap() {
  const { visited, upcoming, currentLocation, profile } = useSiteData();
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: STYLE,
      center: [currentLocation.lng, currentLocation.lat],
      zoom: 1.4,
      attributionControl: false,
    });
    mapRef.current = map;

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "bottom-right");
    map.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      "bottom-left"
    );

    map.on("load", () => {
      // 3D küre projeksiyonu + atmosfer
      try {
        map.setProjection({ type: "globe" });
        map.setSky({
          "sky-color": "#0b1020",
          "horizon-color": "#3a2a18",
          "fog-color": "#0c0a09",
          "sky-horizon-blend": 0.5,
          "horizon-fog-blend": 0.6,
          "fog-ground-blend": 0.6,
          "atmosphere-blend": 0.7,
        });
      } catch {
        /* globe desteklenmiyorsa düz harita */
      }

      setReady(true);

      // ---- Gelecek rota (mavi, kesik) — sadece durak varsa ----
      if (upcoming.length > 0) {
        const upcomingPath = [currentLocation, ...upcoming];
        map.addSource("upcoming-line", { type: "geojson", data: lineFeature(upcomingPath) });
        map.addLayer({
          id: "upcoming-line",
          type: "line",
          source: "upcoming-line",
          paint: {
            "line-color": "#38bdf8",
            "line-width": 2.5,
            "line-dasharray": [1.5, 1.5],
            "line-opacity": 0.85,
          },
        });
      }

      // ---- Gittiği şehir noktaları (yeşil) ----
      // Nokta boyutunu büyütmek/küçültmek için width/height değerini değiştir.
      for (const p of visited) {
        const el = document.createElement("div");
        el.style.cssText =
          "width:16px;height:16px;border-radius:9999px;background:#10b981;border:2.5px solid #0c0a09;box-shadow:0 0 10px #10b981;cursor:pointer;";
        new maplibregl.Marker({ element: el })
          .setLngLat([p.lng, p.lat])
          .setPopup(
            new maplibregl.Popup({ offset: 16, closeButton: false }).setHTML(
              `<div style="font-family:sans-serif;color:#1c1917"><strong>${p.city}</strong><br/><span style="font-size:12px">${p.country}</span></div>`
            )
          )
          .addTo(map);
      }

      // ---- Gelecek durak noktaları (mavi, içi boş) ----
      for (const p of upcoming) {
        const el = document.createElement("div");
        el.style.cssText =
          "width:11px;height:11px;border-radius:9999px;background:transparent;border:2px solid #38bdf8;box-shadow:0 0 8px #38bdf8;cursor:pointer;";
        new maplibregl.Marker({ element: el })
          .setLngLat([p.lng, p.lat])
          .setPopup(
            new maplibregl.Popup({ offset: 16, closeButton: false }).setHTML(
              `<div style="font-family:sans-serif;color:#1c1917"><strong>${p.city}</strong><br/><span style="font-size:12px">${p.country} · Sıradaki durak</span></div>`
            )
          )
          .addTo(map);
      }

      // ---- ŞİMDİKİ KONUM: fotolu pulsing marker ----
      const wrap = document.createElement("div");
      wrap.className = "marker-wrap";
      const ring = document.createElement("div");
      ring.className = "marker-ring";
      const photo = document.createElement("div");
      photo.className = "marker-photo";
      if (profile.photo) {
        photo.style.backgroundImage = `url(${profile.photo})`;
      } else {
        photo.textContent = siteInfo.name.charAt(0);
      }
      wrap.appendChild(ring);
      wrap.appendChild(photo);

      new maplibregl.Marker({ element: wrap })
        .setLngLat([currentLocation.lng, currentLocation.lat])
        .setPopup(
          new maplibregl.Popup({ offset: 36, closeButton: false }).setHTML(
            `<div style="font-family:sans-serif;color:#1c1917"><strong>Şu an buradayım</strong><br/><span>${currentLocation.city}, ${currentLocation.country}</span></div>`
          )
        )
        .addTo(map);

      // ---- Sinematik açılış: yavaş dön, sonra konuma in ----
      let spinning = true;
      const spin = () => {
        if (!spinning || !mapRef.current) return;
        const c = map.getCenter();
        c.lng -= 1.2;
        map.easeTo({ center: c, duration: 1000, easing: (t) => t });
      };
      map.on("moveend", () => {
        if (spinning) spin();
      });
      spin();

      window.setTimeout(() => {
        spinning = false;
        map.flyTo({
          center: [currentLocation.lng, currentLocation.lat],
          zoom: 2.6,
          pitch: 25,
          bearing: -10,
          duration: 5000,
          essential: true,
        });
      }, 4000);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // veri sunucudan tek sefer gelir; haritayı bir kez kuruyoruz
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div ref={mapContainer} className="absolute inset-0" />
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-ink/60">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-ember border-t-transparent" />
        </div>
      )}
    </>
  );
}
