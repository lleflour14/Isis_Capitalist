module.exports = {
    "name": "Formula One",
    "logo": "icones/f1_world_ic.jpg",
    "money": 0,
    "score": 0,
    "totalangels": 0,
    "activeangels": 0,
    "angelbonus": 2,
    "lastupdate": 0,
    "products": [
        {
            "id": 1,
            "name": "Haas",
            "logo": "icones/Haas_ic.jpg",
            "cout": 4,
            "croissance": 1.07,
            "revenu": 1,
            "vitesse": 500,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "palliers": [
                {
                    "name": "Nom du premier palier",
                    "logo": "icones/premierpalier.jpg",
                    "seuil": 20,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse", 
                    "unlocked": "false"
                },
                {
                    "name": "Nom deuxième palier",
                    "logo": "icones/deuxiemepalier.jpg",
                    "seuil": 75,
                    "idcible": 1,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": "false"
                }],
 
 },
        {
            "id": 2,
            "name": "Williams",
            "logo": "icones/Williams_ic.jpg",
            "cout": 60,
            "croissance": 1.15,
            "revenu": 1,
            "vitesse": 3000,
            "quantite": 1,
            "timeleft": 0,
            "managerUnlocked": false,
            "palliers": [
                {
                    "name": "Nom du premier palier",
                    "logo": "icones/premierpalier.jpg",
                    "seuil": 20,
                    "idcible": 2,
                    "ratio": 2,
                    "typeratio": "vitesse", 
                    "unlocked": "false"
                },
                {
                    "name": "Nom deuxième palier",
                    "logo": "icones/deuxiemepalier.jpg",
                    "seuil": 75,
                    "idcible": 2,
                    "ratio": 2,
                    "typeratio": "vitesse",
                    "unlocked": "false"
                }],
        }
    ],
    "allunlocks": [
        {
            "name": "Nom du premier unlock général",
            "logo": "icones/premierunlock.jpg",
            "seuil": 30,
            "idcible": 0,
            "ratio": 2,
            "typeratio": "gain",
            "unlocked": "false"
        },

    ],
    "upgrades": [
        {
            "name": "Haas 1",
            "logo": "icones/Haas_ic.jpg",
            "seuil": 1e3,
            "idcible": 1,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": "false"
        },
        {
            "name": "Haas 2",
            "logo": "icones/Haas_ic.jpg",
            "seuil": 1e5,
            "idcible": 1,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": "false"
        },
        {
            "name": "Haas 3",
            "logo": "icones/Haas_ic.jpg",
            "seuil": 1e7,
            "idcible": 1,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": "false"
        },
        {
            "name": "Williams 1",
            "logo": "icones/Williams_ic.jpg",
            "seuil": 1e5,
            "idcible": 2,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": "false"
        },
        {
            "name": "Williams 2",
            "logo": "icones/Williams_ic.jpg",
            "seuil": 1e7,
            "idcible":2,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": "false"
        },
        {
            "name": "Williams 3",
            "logo": "icones/Williams_ic.jpg",
            "seuil": 1e9,
            "idcible": 2,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": "false"
        },

    ],
    "angelupgrades": [
        {
            "name": "Wheel Sacrifice",
            "logo": "icones/Wheel_ic.png",
            "seuil": 10,
            "idcible": 0,
            "ratio": 3,
            "typeratio": "gain",
            "unlocked": "false"
        },
        {
            "name": "Wheel Mutiny",
            "logo": "icones/Wheel_ic.png",
            "seuil": 100,
            "idcible": -1,
            "ratio": 2,
            "typeratio": "ange",
            "unlocked": "false"
        },
        {
            "name": "Wheel Rebellion",
            "logo": "icones/Wheel_ic.png",
            "seuil": 100000,
            "idcible": -1,
            "ratio": 2,
            "typeratio": "ange",
            "unlocked": "false"
        },

    ],
    "managers": [
        {
            "name": "Esteban Ocon",
            "logo": "icones/Ocon_ic.jpg",
            "seuil": 10,
            "idcible": 1,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": "false"
        },
        {
            "name": "Alex Albon",
            "logo": "icones/Albon_ic.jpg",
            "seuil": 150,
            "idcible": 2,
            "ratio": 0,
            "typeratio": "gain",
            "unlocked": "false"
        },
    ]
};
