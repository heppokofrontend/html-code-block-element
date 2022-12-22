import HTMLCodeBlockElement from '../src/class/HTMLCodeBlockElement';

// Mock
HTMLCodeBlockElement.highlight = function hoge({src}) {
  return {
    markup: src,
  };
};

customElements.define('code-block', HTMLCodeBlockElement);

describe('Props', () => {
  test('Default', () => {
    const cbElm = new HTMLCodeBlockElement();

    expect(cbElm.controls).toBe(false);
    expect(cbElm.label).toBe('');
    expect(cbElm.language).toBe('');
    expect(cbElm.value).toBe('');
  });

  test('With controls attributes', () => {
    const cbElm = new HTMLCodeBlockElement();

    expect(cbElm.getAttribute('controls')).toBeNull();
    cbElm.controls = true;
    expect(cbElm.getAttribute('controls')).toBe('');
    cbElm.controls = false;
    expect(cbElm.getAttribute('controls')).toBeNull();
  });

  test('With notrim attributes', () => {
    const cbElm = new HTMLCodeBlockElement();

    expect(cbElm.getAttribute('notrim')).toBeNull();
    cbElm.notrim = true;
    expect(cbElm.getAttribute('notrim')).toBe('');
    cbElm.notrim = false;
    expect(cbElm.getAttribute('notrim')).toBeNull();
  });

  test('With label attributes', () => {
    const cbElm = new HTMLCodeBlockElement();

    expect(cbElm.getAttribute('label')).toBeNull();
    cbElm.label = 'label text';
    expect(cbElm.getAttribute('label')).toBe('label text');
    cbElm.label = '';
    expect(cbElm.getAttribute('label')).toBe('');
    cbElm.label = null;
    expect(cbElm.getAttribute('label')).toBeNull();
  });

  test('With language attributes', () => {
    const cbElm = new HTMLCodeBlockElement();

    expect(cbElm.getAttribute('language')).toBeNull();
    cbElm.language = 'js';
    expect(cbElm.getAttribute('language')).toBe('js');
    cbElm.language = '';
    expect(cbElm.getAttribute('language')).toBe('');
    cbElm.language = null;
    expect(cbElm.getAttribute('language')).toBeNull();
  });

  test('value prop with blank line', () => {
    const cbElm = new HTMLCodeBlockElement();
    const value = `
a
b
c
`;

    expect(cbElm.value).toBe('');
    cbElm.value = value;
    expect(cbElm.value).toBe(value);
  });
});

describe('Render', () => {
  document.body.innerHTML = `<code-block>abc</code-block>`;

  const cb = document.body.firstElementChild! as HTMLCodeBlockElement;

  test('connectedCallback', () => {
    expect(cb.children.length).toBe(3);
  });
  test('Attributes', () => {
    expect(cb.children[0].tagName.toLowerCase()).toBe('span');
    expect(cb.children[1].tagName.toLowerCase()).toBe('button');
    expect(cb.children[2].tagName.toLowerCase()).toBe('pre');
    expect(cb.children[2].children[0].tagName.toLowerCase()).toBe('code');
  });

  // TODO: Write tests of MutationObserver

  // test('value', () => {
  //   const value = `
  // a
  // b
  // c
  // `;

  //   expect(cb.value).toBe('abc');
  //   cb.value = 'abcd';
  //   expect(cb.value).toBe('abcd');
  //   cb.value = value;
  //   expect(cb.value).toBe(value);
  // });
  // test('Clipboard', () => {
  //   document.body.innerHTML = `<code-block>abc</code-block>`;
  //   document.body.firstElementChild?.querySelector('button')?.click();

  //   expect(navigator.clipboard.readText()).toBe('abc');
  // });
});
