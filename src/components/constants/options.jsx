export const selectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "🔥",
    people: "5 to 10 people",
  },
];

export const selectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about the cost",
    icon: "💸",
  },
];

export const AI_PROMPT = "Generate a travel plan for {location} for {totalDays} days for a {traveler} on a {budget} budget, including a list of hotel options with details such as the hotel name, address, price, image URL, geo-coordinates, rating, and a brief description. Additionally, suggest a {totalDays}-day itinerary in JSON format with details for each location, including the place name, description, image URL, geo-coordinates, ticket pricing, travel time between locations, and the best time to visit each. Ensure the travel plan is cost-effective and provides a well-organized schedule for the couple to enjoy their trip."

export const PHOTO_REF_URL = 'https://places.googleapis.com/v1/NAME/media?max_height_px=1000&max_width_px=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY