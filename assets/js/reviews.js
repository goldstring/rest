var reviews = [

    {
        "name": "Yash Parab",
        "rating": 4,
        "review": "Very Tasty and Delicious Food served.Nice hospitality, personalized attention to orders and reasonable rates.Overall pleasant experience.",
    },
    {
        "name": "Ronnie Mali",
        "rating": 5,
        "review": "I must say that the best malvani food i ever had. The food quantity was good, varieties in dishes  and food was tasty and delicious. I will recommend, to visit this place along with your family  and friends. I am sure they will love this place coz of the authentic malvani spices used in preparation of the dishes.",
    },
    {
        "name": "yakub shaikh",
        "rating": 4,
        "review": "We ordered a 2 fish platter and the service was very good but fish was all rava fry some of them should be tawa fry.. so family can enjoy with different flavours of fish.. Staffs are very friendly and we enjoyed..",
    },
    {
        "name": "Shailesh Prabhu",
        "rating": 5,
        "review": "I had sindhudurg platter fish was not too spicy,not to salty, not to oily, In all it was a healthy food"
    },
    {
        "name": "Pratik",
        "rating": 5,
        "review": "Best and tasty food , Must visit this place for authentic malvani food , You should try their komdi vade"
    },
    {
        "name": "B Amin",
        "rating": 5,
        "review": "Yesterday i went to a this sea food place where i  get so much sea food options this place is heaven for sea food lovers. I ordered a sea platter , I would recommend this place to every sea food lover, the owner is also very sweet& humbler 😍you have to wait a bit for the platter but for good things you have to wait🌸"
    },
    {
        "name": "Khurseed Ahmad",
        "rating": 5,
        "review": "Best place to have sea food in virar west. The staff are very friendly and you will get the best malvani cuisine with different varieties of starters."
    },
    {
        "name": "Sayli Shinde",
        "rating": 5,
        "review": "Excellent service and good Quality seafood with reasonable rate nice place near by global city. Exactly malvani taste must try place."
    }

];


let testimonialsContainer = document.getElementById("testimonials_container");

reviews.forEach(review => {
    let stars = "";
    for (let i = 0; i < review.rating; i++) {
        stars += `<i class="bi bi-star-fill"></i>`;
    }

    let reviewHTML = `
        <div class="swiper-slide">
            <div class="testimonial-item">
                <div class="row gy-4 justify-content-center">
                    <div class="col-lg-6">
                        <div class="testimonial-content">
                            <p>
                                <i class="bi bi-quote quote-icon-left"></i>
                                <span>${review.review}</span>
                                <i class="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>${review.name}</h3>
                            <div class="stars">${stars}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    testimonialsContainer.innerHTML += reviewHTML;
});