import { useNav } from "../hooks/useNav"

const Services = () => {
  const servicesRef = useNav("Services")

  return (
    <section ref={servicesRef} id="servicesSection">
      <h4>Free consultation (10-15 minutes)
        Click <a href="https://calendly.com/climbingrehab/freeconsultation">here</a> to schedule
      </h4>

    </section>
  )
}

export default Services
