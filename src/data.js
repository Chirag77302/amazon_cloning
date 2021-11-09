import {v4 as uuidv4} from 'uuid';

export const data = [
    {
        "id":1,
        "title":"Sony MDR-EX150AP Wired In Ear Headphone with Mic (Black)",
        "tagname":"earphones",
        "price":"1,005.00",
        "Company":"Sony",
        "rating":"4",
        "image":"https://m.media-amazon.com/images/I/611FHnItrxL._SX522_.jpg",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":2,
        "title":"Sony EX155AP Wired In Ear Headphone with Mic (Black)",
        "price":"1,290.00",
        "tagname":"earphones",
        "Company":"Sony",
        "rating":"4",
        "image":"https://m.media-amazon.com/images/I/61lPmm-3fZL._SX522_.jpg",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":3,
        "title":"Sony Bravia 80 cm (32 inches) HD Ready Smart LED TV 32W6103 (Black)",
        "price":"25,490.00",
        "tagname":"Television",
        "Company":"Sony",
        "rating":"5",
        "image":"https://m.media-amazon.com/images/I/915X01--m2S._SX522_.jpg",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":4,
        "title":"Panasonic 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine (NA-F60LF1HRB, Grey)",
        "tagname":"Washing Machine",
        "price":"13,390.00",
        "Company":"Panasonic",
        "rating":"3",
        "image":"https://m.media-amazon.com/images/I/61E5gS4YBIL._SY741_.jpg",
        "product_category":["Washing Machine"],
        "rating_nos":"200"
    },
    {
        "id":5,
        "title":"Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor",
        "tagname":"Phone",
        "price":"8,499.00",
        "Company":"MI",
        "rating":"4",
        "image":"https://m.media-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":6,
        "title":"Vivo Y33s (Mirror Black, 8GB RAM, 128GB Storage)",
        "tagname":"Phone",
        "Company":"Vivo",
        "price":"18,990.00",
        "rating":"5",
        "image":"https://m.media-amazon.com/images/I/51xFckqp4yL._SY741_.jpg",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":7,
        "title":"Lloyd 7 kg Semi Automatic Top Load Washing Machine (LWMS70BE1, Blossom Blue)",
        "tagname":"Washing Machine",
        "Company":"Lloyd",
        "price":"10,340.00",
        "rating":"4",
        "image":"https://m.media-amazon.com/images/I/416pItwR34L.jpg",
        "product_category":["Washing Machine"],
        "rating_nos":"200"
    },
    {
        "id":8,
        "tagname":"Television",
        "title":"WA65A4002VS/TL",
        "image":"https://m.media-amazon.com/images/I/81N8UlFd0kL._SX522_.jpg",
        "Company":"Samsung",
        "price":"18,490.00",
        "rating":"4",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":9,
        "title":"Raymond Men's Regular fit Casual Shirt",
        "tagname":"Shirt",
        "Company":"Raymond",
        "price":"1,249.00",
        "rating":"4",
        "image":"https://m.media-amazon.com/images/I/91381w0a-4L._UX569_.jpg",
        "product_category":["Clothing"],
        "rating_nos":"200"
    },
    {
        "id":10,
        "tagname":"shirt",
        "title":"Men's Regular fit Casual Shirt",
        "Company":"Indigo Nation",
        "rating":"5",
        "price":"1,401.00",
        "image":"https://m.media-amazon.com/images/I/71vmogaCutS._UX569_.jpg",
        "product_category":["Clothing"],
        "rating_nos":"200"
    },
    {
        "id":11,
        "title":"Raymond Men's Slim Shirt",
        "rating":"5",
        "tagname":"shirt",
        "Company":"Raymond ",
        "price":"878.00",
        "image":"https://m.media-amazon.com/images/I/81DpKjUOBaL._UX569_.jpg",
        "product_category":["Clothing"],
        "rating_nos":"200"
    },
    {
        "id":12,
        "title":"Reebok Men's RBK ESN PRO Regular Fit Pant",
        "tagname":"pants",
        "Company":"Reebok",
        "price":"878.00",
        "rating":"5",
        "image":"https://m.media-amazon.com/images/I/71H1qhOjYZL._UX569_.jpg",
        "product_category":["Clothing"],
        "rating_nos":"200"
    },
    {
        "id":13,
        "tagname":"pants",
        "title":"Reebok Casual Regular Men's Pants",
        "Company":"Levi's",
        "price":"1,259.00",
        "image":"https://m.media-amazon.com/images/I/71XV4ngZo0S._UX569_.jpg",
        "rating":"5",
        "product_category":["Clothing"],
        "rating_nos":"200"
    },
    {
        "id":14,
        "tagname":"shirt",
        "title":"IndoPrimo Men's Regular Fit Casual Shirt",
        "Company":"Indigo Nation",
        "price":"699.00",
        "product_category":["Clothing"],
        "rating":"4",
        "image":"https://m.media-amazon.com/images/I/61NkUX5oJ1L._UL1200_.jpg",
        "rating_nos":"200"
    },
    {
        "id":"12321341",
        "title":"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
        "price":"11.96",
        "tagname":"book",
        "rating":"5",
        "Company":"Erok Ries",
        "image":"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
        "product_category":["Books"],
        "rating_nos":"200"
    },
    {
        "id":"49538094",
        "title":"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater",
        "tagname":"mixer",
        "price":"239.0",
        "rating":"4",
        "image":"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg",
        "product_category":["Washing Machine"],
        "Company":"KenWood",
        "rating_nos":"200"
    },
    {
        "id":"4903850",
        "title":"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        "tagname":"watch",
        "price":"199.99",
        "rating":"3",
        "image":"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":"23445930",
        "title":"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",
        "tagname":"speaker",
        "price":"98.99",
        "rating":"5",
        "image":"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":"3254354345",
        "title":"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",
        "tagname":"Phone",
        "price":"598.99",
        "rating":"4",
        "image":"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg",
        "product_category":["Electronics"],
        "rating_nos":"200"
    },
    {
        "id":"90829332",
        "title":"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
        "price":"1094.98",
        "tagname":"Television",
        "rating":"4",
        "image":"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg",
        "product_category":["Electroncis"],
        "rating_nos":"200"
    },
    {
        'id':uuidv4(),
        'title':'World’s Best Inspirational Books to Change Your Life (Box Set of 3 Books)',
        'price':'249.00',
        'tagname':'Books',
        'rating':'5',
        'image':'https://images-na.ssl-images-amazon.com/images/I/51PU8Sa4tQL._SX451_BO1,204,203,200_.jpg',
        'product_category':['Books'],
        'rating_nos':'265'
    },
    {
        'id':uuidv4(),
        'title':'How to Stop Worrying and Start Living: Time-Tested Methods for Conquering Worry',
        'price':'99.00',
        'tagname':'Books',
        'rating':'4.5',
        'image':'https://images-na.ssl-images-amazon.com/images/I/51ytROYQLGS._SX460_BO1,204,203,200_.jpg',
        'product_category':['Books'],
        'rating_nos':'14,997'
    },
    {
        'id':uuidv4(),
        'title':'The Power of Your Subconscious Mind',
        'price':'99.00',
        'tagname':'Books',
        'rating':'5',
        'image':'https://images-na.ssl-images-amazon.com/images/I/41+CqNWoutS._SX460_BO1,204,203,200_.jpg',
        'product_category':['Books'],
        'rating_nos':'42,216'
    },
    {
        'id':uuidv4(),
        'title':'World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books)',
        'price':'299.00',
        'tagname':'Books',
        'rating':'5',
        'image':'https://images-na.ssl-images-amazon.com/images/I/51Do0NLYmDL._SX445_BO1,204,203,200_.jpg',
        'product_category':['Books'],
        'rating_nos':'13,516'
    },
    {
        'id':uuidv4(),
        'title':'Ikigai: The Japanese secret to a long and happy life',
        'price':'410.00',
        'tagname':'Books',
        'rating':'5',
        'image':'https://images-na.ssl-images-amazon.com/images/I/51T8OXMiB5L._SX356_BO1,204,203,200_.jpg',
        'product_category':['Books'],
        'rating_nos':'24,349'
    },
    {
        'id':uuidv4(),
        'title':'Attitude Is Everything: Change Your Attitude ... Change Your Life!',
        'price':"142.00",
        'tagname':"Books",
        'rating':'4',
        'image':"https://images-na.ssl-images-amazon.com/images/I/41F8ATXoMOL._SX317_BO1,204,203,200_.jpg",
        'product_category':['Books'],
        'rating_nos':"13,707"
    },
    {
        'id':uuidv4(),
        'title':'As a Man Thinketh ',
        'price':"59.00",
        'tagname':"Books",
        'rating':'4',
        'image':"https://images-na.ssl-images-amazon.com/images/I/51tiopcLhuS._SX460_BO1,204,203,200_.jpg",
        'product_category':['Books'],
        'rating_nos':"4,806"
    },
    {
        'id':uuidv4(),
        'title':'American Tourister Casual Backpack',
        'price':'899.00',
        'tagname':'Bags',
        'Compnay':'American Tourister',
        'rating':'4',
        'image':"https://m.media-amazon.com/images/I/91FvDEE9sCL._UL1500_.jpg",
        'product_category':["Clothing",'BestSellers'],
        'rating_nos':'24,518'
    },
    {
        'id':uuidv4(),
        'title':'Urban Forest Black Detachable Card Holder Wallet & Pen Combo Gift Set',
        'price':'649.00',
        'tagname':'Men Wallets',
        'Company':'Urban Forest',
        'rating':'4.5',
        'image':"https://m.media-amazon.com/images/I/81IXM8NC8fL._SL1500_.jpg",
        'product_category':["Clothing",'BestSellers'],
        'rating_nos':'20,015'
    },
    {
        'id':uuidv4(),
        'title':'WildHorn® RFID Protected Genuine High Quality Leather Wallet for Men (Black MATT)',
        'price':'360.00',
        'tagname':'Men Wallets',
        'Company':"WildHorn",
        'rating':'4.5',
        'image':"https://m.media-amazon.com/images/I/819llNusYuL._SL1500_.jpg",
        'product_category':["Clothing",'BestSellers'],
        'rating_nos':'18,885'
    },
    {
        'id':uuidv4(),
        'title':'Mi Smart Band 5 – India’s No. 1 Fitness Band',
        'price':'2,499.00',
        'tagname':'Electronics',
        'rating':'5',
        'Company':'MI',
        'image':"https://m.media-amazon.com/images/I/71X8NdnCsvL._SL1500_.jpg",
        'product_category':["Electronics",'BestSellers'],
        'rating_nos':'52,525'
    },
    {
        'id':uuidv4(),
        'title':'BoAt Rockerz 255 in-Ear Earphones',
        'price':'999.00',
        'tagname':'earphones',
        'rating':'5',
        'Company':'BOAT',
        'image':"https://m.media-amazon.com/images/I/51Re0QcVSDL._SL1500_.jpg",
        'product_category':["Electronics",'BestSellers'],
        'rating_nos':'356,860'
    },
    {
        'id':uuidv4(),
        'title':'Redmi 9 Activ (Coral Green, 4GB RAM, 64GB Storage)',
        'price':'9,499.00',
        'tagname':'Phone',
        'rating':'5',
        'Company':'MI',
        'image':"https://m.media-amazon.com/images/I/91kAtEXPIeL._SL1500_.jpg",
        'product_category':["Electronics",'BestSellers'],
        'rating_nos':'100,642'
    }
];