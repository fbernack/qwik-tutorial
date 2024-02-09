import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type Venue } from "~/routes";

export const useVenue = routeLoader$(async (requestEvent) => {
  const res = await fetch(`http://localhost:3000/venues/${requestEvent.params.id}`);
  return await res.json() as Venue;
});

export default component$(() => {
  const signal = useVenue();
  return (
    <>
      <h1>{signal.value.name}</h1>
      <div class="my-8 aspect-[3/1] bg-cover bg-center rounded-lg"
        style={`background-image:url('${signal.value.image}')`}></div>
      <p>{signal.value.description}</p>
    </>
  )
})