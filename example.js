// Dado el siguiente Array, ordenar las empresas con más ventas de mayor a menor y mostrar el resultado en un Array con el nombre de la empresa y el total (Ver línea 313: Resultado esperado )

const data = [
    {
        "customer": "Facebook Inc.",
        "address": "1 Hacker Way",
        "city": "Menlo Park",
        "orders": [
            {
                "name": "Ad Campaign",
                "amount": "5000.00"
            },
            {
                "name": "Data Analytics Services",
                "amount": "3500.00"
            }
        ]
    },
    {
        "customer": "Google LLC",
        "address": "1600 Amphitheatre Parkway",
        "city": "Mountain View",
        "orders": [
            {
                "name": "Search Advertising",
                "amount": "8000.00"
            },
            {
                "name": "YouTube Ads",
                "amount": "6000.00"
            }
        ]
    },
    {
        "customer": "Microsoft Corporation",
        "address": "1 Microsoft Way",
        "city": "Redmond",
        "orders": [
            {
                "name": "Windows License",
                "amount": "10000.00"
            },
            {
                "name": "Azure Cloud Services",
                "amount": "12000.00"
            }
        ]
    },
    {
        "customer": "Amazon.com, Inc.",
        "address": "410 Terry Ave N",
        "city": "Seattle",
        "orders": [
            {
                "name": "Prime Membership",
                "amount": "120.00"
            },
            {
                "name": "Electronics Purchase",
                "amount": "2500.00"
            }
        ]
    },
    {
        "customer": "Apple Inc.",
        "address": "1 Apple Park Way",
        "city": "Cupertino",
        "orders": [
            {
                "name": "iPhone 12",
                "amount": "1000.00"
            },
            {
                "name": "MacBook Pro",
                "amount": "2500.00"
            }
        ]
    },
    {
        "customer": "Tesla, Inc.",
        "address": "3500 Deer Creek Rd",
        "city": "Palo Alto",
        "orders": [
            {
                "name": "Model 3",
                "amount": "50000.00"
            },
            {
                "name": "Powerwall",
                "amount": "8000.00"
            }
        ]
    },
    {
        "customer": "Netflix, Inc.",
        "address": "100 Winchester Circle",
        "city": "Los Gatos",
        "orders": [
            {
                "name": "Monthly Subscription",
                "amount": "15.99"
            },
            {
                "name": "Original Series Production",
                "amount": "500000.00"
            }
        ]
    },
    {
        "customer": "Uber Technologies, Inc.",
        "address": "1455 Market St",
        "city": "San Francisco",
        "orders": [
            {
                "name": "Ride Share",
                "amount": "20.00"
            },
            {
                "name": "Food Delivery",
                "amount": "30.00"
            }
        ]
    },
    {
        "customer": "Airbnb, Inc.",
        "address": "888 Brannan St",
        "city": "San Francisco",
        "orders": [
            {
                "name": "Vacation Rental",
                "amount": "200.00"
            },
            {
                "name": "Experiences Booking",
                "amount": "100.00"
            }
        ]
    },
    {
        "customer": "Salesforce.com, Inc.",
        "address": "415 Mission St",
        "city": "San Francisco",
        "orders": [
            {
                "name": "CRM Software Subscription",
                "amount": "5000.00"
            },
            {
                "name": "Sales Automation Tools",
                "amount": "3000.00"
            }
        ]
    },
    {
        "customer": "Intel Corporation",
        "address": "2200 Mission College Blvd",
        "city": "Santa Clara",
        "orders": [
            {
                "name": "Processor Chips",
                "amount": "100000.00"
            },
            {
                "name": "Data Center Solutions",
                "amount": "50000.00"
            }
        ]
    },
    {
        "customer": "The Coca-Cola Company",
        "address": "1 Coca-Cola Plaza",
        "city": "Atlanta",
        "orders": [
            {
                "name": "Coca-Cola Cans",
                "amount": "500.00"
            },
            {
                "name": "Beverage Vending Machines",
                "amount": "10000.00"
            }
        ]
    },
    {
        "customer": "Nike, Inc.",
        "address": "1 Bowerman Dr",
        "city": "Beaverton",
        "orders": [
            {
                "name": "Running Shoes",
                "amount": "1000.00"
            },
            {
                "name": "Athletic Apparel",
                "amount": "2000.00"
            }
        ]
    },
    {
        "customer": "Starbucks Corporation",
        "address": "2401 Utah Ave S",
        "city": "Seattle",
        "orders": [
            {
                "name": "Coffee",
                "amount": "5.00"
            },
            {
                "name": "Mugs and Tumblers",
                "amount": "20.00"
            }
        ]
    },
    {
        "customer": "Walt Disney Company",
        "address": "500 S Buena Vista St",
        "city": "Burbank",
        "orders": [
            {
                "name": "Theme Park Tickets",
                "amount": "1000.00"
            },
            {
                "name": "Movie Merchandise",
                "amount": "500.00"
            }
        ]
    },
    {
        "customer": "IBM Corporation",
        "address": "1 New Orchard Rd",
        "city": "Armonk",
        "orders": [
            {
                "name": "Mainframe Computers",
                "amount": "500000.00"
            },
            {
                "name": "Cloud Services",
                "amount": "10000.00"
            }
        ]
    },
    {
        "customer": "McDonald's Corporation",
        "address": "2111 McDonald's Dr",
        "city": "Oak Brook",
        "orders": [
            {
                "name": "Big Mac Meal",
                "amount": "7.99"
            },
            {
                "name": "Happy Meal",
                "amount": "4.99"
            }
        ]
    },
    {
        "customer": "Samsung Electronics Co., Ltd.",
        "address": "129 Samsung-ro",
        "city": "Suwon",
        "orders": [
            {
                "name": "Smartphone",
                "amount": "800.00"
            },
            {
                "name": "Television",
                "amount": "1500.00"
            }
        ]
    },
    {
        "customer": "Toyota Motor Corporation",
        "address": "1 Toyota-Cho",
        "city": "Toyota",
        "orders": [
            {
                "name": "Camry",
                "amount": "25000.00"
            },
            {
                "name": "Prius",
                "amount": "20000.00"
            }
        ]
    },
    {
        "customer": "Sony Corporation",
        "address": "1-7-1 Konan",
        "city": "Tokyo",
        "orders": [
            {
                "name": "PlayStation 5",
                "amount": "499.99"
            },
            {
                "name": "BRAVIA OLED TV",
                "amount": "3000.00"
            }
        ]
    }
];

console.log(data)

// ------ Solución ------------



// ---- Resultado esperado------

// console.log(sortedData)
// [
//     {
//         "name": "IBM Corporation",
//         "total": "510000.00"
//     },
//     {
//         "name": "Netflix, Inc.",
//         "total": "500015.99"
//     },
//     {
//         "name": "Intel Corporation",
//         "total": "150000.00"
//     },
//     {
//         "name": "Tesla, Inc.",
//         "total": "58000.00"
//     },
//     {
//         "name": "Toyota Motor Corporation",
//         "total": "45000.00"
//     },
//     {
//         "name": "Microsoft Corporation",
//         "total": "22000.00"
//     },
//     {
//         "name": "Google LLC",
//         "total": "14000.00"
//     },
//     {
//         "name": "The Coca-Cola Company",
//         "total": "10500.00"
//     },
//     {
//         "name": "Facebook Inc.",
//         "total": "8500.00"
//     },
//     {
//         "name": "Salesforce.com, Inc.",
//         "total": "8000.00"
//     },
//     {
//         "name": "Apple Inc.",
//         "total": "3500.00"
//     },
//     {
//         "name": "Sony Corporation",
//         "total": "3499.99"
//     },
//     {
//         "name": "Nike, Inc.",
//         "total": "3000.00"
//     },
//     {
//         "name": "Amazon.com, Inc.",
//         "total": "2620.00"
//     },
//     {
//         "name": "Samsung Electronics Co., Ltd.",
//         "total": "2300.00"
//     },
//     {
//         "name": "Walt Disney Company",
//         "total": "1500.00"
//     },
//     {
//         "name": "Airbnb, Inc.",
//         "total": "300.00"
//     },
//     {
//         "name": "Uber Technologies, Inc.",
//         "total": "50.00"
//     },
//     {
//         "name": "Starbucks Corporation",
//         "total": "25.00"
//     },
//     {
//         "name": "McDonald's Corporation",
//         "total": "12.98"
//     }
// ]