import { refinementBonus } from "@/Data/RefinementBonus";

interface getStatusATKTypes {
  weaponClass: string;
  baseLevel: number;
  str: number;
  dex: number;
  luk: number;
}

export function getStatusATK({
  weaponClass: weaponClass,
  baseLevel: baseLevel,
  str: str,
  dex: dex,
  luk: luk,
}: getStatusATKTypes): number {
  const isDexWeapon =
    weaponClass === "Bow" ||
    weaponClass === "Gun" ||
    weaponClass === "Instrument" ||
    weaponClass === "Whip";

  if (isDexWeapon) return Math.floor(baseLevel / 4 + str / 5 + dex + luk / 3);
  else return Math.floor(baseLevel / 4 + str + dex / 5 + luk / 3);
}

interface getWeaponATKTypes {
  baseWeaponDamage: number;
  weaponClass: string;
  weaponLevel: number;
  upgradeLevel: number;
  str: number;
  dex: number;
}

export function getWeaponATK({
  baseWeaponDamage: baseWeaponDamage,
  weaponClass: weaponClass,
  weaponLevel: weaponLevel,
  upgradeLevel: upgradeLevel,
  str: str,
  dex: dex,
}: getWeaponATKTypes) {
  const Variance = getWeaponATK_Variance(baseWeaponDamage, weaponLevel);
  const StatBonus = getWeaponATK_StatBonus(
    weaponClass,
    baseWeaponDamage,
    str,
    dex
  );
  const RefinementBonus = getWeaponATK_RefinementBonus(
    upgradeLevel,
    weaponLevel
  );

  return baseWeaponDamage + Variance + StatBonus + RefinementBonus;
}

function getWeaponATK_Variance(
  baseWeaponDamage: number,
  weaponLevel: number
): number {
  return 0.05 * weaponLevel * baseWeaponDamage;
}

function getWeaponATK_StatBonus(
  weaponClass: string,
  baseWeaponDamage: number,
  str: number,
  dex: number
): number {
  const isDexWeapon =
    weaponClass === "Bow" ||
    weaponClass === "Gun" ||
    weaponClass === "Instrument" ||
    weaponClass === "Whip";

  if (isDexWeapon) return (baseWeaponDamage * dex) / 200;
  else return (baseWeaponDamage * str) / 200;
}

function getWeaponATK_RefinementBonus(
  upgradeLevel: number,
  weaponLevel: number
) {
  let refineBonuses;

  switch (weaponLevel) {
    case 1:
      refineBonuses = refinementBonus.weapon.level1[upgradeLevel];
      break;
    case 2:
      refineBonuses = refinementBonus.weapon.level2[upgradeLevel];
      break;
    case 3:
      refineBonuses = refinementBonus.weapon.level3[upgradeLevel];
      break;
    case 4:
      refineBonuses = refinementBonus.weapon.level4[upgradeLevel];
      break;
    default:
      refineBonuses = refinementBonus.weapon.level1[upgradeLevel];
      break;
  }

  const bonus = refineBonuses.baseBonus + refineBonuses.highUpgrade;

  return bonus;
}
