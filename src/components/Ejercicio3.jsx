import React from 'react';

class Ejercicio3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ej3">
        <h2>Ejercicio 3</h2>

        <ul class="list-group">
          <li class="list-group-item">Imagen</li>
          <li class="list-group-item">Marca - Modelo</li>
          <li class="list-group-item">Sistema operativo</li>
          <li class="list-group-item">Dimensión</li>
          <li class="list-group-item">Almacenamiento</li>
        </ul>
        <Col lg={2} md={6}>
          {' '}
          <Card variant="outlined" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.state.image} />
            <Card.Body>
              <Card.Title>
                {'Imagen: ' + this.state.brand_name}
                <p />
                {'Marca - Modelo: ' + this.state.brand_slug}
              </Card.Title>
              <Card.Text>
                {'Almacenamiento: ' + this.state.device_count}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <ul>
          <li>
            Muestra los nombres de los teléfonos almacenados en la lista de
            favoritos como una unordered list<b> - 0,75 puntos</b>
          </li>
          <li>
            Haz lo mismo que en el apartado anterior, salvo que ahora has de
            rellenar una Card para cada teléfono con los mismos datos que en el
            ejercicio 2, pero en este caso el botón sirve para eliminar el
            teléfono de la lista de favoritos<b> - 1,25 puntos</b>
          </li>
        </ul>
      </div>
    );
  }
}

export default Ejercicio3;
