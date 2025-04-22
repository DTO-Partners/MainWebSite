import { WorldMap } from "react-svg-worldmap";

const data = [
  { country: "pl", value: 1, color: "#daa520" }, // Poland - Gold
  { country: "de", value: 1, color: "#3e5c76" }, // Germany - Blue-gray
  { country: "lu", value: 1, color: "#008080" }, // Luxembourg - Teal
  { country: "ie", value: 1, color: "#ffd700" }, // Ireland - Bright gold
  { country: "sa", value: 1, color: "#708090" }, // Saudi Arabia - Slate
  { country: "ae", value: 1, color: "#333333" }, // UAE - Charcoal
];

export default function WorldMapComponent() {
  return (
    <div className="w-full">
      <div className="bg-white/60 backdrop-blur-lg border border-[#ddd] rounded-2xl shadow-xl px-8 py-10 transition-all hover:shadow-2xl duration-300">
        <div className="text-left mb-6">
          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-1">Partner Countries</h3>
          <p className="text-sm text-[#708090]">
            Click on a country to learn more about our partnerships there.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl">
          <WorldMap
            title=""
            valueSuffix=""
            color="#daa520"
            size="responsive"
            data={data}
            richInteraction
            tooltipTextFunction={() => `Partnership Available`}
            onClickFunction={({ countryName }) =>
              alert(`${countryName}: We offer partnerships here.`)
            }
            styleFunction={(geo) => {
              const country = data.find(
                (d) => d.country.toLowerCase() === geo.countryCode.toLowerCase()
              );
              return {
                fill: country ? country.color : "#f5f5f5",
                stroke: country ? "#1a1a2e" : "#ccc",
                strokeWidth: country ? 1.2 : 0.5,
                cursor: country ? "pointer" : "default",
                transition: "all 0.3s ease-in-out",
              };
            }}
          />
        </div>
      </div>
    </div>
  );
}
