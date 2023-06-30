import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample({imgCard, titleCard, firstText, seccondText, details}) {
  return (
    <>
        <Card style={{width:"230px",  marginBottom:"2rem" }}>
          <Card.Img  src={imgCard} />
          <Card.Body>
            <Card.Title>{titleCard}</Card.Title>
            <Card.Text>{firstText}</Card.Text>
            <Card.Text>{seccondText}</Card.Text>
            <Button variant="primary">{details}</Button>
          </Card.Body>
        </Card>
    </>
  );
}

export default CardExample;