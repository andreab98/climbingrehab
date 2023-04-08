import { useNav } from "../hooks/useNav"

const Reviews = () => {
  const reviewsRef = useNav("Reviews")

  return (
    <section ref={reviewsRef} id="reviewsSection">
      <h4>Coming Soon</h4>

    </section>
  )
}

export default Reviews
