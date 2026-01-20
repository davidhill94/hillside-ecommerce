import mockImageOne from "../../public/images/mockImageOne.jpg";
import mockImageTwo from "../../public/images/mockImageTwo.jpg";
import mockImageThree from "../../public/images/mockImageThree.jpg";
import poster1 from "../../public/images/Poster1.jpeg";
import poster2 from "../../public/images/Poster2.jpeg";
import poster3 from "../../public/images/Poster3.jpeg";
import poster3frame from "../../public/images/Poster3frame.png";
import poster4 from "../../public/images/Poster4.jpeg";
import poster5 from "../../public/images/Poster5.jpeg";
import poster6 from "../../public/images/Poster6.jpeg";
import poster7 from "../../public/images/Poster7.jpeg";
import poster8 from "../../public/images/Poster8.jpeg";
import poster9 from "../../public/images/Poster9.jpeg";
import poster10 from "../../public/images/Poster10.jpeg";
import poster11 from "../../public/images/Poster11.jpeg";
import poster12 from "../../public/images/Poster12.jpeg";
import poster13 from "../../public/images/Poster13.jpeg";
import poster14 from "../../public/images/Poster14.jpeg";
import poster15 from "../../public/images/Poster15.jpeg";

//Mock Data for products until the database is built and fully functioning
export const productData = [
  {
    id: "77bjj41",
    name: "Trailbound Poster",
    description:
      "Explore the spirit of adventure with this vibrant illustrated poster featuring two hikers trekking through a lush mountain landscape. With rich colors, playful details, and a curious animal companion, this scene captures the joy of exploration and connection with nature. Perfect for travel lovers, outdoor enthusiasts, or anyone seeking a touch of wanderlust on their wall.",
    price: 45.99,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster1.src, id: "84792nchjs" },
    ],
    reviews: []
  },
  {
    id: "2bb36y",
    name: "Coastline Blues Poster",
    description:
      "A vibrant illustrated poster capturing the laid-back spirit of coastal lifestyle. Set against a turquoise sky and ocean, the artwork features a sun-soaked beach overlooking a modern city skyline, blending nature and urban life seamlessly. Native wildlife, palm trees, and lush greenery frame the scene, while a relaxed beachgoer in the foreground evokes a sense of escape, warmth, and adventure. The hand-drawn style and soft pastel colour palette give the piece a nostalgic, travel-poster feel — celebrating iconic beaches, outdoor culture, and easy-going way of life.",
    price: 34.5,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster2.src, id: "bywtw" },
    ],
    reviews: [
      {
        id: "8484w2",
        userId: "jdnjnvjr353",
        productId: "2bb36y",
        rating: 4,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageOne.src},
            {image: mockImageTwo.src},
            {image: mockImageThree.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
      {
        id: "84gbjw2",
        userId: "jdnjnvjr353",
        productId: "2bb36y",
        rating: 5,
        comment: "Hangs perfectly in my work office",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "S Smith",
          email: "ssmithsmith@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageOne.src},
            {image: mockImageTwo.src},
            {image: mockImageThree.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "300n436g",
    name: "Eōrørle Heritage Print",
    description:
      "Step into the timeless charm of Eōrørle with this beautifully illustrated poster. Featuring cobblestone streets, ornate towers, and a family strolling through a vibrant European-style town, this piece evokes the warmth of shared exploration and the elegance of old-world architecture. A perfect addition for travel lovers, dreamers, or anyone drawn to classic urban beauty.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster3.src, id: "vstst" },
      { image: poster3frame.src, id: "vstjeust" },
    ],
    reviews: [
      {
        id: "jcrn4939",
        userId: "jdnjnvjr353",
        productId: "300n436g",
        rating: 5,
        comment: "Great Quality. Great Feel about the print and reminds me of my recent holiday to Europe!!",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "D Dynamo",
          email: "thedynamolegend@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageThree.src},
            {image: mockImageTwo.src},
            {image: mockImageOne.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "173bbnf",
    name: "Glacier Drift Poster",
    description:
      "Immerse yourself in the stark beauty of Scandanavia with this atmospheric illustrated poster. A solitary figure walks along a black sand beach, framed by floating icebergs and snow-capped peaks under a teal-hued sky. The bold title “Iceland,” stylized with the Icelandic letter “ð,” adds a cultural touch to this dramatic coastal scene. Ideal for lovers of Nordic landscapes, solitude, and striking natural contrasts.",
    price: 45.99,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster4.src, id: "bhywvs" },
    ],
    reviews: []
  },
  {
    id: "2ndcc74",
    name: "Citron Jungle Print",
    description:
      "Step into the lush world of Citron with this imaginative illustrated poster. A tall, plant-like figure wanders through a vibrant jungle teeming with whimsical orange creatures and layered tropical foliage. Rich in color and fantasy, this piece evokes curiosity, wonder, and the magic of nature. Perfect for lovers of surreal landscapes and botanical storytelling.",
    price: 34.5,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster5.src, id: "vw6wtyw" },
    ],
    reviews: []
  },
  {
    id: "384bjcm",
    name: "Dusttrail Drive Poster",
    description:
      "Capture the spirit of open-road adventure with this stylized desert scene. A vintage convertible kicks up dust as two travelers cruise through a sunlit landscape of mesas, sparse vegetation, and endless sky. With warm tones and nostalgic energy, this artwork evokes freedom, exploration, and the joy of the journey.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster6.src, id: "nceu7e" },
    ],
    reviews: []
  },
  {
    id: "4jnc884n",
    name: "Brzi Beach Match Print",
    description:
      "Bring the energy of summer to your space with this vibrant beach volleyball scene. Set against a bright ocean backdrop, three players leap into action while refreshing drinks await in the foreground. With dynamic motion, bold colors, and a playful atmosphere, this artwork captures the thrill of sun, sport, and seaside fun.",
    price: 89.95,
    category: "bags",
    inStock: true,
    images: [
      { image: poster7.src, id: "7g3d" },
    ],
    reviews: [
      {
        id: "8fhnbu22",
        userId: "jdnjnvjr353",
        productId: "4jnc884n",
        rating: 2,
        comment: "Great quality but the poster does not have the same feel as I saw on the website",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "M Developer",
          email: "developsm@gmail.com",
          emailVerification: null,
          image: poster7.src,
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "77bjj41",
    name: "Inglad Countryside Ride Print",
    description:
      "Saddle up for a serene countryside escape with this charming illustrated poster. A woman in a red riding jacket and wide-brimmed hat rides a horse past rolling hills and a classic red British phone booth, blending tradition with tranquility. With soft colors and a nod to English heritage, this piece evokes leisure, elegance, and timeless rural beauty.",
    price: 45.99,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster8.src, id: "n2onbx" },
    ],
    reviews: []
  },
  {
    id: "2bb36y",
    name: "Undawwtat Reef Explorer Print",
    description:
      "Dive into the vibrant depths of the ocean with this captivating underwater illustration. A lone scuba diver explores a coral reef teeming with colorful marine life, illuminated by shimmering light from the surface. With dynamic movement, rich hues, and a sense of discovery, this artwork celebrates the beauty and wonder of aquatic ecosystems.",
    price: 34.5,
    category: "kitchenware",
    inStock: true,
    images: [
      { image: poster9.src, id: "8g7f2" },
    ],
    reviews: [
      {
        id: "84gbjw2",
        userId: "jdnjnvjr353",
        productId: "2bb36y",
        rating: 4,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageOne.src},
            {image: mockImageTwo.src},
            {image: mockImageThree.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "300n436g",
    name: "Adrenaline Jumper Print",
    description:
      "Soar through the skies with this exhilarating illustrated poster, where a wingsuit flyer glides among a flock of birds beneath a vivid blue sky. With sweeping clouds, bold motion, and a sense of freedom, this artwork captures the thrill of flight and the dream of defying gravity.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster10.src, id: "bhxwub" },
    ],
    reviews: [
      {
        id: "jcrn4939",
        userId: "jdnjnvjr353",
        productId: "300n436g",
        rating: 2.5,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: poster10.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "2ndcc74",
    name: "Priss Paris Romance Print",
    description:
      "Celebrate romance in the heart of Paris with this elegant illustrated poster. A couple shares a quiet moment with glasses of wine beneath the iconic Eiffel Tower, surrounded by classic Parisian architecture and vibrant street life. With warm tones and timeless charm, this artwork captures the essence of love and connection in the City of Light.",
    price: 34.5,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster11.src, id: "7dgb" },
    ],
    reviews: []
  },
  {
    id: "384bjcm",
    name: "IXCO Jungle Discovery Print",
    description:
      "Embark on a journey of discovery with this vivid illustrated poster, where a modern explorer stands before an ancient jungle pyramid. Surrounded by lush vegetation and distant mountains, the scene blends history and adventure, capturing the thrill of uncovering lost civilizations through a contemporary lens.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster12.src, id: "9j3xnx2z" },
    ],
    reviews: []
  },
  {
    id: "389d44bjcm",
    name: "VVAAM Hillside Ride Print",
    description:
      "Feel the rush of scenic adventure with this lively illustrated poster. A group of riders cruises through lush green hills on scooters, winding past stilted houses and mountain views. With bold colors and a sense of motion, this artwork celebrates freedom, friendship, and the joy of exploring nature together.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster13.src, id: "ni38hzqhq" },
    ],
    reviews: []
  },
  {
    id: "384bxm2cxnzjcm",
    name: "SEFERİ Safari Adventure Print",
    description:
      "Experience the thrill of the wild with this vibrant safari-themed illustrated poster. A cheerful duo rides through the savannah in a classic jeep, surrounded by giraffes, elephants, lions, and more. With playful detail and warm tones, this artwork captures the excitement of exploration and the beauty of nature’s most iconic creatures.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster14.src, id: "js83x8n" },
    ],
    reviews: []
  },
  {
    id: "n3i39922",
    name: "Pyramid Trek Print",
    description:
      "Journey through the sands of time with this evocative illustrated poster. A modern traveler walks beside a colorfully adorned camel toward Egypt’s majestic pyramids, set against a clear desert sky. Blending ancient wonder with contemporary exploration, this artwork captures the allure of history and the spirit of adventure.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster15.src, id: "73rbhjws" },
    ],
    reviews: []
  },
  {
    id: "2bb36y",
    name: "Undawwtat Reef Explorer Print",
    description:
      "Dive into the vibrant depths of the ocean with this captivating underwater illustration. A lone scuba diver explores a coral reef teeming with colorful marine life, illuminated by shimmering light from the surface. With dynamic movement, rich hues, and a sense of discovery, this artwork celebrates the beauty and wonder of aquatic ecosystems.",
    price: 34.5,
    category: "kitchenware",
    inStock: true,
    images: [
      { image: poster9.src, id: "8g7f2" },
    ],
    reviews: [
      {
        id: "84gbjw2",
        userId: "jdnjnvjr353",
        productId: "2bb36y",
        rating: 4,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageOne.src},
            {image: mockImageTwo.src},
            {image: mockImageThree.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "300n436g",
    name: "Adrenaline Jumper Print",
    description:
      "Soar through the skies with this exhilarating illustrated poster, where a wingsuit flyer glides among a flock of birds beneath a vivid blue sky. With sweeping clouds, bold motion, and a sense of freedom, this artwork captures the thrill of flight and the dream of defying gravity.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster10.src, id: "bhxwub" },
    ],
    reviews: [
      {
        id: "jcrn4939",
        userId: "jdnjnvjr353",
        productId: "300n436g",
        rating: 2.5,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: poster10.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "2ndcc74",
    name: "Priss Paris Romance Print",
    description:
      "Celebrate romance in the heart of Paris with this elegant illustrated poster. A couple shares a quiet moment with glasses of wine beneath the iconic Eiffel Tower, surrounded by classic Parisian architecture and vibrant street life. With warm tones and timeless charm, this artwork captures the essence of love and connection in the City of Light.",
    price: 34.5,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster11.src, id: "7dgb" },
    ],
    reviews: []
  },
  {
    id: "384bjcm",
    name: "IXCO Jungle Discovery Print",
    description:
      "Embark on a journey of discovery with this vivid illustrated poster, where a modern explorer stands before an ancient jungle pyramid. Surrounded by lush vegetation and distant mountains, the scene blends history and adventure, capturing the thrill of uncovering lost civilizations through a contemporary lens.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster12.src, id: "9j3xnx2z" },
    ],
    reviews: []
  },
  {
    id: "389d44bjcm",
    name: "VVAAM Hillside Ride Print",
    description:
      "Feel the rush of scenic adventure with this lively illustrated poster. A group of riders cruises through lush green hills on scooters, winding past stilted houses and mountain views. With bold colors and a sense of motion, this artwork celebrates freedom, friendship, and the joy of exploring nature together.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster13.src, id: "ni38hzqhq" },
    ],
    reviews: []
  },
  {
    id: "384bxm2cxnzjcm",
    name: "SEFERİ Safari Adventure Print",
    description:
      "Experience the thrill of the wild with this vibrant safari-themed illustrated poster. A cheerful duo rides through the savannah in a classic jeep, surrounded by giraffes, elephants, lions, and more. With playful detail and warm tones, this artwork captures the excitement of exploration and the beauty of nature’s most iconic creatures.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster14.src, id: "js83x8n" },
    ],
    reviews: []
  },
  {
    id: "n3i39922",
    name: "Pyramid Trek Print",
    description:
      "Journey through the sands of time with this evocative illustrated poster. A modern traveler walks beside a colorfully adorned camel toward Egypt’s majestic pyramids, set against a clear desert sky. Blending ancient wonder with contemporary exploration, this artwork captures the allure of history and the spirit of adventure.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster15.src, id: "73rbhjws" },
    ],
    reviews: []
  },
  {
    id: "2bb36y",
    name: "Undawwtat Reef Explorer Print",
    description:
      "Dive into the vibrant depths of the ocean with this captivating underwater illustration. A lone scuba diver explores a coral reef teeming with colorful marine life, illuminated by shimmering light from the surface. With dynamic movement, rich hues, and a sense of discovery, this artwork celebrates the beauty and wonder of aquatic ecosystems.",
    price: 34.5,
    category: "kitchenware",
    inStock: true,
    images: [
      { image: poster9.src, id: "8g7f2" },
    ],
    reviews: [
      {
        id: "84gbjw2",
        userId: "jdnjnvjr353",
        productId: "2bb36y",
        rating: 4,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageOne.src},
            {image: mockImageTwo.src},
            {image: mockImageThree.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "300n436g",
    name: "Adrenaline Jumper Print",
    description:
      "Soar through the skies with this exhilarating illustrated poster, where a wingsuit flyer glides among a flock of birds beneath a vivid blue sky. With sweeping clouds, bold motion, and a sense of freedom, this artwork captures the thrill of flight and the dream of defying gravity.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster10.src, id: "bhxwub" },
    ],
    reviews: [
      {
        id: "jcrn4939",
        userId: "jdnjnvjr353",
        productId: "300n436g",
        rating: 2.5,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: poster10.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "2ndcc74",
    name: "Priss Paris Romance Print",
    description:
      "Celebrate romance in the heart of Paris with this elegant illustrated poster. A couple shares a quiet moment with glasses of wine beneath the iconic Eiffel Tower, surrounded by classic Parisian architecture and vibrant street life. With warm tones and timeless charm, this artwork captures the essence of love and connection in the City of Light.",
    price: 34.5,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster11.src, id: "7dgb" },
    ],
    reviews: []
  },
  {
    id: "384bjcm",
    name: "IXCO Jungle Discovery Print",
    description:
      "Embark on a journey of discovery with this vivid illustrated poster, where a modern explorer stands before an ancient jungle pyramid. Surrounded by lush vegetation and distant mountains, the scene blends history and adventure, capturing the thrill of uncovering lost civilizations through a contemporary lens.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster12.src, id: "9j3xnx2z" },
    ],
    reviews: []
  },
  {
    id: "389d44bjcm",
    name: "VVAAM Hillside Ride Print",
    description:
      "Feel the rush of scenic adventure with this lively illustrated poster. A group of riders cruises through lush green hills on scooters, winding past stilted houses and mountain views. With bold colors and a sense of motion, this artwork celebrates freedom, friendship, and the joy of exploring nature together.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster13.src, id: "ni38hzqhq" },
    ],
    reviews: []
  },
  {
    id: "384bxm2cxnzjcm",
    name: "SEFERİ Safari Adventure Print",
    description:
      "Experience the thrill of the wild with this vibrant safari-themed illustrated poster. A cheerful duo rides through the savannah in a classic jeep, surrounded by giraffes, elephants, lions, and more. With playful detail and warm tones, this artwork captures the excitement of exploration and the beauty of nature’s most iconic creatures.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster14.src, id: "js83x8n" },
    ],
    reviews: []
  },
  {
    id: "n3i39922",
    name: "Pyramid Trek Print",
    description:
      "Journey through the sands of time with this evocative illustrated poster. A modern traveler walks beside a colorfully adorned camel toward Egypt’s majestic pyramids, set against a clear desert sky. Blending ancient wonder with contemporary exploration, this artwork captures the allure of history and the spirit of adventure.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster15.src, id: "73rbhjws" },
    ],
    reviews: []
  },
  {
    id: "2bb36y",
    name: "Undawwtat Reef Explorer Print",
    description:
      "Dive into the vibrant depths of the ocean with this captivating underwater illustration. A lone scuba diver explores a coral reef teeming with colorful marine life, illuminated by shimmering light from the surface. With dynamic movement, rich hues, and a sense of discovery, this artwork celebrates the beauty and wonder of aquatic ecosystems.",
    price: 34.5,
    category: "kitchenware",
    inStock: true,
    images: [
      { image: poster9.src, id: "8g7f2" },
    ],
    reviews: [
      {
        id: "84gbjw2",
        userId: "jdnjnvjr353",
        productId: "2bb36y",
        rating: 4,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: mockImageOne.src},
            {image: mockImageTwo.src},
            {image: mockImageThree.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "300n436g",
    name: "Adrenaline Jumper Print",
    description:
      "Soar through the skies with this exhilarating illustrated poster, where a wingsuit flyer glides among a flock of birds beneath a vivid blue sky. With sweeping clouds, bold motion, and a sense of freedom, this artwork captures the thrill of flight and the dream of defying gravity.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster10.src, id: "bhxwub" },
    ],
    reviews: [
      {
        id: "jcrn4939",
        userId: "jdnjnvjr353",
        productId: "300n436g",
        rating: 2.5,
        comment: "Really loved the product",
        createdAt: "2023-05-25T15:50:43.558Z",
        user: {
          id: "jdnjnvjr353",
          name: "J Bloggs",
          email: "JJJBlogs@gmail.com",
          emailVerification: null,
          images: [
            {image: poster10.src},
          ],
          hashedPassword: null,
          createdAt: "2023-05-25T15:50:43.558Z",
          updatedAt: "2023-05-25T15:50:43.558Z",
          role: "USER",
        },
      },
    ],
  },
  {
    id: "2ndcc74",
    name: "Priss Paris Romance Print",
    description:
      "Celebrate romance in the heart of Paris with this elegant illustrated poster. A couple shares a quiet moment with glasses of wine beneath the iconic Eiffel Tower, surrounded by classic Parisian architecture and vibrant street life. With warm tones and timeless charm, this artwork captures the essence of love and connection in the City of Light.",
    price: 34.5,
    category: "wall_decor",
    inStock: true,
    images: [
      { image: poster11.src, id: "7dgb" },
    ],
    reviews: []
  },
  {
    id: "384bjcm",
    name: "IXCO Jungle Discovery Print",
    description:
      "Embark on a journey of discovery with this vivid illustrated poster, where a modern explorer stands before an ancient jungle pyramid. Surrounded by lush vegetation and distant mountains, the scene blends history and adventure, capturing the thrill of uncovering lost civilizations through a contemporary lens.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster12.src, id: "9j3xnx2z" },
    ],
    reviews: []
  },
  {
    id: "389d44bjcm",
    name: "VVAAM Hillside Ride Print",
    description:
      "Feel the rush of scenic adventure with this lively illustrated poster. A group of riders cruises through lush green hills on scooters, winding past stilted houses and mountain views. With bold colors and a sense of motion, this artwork celebrates freedom, friendship, and the joy of exploring nature together.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster13.src, id: "ni38hzqhq" },
    ],
    reviews: []
  },
  {
    id: "384bxm2cxnzjcm",
    name: "SEFERİ Safari Adventure Print",
    description:
      "Experience the thrill of the wild with this vibrant safari-themed illustrated poster. A cheerful duo rides through the savannah in a classic jeep, surrounded by giraffes, elephants, lions, and more. With playful detail and warm tones, this artwork captures the excitement of exploration and the beauty of nature’s most iconic creatures.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster14.src, id: "js83x8n" },
    ],
    reviews: []
  },
  {
    id: "n3i39922",
    name: "Pyramid Trek Print",
    description:
      "Journey through the sands of time with this evocative illustrated poster. A modern traveler walks beside a colorfully adorned camel toward Egypt’s majestic pyramids, set against a clear desert sky. Blending ancient wonder with contemporary exploration, this artwork captures the allure of history and the spirit of adventure.",
    price: 29.99,
    category: "wall_decor",
    inStock: false,
    images: [
      { image: poster15.src, id: "73rbhjws" },
    ],
    reviews: []
  },
];
