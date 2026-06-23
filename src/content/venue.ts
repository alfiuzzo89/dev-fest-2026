import type { Venue } from "@/src/types/content";

export const venue: Venue = {
  name: "Università degli Studi Roma Tre",
  address: "Dip. Ing. Civile, Informatica e Tecnologie Aeronautiche — Via Vito Volterra, 60",
  city: "Roma, Italy",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=Università+degli+Studi+Roma+Tre,+Via+Vito+Volterra+60,+Roma&output=embed&z=16",
  mapsLinkUrl: "https://maps.google.com/?q=Via+Vito+Volterra+60,+Roma,+Italia",
  notes: [
    "October 10, 2026",
    "9:00 AM - 6:00 PM"
  ],
  accessibilityInfo: [
    "Accessibility details for the venue will be confirmed closer to the event. If you have specific needs, please reach out to the organizers in advance.",
    "We are committed to making DevFest Roma 2026 an inclusive experience for all attendees."
  ],
  directions: [
    "The venue is best reached by public transport. Use Google Maps with the address Via Vito Volterra 60, Roma to find the best route from your starting point. Trastevere and Ostiense railway stations are the closest major hubs.",
    "No dedicated event parking is available. Limited street parking may be found in the surrounding area. Carpooling or public transport is strongly recommended."
  ]
};
