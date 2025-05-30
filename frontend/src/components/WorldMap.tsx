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
          <h3 className="text-xl font-semibold text-[#1a1a2e] mb-1">
            Partner Countries
          </h3>
          <p className="text-sm text-[#708090]">
            Click on a country to learn more about our partnerships there.
          </p>
        </div>

        <div className="flex items-center max-h-[36rem] max-w-[36rem] justify-center overflow-hidden rounded-xl">
          <WorldMap
            title=""
            valueSuffix=""
            color="#daa520"
            size={2000}
            data={data}
            frame
            richInteraction
            tooltipTextFunction={() => `Partnership Available`}
            onClickFunction={({ countryName }) =>
              alert(`${countryName}: We offer partnerships here.`)
            }
            styleFunction={(geo) => {
              const country = data.find(
                (d) => d.country.toLowerCase() === geo.countryCode.toLowerCase()
              );
              // List of visible country codes (selected + all EU codes)
              const visible = [
                ...data.map((d) => d.country),
                "at",
                "be",
                "bg",
                "hr",
                "cy",
                "cz",
                "dk",
                "ee",
                "es",
                "fi",
                "fr",
                "gr",
                "hu",
                "it",
                "lt",
                "lv",
                "mt",
                "nl",
                "pt",
                "ro",
                "se",
                "si",
                "sk",
                "lu",
                // add others as needed
              ];
              // Make others transparent
              if (!visible.includes(geo.countryCode.toLowerCase())) {
                return {
                  display: "none",
                  cursor: "default",
                  pointerEvents: "none",
                };
              }
              return {
                fill: country ? country.color : "#e2e2e2",
                stroke: country ? "#1a1a2e" : "#ccc",
                strokeWidth: country ? 1.2 : 0.5,
                cursor: country ? "pointer" : "default",
                transition: "all 0.3s",
              };
            }}
          />
        </div>
      </div>
    </div>
  );
}
