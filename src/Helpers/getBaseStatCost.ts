export function getBaseStatCost(statLevel: number):number {

    if (statLevel <= 10) return 2
    if (statLevel <= 20 && statLevel >= 11 ) return 3
    if (statLevel <= 30 && statLevel >= 21 ) return 4
    if (statLevel <= 40 && statLevel >= 31 ) return 5
    if (statLevel <= 50 && statLevel >= 41 ) return 6
    if (statLevel <= 60 && statLevel >= 51 ) return 7
    if (statLevel <= 70 && statLevel >= 61 ) return 8
    if (statLevel <= 80 && statLevel >= 71 ) return 9
    if (statLevel <= 90 && statLevel >= 81 ) return 10
    if (statLevel <= 99 && statLevel >= 91 ) return 11
    
    if (statLevel <= 104 && statLevel >= 100 ) return 16
    if (statLevel <= 109 && statLevel >= 105 ) return 20
    if (statLevel <= 114 && statLevel >= 110 ) return 24
    if (statLevel <= 120 && statLevel >= 115 ) return 28
    if (statLevel <= 125 && statLevel >= 121 ) return 32
    if (statLevel <= 130 && statLevel >= 126 ) return 36

    else return 36
    
}