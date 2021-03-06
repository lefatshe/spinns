import Category from "../models/category";
import Washes from "../models/washs";
import Types from "../models/washtypes";
import Order from "../models/order";
import User from "../models/user";
import Menu from "../models/menu";
import Product from '../models/product';

export const MENU = [
    new Menu("m0", 'Orders'),
    new Menu("m1", 'Preference'),
    new Menu("m2", 'Payments'),
    new Menu("m3", 'Free wash'),
    new Menu("m4", 'Help'),
    new Menu("m5", 'Legal'),
];

export const USER = [
    new User("o1", 'John Wick', '\n' + '1 Westbrooke Dr, Strathavon, Sandton, 2031\n')
];

export const ORDERS = [
    new Order("o1", 'What day', ['Today - 5 Sep', 'Tomorrow - 6 Sep', 'Friday - 8 Sep'], 'https://via.placeholder.com/150/92c952'),
    new Order("o2", 'What time', ['10:30 AM', '11:45 AM', '16:22 PM'], 'https://via.placeholder.com/150/92c952'),
    new Order("o3", 'Delivery day', ['1 - Day', '2 - Day', '3 - Day'], 'https://via.placeholder.com/150/92c952'),
    new Order("o4", 'Detergent', ['Any', 'Tide', 'Surf'], 'https://via.placeholder.com/150/92c952'),
    new Order("o5", 'Services by', [ 'Spinns' ], 'https://via.placeholder.com/150/92c952'),
];

export const CATEGORIES = [
    new Category('c1', 'Wash', '1 day', '#FFF', 'https://imgbbb.com/images/2019/10/25/wash.jpg', 0),
    new Category('c2', 'Iron', '2 days', '#FFF', 'https://imgbbb.com/images/2019/10/25/iron.jpg', 0),
    new Category('c3', 'Dry Clean', '2 days', '#FFF', 'https://imgbbb.com/images/2019/10/25/dry.jpg', 0),
    new Category('c4', 'Premium', '2 days', '#FFF', 'https://imgbbb.com/images/2019/10/25/primium.jpg', 0)
];

export const TYPES = [
    new Types('t1', 'Headgear', '0', 0),
    new Types('t2', 'Tops', '0', 0),
    new Types('t3', 'Full Body Wear', '0', 0),
    new Types('t4', 'Outerwear', '0', 0),
    new Types('t5', 'Men’s Undergarments', '0', 0),
    new Types('t6', 'Women’s Lingerie', '0', 0),
    new Types('t7', 'Full Body Wear', '0', 0),
    new Types('t8', 'Foot wear', '0', 0),
];

// https://www.popoptiq.com/types-of-clothing/

export const WASHES = [
    // Headgear
    new Washes('w1', '[\'c1\']','Caps and Hats', 'Headgear', '', 'Headgear', 0, 10),
    new Washes('w2', '[\'c1\']','Headbands', 'Headgear', '', 'Headgear', 0, 10),
    new Washes('w3', '[\'c1\']','Head Tie / Scarves', 'Headgear', '', 'Headgear', 0, 10),
    // Tops
    new Washes('w4', '[\'c1\']','Shirts', 'Tops', '', 'Tops', 0, 10),
    new Washes('w5', '[\'c1\']','Crop Tops', 'Tops', '', 'Tops', 0, 10),
    new Washes('w6', '[\'c1\']','Sweaters', 'Tops', '', 'Tops', 0, 10),
    new Washes('w7', '[\'c1\']','Blouses', 'Tops', '', 'Tops', 0, 10),
    new Washes('w8', '[\'c1\']','Tube Top', 'Tops', '', 'Tops', 0, 10),
    // Bottoms
    new Washes('w9', '[\'c1\', \'c2\', \'c4\']','Pants / Trousers', 'Bottoms', '', 'Bottoms', 0, 10),
    new Washes('w10', '[\'c1\', \'c2\', \'c4\']','Skirts', 'Bottoms', '', 'Bottoms', 0, 10),
    new Washes('w11', '[\'c1\', \'c2\', \'c4\']','Shorts', 'Bottoms', '', 'Bottoms', 0, 10),
    new Washes('w12', '[\'c1\', \'c2\', \'c4\']','Sarong', 'Bottoms', '', 'Bottoms', 0, 10),
    new Washes('w13', '[\'c1\', \'c2\', \'c4\']','Bottoms', '0.00', '', 'Bottoms', 0, 10),
    new Washes('w14', '[\'c1\', \'c2\', \'c4\']','Bottoms', '0.00', '', 'Bottoms', 0, 10),
    // Full Body Wear
    new Washes('w15', '[\'c1\', \'c2\', \'c4\', \'c3\']','Jumpsuit', 'Full Body Wear', '', 'Full Body Wear', 0, 10),
    // Outerwear
    new Washes('w18', '[\'c1\', \'c2\', \'c4\', \'c3\']','Coats', 'Outerwear', '', 'Outerwear', 0, 10),
    new Washes('w19', '[\'c1\', \'c2\', \'c4\', \'c3\']','Jackets and Hoodies', 'Outerwear', '', 'Outerwear', 0, 10),
    new Washes('w20', '[\'c1\', \'c2\', \'c4\', \'c3\']','Vest / Waistcoat', 'Outerwear', '', 'Outerwear', 0, 10),
    new Washes('w21', '[\'c1\', \'c2\', \'c4\', \'c3\']','Robes and Cloaks', 'Outerwear', '', 'Outerwear', 0, 10),
    new Washes('w22', '[\'c1\', \'c2\', \'c4\']','Poncho', 'Outerwear', '', 'Outerwear', 0, 10),
    new Washes('w23', '[\'c1\', \'c2\', \'c4\']','Scarves and Shawls', 'Outerwear', '', 'Outerwear', 0, 10),
    new Washes('w24', '[\'c1\', \'c2\', \'c4\']','Windbreaker', 'Outerwear', '', 'Outerwear', 0, 10),
    // Men’s Undergarments
    new Washes('w25', '[\'c1\', \'c2\', \'c4\']','Long / Thermal Underwear', 'Men’s Undergarments', '', 'Men’s Undergarments', 0, 10),
    new Washes('w26', '[\'c1\', \'c2\', \'c4\']','Tank Top', 'Men’s Undergarments', '', 'Bottoms', 0, 10),
    new Washes('w27', '[\'c1\', \'c2\', \'c4\']','Underwear / Underpants', 'Men’s Undergarments', '', 'Men’s Undergarments', 0, 10),
    // Women’s Lingerie
    new Washes('w28', '[\'c1\', \'c2\', \'c4\']','Ladies Bras', 'Women’s Lingerie', '', 'Women’s Lingerie', 0, 10),
    new Washes('w29', '[\'c1\', \'c2\', \'c4\']','Corsets and Body Shapers', 'Women’s Lingerie', '', 'Women’s Lingerie', 0, 10),
    new Washes('w30', '[\'c1\', \'c2\', \'c4\']','Slip', 'Women’s Lingerie', '', 'Women’s Lingerie', 0, 10),
    new Washes('w31', '[\'c1\', \'c2\', \'c4\']','Panties/ Underwear', 'Women’s Lingerie', '', 'Women’s Lingerie', 0, 10),
    // Foot wear
    new Washes('w32', '[\'c1\']','Socks', 'Footwear', '', 'Footwear', 0, 10),
];

export const PRODUCTS = [
    new Product('p1', 'Caps and Hats', 15.99, 0, 0, 'Wash', 'u1'),
    new Product('p2', 'Headbands', 8.99, 0, 0, 'Wash', 'u1'),
]
