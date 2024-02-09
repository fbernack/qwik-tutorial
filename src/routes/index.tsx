import { Resource, component$, useResource$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export interface Venue {
  id: number;
  name: string;
  address: string;
  image: string;
  description: string;
}

export default component$(() => {
  const searchTerm = useSignal('');
  const searchTermDebounce = useSignal('');
  const venueList = useResource$<Venue[]>(async ({track}) => {
    track(() => searchTermDebounce.value);
    const res = await fetch('http://localhost:3000/venues?q=' + searchTerm.value);
    return await res.json() as Venue[];
  });

  useTask$(({track, cleanup}) => {
    const value = track(() => searchTerm.value);
    const id = setTimeout(() => (searchTermDebounce.value = value), 200);
    cleanup(() => clearTimeout(id));
  });
  return (
    <>
      <div class="flex justify-between pb-8">
        <div>
          <h1>Overview</h1>
        </div>
        <div>
          <input id="search" type="text" class="rounded p-2 mt-2 w-full" placeholder="Search..."
            onInput$={(e) => searchTerm.value = (e.target as HTMLInputElement).value} />
        </div>
      </div>
      <Resource
        value={venueList}
        onPending={() => <p>Loading venues...</p>}
        onResolved={(venues) => (
          <>
            <div class="grid grid-cols-3 gap-4">
              {venues.map((venue) => (
                <div key={venue.id} class="bg-white rounded-lg">
                  <div class="aspect-[4/3] bg-cover bg-center rounded-lg" style={`background-image:url('${venue.image}')`}></div>
                  <div class="p-6">
                    <h3>{venue.name}</h3>
                    <p class="text-gray-400">{venue.address}</p>
                    <Link class="text-sky-500" href={`/venue/${venue.id}`}>Details</Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
