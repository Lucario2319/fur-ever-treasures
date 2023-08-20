import HalfStar from "./HalfStar"
import FullStar from "./FullStar"
import EmptyStar from "./EmptyStar"

const Rating = ({rating}:{rating: number}) => {
  
  // const rating = 4.5;
  const renderedStars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      renderedStars.push(<FullStar key={"star"+i} />);
    } else if (rating >= i - 0.5) {
      renderedStars.push(<HalfStar key={"star"+i} />);
    } else {
      renderedStars.push(<EmptyStar key={"star"+i} />);
    }
  }

  return <span>{renderedStars}</span>;
}

export default Rating
