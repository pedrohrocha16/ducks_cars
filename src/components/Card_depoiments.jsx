import Card from 'react-bootstrap/Card';

function CardDepoiments({imgCard,titleCard, firstText, seccondText, details}) {
  return (
    <>
        <Card style={{width:"230px",  marginBottom:"2rem" }}>
          <Card.Img  src={imgCard} />
          <Card.Body>
            <Card.Title>{titleCard}</Card.Title>
            <Card.Text>{firstText}</Card.Text>
          </Card.Body>
        </Card>
    </>
  );
}

export default CardDepoiments;