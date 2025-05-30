import xml.etree.ElementTree as ET

# EU country codes (uppercase ISO2)
EU_CODES = [
    "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IE","IT",
    "LV","LT","LU","MT","NL","PL","PT","RO","SK","SI","ES","SE"
]
# Non-EU partner countries you want included
EXTRA_CODES = ["SA", "AE"]

# Combine
SELECTED_CODES = set(EU_CODES + EXTRA_CODES)

# Read the SVG
tree = ET.parse("../public/europe.svg")
root = tree.getroot()

country_paths = []

for elem in root.iter('{http://www.w3.org/2000/svg}path'):
    class_attr = elem.attrib.get('class', '')
    for code in SELECTED_CODES:
        if f"sm_state_{code}" in class_attr:
            # Optionally, preserve other useful attributes (like stroke, fill)
            country_paths.append({
                "code": code,
                "d": elem.attrib["d"]
            })

# Export to JS
with open("../src/data/countries.js", "w", encoding="utf-8") as f:
    f.write("export const COUNTRIES = ")
    import json
    f.write(json.dumps(country_paths, indent=2))
    f.write(";")
print(f"Extraction complete! {len(country_paths)} countries written to src/data/countries.js")
