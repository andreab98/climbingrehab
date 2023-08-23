import { useNav } from "../hooks/useNav"
import {
  consultDescription,
  evalDescription,
  followUpDescription
} from "../constants/services"
import RoundedBox from "../components/RoundedBox"

const Services = () => {
  const servicesRef = useNav("Services")

  return (
    <section ref={servicesRef} id="servicesSection">
      <RoundedBox
        title='Free consultation (10-15 mins)'
        description={consultDescription}
      />
      <RoundedBox
        title='Initial Evaluation + treatment ($100)'
        description={evalDescription}
      />
      <RoundedBox
        title='Follow up treatment ($80)'
        description={followUpDescription}
      />
    </section>
  )
}

export default Services
