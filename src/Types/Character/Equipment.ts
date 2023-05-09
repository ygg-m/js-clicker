import { ItemTypes } from "../Item";

export interface CharEquipment {
    headTop: EquipmentSlotTypes | null;
    headMid: EquipmentSlotTypes | null;
    headBottom: EquipmentSlotTypes | null;
    body: EquipmentSlotTypes | null;
    handR: EquipmentSlotTypes | null;
    handL: EquipmentSlotTypes | null;
    robe: EquipmentSlotTypes | null;
    shoes: EquipmentSlotTypes | null;
    accessoryR: EquipmentSlotTypes | null;
    accessoryL: EquipmentSlotTypes | null;
  }

export interface EquipmentSlotTypes {
    itemData: ItemTypes,
    upgradeLevel: number,
    cards: ItemTypes[],
    enchants: ItemTypes[]
  }