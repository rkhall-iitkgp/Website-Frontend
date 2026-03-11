import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel } from 'swiper';
import styles from './Ratings.module.css';

const Ratings = () => {
  const ratingData = [
    { stars: 5, count: 180 },
    { stars: 4, count: 95 },
    { stars: 3, count: 60 },
    { stars: 2, count: 28 },
    { stars: 1, count: 18 }
  ];

  const reviews = [
    {
      id: 1,
      name: "User Name",
      time: "Time",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus magna turpis, suscipit egestas lacus volutpat sed. Vivamus eget elit vitae est condimentum elementum eleifend quis lacus."
    },
    {
      id: 2,
      name: "User Name",
      time: "Time",
      stars: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus magna turpis, suscipit egestas lacus volutpat sed. Vivamus eget elit vitae est condimentum elementum eleifend quis lacus."
    },
    {
      id: 3,
      name: "User Name",
      time: "Time",
      stars: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus magna turpis, suscipit egestas lacus volutpat sed. Vivamus eget elit vitae est condimentum elementum eleifend quis lacus."
    },
    {
      id: 4,
      name: "User Name",
      time: "Time",
      stars: 4,
      text: "Great food today! The spices were just right and the service was quick. improved a lot from last week."
    },
    {
      id: 5,
      name: "User Name",
      time: "Time",
      stars: 3,
      text: "It was okay, but the rice was a bit undercooked. Hope to see better quality control next time."
    },
    {
      id: 6,
      name: "User Name",
      time: "Time",
      stars: 5,
      text: "Absolutely delicious! Best meal I've had in the mess so far. Kudos to the chefs."
    }
  ];

  const totalReviews = ratingData.reduce((sum, item) => sum + item.count, 0);
  const averageRating = (ratingData.reduce((sum, item) => sum + item.stars * item.count, 0) / totalReviews).toFixed(1);

  return (
    <div className={styles.ratingsContainer}>
      <h2 className={styles.mainHeader}>Thoughts on Today's Food:</h2>

      <div className={styles.ratingsBox}>
        <div className={styles.ratingHeader}>
          <div className={styles.totalReviewsBox}>
            <h3>Total Reviews:</h3>
            <span className={styles.reviewCount}>{totalReviews}</span>
          </div>

          <div className={styles.separator}></div> {/* Vertical line separator */}

          <div className={styles.averageRatingBox}>
            <h3>Average Rating:</h3>
            <div className={styles.ratingValueWrapper}>
              <span className={styles.ratingNumber}>{averageRating}</span>
              <div className={styles.stars}>
                {"★".repeat(Math.floor(averageRating))}
                {"☆".repeat(5 - Math.floor(averageRating))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.reviewsSlider}>
          <Swiper
            modules={[Pagination, Navigation, Mousewheel]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            mousewheel={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className={styles.reviewCard}>
                  <div className={styles.reviewHeader}>
                    <div className={styles.userIconWrapper}>
                      <svg className={styles.userIcon} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                    </div>
                    <span className={styles.reviewTime}>{review.time}</span>
                  </div>
                  <div className={styles.reviewStars}>
                    {"★".repeat(review.stars)}
                    <span style={{ color: '#d1d5db' }}>{"★".repeat(5 - review.stars)}</span>
                  </div>
                  <p className={styles.reviewText}>
                    {review.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Ratings;