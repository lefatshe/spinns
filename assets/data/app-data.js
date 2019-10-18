import Category from "../../component/models/category";
import Washes from "../../component/models/washs";

export const CATEGORIES = [
    new Category('c1', 'Wash', '1 day', '#FFF'),
    new Category('c2', 'Iron', '2 days', '#FFF'),
    new Category('c3', 'DryClean', '2 days', '#FFF'),
    new Category('c4', 'PremiumWash', '2 days', '#FFF')
];

// https://www.popoptiq.com/types-of-clothing/

export const WASHES = [
    // Headgear
    new Washes('w1', '[\'c1\']','Caps and Hats', '0.00', '', 'Headgear'),
    new Washes('w2', '[\'c1\']','Headbands', '0.00', '', 'Headgear'),
    new Washes('w3', '[\'c1\']','Head Tie / Scarves', '0.00', '', 'Headgear'),
    // Tops
    new Washes('w4', '[\'c1\', \'c2\', \'c4\']','Shirts', '0.00', '', 'Tops'),
    new Washes('w5', '[\'c1\', \'c2\', \'c4\']','Crop Tops', '0.00', '', 'Tops'),
    new Washes('w6', '[\'c1\', \'c2\', \'c4\']','Sweaters', '0.00', '', 'Tops'),
    new Washes('w7', '[\'c1\', \'c2\', \'c4\']','Blouses', '0.00', '', 'Tops'),
    new Washes('w8', '[\'c1\', \'c2\', \'c4\']','Tube Top', '0.00', '', 'Tops'),
    // Bottoms
    new Washes('w9', '[\'c1\', \'c2\', \'c4\']','Pants / Trousers', '0.00', '', 'Bottoms'),
    new Washes('w10', '[\'c1\', \'c2\', \'c4\']','Skirts', '0.00', '', 'Bottoms'),
    new Washes('w11', '[\'c1\', \'c2\', \'c4\']','Shorts', '0.00', '', 'Bottoms'),
    new Washes('w12', '[\'c1\', \'c2\', \'c4\']','Sarong', '0.00', '', 'Bottoms'),
    new Washes('w13', '[\'c1\', \'c2\', \'c4\']','Tights and Leggings', '0.00', '', 'Bottoms'),
    new Washes('w14', '[\'c1\', \'c2\', \'c4\']','Socks', '0.00', '', 'Bottoms'),
    // Full Body Wear
    new Washes('w15', '[\'c1\', \'c2\', \'c4\', \'c3\']','Dresses / Gowns', '0.00', '', 'Full Body Wear'),
    new Washes('w16', '[\'c1\', \'c2\', \'c4\']','Activewear', '0.00', '', 'Full Body Wear'),
    new Washes('w17', '[\'c1\', \'c2\', \'c4\']','Rompers', '0.00', '', 'Full Body Wear'),
    // Outerwear
    new Washes('w18', '[\'c1\', \'c2\', \'c4\', \'c3\']','Coats', '0.00', '', 'Outerwear'),
    new Washes('w19', '[\'c1\', \'c2\', \'c4\', \'c3\']','Jackets and Hoodies', '0.00', '', 'Outerwear'),
    new Washes('w20', '[\'c1\', \'c2\', \'c4\', \'c3\']','Vest / Waistcoat', '0.00', '', 'Outerwear'),
    new Washes('w21', '[\'c1\', \'c2\', \'c4\', \'c3\']','Robes and Cloaks', '0.00', '', 'Outerwear'),
    new Washes('w22', '[\'c1\', \'c2\', \'c4\']','Poncho', '0.00', '', 'Outerwear'),
    new Washes('w23', '[\'c1\', \'c2\', \'c4\']','Scarves and Shawls', '0.00', '', 'Outerwear'),
    new Washes('w24', '[\'c1\', \'c2\', \'c4\']','Windbreaker', '0.00', '', 'Outerwear'),
    // Men’s Undergarments
    new Washes('w25', '[\'c1\', \'c2\', \'c4\']','Long / Thermal Underwear', '0.00', '', 'Men’s Undergarments'),
    new Washes('w26', '[\'c1\', \'c2\', \'c4\']','Tank Top', '0.00', '', 'Bottoms'),
    new Washes('w27', '[\'c1\', \'c2\', \'c4\']','Underwear / Underpants', '0.00', '', 'Men’s Undergarments'),
    // Women’s Lingerie
    new Washes('w28', '[\'c1\', \'c2\', \'c4\']','Ladies Bras', '0.00', '', 'Women’s Lingerie'),
    new Washes('w29', '[\'c1\', \'c2\', \'c4\']','Corsets and Body Shapers', '0.00', '', 'Women’s Lingerie'),
    new Washes('w30', '[\'c1\', \'c2\', \'c4\']','Slip', '', '', 'Women’s Lingerie'),
    new Washes('w31', '[\'c1\', \'c2\', \'c4\']','Panties/ Underwear', '', '', 'Women’s Lingerie'),
    // Foot wear
    new Washes('w32', '[\'c1\', \'c2\', \'c4\']','Socks', '', '', 'Footwear'),
];
