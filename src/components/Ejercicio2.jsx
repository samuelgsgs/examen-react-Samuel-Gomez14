import React from 'react';

class Ejercicio2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
      image: '',
      brand_name: '',
      brand_slug: '',
      device_count: '',
    };
  }
  eventoclick(item) {
    this.setState({
      image: item.image,
      brand_name: item.brand_name,
      brand_slug: item.brand_slug,
      device_count: item.device_count,
    });
  }
  async componentDidMount() {
    const response = await fetch(
      'https://api-mobilespecs.azharimm.site/v2/brands'
    );
    const responseData = await response.json();
    this.setState({
      tableData: responseData.slice(0, 10),
      selectedItem: responseData[0],
    });
  }
  render() {
    return (
      <div className="main-site">
        <h1>Moviles Ejercicio 2</h1>
        <Container>
          <Row>
            <Col lg={10} md={6}>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>Marca</th>
                    <th>Modelo</th>                    
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.eventoclick(item)}>
                        <td>{item.brand_name}</td>
                        <td>{item.brand_slug}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={2} md={6}>
              {' '}
              <Card variant="outlined" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.image} />
                <Card.Body>
                  <Card.Title>
                    {'Marca: ' + this.state.brand_name}
                    <p />
                    {'Modelo: ' + this.state.brand_slug}
                  </Card.Title>
                  <Card.Text>
                    {'Dispositivos Conocidos: ' + this.state.device_count}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Ejercicio2;
