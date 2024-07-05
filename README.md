# Instrucciones para trabajar en este repo

Debes ser contribuidor del repositorio y crear una branch basada principalmente en la branch `develop` para poder hacer `PULL REQUEST` y revisar los cambios de código y evitar conflictos.

# ¿Como usar/hacer?

Esta sección ayuda a comprender la función de los componentes principales, aquellos que pueden tener recurrencia de uso.

## Routing y navegación

Para utilizar la navegación entre páginas nos debemos de apoyar del componente `<route-link>`. La navegación se utiliza del evento `popstate`, este evento se dispara cuando al componente se le hace click y actualiza la URL. Este componente solo reescribe el historial de navegación **NO REFRESCA LA PÄGINA**. Como propiedades/atributos que recibe se tiene:

- `to` es una propiedad `String` que identifica la ruta a navegar.

Ejemplos de uso:

```html
<route-link to="/operaciones/banco">Ir a operaciones del banco</route-link>
```

El ejemplo anterior indica que le componente mostrará el texto _Ir a operaciones del banco_, y cuando se le dé click nos digirá a la URL _/operaciones/banco_.

```html
<route-link to="/">
  <img src="https://www.images.com/wqfs1234asf.jpg" />
</route-link>
```

El ejemplo anterior nos indica redirección a la raíz del sitio, en lugar de mostrar texto mostrará una imágen, `<route-link>` contiene un slot en donde colocará y mostrará nodos hijos de cualquier tipo.

El routing lo controla el componente `<dom-router>`, este componente registra un método para "escuchar" el evento `popstate`. Como atributos/propiedades:

- `routes` Array de objetos que contiene la información de las rutas. los objetos que contiene este array requieren los atributos
  - `path` URL a la que se le asocia un componente
  - `component` componente a renderizar.
- `not-found` Objeto que contiene el componente que se muestra cuando la ruta no se encuentra (no existe componente asociado).
  Ejemplos de uso:

```javascript
const routes = [
  {
    path: "/",
    component: html`<index-page></index-page>`,
  },
  {
    path: "/retail",
    component: html`<retail-page></retail-page>`,
  },
];

const page404 = html`<notfound-page></notfound-page>`;

class MyComponent extends LitElement {
  //...
  render() {
    return html`<dom-router
      .routes=${routes}
      .not-found=${page404}
    ></dom-router>`;
  }
}
```

El ejemplo anterio nos indica el uso, se especifica el componente utilizando la interfaz de interpolación de LitElement, utilizar sólo texto no permitirá que se muestre el componente.

El componente **NO HACE LECTURA DE ALGÚN QUERY**, tampoco pasa datos entre páginas.

## Plantilla de páginas

Para cada página se recomienda utilizar el componente `<bbva-template>`, funciona como envoltorio y permite concentrarse sólo en la definición del contenido de la página y no en elementos ajenos (como la cabecera).

```javascript
class MyPage extends LitElement {
  //...
  render() {
    return html` <bbva-template>
      <mypage-content></mypage-content>
    </bbva-template>`;
  }
}
```

## Inputs y botones

Cada input tiene como propiedad un `id`, con esta propiedad se dispara el evento `input-change`, `select-change`, `textarea-change` para los componentes `<input-component>`, `<select-component>` y `<textarea-component`, respectivamente, es necesario registrar los 3 eventos en el componente padre para monitorear los cambios.

Con la misma dinámica, los botones para eliminar y editar (`<boton-eliminar>` y `<boton-editar>`, respectivamente) requieren que en el componente padre registre los eventos `eliminar-clicked` y `editar-clicked`.

```javascript
class MyForm extends LitElement {
  //...
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("input-change", this._handleInputChange);
    this.addEventListener("select-change", this._handleSelectChange);
    this.addEventListener("textarea-change", this._handleTextareaChange);
  }

  _handleInputChange(e) {
    console.log(
      `Input with id "${e.detail.id}" has changed its value, new value is ${e.detail.value}`
    );
  }
  //...
}
```

```javascript
class MyItemView extends LitElement {
  //...
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("eliminar-clicked", this._handleEliminar);
    this.addEventListener("editar-clicked", this._handleEditar);
  }
  //...
}
```

## Instrucciones para trabajar en este repo

Debes ser contribuidor del repositorio y crear una branch basada principalmente en la branch `develop` para poder hacer `PULL REQUEST` y revisar los cambios de código y evitar conflictos.
