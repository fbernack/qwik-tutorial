import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>About Us</h1>
      <p class="py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aliquid voluptatem tempore, vel fugiat placeat magni aspernatur sed dolores veritatis cupiditate officiis aut ut molestiae iure animi repudiandae labore earum.</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "About Us",
}