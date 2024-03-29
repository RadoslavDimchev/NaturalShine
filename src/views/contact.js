import { html } from '../lib/lit-html.js';


const contactTemplate = () => html`
<section class="contact" id="contact">
  <form>
    <p>Пишете ни: naturalshine_ltd@abv.bg</p>
    <input type="email" placeholder="email" class="box">
    <textarea name="" class="box" placeholder="message" id="" cols="30" rows="10"></textarea>
    <input type="submit" value="Send message" class="btn">
  </form>
</section>`;

export function showContact(ctx) {
  ctx.render(contactTemplate());
}