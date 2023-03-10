import bcrypt from 'bcryptjs';

const data = {
    products: [{
            name: 'Samsung Galaxy Z Flip4 5G',
            image: '/images/flip.jpg',
            description:
              "Introducing Samsung Galaxy Z Flip4. Fold it, flip it, stand it. Capture photos and videos hands-free with a camera designed to stand on its own with revolutionary folding glass or get that quick selfie when folded for moments that can't wait. ",
            brand: 'Samsung',
            category: 'Electronics',
            price: 599.99,
            rating: 5,
            numberOfReviews: 1,
            productIsNew: true,
            reviews: [],
            stock: 7,
          },
          {
            name: 'iPhone 11 Pro 256GB Memory',
            image: '/images/iphone.jpg',
            description:
              'Shoot 4K video, beautiful portraits and sweeping landscapes with the all-new dual-camera system. Capture your best low-light photos with Night mode. See true-to-life colour in your photos, videos and games on the 6.1-inch Liquid Retina display.3 Experience unprecedented performance with A13 Bionic for gaming, augmented reality and photography',
            brand: 'Apple',
            category: 'Electronics',
            price: 929.99,
            rating: 3,
            numberOfReviews: 1,
            productIsNew: false,
        
            reviews: [],
            stock: 5,
          },
          {
            name: 'Samsung Galaxy Tab S6',
            image: '/images/tab.jpg',
            description:
              "Galaxy Tab S6 Lite is your super carriable note-taking, go-getting companion. It comes with a large 10.4 inch display on a slim and light build, One UI 4 on Android, and S Pen in box and ready to go. Whether you're drawing, learning or gaming, this is the tablet made to be in the moment. ",
            brand: 'Samsung',
            category: 'Electronics',
            price: 399.99,
            countInStock: 11,
            rating: 5,
            numberOfReviews: 0,
            productIsNew: false,
        
            reviews: [],
            stock: 0,
          },
          {
            name: 'Samsung Galaxy Watch5 Pro',
            image: '/images/s4prowatch.jpg',
            description:
              'Meet the Galaxy Watch5. It comes with an innovative 3-in-1 BioActive Sensor designed to accurately monitor and help improve your health, a durable Aluminium finish and a stylish design built for the grind with 60% stronger Sapphire Crystal Glass.',
            brand: 'Samsung',
            category: 'Electronics',
            price: 299.99,
            rating: 5,
            numberOfReviews: 0,
            productIsNew: false,
        
            reviews: [],
            stock: 7,
          },
          {
            name: 'Samsung Galaxy S4 Watch',
            image: '/images/s4watch.jpg',
            description:
              "Most of us want to know more about ourselves, so we can be the best version of ourselves. That's why we engineered the all-new Galaxy Watch4 Classic to be the companion to your journey towards a healthier you.",
            brand: 'Samsung',
            category: 'Electronics',
            price: 299.99,
            rating: 4,
            numberOfReviews: 1,
            productIsNew: false,
        
            reviews: [],
            stock: 1,
          },
          {
            name: 'Samsung Galaxy S21 128GB',
            image: '/images/s22.jpg',
            description:
              'Miss nothing, with Galaxy S21 5G. A camera so good, everyone???s a pro. When capturing your best moments, you no longer have to choose between photo and video. Galaxy S21 captures both, simultaneously, so you???ll never miss a moment. Capture big screen quality videos in stunning 8K resolution* and zoom in with less pixilation with 3x Optical Zoom.',
            brand: 'Samsung',
            category: 'Electronics',
            price: 699.99,
            rating: 5,
            numberOfReviews: 0,
            productIsNew: false,
            stock: 0,
          },
          {
            name: 'Apple Watch SE 40mm',
            image: '/images/apple-watch.jpg',
            brand: 'Apple',
            category: 'Electronics',
            description:
              'Essential features to help you stay connected, active, healthy and safe. Perfect for kids and older adults using Family Setup',
            rating: 0,
            numberOfReviews: 0,
            price: 699.99,
            stock: 5,
            productIsNew: true,
            reviews: [],
          },
          {
            name: 'Shure MV7',
            image: '/images/shure-mv7.jpg',
            brand: 'Shure',
            category: 'Microphones',
            description:
              'Get a professional podcast sound with audio interfaces, hard disk recorders, or direct to computers and mobile devices with the Shure MV7 Podcasting Microphone (Black). This is a professional-quality, broadcast-style dynamic microphone, one that can has both a conventional XLR connection and a USB port. It also supports a 3.5mm headphone output for direct monitoring.',
            rating: 0,
            numberOfReviews: 0,
            price: 449,
            stock: 2,
            productIsNew: true,
            reviews: [],
          },
          {
            name: 'Samsung A73',
            image: '/images/a73.jpg',
            brand: 'Samsung',
            category: 'Electronics',
            description:
              "Blazing 5G. Powerfully connected. It's time to enter into the next chapter. Seriously-fast 5G connection takes your everyday mobile experiences and vastly enhances them with next-level speed. Feel truly connected with seamless streaming, instant sharing and the power to transfer your thoughts to action in a blink.",
            rating: 5,
            numberOfReviews: 1,
            price: 899.99,
            stock: 49,
            productIsNew: true,
            reviews: [],
          },],
};
export default data;