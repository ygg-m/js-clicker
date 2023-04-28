import { ItemTypes } from "../Item";

export interface CharEquipment {
    headTop: ItemTypes | null;
    headMid: ItemTypes | null;
    headBottom: ItemTypes | null;
    body: ItemTypes | null;
    handR: ItemTypes | null;
    handL: ItemTypes | null;
    robe: ItemTypes | null;
    shoes: ItemTypes | null;
    accessoryR: ItemTypes | null;
    accessoryL: ItemTypes | null;
  }