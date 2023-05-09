export const weaponList = [
    {
        id: 1201,
        portrait: require("@/Assets/Items/Portrait/1201.png"),
        sprite: require("@/Assets/Items/Sprite/1201.png"),
        name: "Knife",
        description: "A simple knife.",
        type: "Weapon",
        subtype: "Dagger",
        location: "Right Hand",
        cardSlots: 3,
        attack: 17,
        defense: 10,
        property: "Neutral",
        weight: 40,
        weaponLevel: 1,
        requiresLevel: 1,
        buy: 50,
        sell: 25,
        usableBy: ["Novice", "Swordman", "Merchant", "Thief", "Mage", "Archer", "Soul Linker", "Ninja"],
        script: [],
    }
]

export const armorList = [
    {
        id: 2301,
        portrait: require("@/Assets/Items/Portrait/2301.png"),
        sprite: require("@/Assets/Items/Sprite/2301.png"),
        name: "Cotton Shirt",
        description: "A simple, sturdily made shirt of cotton.",
        type: "Armor",
        subtype: "Armor",
        location: "Body",
        cardSlots: 0,
        attack: 0,
        defense: 10,
        property: "Neutral",
        weight: 10,
        weaponLevel: 1,
        requiresLevel: 1,
        buy: 10,
        sell: 5,
        usableBy: ["All Jobs"],
        script: [],
    }
]