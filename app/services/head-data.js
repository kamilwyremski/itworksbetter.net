import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class HeadDataService extends Service {
  @tracked base_url;
  @tracked title;
  @tracked description;
  @tracked keywords;
  @tracked canonical;
  @tracked image;
  @tracked image_width;
  @tracked image_height;

  applyToDocument() {
    if (typeof document === 'undefined') {
      return;
    }

    const head = document.head;
    if (!head) {
      return;
    }

    const title = this.title || '';
    const description = this.description || '';
    const keywords = this.keywords || '';
    const canonical = this.canonical || '';
    const baseUrl = this.base_url || '/';
    const imagePath = this.image
      ? `${baseUrl.replace(/\/$/, '')}/${String(this.image).replace(/^\//, '')}`
      : '';

    document.title = title;

    this.#setBase(head, baseUrl);
    this.#setMetaByName(head, 'description', description);
    this.#setMetaByName(head, 'keywords', keywords);

    if (canonical) {
      this.#setLink(head, 'canonical', canonical);
      this.#setAlternateMarkdown(head, canonical, `${title} - Markdown source`);
    }

    this.#setLink(head, 'shortcut icon', imagePath);

    this.#setMetaByProperty(head, 'og:title', title);
    this.#setMetaByProperty(head, 'og:image', imagePath);
    this.#setMetaByProperty(head, 'og:image:secure_url', imagePath);
    this.#setMetaByProperty(
      head,
      'og:image:width',
      this.image_width ? String(this.image_width) : '',
    );
    this.#setMetaByProperty(
      head,
      'og:image:height',
      this.image_height ? String(this.image_height) : '',
    );
    this.#setMetaByProperty(head, 'og:description', description);
    this.#setMetaByProperty(head, 'og:type', 'website');
    this.#setMetaByProperty(head, 'og:site_name', title);
    this.#setMetaByProperty(head, 'og:locale', 'en_US');
    this.#setMetaByProperty(head, 'og:url', baseUrl);

    this.#setMetaByName(head, 'twitter:card', 'summary');
    this.#setMetaByName(head, 'twitter:title', title);
    this.#setMetaByName(head, 'twitter:description', description);
    this.#setMetaByName(head, 'twitter:image', imagePath);
  }

  #setBase(head, href) {
    let el = head.querySelector('base[data-dynamic-head="base"]');
    if (!el) {
      el = document.createElement('base');
      el.setAttribute('data-dynamic-head', 'base');
      head.prepend(el);
    }
    el.setAttribute('href', href);
  }

  #setMetaByName(head, name, content) {
    let el = head.querySelector(`meta[name="${name}"][data-dynamic-head="1"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('name', name);
      el.setAttribute('data-dynamic-head', '1');
      head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  #setMetaByProperty(head, property, content) {
    let el = head.querySelector(
      `meta[property="${property}"][data-dynamic-head="1"]`,
    );
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute('property', property);
      el.setAttribute('data-dynamic-head', '1');
      head.appendChild(el);
    }
    el.setAttribute('content', content);
  }

  #setLink(head, rel, href) {
    let el = head.querySelector(`link[rel="${rel}"][data-dynamic-head="1"]`);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      el.setAttribute('data-dynamic-head', '1');
      head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  #setAlternateMarkdown(head, canonical, title) {
    let el = head.querySelector(
      'link[rel="alternate"][type="text/markdown"][data-dynamic-head="1"]',
    );
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', 'alternate');
      el.setAttribute('type', 'text/markdown');
      el.setAttribute('data-dynamic-head', '1');
      head.appendChild(el);
    }
    el.setAttribute('href', `${canonical}.md`);
    el.setAttribute('title', title);
  }
}
