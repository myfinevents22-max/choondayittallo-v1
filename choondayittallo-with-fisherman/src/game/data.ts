export type FishSpecies = { id:string; name:string; malayalam:string; minKg:number; maxKg:number; rarity:'Common'|'Uncommon'|'Rare'|'Legendary'; pricePerKg:number; bait:string[]; habitats:string[]; depth:number; stamina:number; bite:number; color:number };
export const FISH: FishSpecies[] = [
 {id:'tilapia',name:'Tilapia',malayalam:'തിലാപ്പിയ',minKg:.25,maxKg:1.8,rarity:'Common',pricePerKg:130,bait:['Worm','Dough'],habitats:['river','canal'],depth:.3,stamina:22,bite:.34,color:0x8a9b91},
 {id:'rohu',name:'Rohu',malayalam:'രോഹു',minKg:.8,maxKg:4.2,rarity:'Uncommon',pricePerKg:220,bait:['Worm','Dough'],habitats:['river','backwater'],depth:.55,stamina:42,bite:.22,color:0x9c8062},
 {id:'karimeen',name:'Pearl spot',malayalam:'കരിമീൻ',minKg:.18,maxKg:1.2,rarity:'Rare',pricePerKg:620,bait:['Prawn','Worm'],habitats:['backwater'],depth:.45,stamina:34,bite:.14,color:0x4c7664},
 {id:'varaal',name:'Snakehead murrel',malayalam:'വരാൽ',minKg:.5,maxKg:5.5,rarity:'Rare',pricePerKg:480,bait:['Prawn','Minnow'],habitats:['river','canal'],depth:.25,stamina:65,bite:.11,color:0x64704a},
 {id:'catla',name:'Catla',malayalam:'കട്ല',minKg:1.2,maxKg:8,rarity:'Uncommon',pricePerKg:250,bait:['Dough','Worm'],habitats:['river'],depth:.65,stamina:55,bite:.16,color:0xa5a29a},
 {id:'mullet',name:'Grey mullet',malayalam:'മുല്ലറ്റ്',minKg:.3,maxKg:2.6,rarity:'Common',pricePerKg:190,bait:['Worm','Prawn'],habitats:['backwater'],depth:.35,stamina:30,bite:.27,color:0x9aa7a2}
];
export type Gear = {id:string;name:string;kind:'rod'|'reel'|'line'|'basket';price:number;cast:number;strength:number;reel:number;capacity:number;description:string};
export const GEAR: Gear[] = [
 {id:'bamboo',name:'Beginner Bamboo Rod',kind:'rod',price:0,cast:16,strength:1.5,reel:1,capacity:8,description:'A simple, dependable village rod.'},
 {id:'fiberglass',name:'Village Fiberglass Rod',kind:'rod',price:420,cast:23,strength:3,reel:1,capacity:8,description:'More reach and better control.'},
 {id:'carbon',name:'Carbon Fibre Rod',kind:'rod',price:1250,cast:32,strength:6,reel:1.1,capacity:8,description:'Lightweight power for stronger fish.'},
 {id:'hand-reel',name:'Basic Hand Reel',kind:'reel',price:0,cast:0,strength:0,reel:1,capacity:0,description:'Simple manual recovery.'},
 {id:'spinning',name:'Standard Spinning Reel',kind:'reel',price:350,cast:0,strength:0,reel:1.35,capacity:0,description:'Recover line more quickly.'},
 {id:'smooth-drag',name:'Smooth Drag Reel',kind:'reel',price:950,cast:0,strength:0,reel:1.7,capacity:0,description:'Better control under tension.'},
 {id:'braided-line',name:'Braided Fishing Line',kind:'line',price:280,cast:0,strength:4.5,reel:0,capacity:0,description:'A stronger line for heavier catches.'},
 {id:'large-basket',name:'Large Fish Basket',kind:'basket',price:500,cast:0,strength:0,reel:0,capacity:16,description:'Carry up to 16 fish before selling.'}
];
export const BAITS = [{name:'Worm',price:0},{name:'Dough',price:12},{name:'Prawn',price:30},{name:'Minnow',price:45}];
export const LOCATIONS = [{id:'river',name:'പുഴയോരം',english:'Village River',unlock:0,description:'A calm freshwater river, shaded by coconut palms.'},{id:'backwater',name:'കായൽ ഗ്രാമം',english:'Backwater Village',unlock:1200,description:'Brackish water and prized pearl spot.'},{id:'canal',name:'നെൽപ്പാട കനാൽ',english:'Paddy Field Canal',unlock:2400,description:'Narrow canals winding through green paddy fields.'},{id:'coast',name:'കടൽത്തീരം',english:'Coastal Fishing Zone',unlock:5000,description:'Open sea fishing for a later expedition.'}];
