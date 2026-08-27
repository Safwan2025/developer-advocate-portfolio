export const resources = [
 {name:"Qur'an Script",category:"Text & Script",formats:["JSON","SQLite"],note:"Model script/font choice explicitly in your UI and data layer."},
 {name:"Translations",category:"Translations & Tafsir",formats:["JSON","SQLite"],note:"Keep translator/resource identity and licensing visible."},
 {name:"Tafsir",category:"Translations & Tafsir",formats:["JSON","SQLite"],note:"Treat source attribution as part of the domain model."},
 {name:"Recitations",category:"Audio",formats:["metadata"],note:"Audio and segment metadata need stable ayah identifiers."},
 {name:"Morphology",category:"Linguistics",formats:["JSON","SQLite"],note:"Word-level resources require word_position-aware joins."},
 {name:"Mushaf Layouts",category:"Text & Script",formats:["metadata"],note:"Rendering depends on layout, script and font compatibility."}
];
